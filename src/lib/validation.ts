const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^[0-9+\-()\s]{7,20}$/;

export type ValidationIssue = { field: string; message: string };

export function validateEmail(v: unknown, field = "email"): ValidationIssue | null {
  if (typeof v !== "string" || !EMAIL_RE.test(v.trim())) {
    return { field, message: "Enter a valid email address" };
  }
  return null;
}

export function validatePhone(v: unknown, field = "phone"): ValidationIssue | null {
  if (typeof v !== "string" || !PHONE_RE.test(v.trim())) {
    return { field, message: "Enter a valid phone number" };
  }
  return null;
}

export function validateRequired(v: unknown, field: string, max = 2000): ValidationIssue | null {
  if (typeof v !== "string" || v.trim().length === 0) {
    return { field, message: `${field} is required` };
  }
  if (v.length > max) {
    return { field, message: `${field} is too long` };
  }
  return null;
}

export function clamp(v: unknown, max: number): string {
  return String(v ?? "").slice(0, max);
}

export function clientMeta(req: Request): { ip: string | null; userAgent: string | null } {
  const h = req.headers;
  const fwd = h.get("x-forwarded-for");
  const ip = (fwd ? fwd.split(",")[0].trim() : h.get("x-real-ip")) ?? null;
  const userAgent = h.get("user-agent");
  return { ip, userAgent: userAgent ? userAgent.slice(0, 500) : null };
}
