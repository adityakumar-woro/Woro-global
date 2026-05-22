import "server-only";
import nodemailer, { Transporter } from "nodemailer";

declare global {
  var __smtpTransporter: Promise<Transporter> | undefined;
  var __smtpIsEthereal: boolean | undefined;
}

async function buildTransporter(): Promise<Transporter> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;

  if (host && user) {
    global.__smtpIsEthereal = false;
    return nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: String(process.env.SMTP_SECURE ?? "false") === "true",
      auth: { user, pass: process.env.SMTP_PASSWORD ?? "" },
      // Keep one authenticated connection alive and reuse it across requests
      pool: true,
      maxConnections: 3,
      maxMessages: 100,
      connectionTimeout: 15_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }

  const test = await nodemailer.createTestAccount();
  global.__smtpIsEthereal = true;
  console.warn(
    `[mailer] SMTP creds not set — using Ethereal dev inbox. ` +
      `Login: ${test.user} / ${test.pass}  (preview URL is logged per message)`
  );
  return nodemailer.createTransport({
    host: test.smtp.host,
    port: test.smtp.port,
    secure: test.smtp.secure,
    auth: { user: test.user, pass: test.pass },
  });
}

function getTransporter(): Promise<Transporter> {
  if (!global.__smtpTransporter) {
    global.__smtpTransporter = buildTransporter();
  }
  return global.__smtpTransporter;
}

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export function renderEmail(params: {
  heading: string;
  intro?: string;
  rows: Array<{ label: string; value: string | undefined | null }>;
}): { html: string; text: string } {
  const filtered = params.rows.filter((r) => r.value != null && String(r.value).trim() !== "");

  const rowsHtml = filtered
    .map(
      (r) => `
        <tr>
          <td style="padding:10px 14px;background:#f7f7f5;border:1px solid #eee;font:500 12px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;color:#6b6b6b;text-transform:uppercase;letter-spacing:.08em;width:160px;vertical-align:top;">${esc(r.label)}</td>
          <td style="padding:10px 14px;border:1px solid #eee;font:400 14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#111;white-space:pre-wrap;">${esc(String(r.value))}</td>
        </tr>`
    )
    .join("");

  const html = `<!doctype html>
<html><body style="margin:0;background:#fafaf7;padding:24px;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #eee;border-radius:16px;overflow:hidden;">
    <tr>
      <td style="padding:28px 28px 8px;">
        <div style="font:500 11px/1 -apple-system,Segoe UI,Roboto,sans-serif;color:#6b6b6b;letter-spacing:.18em;text-transform:uppercase;">WORO Global · New lead</div>
        <h1 style="margin:10px 0 4px;font:600 22px/1.2 Georgia,serif;color:#111;">${esc(params.heading)}</h1>
        ${params.intro ? `<p style="margin:0 0 8px;font-size:14px;color:#555;">${esc(params.intro)}</p>` : ""}
      </td>
    </tr>
    <tr>
      <td style="padding:12px 28px 28px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
          ${rowsHtml}
        </table>
        <p style="margin:18px 0 0;font-size:12px;color:#999;">Submitted ${esc(new Date().toISOString())}</p>
      </td>
    </tr>
  </table>
</body></html>`;

  const text =
    `${params.heading}\n${params.intro ?? ""}\n\n` +
    filtered.map((r) => `${r.label}: ${r.value}`).join("\n") +
    `\n\nSubmitted ${new Date().toISOString()}\n`;

  return { html, text };
}

export async function sendLeadEmail(opts: {
  subject: string;
  heading: string;
  intro?: string;
  rows: Array<{ label: string; value: string | undefined | null }>;
  replyTo?: string;
}): Promise<void> {
  const to = (process.env.CONTACT_TO ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (to.length === 0) {
    throw new Error("CONTACT_TO env var is empty — set recipient inbox(es)");
  }

  const { html, text } = renderEmail({
    heading: opts.heading,
    intro: opts.intro,
    rows: opts.rows,
  });

  const transporter = await getTransporter();
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "no-reply@woroglobal.com",
    to,
    subject: opts.subject,
    replyTo: opts.replyTo,
    html,
    text,
  });

  if (global.__smtpIsEthereal) {
    const preview = nodemailer.getTestMessageUrl(info);
    if (preview) console.log(`[mailer] Ethereal preview → ${preview}`);
  }
}
