import type { NextRequest } from "next/server";
import { getPool } from "@/lib/db";
import { sendLeadEmail } from "@/lib/mailer";
import {
  clamp,
  clientMeta,
  validateEmail,
  validatePhone,
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
    validateEmail(body.companyEmail, "companyEmail"),
    validatePhone(body.contactNumber, "contactNumber"),
    body.workEmail ? validateEmail(body.workEmail, "workEmail") : null,
  ].filter(Boolean);

  if (issues.length) {
    return Response.json({ error: "Validation failed", issues }, { status: 422 });
  }

  const name = clamp(body.name, 160).trim();
  const companyEmail = clamp(body.companyEmail, 254).trim();
  const dialCode = clamp(body.dialCode || "+91", 8).trim();
  const contactNumber = clamp(body.contactNumber, 40).trim();
  const workEmail = body.workEmail ? clamp(body.workEmail, 254).trim() : null;
  const projectDescription = body.projectDescription
    ? clamp(body.projectDescription, 2000).trim()
    : null;
  const { ip, userAgent } = clientMeta(req);

  try {
    await getPool().execute(
      `INSERT INTO popup_submissions
        (name, company_email, dial_code, contact_number, work_email, project_description, ip, user_agent)
       VALUES (:name, :companyEmail, :dialCode, :contactNumber, :workEmail, :projectDescription, :ip, :ua)`,
      {
        name,
        companyEmail,
        dialCode,
        contactNumber,
        workEmail,
        projectDescription,
        ip,
        ua: userAgent,
      }
    );
  } catch (err) {
    console.error("[/api/popup] db insert failed", err);
    return Response.json({ error: "Could not save submission" }, { status: 500 });
  }

  sendLeadEmail({
    subject: `New popup lead — ${name}`,
    heading: "Homepage popup lead",
    intro: "Prospect submitted the scroll-triggered popup form.",
    replyTo: companyEmail,
    rows: [
      { label: "Name", value: name },
      { label: "Company email", value: companyEmail },
      { label: "Phone", value: `${dialCode} ${contactNumber}` },
      { label: "Work email", value: workEmail },
      { label: "Project", value: projectDescription },
    ],
  }).catch((err) => console.error("[/api/popup] email send failed", err));

  return Response.json({ ok: true });
}
