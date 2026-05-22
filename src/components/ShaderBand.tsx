"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "./AnimatedText";

const Waves = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.Waves),
  { ssr: false }
);
const GrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.GrainGradient),
  { ssr: false }
);
const NeuroNoise = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.NeuroNoise),
  { ssr: false }
);

export default function ShaderBand() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-ink"
        >
          {/* Full-bleed shader background */}
          {mounted && (
            <div className="absolute inset-0 z-0">
              <GrainGradient
                style={{ width: "100%", height: "100%" }}
                colors={["#0A0A1F", "#1A0B3C", "#3B1FAE", "#6C5DFC", "#A78BFA"]}
                softness={0.9}
                intensity={0.55}
                noise={0.25}
                shape="corners"
                speed={0.35}
                maxPixelCount={900_000}
              />
            </div>
          )}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 sm:p-10 md:p-16 lg:p-20">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-7">
                <span className="w-6 h-px bg-white/40" />
                The WORO difference
              </div>
              <h2 className="font-display font-medium text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.04em] text-white">
                <span className="block">
                  <RevealText as="span">we don&apos;t build</RevealText>
                </span>
                <span className="block">
                  <span className="font-serif-italic text-white/95">
                    <RevealText as="span" delay={0.12}>run-of-the-mill.</RevealText>
                  </span>
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl"
              >
                Every pixel, every shader, every line of code — built by senior
                engineers who ship to production. No boilerplates, no juniors,
                no compromises.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-medium hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)] transition-shadow"
                >
                  Our manifesto
                  <ArrowUpRight className="w-4 h-4 arrow-fly" />
                </Link>
              </motion.div>
            </div>

            {/* Right side — two mini shader cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="relative aspect-square rounded-3xl overflow-hidden border border-white/15 bg-ink/40 backdrop-blur-xl"
              >
                {mounted && (
                  <div className="absolute inset-0">
                    <Waves
                      style={{ width: "100%", height: "100%" }}
                      colorFront="#A78BFA"
                      colorBack="#0A0A1F"
                      amplitude={0.6}
                      frequency={0.8}
                      rotation={28}
                      shape={1}
                      spacing={0.3}
                      proportion={0.45}
                      softness={0.4}
                      maxPixelCount={300_000}
                    />
                  </div>
                )}
                <div className="absolute top-4 left-4 right-4 text-[10px] uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                  shader · waves
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-display text-sm text-white">
                  Fluid by design
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative aspect-square rounded-3xl overflow-hidden border border-white/15 bg-ink/40 backdrop-blur-xl"
              >
                {mounted && (
                  <div className="absolute inset-0">
                    <NeuroNoise
                      style={{ width: "100%", height: "100%" }}
                      colorFront="#A78BFA"
                      colorBack="#0A0A1F"
                      brightness={1.2}
                      speed={0.5}
                      maxPixelCount={300_000}
                    />
                  </div>
                )}
                <div className="absolute top-4 left-4 right-4 text-[10px] uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C5DFC] animate-pulse" />
                  shader · neuro
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-display text-sm text-white">
                  AI inside
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
