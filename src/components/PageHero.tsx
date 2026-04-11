"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RevealText } from "./AnimatedText";

export default function PageHero({
  eyebrow,
  title,
  italic,
  subtitle,
  crumbs,
  align = "left",
  variant = "light",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
  align?: "left" | "center";
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <section
      className={`relative pt-40 sm:pt-48 pb-20 sm:pb-28 overflow-hidden ${
        dark ? "section-dark" : "section-light"
      }`}
    >
      <div className={dark ? "absolute inset-0 mesh-dark opacity-60" : "absolute inset-0 mesh opacity-90"} />
      <div className={dark ? "absolute inset-0 grid-bg-dark grid-mask opacity-50" : "absolute inset-0 grid-bg grid-mask opacity-50"} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {crumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] mb-8 ${
              dark ? "text-white/60" : "text-muted"
            }`}
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-ink/90 transition">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] mb-7 ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          <span className={`w-6 h-px ${dark ? "bg-white/40" : "bg-ink/40"}`} />
          {eyebrow}
        </motion.div>

        <h1
          className={`font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(2.8rem,7vw,6.4rem)] ${
            dark ? "text-white" : "text-ink"
          } ${align === "center" ? "text-center max-w-4xl mx-auto" : "max-w-5xl"}`}
        >
          <span className="block">
            <RevealText as="span">{title}</RevealText>
          </span>
          {italic && (
            <span className="block">
              <span className="font-serif-italic italic">
                <RevealText as="span" delay={0.15}>
                  {italic}
                </RevealText>
              </span>
            </span>
          )}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`mt-8 max-w-2xl text-base sm:text-lg leading-relaxed ${
              dark ? "text-white/65" : "text-muted"
            } ${align === "center" ? "mx-auto text-center" : ""}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
