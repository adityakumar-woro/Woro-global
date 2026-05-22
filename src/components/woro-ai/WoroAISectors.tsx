"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  Plane,
  GraduationCap,
  ShoppingBag,
  Building2,
  TrendingUp,
  Pause,
  Play,
} from "lucide-react";

type Sector = {
  client: string;
  sector: string;
  icon: React.ComponentType<{ className?: string }>;
  problem: string;
  results: string[];
  image: string;
  accent: string;
};

const sectors: Sector[] = [
  {
    client: "Gurushala",
    sector: "EdTech",
    icon: GraduationCap,
    problem: "Teachers spent hours writing assessment questions that went stale in weeks.",
    results: ["10× faster question creation", "3× daily active teachers", "92% fewer duplicate items"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=85&auto=format&fit=crop",
    accent: "from-violet-400 to-indigo-500",
  },
  {
    client: "Dr. Morepen",
    sector: "Healthcare",
    icon: Heart,
    problem: "Care-team inbox flooded with repetitive patient questions across WhatsApp and web.",
    results: ["80% drop in repeat tickets", "24/7 multilingual triage", "HIPAA-ready deployment"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=85&auto=format&fit=crop",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    client: "Tootle",
    sector: "Travel",
    icon: Plane,
    problem: "Personalization engine couldn't keep up with trip-intent signals across 40 markets.",
    results: ["+35% engagement", "10× faster insight loop", "2× repeat bookings"],
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=85&auto=format&fit=crop",
    accent: "from-sky-400 to-blue-500",
  },
  {
    client: "Americana",
    sector: "F&B",
    icon: ShoppingBag,
    problem: "Order assignment was manual, slow and error-prone across 2,000 kitchens.",
    results: ["Auto-assign 42% → 82%", "28-min avg fulfillment", "INR 4.2Cr saved / yr"],
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=85&auto=format&fit=crop",
    accent: "from-amber-400 to-orange-500",
  },
  {
    client: "MyExec",
    sector: "Productivity",
    icon: Building2,
    problem: "Execs wanted a business consultant on tap — not another dashboard to read.",
    results: ["Multi-agent RAG on ECS", "Sub-2s first token", "4.8★ app rating"],
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1400&q=85&auto=format&fit=crop",
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    client: "Flynas",
    sector: "Aviation",
    icon: Plane,
    problem: "Booking flow collapsed under non-English queries and edge-case itineraries.",
    results: ["Bookings +28%", "Support cost −41%", "7 languages at launch"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=85&auto=format&fit=crop",
    accent: "from-indigo-400 to-blue-500",
  },
];

const AUTO_MS = 4200;

export default function WoroAISectors() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setActive((n) => (n + 1) % sectors.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => {
    setDirection(-1);
    setActive((n) => (n - 1 + sectors.length) % sectors.length);
  };
  const next = () => {
    setDirection(1);
    setActive((n) => (n + 1) % sectors.length);
  };

  const current = sectors[active];

  return (
    <section
      id="ai-cases"
      className="relative bg-white py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
      <div
        aria-hidden
        className="absolute -top-40 left-10 w-[36rem] h-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Sectors we power
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
              AI that drives<br />
              <span
                className="font-serif-italic"
                style={{
                  background:
                    "linear-gradient(115deg, #6C5DFC 0%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                real enterprise impact.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Six of the 40+ AI systems we&apos;ve put into production in the last 18
              months — every one measured against a revenue, cost or risk metric.
            </p>
          </div>
        </div>

        {/* Main stage */}
        <div className="relative">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* LEFT — animated hero card */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[5/4] sm:aspect-[16/10] rounded-[2rem] overflow-hidden border border-line shadow-[0_40px_100px_-40px_rgba(108,93,252,0.35)]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current.client}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={`${current.client} case study`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    {/* tonal wash */}
                    <div
                      aria-hidden
                      className={`absolute inset-0 bg-gradient-to-br ${current.accent} mix-blend-multiply opacity-85`}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.75) 100%)",
                      }}
                    />
                    <div aria-hidden className="absolute inset-0 noise opacity-25 mix-blend-overlay" />

                    {/* content overlay */}
                    <div className="relative h-full p-6 sm:p-10 flex flex-col justify-between text-white">
                      <div className="flex items-start justify-between">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em]">
                          <current.icon className="w-3 h-3" />
                          {current.sector}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <div className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-3">
                          {current.client}
                        </div>
                        <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl italic">
                          &ldquo;{current.problem}&rdquo;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous sector"
                    className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next sector"
                    className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaused((p) => !p)}
                    className="ml-2 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-ink hover:border-ink/30 transition"
                  >
                    {paused ? (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        Resume
                      </>
                    ) : (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        Pause
                      </>
                    )}
                  </button>
                </div>

                {/* progress dots */}
                <div className="flex items-center gap-1.5">
                  {sectors.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to sector ${i + 1}`}
                      onClick={() => {
                        setDirection(i > active ? 1 : -1);
                        setActive(i);
                      }}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: i === active ? 28 : 8,
                        background:
                          i === active
                            ? "linear-gradient(90deg,#6C5DFC,#2563EB)"
                            : "var(--color-line)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — details + results */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`details-${current.client}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-[0_20px_50px_-30px_rgba(10,10,10,0.15)]"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-medium mb-3">
                    Outcomes delivered
                  </div>
                  <ul className="space-y-3">
                    {current.results.map((r, i) => (
                      <motion.li
                        key={r}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-brand/15 to-blue/10 border border-line flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-brand" />
                        </span>
                        <span className="text-sm text-ink/90 leading-snug pt-0.5">
                          {r}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-between gap-2 text-sm font-medium text-ink w-full pt-5 border-t border-line group/link"
                  >
                    <span>Read the {current.client} case study</span>
                    <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover/link:bg-ink group-hover/link:border-ink group-hover/link:rotate-45 transition-all duration-500">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:text-white" />
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sector rail — centered focus */}
          <div className="mt-10 relative">
            <div
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
            />
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-10">
              {sectors.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.client}
                    type="button"
                    onClick={() => {
                      setDirection(i > active ? 1 : -1);
                      setActive(i);
                    }}
                    className={`shrink-0 group relative rounded-2xl border overflow-hidden text-left transition-all duration-500 ${
                      isActive
                        ? "border-ink/30 shadow-[0_20px_50px_-20px_rgba(108,93,252,0.4)] scale-100"
                        : "border-line scale-95 opacity-55 hover:opacity-80"
                    }`}
                    style={{ width: isActive ? 200 : 170 }}
                  >
                    <div className="relative h-20 overflow-hidden">
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                      <div
                        aria-hidden
                        className={`absolute inset-0 bg-gradient-to-br ${s.accent} mix-blend-multiply opacity-85`}
                      />
                    </div>
                    <div className="p-3 bg-white">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-brand" />
                        <div className="text-[10px] uppercase tracking-[0.18em] text-muted">
                          {s.sector}
                        </div>
                      </div>
                      <div className="font-display font-medium text-sm text-ink mt-1 tracking-tight">
                        {s.client}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
