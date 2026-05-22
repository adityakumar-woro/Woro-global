"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { RevealText } from "./AnimatedText";
import ShaderBoundary, { useWebGLSupported } from "./ShaderBoundary";

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
);
const LiquidMetal = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.LiquidMetal),
  { ssr: false }
);

const cyclingWords = ["scalable", "intelligent", "secure", "delightful"];

export default function CinematicHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const webglOK = useWebGLSupported();
  const ref = useRef<HTMLElement>(null);

  // scroll-driven transforms: orb scales up as you enter, zooms and dims as you leave
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.35]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  const wordmarkScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // cursor-reactive spotlight
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.3);
  const sx = useSpring(mx, { stiffness: 100, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 100, damping: 20, mass: 0.5 });
  const spotlightX = useTransform(sx, (v) => `${v * 100}%`);
  const spotlightY = useTransform(sy, (v) => `${v * 100}%`);
  const spotlightBg = useMotionTemplate`radial-gradient(700px 700px at ${spotlightX} ${spotlightY}, rgba(255,255,255,0.5), transparent 60%)`;

  useEffect(() => {
    setMounted(true);
    const i = setInterval(() => setWordIndex((n) => (n + 1) % cyclingWords.length), 2600);
    return () => clearInterval(i);
  }, []);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={onMove}
      className="relative min-h-[100vh] text-white overflow-hidden"
    >
      {/* PIN WRAPPER — keeps the hero fixed while you scroll past it */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* MESH GRADIENT BACKGROUND */}
        {mounted && (
          <div className="absolute inset-0 z-0">
            <MeshGradient
              style={{ width: "100%", height: "100%" }}
              colors={["#050517", "#1A0B3C", "#4F46E5", "#6C5DFC", "#A78BFA"]}
              distortion={0.9}
              swirl={0.5}
              grainMixer={0.3}
              grainOverlay={0.15}
              speed={0.42}
              maxPixelCount={1_400_000}
            />
          </div>
        )}

        {/* Darkening vignette */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/50 via-ink/10 to-ink" />

        {/* Cursor spotlight */}
        <motion.div
          className="absolute inset-0 z-[2] pointer-events-none mix-blend-soft-light"
          style={{ background: spotlightBg }}
        />

        {/* THE ORB — central LiquidMetal */}
        <motion.div
          style={{ scale: orbScale, rotate: orbRotate }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-[90vmin] h-[90vmin] max-w-[820px] max-h-[820px]"
        >
          <div className="absolute -inset-12 rounded-full bg-[#6C5DFC]/30 blur-[100px]" />
          {mounted && (
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_60px_160px_-40px_rgba(108,93,252,0.8)]">
              <LiquidMetal
                style={{ width: "100%", height: "100%" }}
                colorBack="#050517"
                colorTint="#A78BFA"
                shape="metaballs"
                repetition={4.4}
                shiftRed={0.32}
                shiftBlue={0.38}
                contour={0.55}
                softness={0.4}
                distortion={0.18}
                angle={0.75}
                speed={1.1}
                maxPixelCount={1_000_000}
              />
            </div>
          )}
        </motion.div>

        {/* HUGE WORDMARK BEHIND */}
        <motion.div
          style={{ scale: wordmarkScale }}
          className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
        >
          <span className="font-display font-black text-[40vw] leading-[0.8] tracking-[-0.08em] text-white/5 select-none">
            woro
          </span>
        </motion.div>

        {/* CONTENT LAYER */}
        <motion.div
          style={{ y: headlineY }}
          className="relative z-[10] h-full flex flex-col justify-between pt-32 sm:pt-44 pb-16 sm:pb-24 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto"
        >
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] pulse-badge" />
              Rendered in real-time · WebGL
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/55">
              <span className="font-serif-italic text-sm text-white/70">est.</span>
              2017 · Global
            </div>
          </motion.div>

          {/* Center column — giant editorial type */}
          <div className="max-w-5xl">
            <h1 className="font-display font-medium tracking-[-0.05em] leading-[1] text-[clamp(2.6rem,10vw,10rem)] text-white">
              <span className="block">
                <RevealText as="span" delay={2.3}>we design</RevealText>
              </span>
              <span className="block">
                <span className="font-serif-italic italic text-white">
                  <RevealText as="span" delay={2.4}>the future of</RevealText>
                </span>
              </span>
              <span className="block relative h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cyclingWords[wordIndex]}
                    initial={{ y: "100%", filter: "blur(12px)" }}
                    animate={{ y: "0%", filter: "blur(0px)" }}
                    exit={{ y: "-100%", filter: "blur(12px)" }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 inline-block leading-[1] bg-gradient-to-r from-white via-[#E7E0FF] to-[#A78BFA] bg-clip-text text-transparent"
                  >
                    {cyclingWords[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.8 }}
              className="mt-10 text-base sm:text-lg text-white/75 leading-relaxed max-w-lg"
            >
              WORO Global is an AI-first product studio. We design and ship
              WhatsApp CRMs, voice agents and creator tools that make modern
              businesses move faster.
            </motion.p>
          </div>

          {/* Bottom row — CTAs + scroll cue */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3 }}
            className="flex flex-wrap items-end justify-between gap-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/products"
                data-cursor-label="Explore"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-4 text-sm font-medium hover:shadow-[0_20px_60px_-15px_rgba(108,93,252,0.7)] transition-all"
              >
                See our products
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="/contact"
                data-cursor-label="Watch"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-xl px-7 py-4 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch demo
              </a>
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] uppercase tracking-[0.28em] text-white/55 flex flex-col items-center gap-2"
            >
              scroll to explore
              <span className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
