"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  PhoneCall,
  Video,
  ArrowUpRight,
  Play,
  Check,
} from "lucide-react";

const products = [
  {
    slug: "woro-chat",
    tag: "01 · WhatsApp CRM",
    name: "WORO Chat",
    headline: "One inbox. Every conversation.",
    description:
      "Turn WhatsApp into a real CRM. Shared multi-agent inbox, no-code bots, broadcast campaigns, native HubSpot/Salesforce sync.",
    bullets: ["Shared multi-agent inbox", "No-code chatbot builder", "Broadcast analytics"],
    icon: MessageCircle,
    gradientFrom: "#0b3b2e",
    gradientVia: "#0b5545",
    gradientTo: "#10b981",
    accent: "#10b981",
    metric: { value: "5×", label: "faster response" },
  },
  {
    slug: "woro-voice",
    tag: "02 · AI Voice Agents",
    name: "WORO Voice",
    headline: "AI that picks up at 3am.",
    description:
      "Human-sounding AI agents that qualify, book and support 24/7 in 30+ languages. Sub-300ms latency. Auto-sync to your CRM.",
    bullets: ["30+ languages & accents", "Real-time CRM sync", "<300ms latency"],
    icon: PhoneCall,
    gradientFrom: "#15052e",
    gradientVia: "#2e1065",
    gradientTo: "#6C5DFC",
    accent: "#A78BFA",
    metric: { value: "24/7", label: "always on" },
  },
  {
    slug: "woro-ugc",
    tag: "03 · UGC & Video Platform",
    name: "WORO UGC",
    headline: "UGC ads on autopilot.",
    description:
      "Generate scroll-stopping UGC and marketing videos in minutes. AI avatars, trending hooks, 40+ languages, one-click publish to TikTok, Reels and Shorts.",
    bullets: ["AI UGC avatars & voices", "Trending hook templates", "Direct social publishing"],
    icon: Video,
    gradientFrom: "#2a0b2e",
    gradientVia: "#5c1159",
    gradientTo: "#ec4899",
    accent: "#f472b6",
    metric: { value: "10×", label: "faster UGC" },
  },
];

export default function HorizontalProducts() {
  const ref = useRef<HTMLElement>(null);
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLgUp(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scroll through all 3 panels horizontally (desktop only)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative bg-ink text-white lg:h-[320vh]"
    >
      {/* Mobile label */}
      <div className="lg:hidden px-6 pt-20 pb-10">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60">
          <span className="w-6 h-px bg-white/40" />
          Flagship products
        </div>
      </div>

      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        {/* Desktop label + progress bar (horizontal-scroll mode) */}
        <div className="hidden lg:flex absolute top-28 left-0 right-0 z-30 px-10 items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60">
            <span className="w-6 h-px bg-white/40" />
            Flagship products
          </div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/60">
            scroll down
            <div className="w-40 h-px bg-white/15 relative">
              <motion.div
                className="absolute left-0 top-0 h-full bg-white"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </div>

        {/* Track: stacked column on mobile, horizontal track on desktop */}
        <motion.div
          style={isLgUp ? { x } : undefined}
          className="flex flex-col lg:flex-row lg:h-full lg:w-[300%]"
        >
          {products.map((p, i) => (
            <ProductPanel key={p.slug} product={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductPanel({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const Icon = product.icon;
  return (
    <div className="w-full shrink-0 relative overflow-hidden flex items-center py-20 lg:py-0 lg:w-[100vw] lg:h-full">
      {/* layered gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(80% 80% at 20% 30%, ${product.gradientTo}33 0%, transparent 60%), radial-gradient(70% 70% at 80% 70%, ${product.gradientVia}55 0%, transparent 60%), linear-gradient(135deg, ${product.gradientFrom} 0%, #050517 100%)`,
        }}
      />
      <div className="absolute inset-0 noise opacity-40" />

      {/* Giant faint number */}
      <span
        className="absolute right-[-3vw] top-[6vh] font-display font-black text-[36vw] sm:text-[30vw] lg:text-[40vw] leading-[0.8] text-white/[0.04] select-none"
        aria-hidden
      >
        0{index + 1}
      </span>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: product.accent }}>
            {product.tag}
          </div>
          <h2 className="font-display font-medium text-[clamp(2.2rem,7vw,6.4rem)] leading-[0.95] tracking-[-0.04em] text-white">
            {product.headline}
          </h2>
          <p className="mt-8 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
            {product.description}
          </p>
          <ul className="mt-8 space-y-3">
            {product.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-white/85">
                <Check className="w-4 h-4" style={{ color: product.accent }} />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/products/${product.slug}`}
              data-cursor-label="Open"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-3.5 text-sm font-medium hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.6)] transition-shadow"
            >
              Explore {product.name}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              data-cursor-label="Play"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm text-white hover:bg-white/10 transition"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Watch demo
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] mx-auto lg:ml-auto"
          >
            <div
              className="absolute -inset-10 rounded-full blur-3xl opacity-60"
              style={{ background: product.accent }}
            />
            <div className="relative h-full rounded-[2.5rem] border border-white/15 bg-ink/40 backdrop-blur-2xl p-8 flex flex-col justify-between shadow-[0_50px_150px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex items-start justify-between">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${product.accent}33`, border: `1px solid ${product.accent}66` }}
                >
                  <Icon className="w-6 h-6" style={{ color: product.accent }} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 text-right">
                  Product · 0{index + 1}
                </div>
              </div>
              <div>
                <div
                  className="font-display font-medium text-[7vmin] tracking-tight leading-none"
                  style={{ color: product.accent }}
                >
                  {product.metric.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/55 mt-3">
                  {product.metric.label}
                </div>
                <div className="mt-8 font-display font-medium text-4xl text-white tracking-tight">
                  {product.name}
                </div>
              </div>
            </div>

            {/* floating tag */}
            <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-full bg-white text-ink text-[10px] uppercase tracking-[0.22em] font-medium shadow-xl">
              Live · in production
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
