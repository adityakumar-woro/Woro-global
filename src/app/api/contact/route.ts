import type { NextRequest } from "next/server";
import { getPool } from "@/lib/db";
import { sendLeadEmail } from "@/lib/mailer";
import {
  clamp,
  clientMeta,
  validateEmail,
  validateRequired,
} from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const issues = [
    validateRequired(body.name, "name", 160),
    validateEmail(body.email, "email"),
    validateRequired(body.message, "message", 4000),
  ].filter(Boolean);

  if (issues.length) {
    return Response.json({ error: "Validation failed", issues }, { status: 422 });
  }

  const name = clamp(body.name, 160).trim();
  const email = clamp(body.email, 254).trim();
  const company = body.company ? clamp(body.company, 200).trim() : null;
  const service = body.service ? clamp(body.service, 120).trim() : null;
  const phone = body.phone ? clamp(body.phone, 40).trim() : null;
  const message = clamp(body.message, 4000).trim();
  const { ip, userAgent } = clientMeta(req);

  try {
    await getPool().execute(
      `INSERT INTO contact_submissions (name, email, company, service, phone, message, source, ip, user_agent)
       VALUES (:name, :email, :company, :service, :phone, :message, :source, :ip, :ua)`,
      { name, email, company, service, phone, message, source: "contact-page", ip, ua: userAgent }
    );
  } catch (err) {
    console.error("[/api/contact] db insert failed", err);
    return Response.json({ error: "Could not save submission" }, { status: 500 });
  }

  try {
    await sendLeadEmail({
      subject: `New contact-form lead — ${name}`,
      heading: "New contact-form lead",
      intro: "A prospect submitted the Contact page form.",
      replyTo: email,
      rows: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Company", value: company },
        { label: "Service", value: service },
        { label: "Phone", value: phone },
        { label: "Message", value: message },
      ],
    });
  } catch (err) {
    console.error("[/api/contact] email send failed", err);
  }

  return Response.json({ ok: true });
}
