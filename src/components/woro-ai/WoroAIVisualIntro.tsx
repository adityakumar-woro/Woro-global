"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight, Brain, Network, ShieldCheck } from "lucide-react";

export default function WoroAIVisualIntro() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 22 });
  const sy = useSpring(my, { stiffness: 60, damping: 22 });
  const rX = useTransform(sy, (v) => v * -6);
  const rY = useTransform(sx, (v) => v * 6);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section className="relative section-light py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
      <div className="absolute -top-32 right-10 w-[36rem] h-[36rem] rounded-full bg-brand/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              What is WORO AI
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
              Enterprise AI that{" "}
              <span className="font-serif-italic gradient-text">compounds value</span>{" "}
              across every channel.
            </h2>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-lg">
              Not another AI demo. We combine senior pods across strategy, model engineering,
              MLOps and responsible AI with in-house products — so every engagement ships a
              maintainable production asset, not slideware.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Brain, label: "GenAI, LLMs & agentic systems", sub: "Fine-tuning, RAG, function calling, multi-agent orchestration" },
                { icon: Network, label: "Cloud-native platform engineering", sub: "AWS, Azure, GCP — LangChain, vector DBs, vLLM, Kubernetes" },
                { icon: ShieldCheck, label: "Responsible AI by default", sub: "Evals, guardrails, bias mitigation, audit trails, SOC2 / GDPR" },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-brand/12 to-blue/8 border border-line flex items-center justify-center group-hover:from-brand group-hover:to-blue group-hover:border-transparent transition-all duration-500">
                      <Icon className="w-4 h-4 text-brand group-hover:text-white transition" />
                    </div>
                    <div>
                      <div className="font-display font-medium text-lg text-ink tracking-tight leading-snug">
                        {f.label}
                      </div>
                      <div className="text-sm text-muted mt-1 leading-relaxed">{f.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition group"
              >
                Get a 30-min AI strategy call
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={onMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            style={{ perspective: 1400 }}
            className="lg:col-span-7"
          >
            <motion.div
              style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
              className="relative aspect-[5/4] rounded-[2rem] overflow-hidden border border-line shadow-[0_60px_120px_-40px_rgba(10,10,10,0.25)]"
            >
              {/* HD Hero image */}
              <Image
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1800&q=85&auto=format&fit=crop"
                alt="AI neural network visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority={false}
              />

              {/* Gradient overlay */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,10,10,0.35) 0%, transparent 40%, rgba(10,10,10,0.55) 100%)",
                }}
              />

              {/* Brand wash */}
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-overlay opacity-80"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(108,93,252,0.3) 0%, transparent 50%, rgba(37,99,235,0.25) 100%)",
                }}
              />

              {/* Scanline gradient */}
              {/* Top-left status */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white"
              >
                <span className="relative flex w-1.5 h-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                AI pipeline · live
              </motion.div>

              {/* Floating metric card — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
                animate={{ y: [0, -6, 0] }}
                className="absolute top-6 right-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 p-4 shadow-[0_20px_50px_-20px_rgba(10,10,10,0.3)] w-[180px]"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  Model accuracy
                </div>
                <div className="mt-2 font-display font-medium text-3xl text-ink tracking-tight leading-none">
                  94.2%
                </div>
                <div className="mt-3 h-2 rounded-full bg-soft overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #6C5DFC 0%, #2563EB 100%)",
                    }}
                  />
                </div>
                <div className="mt-2 text-[10px] text-emerald-600 font-medium">
                  ↑ +12.4% vs baseline
                </div>
              </motion.div>

              {/* Floating latency card — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                animate={{ y: [0, 8, 0] }}
                className="absolute bottom-6 left-6 rounded-2xl bg-ink/80 backdrop-blur-xl border border-white/15 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] text-white w-[200px]"
              >
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60">
                  <Sparkles className="w-3 h-3 text-[#A78BFA]" />
                  First token latency
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display font-medium text-3xl text-white tracking-tight leading-none">
                    284
                  </span>
                  <span className="text-white/60 text-sm">ms</span>
                </div>
                <div className="mt-3 flex gap-1">
                  {[10, 14, 9, 12, 8, 15, 11, 13, 9, 10, 12, 14].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.04, duration: 0.4 }}
                      className="w-1 rounded-full bg-[#A78BFA] origin-bottom"
                      style={{ height: h + "px" }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating model pill — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75, duration: 0.6 }}
                animate={{ y: [0, -6, 0] }}
                className="absolute bottom-20 right-8 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 px-4 py-2 shadow-[0_20px_50px_-20px_rgba(10,10,10,0.3)] flex items-center gap-2.5"
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-blue" />
                <span className="text-xs font-medium text-ink">GPT-4o · streaming</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
