"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  ShieldCheck,
  Sparkles,
  Clock,
  Star,
  Rocket,
  Zap,
} from "lucide-react";

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
);

export default function WoroAIFinalCTA() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative bg-white overflow-hidden py-24 sm:py-32">
      {/* Light mesh shader */}
      {mounted && (
        <div aria-hidden className="absolute inset-0 z-0 opacity-80">
          <MeshGradient
            style={{ width: "100%", height: "100%" }}
            colors={[
              "#ffffff",
              "#eef2ff",
              "#ede9fe",
              "#cffafe",
              "#A78BFA",
              "#818cf8",
            ]}
            distortion={0.85}
            swirl={0.5}
            grainMixer={0.1}
            grainOverlay={0.04}
            speed={0.28}
            maxPixelCount={900_000}
          />
        </div>
      )}

      {/* Soft white vignette */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255,255,255,0.2), rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.95) 100%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 z-[2] grid-bg opacity-25 grid-mask pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — headline + CTAs */}
          <div className="lg:col-span-7 text-ink">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/85 backdrop-blur-xl px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-ink/75 shadow-[0_4px_14px_-6px_rgba(108,93,252,0.25)] mb-8"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Now booking · Q2 AI engagements
              <span className="w-px h-3 bg-line" />
              <span className="text-muted">3 slots left</span>
            </motion.div>

            <h2 className="font-display font-medium tracking-[-0.045em] leading-[0.94] text-[clamp(2.6rem,8vw,6.2rem)] text-ink">
              <MaskReveal delay={0.1}>Ready to build</MaskReveal>
              <MaskReveal delay={0.25}>
                <span
                  className="font-serif-italic italic"
                  style={{
                    background:
                      "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 45%, #2563EB 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  something rare?
                </span>
              </MaskReveal>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-xl"
            >
              Tell us what you&apos;re building. A senior engineer — not a sales team —
              replies within a working day with a real engineering perspective. No decks,
              no discovery-call theatre.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full text-white px-8 py-4 text-sm font-medium overflow-hidden transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                  boxShadow: "0 20px 50px -18px rgba(108,93,252,0.55)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                  }}
                />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Start a project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/85 backdrop-blur-xl px-8 py-4 text-sm font-medium text-ink hover:bg-white hover:border-ink/30 hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Schedule an intro call
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
            >
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Fully NDA-protected
              </li>
              <li className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand" />
                Response within 24 hours
              </li>
              <li className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue" />
                Free architecture consult
              </li>
            </motion.ul>
          </div>

          {/* RIGHT — rating card + floating KPI cluster */}
          <div className="lg:col-span-5 relative h-[460px] sm:h-[520px] lg:h-[560px]">
            {/* Glow halo */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(167,139,250,0.4) 0%, rgba(96,165,250,0.18) 45%, transparent 75%)",
                filter: "blur(60px)",
              }}
            />

            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-30"
              style={{
                background:
                  "conic-gradient(from 0deg, #A78BFA, #818cf8, #60A5FA, #cffafe, #A78BFA)",
                filter: "blur(50px)",
              }}
            />

            {/* Center rating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] rounded-[1.6rem] border border-line bg-white/90 backdrop-blur-2xl p-6 text-ink shadow-[0_40px_100px_-30px_rgba(108,93,252,0.5)]"
            >
              {/* Aurora outline */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-[1.6rem] pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(108,93,252,0.5), rgba(96,165,250,0.2), rgba(167,139,250,0.45), rgba(37,99,235,0.2), rgba(108,93,252,0.5))",
                  padding: 1,
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="font-display font-medium text-5xl leading-none tracking-tight text-ink">
                4.9
                <span
                  style={{
                    background:
                      "linear-gradient(115deg, #6C5DFC 0%, #2563EB 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  /5
                </span>
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted">
                average post-launch review
              </div>
              <div className="mt-5 pt-5 border-t border-line grid grid-cols-2 gap-3">
                <div>
                  <div className="font-display font-medium text-2xl leading-none text-ink">
                    40+
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-muted mt-1.5">
                    AI systems shipped
                  </div>
                </div>
                <div>
                  <div className="font-display font-medium text-2xl leading-none text-ink">
                    8y+
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-muted mt-1.5">
                    delivery avg
                  </div>
                </div>
              </div>
            </motion.div>

            <FloatingKPI
              className="top-6 left-2 sm:left-4"
              icon={Zap}
              label="Sub-300ms"
              sub="First token"
              delay={0.35}
            />
            <FloatingKPI
              className="top-14 sm:top-10 right-2 sm:right-6"
              icon={Rocket}
              label="90 days"
              sub="Discovery → launch"
              delay={0.5}
            />
            <FloatingKPI
              className="bottom-10 left-0 sm:left-2"
              icon={ShieldCheck}
              label="0"
              sub="Critical findings"
              delay={0.65}
            />
            <FloatingKPI
              className="bottom-4 right-0 sm:right-2"
              icon={Sparkles}
              label="SOC2"
              sub="Type II · ISO 27001"
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MaskReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function FloatingKPI({
  className,
  icon: Icon,
  label,
  sub,
  delay = 0,
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className ?? ""}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
        className="inline-flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-line px-4 py-2.5 shadow-[0_20px_50px_-20px_rgba(108,93,252,0.35)]"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: "linear-gradient(135deg, #6C5DFC 0%, #2563EB 100%)",
          }}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted leading-none">
            {sub}
          </div>
          <div className="text-sm font-medium text-ink mt-1 leading-none">{label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
