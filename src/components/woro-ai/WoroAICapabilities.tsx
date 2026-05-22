"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Layers,
  Network,
  Sparkles,
  Palette,
  Brain,
  LineChart,
  Workflow,
  Wrench,
  ArrowUpRight,
  Check,
  Pause,
  Play,
} from "lucide-react";

type Capability = {
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  short: string;
  items: string[];
  accent: string;
};

const capabilities: Capability[] = [
  {
    num: "01",
    icon: Target,
    title: "AI Strategy & Advisory",
    short: "Readiness, ROI, responsible framework",
    items: ["Readiness assessment", "Responsible AI framework", "CoE setup", "Cost & ROI modeling"],
    accent: "from-violet-400 to-indigo-500",
  },
  {
    num: "02",
    icon: Layers,
    title: "AI-as-a-Service",
    short: "APIs, voice, vision, prediction",
    items: ["LLM integration", "Vision-as-a-Service", "Voice AI agents", "Predictive analytics APIs"],
    accent: "from-sky-400 to-blue-500",
  },
  {
    num: "03",
    icon: Network,
    title: "AI Platform Engineering",
    short: "LangChain, vector DBs, agentic runtimes",
    items: ["LangChain & LangGraph", "Multi-model orchestration", "Vector DB integration", "Agentic runtimes"],
    accent: "from-indigo-400 to-blue-500",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Generative AI & LLMs",
    short: "Fine-tuning, RAG, copilots, agents",
    items: ["Custom LLM fine-tuning", "RAG systems", "AI copilots", "Autonomous agent swarms"],
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    num: "05",
    icon: Palette,
    title: "AI for UI/UX",
    short: "Personalization, sentiment, generative UI",
    items: ["UX personalization", "Behavioral insights", "Sentiment-adaptive surfaces", "Generative interfaces"],
    accent: "from-pink-400 to-fuchsia-500",
  },
  {
    num: "06",
    icon: Brain,
    title: "Machine Learning",
    short: "Recommendations, NLP, vision, serving",
    items: ["Recommendation systems", "NLP & NLU", "Computer vision", "Model deployment & serving"],
    accent: "from-violet-400 to-pink-500",
  },
  {
    num: "07",
    icon: LineChart,
    title: "Data Science & Analytics",
    short: "Forecasting, segmentation, big data",
    items: ["Predictive analytics", "Forecasting & demand planning", "Customer segmentation", "Big data pipelines"],
    accent: "from-cyan-400 to-sky-500",
  },
  {
    num: "08",
    icon: Workflow,
    title: "AI-Enabled Automation",
    short: "RPA, workflows, smart bots",
    items: ["RPA with AI agents", "Workflow automation", "Smart chat/voice bots", "Automated QA & testing"],
    accent: "from-emerald-400 to-teal-500",
  },
  {
    num: "09",
    icon: Wrench,
    title: "AI DevOps & MLOps",
    short: "Lifecycle, CI/CD, observability",
    items: ["Model lifecycle management", "CI/CD for AI", "AIOps & observability", "Feature stores"],
    accent: "from-blue-400 to-indigo-500",
  },
];

const AUTO_MS = 3200;

