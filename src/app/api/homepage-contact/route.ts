import type { NextRequest } from "next/server";
import { getPool } from "@/lib/db";
import { sendLeadEmail } from "@/lib/mailer";
import { clamp, clientMeta, validateEmail, validatePhone } from "@/lib/validation";

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
    validatePhone(body.mobile, "mobile"),
    validateEmail(body.email, "email"),
  ].filter(Boolean);

  if (issues.length) {
    return Response.json({ error: "Validation failed", issues }, { status: 422 });
  }

  const mobile = clamp(body.mobile, 40).trim();
  const email = clamp(body.email, 254).trim();
  const { ip, userAgent } = clientMeta(req);

  try {
    await getPool().execute(
      `INSERT INTO homepage_contact_submissions (mobile, email, ip, user_agent)
       VALUES (:mobile, :email, :ip, :ua)`,
      { mobile, email, ip, ua: userAgent }
    );
  } catch (err) {
    console.error("[/api/homepage-contact] db insert failed", err);
    return Response.json({ error: "Could not save submission" }, { status: 500 });
  }

  sendLeadEmail({
    subject: `New homepage lead — ${email}`,
    heading: "Homepage quick-contact lead",
    intro: "Someone dropped their mobile + email from the homepage contact strip.",
    replyTo: email,
    rows: [
      { label: "Mobile", value: mobile },
      { label: "Email", value: email },
    ],
  }).catch((err) => console.error("[/api/homepage-contact] email send failed", err));

  return Response.json({ ok: true });
}
