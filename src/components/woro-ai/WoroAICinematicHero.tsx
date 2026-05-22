"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Play,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Activity,
  Brain,
} from "lucide-react";
import HeroNeuralCanvas from "./HeroNeuralCanvas";

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
);

const rotatingPhrases = [
  "GenAI systems",
  "voice agents",
  "enterprise RAG",
  "autonomous workflows",
];

const headlineLine1 = ["Next-gen", "enterprise"];
const headlineLine2 = "AI intelligence.";

const clientAvatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=85&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&q=85&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&q=85&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&q=85&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&q=85&auto=format&fit=crop&crop=faces",
];

export default function WoroAICinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    setMounted(true);
    const i = setInterval(
      () => setPhraseIdx((n) => (n + 1) % rotatingPhrases.length),
      2600
    );
    return () => clearInterval(i);
  }, []);

  // Scroll-linked cinema parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Cursor parallax for floating cards
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 20 });
  const sy = useSpring(my, { stiffness: 55, damping: 20 });
  const card1X = useTransform(sx, (v) => v * -30);
  const card1Y = useTransform(sy, (v) => v * -24);
  const card2X = useTransform(sx, (v) => v * 38);
  const card2Y = useTransform(sy, (v) => v * -20);
  const card3X = useTransform(sx, (v) => v * -24);
  const card3Y = useTransform(sy, (v) => v * 32);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-screen bg-[#050517] text-white overflow-hidden pt-28 sm:pt-32"
    >
      {/* Layer 0 — live neural-network canvas (the "AI video") */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <HeroNeuralCanvas theme="dark" />
      </motion.div>

      {/* Layer 1 — cinematic shader wash (deep purples + royal blue) */}
      {mounted && (
        <div aria-hidden className="absolute inset-0 z-[1] opacity-80 mix-blend-screen">
          <MeshGradient
            style={{ width: "100%", height: "100%" }}
            colors={[
              "#050517",
              "#0d0b2e",
              "#1A0B3C",
              "#2e1065",
              "#4F46E5",
              "#6C5DFC",
              "#818cf8",
            ]}
            distortion={0.95}
            swirl={0.6}
            grainMixer={0.22}
            grainOverlay={0.1}
            speed={0.32}
            maxPixelCount={1_200_000}
          />
        </div>
      )}

      {/* Layer 2 — vignette to anchor the eye */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 30% 45%, rgba(5,5,23,0) 0%, rgba(5,5,23,0.35) 40%, rgba(5,5,23,0.8) 80%, rgba(5,5,23,1) 100%)",
        }}
      />

      {/* Layer 3 — blue-purple stage lighting */}
      <div
        aria-hidden
        className="absolute -top-40 -right-20 z-[2] w-[42rem] h-[42rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.45) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 -left-24 z-[2] w-[36rem] h-[36rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.38) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-20 left-1/3 z-[2] w-[36rem] h-[36rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Layer 4 — filmic grain */}
      <div
        aria-hidden
        className="absolute inset-0 z-[3] opacity-[0.09] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%221.2%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>")',
        }}
      />

      {/* Layer 5 — floating light particles */}
      <FloatingParticles />

      {/* Layer 6 — grid structure */}
      <div
        aria-hidden
        className="absolute inset-0 z-[3] grid-bg-dark opacity-25 grid-mask pointer-events-none"
      />

      {/* Corner meta */}
      <div className="absolute top-24 sm:top-28 left-5 sm:left-8 z-[6] hidden sm:block text-[10px] uppercase tracking-[0.28em] text-white/45">
        WORO · AI
      </div>
      <div className="absolute top-24 sm:top-28 right-5 sm:right-8 z-[6] hidden sm:block text-[10px] uppercase tracking-[0.28em] text-white/45">
        v4 · Enterprise-ready
      </div>

      <motion.div
        style={{ opacity: fade, y: contentY }}
        className="relative z-[10] mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-16 min-h-[calc(100vh-7rem)] flex flex-col"
      >
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/50 mb-8"
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/85">WORO AI</span>
        </motion.nav>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — cinematic headline + CTAs */}
          <div className="relative lg:col-span-7 z-20">
            {/* Live eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85 shadow-[0_10px_30px_-10px_rgba(108,93,252,0.45)]"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A78BFA] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A78BFA]" />
              </span>
              Live · AI delivery team
              <span className="w-px h-3 bg-white/20" />
              <span className="text-white/60">40+ in production</span>
            </motion.div>

            {/* Headline — word-by-word stagger */}
            <h1 className="mt-6 sm:mt-7 font-display font-medium tracking-[-0.045em] leading-[0.94] text-[clamp(2.8rem,9vw,7rem)] text-white">
              <span className="block">
                {headlineLine1.map((w, i) => (
                  <WordReveal key={w} delay={0.2 + i * 0.1}>
                    {w}
                  </WordReveal>
                ))}
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block font-serif-italic italic"
                  style={{
                    background:
                      "linear-gradient(115deg, #ffffff 0%, #E7E0FF 30%, #A78BFA 60%, #60A5FA 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {headlineLine2}
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-2 text-[0.48em] font-normal tracking-tight text-white/70">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-baseline gap-2"
                >
                  built for{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingPhrases[phraseIdx]}
                      initial={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
                      animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
                      exit={{ y: "-100%", filter: "blur(10px)", opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                      style={{
                        background:
                          "linear-gradient(115deg, #A78BFA 0%, #818cf8 50%, #60A5FA 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {rotatingPhrases[phraseIdx]}
                    </motion.span>
                  </AnimatePresence>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-7 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
            >
              Strategy, platform engineering, GenAI, MLOps and responsible AI — end-to-end
              AI services plus in-house products that ship measurable ROI, not slideware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton />
              <Link
                href="#ai-cases"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-xl px-7 py-4 text-sm font-medium text-white hover:bg-white/[0.1] hover:border-white/45 hover:-translate-y-0.5 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span className="relative">
                  See case studies
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <div className="flex -space-x-2">
                {clientAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 rounded-full border-2 border-[#050517] overflow-hidden shadow-[0_4px_10px_-4px_rgba(0,0,0,0.5)]"
                  >
                    <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 leading-tight">
                  <span className="text-white font-medium">4.9/5</span> · 180+ post-launch
                  reviews
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — floating glass cards with cursor parallax */}
          <div className="relative lg:col-span-5 h-[460px] sm:h-[520px] lg:h-[620px] hidden lg:block">
            {/* Core glow */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(167,139,250,0.45) 0%, rgba(96,165,250,0.22) 45%, transparent 75%)",
                filter: "blur(60px)",
              }}
            />

            {/* Rotating conic halo */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-50"
              style={{
                background:
                  "conic-gradient(from 0deg, #6C5DFC, #4F46E5, #2563EB, #A78BFA, #6C5DFC)",
                filter: "blur(40px)",
              }}
            />

            {/* Card #1 — Latency */}
            <motion.div
              style={{ x: card1X, y: card1Y }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-4 right-4"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[260px] rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 p-5 shadow-[0_30px_60px_-25px_rgba(108,93,252,0.55)]"
              >
                {/* Aurora hairline */}
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(167,139,250,0.55), rgba(96,165,250,0.15), rgba(108,93,252,0.55), rgba(37,99,235,0.15), rgba(167,139,250,0.55))",
                    padding: 1,
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/55">
                  <span className="inline-flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-[#A78BFA]" />
                    First-token latency
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-300">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    live
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span
                    className="font-display font-medium text-4xl tracking-tight leading-none"
                    style={{
                      background:
                        "linear-gradient(115deg, #ffffff 0%, #A78BFA 50%, #60A5FA 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    284
                  </span>
                  <span className="text-sm text-white/60">ms · p50</span>
                </div>
                <div className="mt-4 flex items-end gap-[3px] h-8">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="w-[3px] flex-1 rounded-full"
                      style={{
                        background: "linear-gradient(180deg,#A78BFA,#60A5FA)",
                      }}
                      animate={{
                        scaleY: [
                          0.25,
                          0.3 + ((i * 31) % 9) / 10,
                          0.15 + ((i * 47) % 7) / 10,
                          0.85 - ((i * 19) % 6) / 10,
                          0.35,
                        ],
                      }}
                      transition={{
                        duration: 1.6 + (i % 5) * 0.08,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i % 9) * 0.05,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Card #2 — Model accuracy */}
            <motion.div
              style={{ x: card2X, y: card2Y }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/3 -left-6"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative w-[240px] rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 p-5 shadow-[0_30px_60px_-25px_rgba(96,165,250,0.55)]"
              >
                <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em] text-white/55 mb-3">
                  <Sparkles className="w-3 h-3 text-[#A78BFA]" />
                  Model accuracy
                </div>
                <div className="font-display font-medium text-4xl text-white tracking-tight leading-none">
                  94.2<span className="text-2xl text-white/55">%</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #A78BFA 0%, #6C5DFC 50%, #60A5FA 100%)",
                      boxShadow: "0 0 20px rgba(167,139,250,0.6)",
                    }}
                  />
                </div>
                <div className="mt-2 text-[10px] text-emerald-300 font-medium">
                  ↑ +12.4% vs baseline
                </div>
              </motion.div>
            </motion.div>

            {/* Card #3 — Guardrails */}
            <motion.div
              style={{ x: card3X, y: card3Y }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-10 right-0"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="relative w-[230px] rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 p-5 shadow-[0_30px_60px_-25px_rgba(108,93,252,0.55)]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-medium">
                    14/14
                  </span>
                </div>
                <div className="font-display font-medium text-base text-white tracking-tight leading-tight">
                  All guardrails passing
                </div>
                <div className="text-[11px] text-white/55 mt-1 leading-relaxed">
                  SOC2 · GDPR · HIPAA alignment live
                </div>
              </motion.div>
            </motion.div>

            {/* Rotating AI chips */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(108,93,252,0.8)]">
                <Brain className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full"
            >
              <div className="absolute bottom-2 right-4 w-10 h-10 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(96,165,250,0.8)]">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/55">
            scroll
            <div className="relative w-6 h-10 rounded-full border border-white/25">
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 top-1.5 w-1 h-2 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #A78BFA, #60A5FA)",
                  boxShadow: "0 0 10px rgba(167,139,250,0.9)",
                }}
                animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ───────────── pieces ───────────── */

function WordReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="inline-block overflow-hidden align-bottom mr-[0.25em]">
      <motion.span
        className="inline-block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Glowing magnetic gradient CTA with shine sweep + click ripple. */
function MagneticButton() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 18 });
  const sy = useSpring(my, { stiffness: 260, damping: 18 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 10);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r2) => [
      ...r2,
      { id, x: e.clientX - r.left, y: e.clientY - r.top },
    ]);
    setTimeout(() => {
      setRipples((r2) => r2.filter((rp) => rp.id !== id));
    }, 700);
  }

  return (
    <motion.a
      href="/contact"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className="group relative inline-flex items-center gap-2 rounded-full text-white px-7 py-4 text-sm font-medium overflow-hidden hover:-translate-y-0.5 hover:scale-[1.03] transition-transform"
    >
      {/* Outer glow */}
      <span
        aria-hidden
        className="absolute -inset-3 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,93,252,0.65) 0%, rgba(37,99,235,0.25) 45%, transparent 70%)",
        }}
      />
      {/* Base gradient */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.1) inset, 0 20px 50px -10px rgba(108,93,252,0.8)",
        }}
      />
      {/* Hover gradient shift */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(115deg, #A78BFA 0%, #6C5DFC 45%, #3B82F6 100%)",
        }}
      />
      {/* Shine sweep */}
      <motion.span
        aria-hidden
        className="absolute inset-y-0 w-1/3 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)",
        }}
        initial={{ x: "-150%" }}
        animate={{ x: "300%" }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
      />
      {/* Click ripples */}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          aria-hidden
          className="absolute rounded-full bg-white/55"
          style={{ left: r.x, top: r.y }}
          initial={{ width: 0, height: 0, opacity: 0.65, x: "-50%", y: "-50%" }}
          animate={{ width: 320, height: 320, opacity: 0, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
      <span className="relative z-10 inline-flex items-center gap-2">
        Talk to our AI team
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

/** Subtle floating light particles over the video layer. */
function FloatingParticles() {
  const particles = Array.from({ length: 22 }).map((_, i) => ({
    left: (i * 53) % 100,
    top: (i * 37 + 7) % 100,
    size: 2 + (i % 4),
    delay: (i % 7) * 0.4,
    duration: 6 + (i % 5),
  }));
  return (
    <div aria-hidden className="absolute inset-0 z-[3] pointer-events-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: i % 2 === 0 ? "rgba(167,139,250,0.9)" : "rgba(129,140,248,0.85)",
            boxShadow:
              i % 2 === 0
                ? "0 0 14px rgba(167,139,250,0.85)"
                : "0 0 14px rgba(129,140,248,0.85)",
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
