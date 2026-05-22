"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";
import { RevealText } from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import ShaderBoundary, { useWebGLSupported } from "./ShaderBoundary";

const GodRays = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.GodRays),
  { ssr: false }
);

export default function ShaderFinale() {
  const [shaderOn, setShaderOn] = useState(false);
  const webglOK = useWebGLSupported();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.2, 1, 1, 0.6]);

  // Only boot the GPU shader once the section is near the viewport.
  // Mounting it before that caused a noticeable stall when the user
  // scrolled from "Tools of the Trade" into this section.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShaderOn(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] sm:min-h-[110vh] bg-ink text-white overflow-hidden flex items-center justify-center py-20 sm:py-28 md:py-32"
    >
      {/* Cheap static gradient placeholder — paints instantly while the shader warms up */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 40%, rgba(167,139,250,0.35) 0%, rgba(108,93,252,0.2) 40%, transparent 75%), linear-gradient(180deg, #050517 0%, #0A0A0A 100%)",
        }}
      />

      {/* GODRAYS SHADER — only mounts once the section is near the viewport
          AND WebGL is available. Wrapped in ShaderBoundary so a runtime
          WebGL failure degrades gracefully to the static gradient above. */}
      {shaderOn && webglOK && (
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <ShaderBoundary>
            <GodRays
              style={{ width: "100%", height: "100%" }}
              colorBack="#050517"
              colorBloom="#A78BFA"
              colors={["#6C5DFC", "#A78BFA", "#3B82F6", "#ffffff", "#f472b6"]}
              spotty={0.3}
              midSize={0.35}
              midIntensity={0.55}
              density={0.58}
              intensity={0.75}
              bloom={0.6}
              speed={0.45}
              maxPixelCount={700_000}
            />
          </ShaderBoundary>
        </motion.div>
      )}

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />

      {/* Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-[11px] uppercase tracking-[0.22em] text-white/85 mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
          Now booking Q2 engagements
        </motion.div>

        <h2 className="font-display font-medium text-[clamp(2.2rem,9vw,9rem)] leading-[0.9] tracking-[-0.05em] text-white">
          <span className="block">
            <RevealText as="span">ready to build</RevealText>
          </span>
          <span className="block">
            <span className="font-serif-italic italic bg-gradient-to-r from-white via-[#E7E0FF] to-[#A78BFA] bg-clip-text text-transparent">
              <RevealText as="span" delay={0.12}>something rare?</RevealText>
            </span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-base sm:text-lg text-white/75 max-w-xl mx-auto leading-relaxed"
        >
          Tell us what you&apos;re building. We&apos;ll come back within 24
          hours with a real engineering perspective — no sales pitch, no slideware.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-ink px-8 py-4 text-sm font-medium hover:shadow-[0_30px_80px_-20px_rgba(255,255,255,0.65)] transition-shadow"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-xl px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            <Calendar className="w-4 h-4" />
            Schedule a call
          </MagneticButton>
        </motion.div>

        {/* Corner marks — desktop only (cramped on phones) */}
        <div className="hidden sm:block absolute top-6 left-6 text-[10px] uppercase tracking-[0.22em] text-white/40">
          ⌘ 01
        </div>
        <div className="hidden sm:block absolute top-6 right-6 text-[10px] uppercase tracking-[0.22em] text-white/40">
          WORO · Global
        </div>
        <div className="hidden sm:block absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.22em] text-white/40">
          crafted with love
        </div>
        <div className="hidden sm:block absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.22em] text-white/40">
          Gurugram
        </div>
      </motion.div>
    </section>
  );
}
