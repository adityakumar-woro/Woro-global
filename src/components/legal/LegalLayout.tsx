"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ShieldCheck, Clock } from "lucide-react";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

type Props = {
  /** Small kicker above the title, e.g. "Legal · Version 2.0" */
  kicker: string;
  /** Main document title */
  title: string;
  /** Italic accent appended to the title (serif italic styling applied) */
  italic: string;
  /** ISO date string for "Last updated" pill */
  updated: string;
  /** One-sentence summary shown in the hero */
  lede: string;
  /** Sections rendered in order with scroll-spy-tracked TOC */
  sections: LegalSection[];
  /** Optional "at a glance" bullets shown in a callout under the lede.
   *  `icon` accepts a pre-rendered React element so the parent (which may be
   *  a Server Component) doesn't pass a function reference across the boundary. */
  highlights?: { label: string; icon: React.ReactNode }[];
};

export default function LegalLayout({
  kicker,
  title,
  italic,
  updated,
  lede,
  sections,
  highlights,
}: Props) {
  const [active, setActive] = useState(sections[0]?.id);
  const refs = useRef<Array<HTMLElement | null>>([]);

  // Scroll-spy — highlight whichever section is closest to the top third.
  useEffect(() => {
    const ratios = new Map<string, number>();
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const id = sections[i].id;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) ratios.set(id, e.intersectionRatio);
          let best = { id: sections[0].id, r: -1 };
          for (const [sid, r] of ratios) {
            if (r > best.r) best = { id: sid, r };
          }
          if (best.r > 0) setActive(best.id);
        },
        { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const updatedDate = new Date(updated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* HERO */}
      <section className="relative section-light overflow-hidden pt-32 sm:pt-40 md:pt-48 pb-14 sm:pb-16">
        <div className="absolute inset-0 mesh opacity-60" />
        <div className="absolute inset-0 grid-bg opacity-40 grid-mask" />
        <div
          aria-hidden
          className="absolute -top-40 -left-20 w-[36rem] h-[36rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-muted mb-8"
          >
            <Link href="/" className="hover:text-ink transition">Home</Link>
            <span>·</span>
            <span className="text-ink/80">{kicker.split(" · ")[0]}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                {kicker}
              </div>
              <h1 className="font-display font-medium tracking-[-0.045em] leading-[1.02] text-[clamp(2.4rem,6vw,5rem)] text-ink">
                {title}
                <br />
                <span
                  className="font-serif-italic italic"
                  style={{
                    background:
                      "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {italic}
                </span>
              </h1>
              <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                {lede}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="lg:col-span-4 flex lg:justify-end"
            >
              <div className="inline-flex items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-3 shadow-[0_10px_30px_-12px_rgba(10,10,10,0.15)]">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand/15 to-blue/10 border border-line flex items-center justify-center">
                  <Clock className="w-4 h-4 text-brand" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    Last updated
                  </div>
                  <div className="text-sm font-medium text-ink leading-none mt-1">
                    {updatedDate}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {highlights && highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 backdrop-blur px-3 py-1.5 text-[11px] text-ink/75"
                >
                  {h.icon}
                  {h.label}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* BODY */}
      <section className="relative section-light pb-20 sm:pb-28 md:pb-32">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* TOC — sticky on desktop */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-line bg-white/70 backdrop-blur-sm p-4 sm:p-5 shadow-[0_20px_40px_-30px_rgba(10,10,10,0.2)]">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3 px-2">
                  Table of contents
                </div>
                <nav className="space-y-0.5">
                  {sections.map((s, i) => {
                    const isActive = active === s.id;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={`group relative block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                          isActive
                            ? "bg-gradient-to-r from-brand/10 to-blue/5 text-ink"
                            : "text-muted hover:text-ink hover:bg-soft"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="toc-active"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-gradient-to-b from-brand to-blue"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <div className="flex items-baseline gap-3">
                          <span
                            className={`font-mono text-[10px] shrink-0 ${
                              isActive ? "text-brand" : "text-muted/70"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-medium leading-snug">{s.title}</span>
                        </div>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-5 pt-5 border-t border-line">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3 px-2">
                    Questions about this?
                  </div>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-soft transition"
                  >
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand/15 to-blue/10 border border-line flex items-center justify-center">
                      <Mail className="w-4 h-4 text-brand" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-ink leading-tight">
                        Contact us
                      </div>
                      <div className="text-[11px] text-muted mt-0.5 truncate">
                        hello@woroglobal.com
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 space-y-14 sm:space-y-16">
              {sections.map((s, i) => (
                <motion.article
                  key={s.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="font-mono text-[11px] uppercase tracking-[0.22em]"
                      style={{
                        background:
                          "linear-gradient(115deg, #6C5DFC, #2563EB)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 h-px bg-line" />
                  </div>
                  <h2 className="font-display font-medium text-[clamp(1.7rem,3vw,2.4rem)] tracking-tight leading-[1.1] text-ink mb-5">
                    {s.title}
                  </h2>
                  <div className="legal-prose">{s.body}</div>
                </motion.article>
              ))}

              {/* Footer signature card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-line bg-gradient-to-br from-white via-soft/40 to-brand/5 p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center">
                  <div>
                    <h3 className="font-display font-medium text-xl sm:text-2xl tracking-tight text-ink">
                      Still have questions?
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">
                      We&apos;re happy to walk you through any clause. Email the team or
                      start a thread on the contact page and we&apos;ll reply within a
                      working day.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary justify-center shrink-0"
                  >
                    Talk to the team
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-line flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-brand" />
                    hello@woroglobal.com
                  </span>
                  <span>·</span>
                  <span>WORO Global · Gurugram, India</span>
                  <span>·</span>
                  <span>Last updated {updatedDate}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography overrides scoped to legal documents */}
      <style jsx global>{`
        .legal-prose p {
          font-size: 15px;
          line-height: 1.75;
          color: var(--color-muted, #6B6B7B);
          margin: 0 0 1rem;
        }
        .legal-prose p:last-child { margin-bottom: 0; }
        .legal-prose strong { color: var(--color-ink, #0A0A0A); font-weight: 600; }
        .legal-prose a {
          color: var(--color-brand, #6C5DFC);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
        }
        .legal-prose a:hover { color: var(--color-brand-2, #4F46E5); }
        .legal-prose ul, .legal-prose ol {
          margin: 0.25rem 0 1.25rem;
          padding-left: 0;
          list-style: none;
        }
        .legal-prose li {
          position: relative;
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-muted, #6B6B7B);
          padding-left: 1.5rem;
          margin-bottom: 0.55rem;
        }
        .legal-prose li::before {
          content: "";
          position: absolute;
          left: 0.4rem;
          top: 0.75rem;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #6C5DFC, #2563EB);
        }
        .legal-prose h3 {
          font-family: var(--font-bricolage), system-ui, sans-serif;
          font-weight: 500;
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          color: var(--color-ink, #0A0A0A);
          margin: 1.5rem 0 0.5rem;
        }
        .legal-callout {
          display: flex;
          gap: 0.75rem;
          padding: 0.9rem 1.1rem;
          border-radius: 0.9rem;
          border: 1px solid var(--color-line, #EAEAEC);
          background: linear-gradient(135deg, rgba(108,93,252,0.05), rgba(96,165,250,0.03));
          margin: 1rem 0;
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--color-ink, #0A0A0A);
        }
      `}</style>
    </>
  );
}
