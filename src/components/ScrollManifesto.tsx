"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const MANIFESTO =
  "We don't build run-of-the-mill software. We craft beautifully engineered AI products powered by sharp minds, clear processes, and radical ownership.";

export default function ScrollManifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  // The circle rises up and rotates as you scroll through the section
  const circleY = useTransform(scrollYProgress, [0, 1], ["-55%", "-45%"]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const circleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.1]);

  const words = MANIFESTO.split(" ");

  return (
    <section
      ref={ref}
      className="relative section-dark py-28 sm:py-40 md:py-56 overflow-hidden"
    >
      {/* Dark layered backdrop */}
      <div className="absolute inset-0 mesh-dark opacity-70" />
      <div className="absolute inset-0 grid-bg-dark opacity-30 grid-mask" />

      {/* FULL CIRCLE — continuation of hero orb, rotating + color-shifting as user scrolls */}
      <motion.div
        aria-hidden
        style={{ y: circleY, rotate: circleRotate, scale: circleScale }}
        className="absolute left-1/2 -translate-x-1/2 top-0 z-[1] w-[95vmin] h-[95vmin] max-w-[900px] max-h-[900px] pointer-events-none"
      >
        {/* Purple halo glow */}
        <div className="absolute -inset-16 rounded-full bg-[#6C5DFC]/30 blur-[120px]" />
        {/* Full complete circle */}
        <div className="relative w-full h-full rounded-full border border-white/15 shadow-[0_80px_200px_-40px_rgba(108,93,252,0.7)] overflow-hidden">
          {/* Conic sweep — gives the circle a live, color-changing feel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 0deg, #050517, #1A0B3C, #4F46E5, #6C5DFC, #A78BFA, #3B82F6, #050517)",
            }}
          />
          {/* Counter-rotating inner wash for depth */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[14%] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.25), rgba(255,255,255,0.03) 60%, transparent 75%), conic-gradient(from 90deg, #A78BFA55, #6C5DFC33, #3B82F644, #A78BFA55)",
            }}
          />
          {/* Dark core + highlight ring */}
          <div className="absolute inset-[28%] rounded-full bg-ink/80 border border-white/10" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-ink/30 mix-blend-soft-light" />
          <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
        </div>
      </motion.div>

      {/* Top-down fade so circle merges into section */}
      <div className="absolute inset-x-0 top-0 h-[55vh] bg-gradient-to-b from-ink via-ink/40 to-transparent z-[2] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10 pt-[26vw] sm:pt-[18vw]">
        <div className="mb-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/60">
          <span className="w-6 h-px bg-white/40" />
          Manifesto
          <span className="w-6 h-px bg-white/40" />
        </div>

        <p className="font-display font-medium text-[clamp(1.7rem,5.2vw,4.6rem)] leading-[1.2] tracking-[-0.035em] flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 text-white">
          {words.map((w, i) => (
            <Word
              key={i}
              word={w}
              index={i}
              total={words.length}
              progress={scrollYProgress}
            />
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-white/15" />
          <span className="text-sm font-serif-italic text-white/70">— Harshit Sharma, Founder</span>
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.22, 1]);
  const isItalic = word.toLowerCase().includes("beautifully");
  const isAccent =
    word.toLowerCase().includes("ai") ||
    word.toLowerCase().includes("radical") ||
    word.toLowerCase().includes("crafted") ||
    word.toLowerCase().includes("sharp");

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block ${isItalic ? "font-serif-italic italic" : ""} ${
        isAccent ? "gradient-text-light" : "text-white"
      }`}
    >
      {word}
    </motion.span>
  );
}
