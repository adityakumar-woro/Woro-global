"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { RevealText } from "./AnimatedText";
import MagneticButton from "./MagneticButton";

// GPU shaders — client only
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
);
const LiquidMetal = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.LiquidMetal),
  { ssr: false }
);
const Metaballs = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.Metaballs),
  { ssr: false }
);

const cyclingWords = ["scalable", "intelligent", "secure", "delightful"];

const stats = [
  { value: "200+", label: "Projects shipped" },
  { value: "150+", label: "Clients served" },
  { value: "8+", label: "Years building" },
  { value: "15+", label: "Countries served" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Spotlight that tracks the cursor
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.35);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 0.6 });

  useEffect(() => {
    setMounted(true);
    const i = setInterval(() => setWordIndex((n) => (n + 1) % cyclingWords.length), 2400);
    return () => clearInterval(i);
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen overflow-hidden bg-ink text-white"
    >
      {/* FULLSCREEN MESH GRADIENT SHADER */}
      {mounted && (
        <div className="absolute inset-0 z-0">
          <MeshGradient
            style={{ width: "100%", height: "100%" }}
            colors={["#0A0A1F", "#1A0B3C", "#6C5DFC", "#3B82F6", "#A78BFA"]}
            distortion={0.85}
            swirl={0.45}
            grainMixer={0.25}
            grainOverlay={0.12}
            speed={0.45}
            maxPixelCount={1_200_000}
          />
        </div>
      )}

      {/* Dark vignette */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/65 via-ink/40 to-ink" />

      {/* Cursor-reactive spotlight (pure CSS radial gradient driven by spring) */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-soft-light"
        style={{
          background: `radial-gradient(600px 600px at calc(var(--mx) * 100%) calc(var(--my) * 100%), rgba(255,255,255,0.35), transparent 60%)`,
        }}
        ref={(el) => {
          if (!el) return;
          const update = () => {
            el.style.setProperty("--mx", String(springX.get()));
            el.style.setProperty("--my", String(springY.get()));
          };
          springX.on("change", update);
          springY.on("change", update);
          update();
        }}
      />

      {/* Top bar */}
      <div className="relative z-20 pt-32 sm:pt-40 px-6 lg:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-between flex-wrap gap-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-[11px] uppercase tracking-[0.2em] text-white/85">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] pulse-badge" />
            Now deploying · WORO Voice 2.0
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[12px] text-white/60">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            Rendered in real-time WebGL
          </div>
        </motion.div>

        {/* HERO CONTENT */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT — big display type */}
          <div className="lg:col-span-7">
            <h1 className="font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(3rem,8vw,7.6rem)] text-white">
              <span className="block">
                <RevealText as="span">we design</RevealText>
              </span>
              <span className="block">
                <span className="font-serif-italic text-white/95 italic">
                  <RevealText as="span" delay={0.15}>
                    the future of
                  </RevealText>
                </span>
              </span>
              <span className="block relative h-[1em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cyclingWords[wordIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 inline-block bg-gradient-to-r from-white via-[#E0DAFF] to-[#A78BFA] bg-clip-text text-transparent"
                  >
                    {cyclingWords[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 text-base sm:text-lg text-white/75 leading-relaxed max-w-lg"
            >
              WORO Global is an AI-first product studio. We design and ship
              WhatsApp CRMs, voice agents and creator tools that make modern
              businesses move faster — crafted in WebGL, delivered to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="/products"
                className="group relative inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-4 text-sm font-medium overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(108,93,252,0.7)] transition-shadow"
              >
                See our products
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-xl px-7 py-4 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch demo
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT — shader orb composition */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square w-full max-w-[560px] ml-auto"
            >
              {/* Outer soft glow */}
              <div className="absolute -inset-10 rounded-full bg-[#6C5DFC]/30 blur-3xl" />

              {/* LIQUID METAL shader — the hero orb */}
              {mounted && (
                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/15 shadow-[0_40px_120px_-30px_rgba(108,93,252,0.7)]">
                  <LiquidMetal
                    style={{ width: "100%", height: "100%" }}
                    colorBack="#0A0A1F"
                    colorTint="#A78BFA"
                    shape="metaballs"
                    repetition={4.2}
                    shiftRed={0.3}
                    shiftBlue={0.35}
                    contour={0.55}
                    softness={0.4}
                    distortion={0.15}
                    angle={0.7}
                    speed={1.0}
                    maxPixelCount={700_000}
                  />
                </div>
              )}

              {/* Metaballs decoration — small floating element */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-8 -left-8 w-40 h-40 rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl"
                >
                  <Metaballs
                    style={{ width: "100%", height: "100%" }}
                    colorBack="#0A0A1F"
                    colors={["#6C5DFC", "#A78BFA", "#3B82F6"]}
                    count={6}
                    size={0.9}
                    speed={1.1}
                    maxPixelCount={200_000}
                  />
                </motion.div>
              )}

              {/* Floating live render tag */}
              <div className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-ink text-[11px] font-medium shadow-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C5DFC] animate-pulse" />
                live · 60fps
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur border border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/70">
                WebGL · 0.7ms
              </div>
            </motion.div>
          </div>
        </div>

        {/* STATS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/[0.03] p-6 sm:p-8">
              <div className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative z-20 mt-24 border-y border-white/10 bg-white/[0.03] backdrop-blur-xl py-5 overflow-hidden">
        <div className="marquee marquee-fast">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 mx-6 shrink-0">
              {[
                "Whatsapp CRM",
                "Voice AI Agents",
                "UGC Voice Generation",
                "Cloud Migration",
                "Custom Software",
                "Mobile Apps",
                "DevOps",
                "AI Automation",
              ].map((t, i) => (
                <div key={`${k}-${i}`} className="flex items-center gap-12 shrink-0">
                  <span className="font-display text-2xl text-white/80">{t}</span>
                  <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[10px] uppercase tracking-[0.22em] text-white/50 flex flex-col items-center gap-2"
      >
        scroll
        <span className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