export default function WoroAICapabilities() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((n) => (n + 1) % capabilities.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Auto-scroll the horizontal rail to keep the active card centered
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement | undefined;
    if (!card) return;
    const offset =
      card.offsetLeft - track.clientWidth / 2 + card.clientWidth / 2;
    track.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  const current = capabilities[active];

  return (
    <section
      id="ai-services"
      className="relative bg-white py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Capabilities · AI services portfolio
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
              Nine AI disciplines.<br />
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
                One senior team.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Mix-and-match or engage the whole portfolio for a full-stack transformation.
              Every discipline staffed by engineers who have shipped it in production.
            </p>
          </div>
        </div>

        {/* Stage — detailed view of active capability */}
        <div className="relative rounded-[2rem] overflow-hidden border border-line bg-white shadow-[0_30px_80px_-40px_rgba(10,10,10,0.15)]">
          {/* Gradient wash + pastel blobs, tone-shifts per capability */}
          <div
            aria-hidden
            className={`absolute inset-0 bg-gradient-to-br ${current.accent} opacity-[0.08] transition-opacity duration-700`}
          />
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-14 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.accent} flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(108,93,252,0.5)]`}
                  >
                    <current.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-medium">
                      {current.num} · Capability
                    </div>
                    <div className="text-sm text-muted mt-0.5">
                      {current.short}
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-medium text-3xl sm:text-[2.4rem] tracking-tight leading-[1.05] text-ink max-w-xl">
                  {current.title}
                </h3>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
                  {current.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-ink/85">
                      <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 rounded-full text-white px-6 py-3 text-sm font-medium overflow-hidden transition-all hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                      boxShadow: "0 14px 34px -14px rgba(108,93,252,0.55)",
                    }}
                  >
                    Explore {current.title.split(" ")[0]}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setPaused((p) => !p)}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 backdrop-blur px-5 py-3 text-sm font-medium text-ink/75 hover:bg-white hover:border-ink/30 transition"
                  >
                    {paused ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Resume
                      </>
                    ) : (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        Pause
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right — big stage number + progress bars */}
            <div className="lg:col-span-5 relative flex flex-col justify-between min-h-[260px]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`num-${current.num}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-display font-black text-[14rem] sm:text-[18rem] leading-none tracking-[-0.08em] bg-gradient-to-br ${current.accent} bg-clip-text text-transparent opacity-40 select-none`}
                  >
                    {current.num}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Progress list */}
              <div className="relative mt-auto space-y-1.5">
                {capabilities.map((c, i) => (
                  <button
                    key={c.num}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group w-full flex items-center gap-3 p-1.5 rounded-lg transition-colors ${
                      i === active ? "bg-soft" : "hover:bg-soft/50"
                    }`}
                  >
                    <span className="text-[10px] font-mono w-8 shrink-0 text-muted">
                      {c.num}
                    </span>
                    <div className="relative flex-1 h-1 rounded-full bg-line overflow-hidden">
                      {i === active && !paused && (
                        <motion.div
                          key={`bar-${i}`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                          className="absolute inset-y-0 left-0"
                          style={{
                            background:
                              "linear-gradient(90deg, #6C5DFC, #2563EB)",
                          }}
                        />
                      )}
                      {i === active && paused && (
                        <div
                          className="absolute inset-y-0 left-0 w-[50%]"
                          style={{
                            background:
                              "linear-gradient(90deg, #6C5DFC, #2563EB)",
                          }}
                        />
                      )}
                      {i < active && (
                        <div
                          className="absolute inset-y-0 left-0 w-full opacity-40"
                          style={{
                            background:
                              "linear-gradient(90deg, #6C5DFC, #2563EB)",
                          }}
                        />
                      )}
                    </div>
                    <span
                      className={`text-[11px] truncate max-w-[130px] transition-colors ${
                        i === active ? "text-ink font-medium" : "text-muted"
                      }`}
                    >
                      {c.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail rail */}
        <div
          ref={trackRef}
          className="mt-6 flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-2"
        >
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.num}
                type="button"
                onClick={() => setActive(i)}
                className={`group shrink-0 w-[200px] sm:w-[240px] text-left rounded-2xl border bg-white p-4 transition-all duration-500 ${
                  i === active
                    ? "border-ink/30 shadow-[0_20px_40px_-20px_rgba(108,93,252,0.3)] -translate-y-0.5"
                    : "border-line hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_20px_40px_-20px_rgba(10,10,10,0.12)]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.accent} flex items-center justify-center shadow-[0_8px_22px_-8px_rgba(108,93,252,0.6)]`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-serif-italic text-xl text-muted">
                    {c.num}
                  </span>
                </div>
                <div className="mt-4 font-display font-medium text-sm tracking-tight text-ink leading-snug">
                  {c.title}
                </div>
                <div className="mt-1 text-[11px] text-muted leading-snug line-clamp-2">
                  {c.short}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
