"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "./SocialIcons";
import SectionHeader from "./SectionHeader";

const services = [
  "Website Development",
  "Software Development",
  "Mobile App Development",
  "Cloud Management",
  "Cybersecurity",
  "AI & ML Solutions",
  "DevOps & CI/CD",
  "Other",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: services[0], message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.issues?.[0]?.message ?? data?.error ?? "Could not send. Please try again.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", company: "", service: services[0], message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="relative section-light py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 grid-mask" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Get in touch"
              title="Tell us about your project."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Whatever you&apos;re building — from a quick MVP to a multi-year platform — we&apos;d love to hear about it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="inline-flex items-center gap-2 pulse-badge bg-brand/8 border border-brand/30 rounded-full px-4 py-1.5 text-xs text-brand">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Free consultation
            </div>

            <div className="space-y-6">
              <ContactRow icon={Mail} label="Email" value="hello@woroglobal.com" />
              <ContactRow icon={Phone} label="Phone" value="+91 99966 11185" />
              <ContactRow icon={MapPin} label="Office" value="Gurugram, Haryana" />
            </div>

            <div className="pt-6 border-t border-line">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted mb-3">Follow us</div>
              <div className="flex gap-3">
                {[TwitterIcon, LinkedinIcon, GithubIcon].map((I, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-white hover:border-ink transition"
                  >
                    <I className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-line rounded-3xl p-8 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Name" id="name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink placeholder-muted/60 transition"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Email" id="email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink placeholder-muted/60 transition"
                  placeholder="jane@company.com"
                />
              </Field>
            </div>

            <Field label="Company" id="company">
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink placeholder-muted/60 transition"
                placeholder="Acme Inc."
              />
            </Field>

            <Field label="Service" id="service">
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink transition"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>

            <Field label="Message" id="message">
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink placeholder-muted/60 resize-none transition"
                placeholder="Tell us a bit about your project…"
              />
            </Field>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sent" ? (
                  "Thanks — we'll be in touch."
                ) : status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              {status === "error" && errorMsg && (
                <p className="text-sm text-red-600" role="alert">{errorMsg}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <a href="#" className="group flex items-start gap-4 hover:translate-x-1 transition">
      <div className="w-11 h-11 shrink-0 rounded-2xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
        <Icon className="w-4 h-4 text-ink group-hover:text-white transition" />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted">{label}</div>
        <div className="font-display text-xl tracking-tight mt-0.5">{value}</div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
    </a>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
