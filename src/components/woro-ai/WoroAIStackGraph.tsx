"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Network,
  Bot,
  FileCheck2,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const nodes = [
  {
    id: "model",
    icon: Cpu,
    title: "Model layer",
    tags: ["GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral"],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=85&auto=format&fit=crop",
    alt: "AI chip close-up",
    tone: "from-violet-400/60 to-indigo-500/60",
  },
  {
    id: "data",
    icon: Database,
    title: "Data & vector",
    tags: ["Pinecone", "Weaviate", "pgvector", "Snowflake"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85&auto=format&fit=crop",
    alt: "Data center servers",
    tone: "from-sky-400/60 to-cyan-500/60",
  },
  {
    id: "orch",
    icon: Network,
    title: "Orchestration",
    tags: ["LangChain", "LangGraph", "LlamaIndex"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=85&auto=format&fit=crop",
    alt: "Global network connections",
    tone: "from-indigo-400/60 to-blue-500/60",
  },
  {
    id: "agents",
    icon: Bot,
    title: "Agents & tools",
    tags: ["Function calling", "RAG", "Multi-agent"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=85&auto=format&fit=crop",
    alt: "Circuit board glowing with data",
    tone: "from-fuchsia-400/60 to-purple-500/60",
  },
  {
    id: "evals",
    icon: FileCheck2,
    title: "Evals & guardrails",
    tags: ["Braintrust", "Ragas", "Guardrails AI"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=85&auto=format&fit=crop",
    alt: "Secure network visualization",
    tone: "from-emerald-400/60 to-teal-500/60",
  },
  {
    id: "serve",
    icon: Zap,
    title: "Serving & infra",
    tags: ["vLLM", "SageMaker", "Vertex AI", "Bedrock"],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=85&auto=format&fit=crop",
    alt: "Server racks in motion",
    tone: "from-sky-400/60 to-blue-500/60",
  },
];

export default function WoroAIStackGraph() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 w-[40rem] h-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-1/4 w-[40rem] h-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — sticky copy */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Capability stack
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.6rem)] tracking-tight leading-[1.02] text-ink">
              A full-stack<br />
              <span
                className="font-serif-italic"
                style={{
                  background:
                    "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                AI delivery team.
              </span>
            </h2>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-sm">
              Model engineers, platform engineers, MLOps, eval specialists, AI designers
              and AI PMs — every layer of the modern AI stack, staffed under one roof.
            </p>

            {/* Pod stat */}
            <div className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_-4px_rgba(10,10,10,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{
                        background: [
                          "linear-gradient(135deg,#6C5DFC,#4F46E5)",
                          "linear-gradient(135deg,#A78BFA,#6C5DFC)",
                          "linear-gradient(135deg,#60A5FA,#2563EB)",
                          "linear-gradient(135deg,#818cf8,#60A5FA)",
                        ][i],
                      }}
                    />
                  ))}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  6 senior pods live today
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition"
            >
              Assemble a pod
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right — node cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nodes.map((n, i) => (
              <StackNode key={n.id} node={n} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackNode({
  node,
  index,
}: {
  node: (typeof nodes)[number];
  index: number;
}) {
  const Icon = node.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden border border-line bg-white hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(108,93,252,0.35)] transition-all duration-500"
    >
      {/* Gradient border on hover */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(108,93,252,0.45) 0%, rgba(96,165,250,0.18) 50%, rgba(167,139,250,0.45) 100%)",
          padding: 1,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Image header */}
      <div className="relative h-32 sm:h-36 overflow-hidden">
        <Image
          src={node.image}
          alt={node.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${node.tone} mix-blend-multiply`}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.55) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 noise opacity-25 mix-blend-overlay" />

        <motion.span
          aria-hidden
          animate={{ scale: [1, 1.5, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white"
          style={{ boxShadow: "0 0 16px rgba(255,255,255,0.95)" }}
        />

        <div className="relative h-full p-4 flex items-end">
          <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Hover glow halo */}
      <div
        aria-hidden
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,93,252,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Body */}
      <div className="relative p-5 sm:p-6 bg-white">
        <div className="font-display font-medium text-lg text-ink tracking-tight mb-4">
          {node.title}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {node.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-soft border border-line text-muted group-hover:border-brand/30 group-hover:text-ink transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
