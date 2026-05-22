"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Globe,
  Cpu,
  Sparkles,
  Brain,
  Database,
  Snowflake,
  Smile,
  CircleDot,
  Link2,
  BookOpen,
} from "lucide-react";

type Partner = {
  name: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  gradient: string;
  tier: string;
};

const partners: Partner[] = [
  { name: "AWS",            short: "aws",   icon: Cloud,    tag: "Cloud",        tier: "Advanced",    gradient: "from-[#FF9900] via-[#ffb347] to-[#232f3e]" },
  { name: "Microsoft Azure",short: "az",    icon: Server,   tag: "Cloud",        tier: "Gold",        gradient: "from-[#0078D4] via-[#2563EB] to-[#0b3b87]" },
  { name: "Google Cloud",   short: "gcp",   icon: Globe,    tag: "Cloud",        tier: "Partner",     gradient: "from-[#4285F4] via-[#34A853] to-[#EA4335]" },
  { name: "NVIDIA",         short: "nv",    icon: Cpu,      tag: "GPU & Models", tier: "Inception",   gradient: "from-[#76B900] via-[#4e8800] to-[#1e2c14]" },
  { name: "OpenAI",         short: "oa",    icon: Sparkles, tag: "Foundation",   tier: "Platform",    gradient: "from-[#10A37F] via-[#0f7a60] to-[#0A0A0A]" },
  { name: "Anthropic",      short: "an",    icon: Brain,    tag: "Foundation",   tier: "Platform",    gradient: "from-[#D97757] via-[#b05f42] to-[#1a0d07]" },
  { name: "Databricks",     short: "db",    icon: Database, tag: "Data · ML",    tier: "Elite",       gradient: "from-[#FF3621] via-[#c72a17] to-[#2b0907]" },
  { name: "Snowflake",      short: "sn",    icon: Snowflake,tag: "Data",         tier: "Select",      gradient: "from-[#29B5E8] via-[#1b8cba] to-[#0b2e3f]" },
  { name: "HuggingFace",    short: "hf",    icon: Smile,    tag: "Models",       tier: "Partner",     gradient: "from-[#FFD21E] via-[#ffb800] to-[#6b4d00]" },
  { name: "Pinecone",       short: "pc",    icon: CircleDot,tag: "Vector DB",    tier: "Partner",     gradient: "from-[#003F3F] via-[#116a6a] to-[#062626]" },
  { name: "LangChain",      short: "lc",    icon: Link2,    tag: "Framework",    tier: "Partner",     gradient: "from-[#1C3C3C] via-[#2a6a5b] to-[#0b1a15]" },
  { name: "LlamaIndex",     short: "li",    icon: BookOpen, tag: "Framework",    tier: "Partner",     gradient: "from-[#ff84a6] via-[#b94a79] to-[#2a0e1e]" },
];

export default function WoroAIPartners() {
  return (
    <section className="relative section-light py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
      <div className="absolute -top-20 right-10 w-[36rem] h-[36rem] rounded-full bg-brand/10 blur-[140px]" />
      <div className="absolute -bottom-20 left-10 w-[36rem] h-[36rem] rounded-full bg-blue/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Strategic technology partnerships
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
              Partnered with the<br />
              <span className="font-serif-italic gradient-text">
                AI platforms you already run on.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Advanced-tier partnerships with the clouds, model providers and vector stores
              enterprises actually deploy — no vendor lock-in theatre.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((p, i) => (
            <PartnerCard key={p.name} partner={p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner, delay }: { partner: Partner; delay: number }) {
  const Icon = partner.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-line bg-white overflow-hidden hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_30px_60px_-25px_rgba(10,10,10,0.25)] transition-all duration-500"
    >
      {/* Brand gradient header */}
      <div
        className={`relative h-24 bg-gradient-to-br ${partner.gradient} overflow-hidden`}
      >
        <div aria-hidden className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
        <div
          aria-hidden
          className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Monogram — large ghost letters */}
        <div
          aria-hidden
          className="absolute -right-2 -bottom-5 font-display font-black text-[6rem] leading-none tracking-[-0.08em] text-white/10 uppercase select-none"
        >
          {partner.short}
        </div>

        {/* Icon medallion */}
        <div className="relative h-full p-4 flex items-start">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <div className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur border border-white/25 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white">
            <span className="w-1 h-1 rounded-full bg-white" />
            {partner.tier}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-4 sm:p-5">
        <div className="font-display font-medium text-base sm:text-lg tracking-tight text-ink leading-tight">
          {partner.name}
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
          {partner.tag}
        </div>
      </div>
    </motion.div>
  );
}
