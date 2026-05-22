"use client";

import { motion, useInView, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Zap,
  Headphones,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Clock,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Zap,
    title: "Agile delivery",
    desc: "Two-week sprints, weekly demos, transparent burndown — never a surprise on Friday.",
    highlight: "2-week sprints",
    tone: "from-amber-500 to-orange-500",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    desc: "Around-the-clock incident response across multiple time zones — we pick up at 3am.",
    highlight: "Global coverage",
    tone: "from-emerald-500 to-teal-500",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    desc: "Cloud-native systems engineered to grow from 10k to 10M users without a rewrite.",
    highlight: "Scales 1000×",
    tone: "from-brand to-blue",
  },
  {
    icon: ShieldCheck,
    title: "Security-first",
    desc: "SOC2-aligned practices, threat modelling and pen-tests baked into every release.",
    highlight: "SOC2 · ISO 27001",
    tone: "from-violet-500 to-fuchsia-500",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Clients served" },
  { value: 98, suffix: "%", label: "Retention" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 15, suffix: "+", label: "Countries" },
];

function CountUp({ to, start }: { to: number; start: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const ctl = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => ctl.stop();
  }, [start, to]);
  return <>{Math.round(value)}</>;
}

export default function WhyUs() {
  const statsRef = useRef<HTMLDivElement>(null);
  // Trigger count-ups when the stats grid enters the viewport. `amount: 0.1`
  // means any 10% visibility is enough — the old `-30%` rootMargin silently
  // skipped Retention/Countries on shorter viewports.
  const statsInView = useInView(statsRef, { once: true, amount: 0.1 });

  return (
    <section className="relative section-soft py-20 sm:py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 mesh opacity-70" />
      <div
        aria-hidden
        className="absolute -top-40 -left-20 w-[36rem] h-[36rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why teams choose us"
              title="A senior team obsessed with outcomes."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              No juniors hiding behind project managers. The people you talk to are the
              people writing the code.
            </p>
          </div>
        </div>

        {/* Top row — feature visual + stats panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Big feature visual card — col-span 7
              Mobile: image on top (fixed aspect), content stacked below as a
              block — keeps text from overlapping the image pills on phones.
              md+: content becomes an absolute overlay at the image bottom. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-line bg-ink group"
          >
            {/* Image panel */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85&auto=format&fit=crop"
                alt="Senior team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.04]"
              />
              {/* Dark-to-brand wash */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(108,93,252,0.55) 0%, rgba(37,99,235,0.4) 50%, rgba(10,10,10,0.85) 100%)",
                }}
              />
              <div aria-hidden className="absolute inset-0 noise opacity-30 mix-blend-overlay" />

              {/* Top-left meta */}
              <div className="absolute top-3 sm:top-5 left-3 sm:left-5 flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white max-w-[60%]">
                <span className="relative flex w-1.5 h-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="truncate">6 senior pods active</span>
              </div>

              {/* Floating rating card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                animate={{ y: [0, -6, 0] }}
                className="absolute top-3 sm:top-5 right-3 sm:right-5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 px-2.5 sm:px-3 py-2 sm:py-3 shadow-[0_20px_50px_-20px_rgba(10,10,10,0.3)]"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-muted">
                  <Sparkles className="w-3 h-3 text-brand shrink-0" />
                  <span className="hidden sm:inline">Engineering NPS</span>
                  <span className="sm:hidden">NPS</span>
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display font-medium text-xl sm:text-2xl tracking-tight gradient-text">
                    92
                  </span>
                  <span className="text-[10px] sm:text-xs text-emerald-600 font-medium">
                    ↑ +14
                  </span>
                </div>
              </motion.div>

              {/* Bottom content — absolute overlay on md+, flowing block on mobile */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] mb-4">
                  <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                  0 critical escalations · last 18 months
                </div>
                <h3 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.05] max-w-xl">
                  The same engineers who{" "}
                  <span className="font-serif-italic text-white/90">pitch the code</span>{" "}
                  are the ones who ship it.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed max-w-lg">
                  8+ years average delivery experience. Every pod paired with a senior
                  architect and a dedicated AI PM.
                </p>
              </div>
            </div>

            {/* Mobile-only stacked content block */}
            <div className="md:hidden p-5 sm:p-6 text-white bg-gradient-to-b from-ink/95 to-ink">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/15 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] mb-3">
                <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                0 escalations · last 18 months
              </div>
              <h3 className="font-display font-medium text-xl sm:text-2xl tracking-tight leading-[1.15]">
                The same engineers who{" "}
                <span className="font-serif-italic text-white/90">pitch the code</span>{" "}
                ship it.
              </h3>
              <p className="mt-2.5 text-sm text-white/75 leading-relaxed">
                8+ years average delivery experience. Every pod paired with a senior
                architect and a dedicated AI PM.
              </p>
            </div>
          </motion.div>

          {/* Stats panel — col-span 5, animated count-up */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-line bg-white p-5 sm:p-7 md:p-8"
          >
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-muted mb-4 sm:mb-5 inline-flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-brand" />
              Track record by the numbers
            </div>
            <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="relative rounded-2xl border border-line bg-gradient-to-br from-white to-soft/40 p-4 sm:p-5 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(108,93,252,0.25)] transition-all"
                >
                  <div className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none gradient-text">
                    <CountUp to={s.value} start={statsInView} />
                    <span>{s.suffix}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-muted mt-2.5 sm:mt-3 leading-tight">
                    {s.label}
                  </div>
                  {/* mini progress rail */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 1.2, ease: "easeOut" }}
                    className="absolute left-4 right-4 sm:left-5 sm:right-5 bottom-2 sm:bottom-3 h-px origin-left"
                    style={{
                      background:
                        "linear-gradient(90deg, #6C5DFC, transparent)",
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Extra line at bottom — wraps cleanly on narrow screens */}
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-line flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Clock className="w-4 h-4 text-brand shrink-0" />
                <span>
                  Avg. response <span className="text-ink font-medium">under 24 hrs</span>
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm border-b border-ink/30 pb-0.5 hover:border-ink transition shrink-0"
              >
                Meet the team
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature cards — 4-up bento with distinct per-card treatments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-line bg-white p-6 overflow-hidden hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(108,93,252,0.35)] transition-all duration-500"
              >
                {/* Gradient border ring on hover */}
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(108,93,252,0.35) 0%, rgba(96,165,250,0.15) 50%, rgba(167,139,250,0.35) 100%)",
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
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(108,93,252,0.3) 0%, transparent 70%)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.tone} flex items-center justify-center shadow-[0_14px_30px_-12px_rgba(108,93,252,0.5)]`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-serif-italic text-2xl text-muted group-hover:text-brand transition">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-xl tracking-tight text-ink leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
                  <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand font-medium">
                      <span className="w-1 h-1 rounded-full bg-brand" />
                      {f.highlight}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink group-hover:rotate-45 transition-all duration-500">
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink group-hover:text-white" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
