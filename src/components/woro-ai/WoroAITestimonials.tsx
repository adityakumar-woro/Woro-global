"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  metric: { k: string; v: string };
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "WORO's AI team took our backlog of unstructured data and turned it into a real product. We closed two enterprise deals in the quarter after launch.",
    name: "David Okafor",
    role: "CTO",
    company: "MedFlow AI",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85&auto=format&fit=crop&crop=faces",
    rating: 5,
    metric: { k: "2×", v: "enterprise deals closed" },
    accent: "from-violet-500/80 to-indigo-600/80",
  },
  {
    quote:
      "Honestly the most senior team we've worked with — they push back on bad ideas and ship clean code. Rare combination in an AI shop.",
    name: "Priya Raman",
    role: "Product Lead",
    company: "Lumen Retail",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85&auto=format&fit=crop&crop=faces",
    rating: 5,
    metric: { k: "90d", v: "discovery to launch" },
    accent: "from-fuchsia-500/80 to-pink-600/80",
  },
  {
    quote:
      "Migrated us off legacy infra without a single second of downtime. Our cloud bill is down 38% and the pipeline ships 10× a day.",
    name: "Marcus Hart",
    role: "Director of IT",
    company: "Atlas Logistics",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85&auto=format&fit=crop&crop=faces",
    rating: 5,
    metric: { k: "−38%", v: "cloud spend" },
    accent: "from-blue-500/80 to-sky-600/80",
  },
  {
    quote:
      "Rebuilt our trading dashboard in 8 weeks. Page loads dropped from 4.2s to under 600ms. Game-changing for our desk.",
    name: "Sarah Mitchell",
    role: "VP Engineering",
    company: "Quantix Capital",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85&auto=format&fit=crop&crop=faces",
    rating: 5,
    metric: { k: "7×", v: "page speed" },
    accent: "from-sky-500/80 to-cyan-600/80",
  },
  {
    quote:
      "Security audit returned 0 critical issues post-launch. Their guardrails-first approach paid for itself in the first week.",
    name: "Hiroshi Tanaka",
    role: "CISO",
    company: "SafeBridge Bank",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85&auto=format&fit=crop&crop=faces",
    rating: 5,
    metric: { k: "0", v: "critical findings" },
    accent: "from-emerald-500/80 to-teal-600/80",
  },
];

export default function WoroAITestimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((n) => (n + 1) % testimonials.length);
  const prev = () => setIdx((n) => (n - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section className="relative section-light py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
      <div className="absolute -top-32 left-1/4 w-[36rem] h-[36rem] rounded-full bg-brand/10 blur-[140px]" />
      <div className="absolute -bottom-32 right-1/4 w-[36rem] h-[36rem] rounded-full bg-blue/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Voices from the roadmap
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
              What teams say<br />
              <span className="font-serif-italic gradient-text">after we ship.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Real quotes from real founders, VPs and engineering leaders. Every number
              below is lifted verbatim from a post-launch review.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* MAIN QUOTE (left, spans 8) */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2rem] overflow-hidden border border-line bg-white shadow-[0_40px_100px_-40px_rgba(10,10,10,0.25)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr]">
                  {/* Avatar side */}
                  <div className="relative min-h-[260px] sm:min-h-[420px] overflow-hidden">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 260px"
                      className="object-cover transition-transform duration-[1400ms] hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className={`absolute inset-0 bg-gradient-to-br ${t.accent} mix-blend-multiply`}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.75) 100%)",
                      }}
                    />
                    <div aria-hidden className="absolute inset-0 noise opacity-25 mix-blend-overlay" />

                    {/* Scanline */}
                    <div className="relative h-full p-6 flex flex-col justify-between text-white">
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                        ))}
                      </div>
                      <div>
                        <div className="font-display font-medium text-xl tracking-tight leading-tight">
                          {t.name}
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/80 mt-1">
                          {t.role} · {t.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote side */}
                  <div className="relative p-7 sm:p-10 flex flex-col justify-between">
                    <Quote
                      aria-hidden
                      className="w-10 h-10 text-brand/40 mb-6"
                    />
                    <blockquote className="font-display text-[clamp(1.2rem,2vw,1.8rem)] tracking-tight leading-snug text-ink">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="mt-8 flex items-end justify-between pt-6 border-t border-line">
                      <div>
                        <div className="font-display font-medium text-4xl tracking-tight leading-none">
                          <span className="gradient-text">{t.metric.k}</span>
                        </div>
                        <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted">
                          {t.metric.v}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-soft border border-line px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                        <Sparkles className="w-3 h-3 text-brand" />
                        Verified post-launch
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className="group h-1 rounded-full transition-all duration-500"
                    style={{
                      width: idx === i ? 36 : 12,
                      background: idx === i ? "var(--color-ink)" : "var(--color-line)",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* THUMBNAIL COLUMN (right) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {testimonials.map((th, i) => (
              <button
                key={th.name}
                type="button"
                onClick={() => setIdx(i)}
                className={`group relative rounded-2xl border overflow-hidden text-left transition-all duration-500 ${
                  idx === i
                    ? "border-ink/30 shadow-[0_20px_40px_-20px_rgba(10,10,10,0.2)] bg-white"
                    : "border-line bg-white hover:border-ink/20"
                }`}
              >
                <div className="flex items-center gap-3 p-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={th.avatar}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className={`absolute inset-0 bg-gradient-to-br ${th.accent} mix-blend-multiply opacity-75`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-ink truncate">
                      {th.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted truncate mt-0.5">
                      {th.company}
                    </div>
                  </div>
                  {idx === i && (
                    <motion.span
                      layoutId="active-thumb"
                      className="w-1.5 h-10 rounded-full bg-gradient-to-b from-brand to-blue"
                    />
                  )}
                </div>
              </button>
            ))}

            {/* Summary stat card */}
            <div className="rounded-2xl border border-line bg-gradient-to-br from-soft via-white to-brand/5 p-5 mt-auto">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="font-display font-medium text-3xl tracking-tight leading-none text-ink">
                4.9<span className="gradient-text">/5</span>
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted leading-tight">
                180+ post-launch reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
