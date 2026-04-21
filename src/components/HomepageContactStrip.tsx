"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^[0-9+\-()\s]{7,20}$/;

export default function HomepageContactStrip() {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setErrorMsg(null);

    if (!PHONE_RE.test(mobile.trim())) {
      setStatus("error");
      setErrorMsg("Enter a valid mobile number");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setErrorMsg("Enter a valid email address");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/homepage-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobile.trim(), email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.issues?.[0]?.message ?? data?.error ?? "Could not send. Please try again.");
      }
      setStatus("sent");
      setMobile("");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="relative section-light py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white border border-line p-8 sm:p-12 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
                <span className="w-6 h-px bg-ink/40" />
                Quick intro
              </div>
              <h2 className="font-display font-medium text-[clamp(1.8rem,3.5vw,2.75rem)] tracking-tight leading-[1.05] text-ink">
                Drop your number.<br />
                <span className="font-serif-italic">We&apos;ll call.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                Two fields, zero sales pitch. A human engineer reaches out within a working day.
              </p>
            </div>

            <form onSubmit={onSubmit} className="lg:col-span-7 space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted mb-2">
                    <Phone className="w-3.5 h-3.5" /> Mobile number
                  </span>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91 99966 11185"
                    className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink placeholder-muted/60 transition"
                  />
                </label>
                <label className="block">
                  <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted mb-2">
                    <Mail className="w-3.5 h-3.5" /> Email address
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink placeholder-muted/60 transition"
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sent" ? (
                    "Thanks — we'll be in touch."
                  ) : status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Request a callback
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-muted">
                  By submitting, you agree we can reach you about your enquiry.
                </p>
              </div>

              {status === "error" && errorMsg && (
                <p className="text-sm text-red-600" role="alert">{errorMsg}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
