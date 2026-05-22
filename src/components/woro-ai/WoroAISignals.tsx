"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Rocket,
  Layers,
  Network,
} from "lucide-react";

const signals = [
  {
    num: "01",
    icon: Target,
    tag: "Value chain",
    title: "Optimize your value chains and business processes",
    desc: "We map where AI compounds impact — ops, revenue, risk, customer — and ship against it, not against hype.",
    stat: "+32%",
    statLabel: "revenue lift",
  },
  {
    num: "02",
    icon: Rocket,
    tag: "Delivery speed",
    title: "Cut the cost and complexity of building AI in-house",
    desc: "Skip 18 months of hiring and infra. Our senior pods plug into your roadmap from week one.",
    stat: "18×",
    statLabel: "faster than hiring",
  },
  {
    num: "03",
    icon: Layers,
    tag: "Scalability",
    title: "Remove the scaling barriers behind slow AI adoption",
    desc: "Evals, cost controls, observability and guardrails — built in, not bolted on after pilots stall.",
    stat: "0",
    statLabel: "pilots stalled",
  },
  {
    num: "04",
    icon: Network,
    tag: "Integration",
    title: "Integrate AI into workflows you already run",
    desc: "Cloud-native architectures, vector DBs, RAG, agentic systems — deployed into your existing stack.",
    stat: "40+",
    statLabel: "stacks shipped",
  },
];

export default function WoroAISignals() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div
        aria-hidden
        className="absolute -top-40 -left-20 w-[34rem] h-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-20 w-[34rem] h-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Signals · How we solve it
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
              An industry-first approach to<br />
              <span
                className="font-serif-italic"
                style={{
                  background:
                    "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                enterprise AI transformation.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Tailored AI services combined with productized WORO Voice, Chat and UGC —
              so value compounds across channels, not just pilots.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {signals.map((s, i) => (
            <SignalCard key={s.num} signal={s} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-10 border-t border-line">
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span>4 pillars · 40+ shipped systems · 8y avg delivery</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition"
          >
            See our case studies
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SignalCard({
  signal,
  index,
}: {
  signal: (typeof signals)[number];
  index: number;
}) {
  const Icon = signal.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl bg-white/90 backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(108,93,252,0.35)]"
      style={{
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.9) inset, 0 4px 16px -8px rgba(10,10,10,0.08)",
      }}
    >
      {/* Gradient border */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(108,93,252,0.35) 0%, rgba(167,139,250,0.15) 30%, rgba(96,165,250,0.35) 100%)",
          padding: 1,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Hover glow halo */}
      <div
        aria-hidden
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,93,252,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #f5f3ff, #dbeafe)",
              border: "1px solid var(--color-line, #EAEAEC)",
            }}
          >
            <Icon className="w-5 h-5 text-brand" />
          </div>
          <span className="font-serif-italic text-2xl text-muted group-hover:text-brand transition">
            {signal.num}
          </span>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-brand/80 font-medium mb-2">
          {signal.tag}
        </div>
        <h3 className="font-display font-medium text-lg tracking-tight text-ink leading-snug mb-3">
          {signal.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{signal.desc}</p>

        <div className="mt-5 pt-4 border-t border-line flex items-end justify-between">
          <div>
            <div
              className="font-display font-medium text-2xl tracking-tight leading-none"
              style={{
                background:
                  "linear-gradient(115deg, #6C5DFC 0%, #2563EB 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {signal.stat}
            </div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-muted mt-1.5">
              {signal.statLabel}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink group-hover:rotate-45 transition-all duration-500">
            <ArrowUpRight className="w-3.5 h-3.5 text-ink group-hover:text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
