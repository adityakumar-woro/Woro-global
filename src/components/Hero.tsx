"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Star } from "lucide-react";
import { RevealText } from "./AnimatedText";
import MagneticButton from "./MagneticButton";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[440px] sm:h-[520px] lg:h-[600px] rounded-3xl bg-soft border border-line animate-pulse" />
  ),
});

const cyclingWords = ["scalable", "intelligent", "secure", "delightful"];

const stats = [
  { value: "200+", label: "Projects shipped" },
  { value: "50+", label: "Happy clients" },
  { value: "8+", label: "Years building" },
  { value: "15+", label: "Countries served" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const i = setInterval(() => setWordIndex((n) => (n + 1) % cyclingWords.length), 2400);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen overflow-hidden section-light"
    >
      <div className="absolute inset-0 mesh opacity-90" />
      <div className="absolute inset-0 grid-bg grid-mask" />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-brand/30 blob"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-0 w-[420px] h-[420px] rounded-full bg-blue/30 blob"
      />

      <motion.div
        style={{ opacity }}
        className="relative pt-32 sm:pt-40 pb-20 mx-auto max-w-7xl px-6 lg:px-10"
      >
        {/* eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-between flex-wrap gap-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur border border-line text-[11px] uppercase tracking-[0.2em] text-ink/70">
            <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-badge" />
            New · WORO Voice 2.0 is live
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[12px] text-muted">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-ink text-ink" />
              ))}
            </div>
            <span>Trusted by 200+ teams worldwide</span>
          </div>
        </motion.div>

        {/* 2-column hero: headline left, 3D right */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT — headline */}
          <div className="lg:col-span-7">
            <h1 className="font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(2.6rem,7.4vw,6.8rem)] text-ink">
              <span className="block">
                <RevealText as="span">we craft</RevealText>
              </span>
              <span className="block">
                <span className="font-serif-italic text-ink/90 italic">
                  <RevealText as="span" delay={0.15}>products that feel</RevealText>
                </span>
              </span>
              <span className="block relative h-[1em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cyclingWords[wordIndex]}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 gradient-text inline-block"
                  >
                    {cyclingWords[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-lg"
            >
              WORO Global is an AI-first product studio. We design and ship
              WhatsApp CRMs, voice agents and creator tools that make modern
              businesses move faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="/products" className="btn-primary">
                See our products
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton href="/contact" className="btn-ghost">
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch demo
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT — 3D scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <Hero3D />
            {/* corner labels */}
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-muted/70 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              live render
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-muted/70">
              woro · 3d engine
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-3xl overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-7 sm:p-8">
              <div className="font-display font-medium text-4xl sm:text-5xl text-ink tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee strip below hero */}
      <div className="relative border-y border-line bg-white py-5 overflow-hidden">
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
                  <span className="font-display text-2xl text-ink/70">{t}</span>
                  <span className="w-2 h-2 rounded-full bg-brand" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
