"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, AlertTriangle } from "lucide-react";

export default function WoroAIImpactViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 85));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const size = 280;
  const stroke = 16;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;

  return (
    <section ref={ref} className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <div
          className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-12 md:p-16 border border-line bg-white shadow-[0_40px_100px_-40px_rgba(108,93,252,0.3)]"
        >
          {/* Soft pastel orbs */}
          <div
            aria-hidden
            className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -right-40 w-[42rem] h-[42rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Grid wash */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 85%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT — copy */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-amber-700 mb-6"
              >
                <AlertTriangle className="w-3 h-3" />
                The hard truth
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-medium text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-tight text-ink"
              >
                <span
                  style={{
                    background:
                      "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 45%, #2563EB 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {pct}%
                </span>{" "}
                of enterprise AI projects fail{" "}
                <span
                  className="font-serif-italic"
                  style={{
                    background:
                      "linear-gradient(115deg, #818cf8 0%, #60A5FA 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  because of poor data readiness.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-muted max-w-xl leading-relaxed"
              >
                Stop guessing whether your infra, data and ops can carry an AI roadmap.
                Get a free readiness report — scored against 40+ real-world production
                gates.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 rounded-full text-white px-7 py-3.5 text-sm font-medium overflow-hidden transition-all hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                    boxShadow: "0 14px 40px -14px rgba(108,93,252,0.55)",
                  }}
                >
                  Get your readiness report
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#ai-services"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink hover:border-ink/30 hover:-translate-y-0.5 transition-all"
                >
                  See what&apos;s possible
                </Link>
              </motion.div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { k: "40+", v: "Production gates" },
                  { k: "24h", v: "Turnaround" },
                  { k: "6 yrs", v: "AI delivery avg" },
                  { k: "0", v: "Sales slides" },
                ].map((s, i) => (
                  <motion.div
                    key={s.k}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                    className="rounded-2xl border border-line bg-white/80 backdrop-blur-sm p-4 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(108,93,252,0.25)] transition-all"
                  >
                    <div
                      className="font-display font-medium text-2xl sm:text-3xl tracking-tight leading-none"
                      style={{
                        background:
                          "linear-gradient(115deg, #6C5DFC 0%, #2563EB 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {s.k}
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted mt-2 leading-tight">
                      {s.v}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT — progress ring */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(108,93,252,0.5) 0%, transparent 70%)",
                  }}
                />
                <svg
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
                  className="relative"
                >
                  <defs>
                    <linearGradient id="ringLight" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="50%" stopColor="#6C5DFC" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke="rgba(10,10,10,0.07)"
                    strokeWidth={stroke}
                  />
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke="url(#ringLight)"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    style={{
                      strokeDasharray: C,
                      strokeDashoffset: C * (1 - pct / 100),
                      transition:
                        "stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
                      filter: "drop-shadow(0 4px 12px rgba(108,93,252,0.35))",
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-display font-medium text-6xl sm:text-7xl text-ink tracking-tight leading-none">
                    {pct}
                    <span
                      className="text-4xl sm:text-5xl"
                      style={{
                        background:
                          "linear-gradient(115deg, #6C5DFC 0%, #2563EB 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      %
                    </span>
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted">
                    Failure rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
