import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Brain,
  Cpu,
  Bot,
  Workflow,
  LineChart,
  Palette,
  Network,
  Wrench,
  Layers,
  Check,
  ShieldCheck,
  Rocket,
  Target,
  Zap,
  Database,
  FileCheck2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "WORO AI — Your enterprise AI transformation partner",
  description:
    "Strategy, platform engineering, GenAI, ML, MLOps and responsible AI — end-to-end AI services and in-house AI products for enterprises that want compounding advantage.",
};

const pillars = [
  { title: "We optimize your value chains and business processes", desc: "Map where AI compounds impact — ops, revenue, risk, customer — and ship against it, not against hype." },
  { title: "We cut the cost and complexity of building AI in-house", desc: "Skip 18 months of hiring and infra. Our senior pods plug into your roadmap from week one." },
  { title: "We remove the scaling barriers behind slow AI adoption", desc: "Evals, cost controls, observability and guardrails — built in, not bolted on after pilots stall." },
  { title: "We bring certified expertise to integrate AI into real workflows", desc: "Cloud-native architectures, vector DBs, RAG, agentic systems — deployed into your existing stack." },
];

const services = [
  { num: "01", icon: Target, title: "AI Strategy & Advisory", items: ["AI readiness assessment", "Responsible AI framework", "Center of Excellence setup", "Cost & ROI modeling"], accent: "from-blue-500 via-indigo-500 to-violet-500" },
  { num: "02", icon: Layers, title: "AI-as-a-Service", items: ["LLM integration", "Vision-as-a-Service", "Voice AI agents", "Predictive analytics APIs"], accent: "from-violet-500 via-fuchsia-500 to-pink-500" },
  { num: "03", icon: Network, title: "AI Platform Engineering", items: ["LangChain & LangGraph", "Multi-model orchestration", "Vector DB integration", "Agentic runtimes"], accent: "from-emerald-500 via-teal-500 to-cyan-500" },
  { num: "04", icon: Sparkles, title: "Generative AI & LLMs", items: ["Custom LLM fine-tuning", "RAG systems", "AI copilots", "Autonomous agent swarms"], accent: "from-fuchsia-500 via-purple-500 to-indigo-500" },
  { num: "05", icon: Palette, title: "AI for UI/UX", items: ["UX personalization", "Behavioral insights", "Sentiment-adaptive surfaces", "Generative interfaces"], accent: "from-pink-500 via-rose-500 to-orange-400" },
  { num: "06", icon: Brain, title: "Machine Learning", items: ["Recommendation systems", "NLP & NLU", "Computer vision", "Model deployment & serving"], accent: "from-sky-500 via-cyan-500 to-teal-400" },
  { num: "07", icon: LineChart, title: "Data Science & Analytics", items: ["Predictive analytics", "Forecasting & demand planning", "Customer segmentation", "Big data pipelines"], accent: "from-orange-500 via-amber-500 to-yellow-400" },
  { num: "08", icon: Workflow, title: "AI-Enabled Automation", items: ["RPA with AI agents", "Workflow automation", "Smart chat/voice bots", "Automated QA & testing"], accent: "from-lime-500 via-emerald-500 to-teal-500" },
  { num: "09", icon: Wrench, title: "AI DevOps & MLOps", items: ["Model lifecycle management", "CI/CD for AI", "AIOps & observability", "Feature stores"], accent: "from-red-500 via-rose-500 to-fuchsia-500" },
];

const partners = [
  "AWS", "Microsoft Azure", "Google Cloud", "NVIDIA", "OpenAI",
  "Anthropic", "Databricks", "Snowflake", "HuggingFace", "Pinecone",
  "LangChain", "LlamaIndex",
];

const caseStudies = [
  {
    client: "Gurushala",
    sector: "EdTech",
    problem: "Teachers spent hours writing assessment questions that went stale in weeks.",
    results: ["10× faster question creation", "3× daily active teachers", "92% fewer duplicate items"],
    tone: "from-blue-500 via-indigo-500 to-violet-500",
  },
  {
    client: "Dr. Morepen",
    sector: "Healthcare",
    problem: "Care-team inbox flooded with repetitive patient questions across WhatsApp and web.",
    results: ["80% drop in repeat tickets", "24/7 multilingual triage", "HIPAA-ready deployment"],
    tone: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    client: "Tootle",
    sector: "Travel",
    problem: "Personalization engine couldn't keep up with trip-intent signals across 40 markets.",
    results: ["+35% engagement", "10× faster insight loop", "2× repeat bookings"],
    tone: "from-cyan-500 via-sky-500 to-blue-500",
  },
  {
    client: "Americana",
    sector: "F&B",
    problem: "Order assignment was manual, slow and error-prone across 2,000 kitchens.",
    results: ["Auto-assign 42% → 82%", "28-min avg fulfillment", "INR 4.2Cr saved / yr"],
    tone: "from-red-500 via-orange-500 to-amber-400",
  },
  {
    client: "MyExec",
    sector: "Productivity",
    problem: "Execs wanted a business consultant on tap — not another dashboard to read.",
    results: ["Multi-agent RAG on ECS", "Sub-2s first token", "4.8★ app rating"],
    tone: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    client: "Flynas",
    sector: "Aviation",
    problem: "Booking flow collapsed under non-English queries and edge-case itineraries.",
    results: ["Bookings +28%", "Support cost −41%", "7 languages at launch"],
    tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
  },
];

const philosophy = [
  {
    num: "01",
    icon: Target,
    title: "Business-first strategy",
    desc: "We don't start with models — we start with P&L. Every engagement maps AI spend to a measurable business lever before a line of code ships.",
  },
  {
    num: "02",
    icon: Rocket,
    title: "Pragmatic, scalable implementation",
    desc: "Cloud-native architectures, evals from day one, cost-aware inference. What we hand over is a maintainable enterprise asset, not a demo.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Responsible AI & governance",
    desc: "Trust is non-negotiable. We ship with privacy, bias mitigation, audit trails and regulatory alignment (GDPR, HIPAA, SOC2) from prototype onward.",
  },
];

const awards = [
  "AWS Advanced Partner · 2025",
  "Deloitte Fast 50 · 2024",
  "Clutch Top AI Developers · 2025",
  "Statista High-Growth APAC · 2025",
  "ISO 27001 Certified",
  "SOC2 Type II",
  "G2 Leader · AI Services",
  "GPTW Certified · 2025",
];

const posts = [
  {
    cat: "Agents",
    title: "How to choose the right AI agent framework in 2026",
    read: "8 min",
    tone: "from-blue-50 to-indigo-50",
  },
  {
    cat: "GenAI",
    title: "25 enterprise GenAI use cases we actually saw ship this year",
    read: "11 min",
    tone: "from-fuchsia-50 to-violet-50",
  },
  {
    cat: "MLOps",
    title: "The eval-first playbook: why 85% of AI pilots never reach prod",
    read: "6 min",
    tone: "from-emerald-50 to-teal-50",
  },
];

export default function WoroAIPage() {
  return (
    <>
      <PageHero
        eyebrow="WORO AI"
        title="Your one-stop AI partner"
        italic="for business transformation."
        crumbs={[{ label: "Home", href: "/" }, { label: "WORO AI" }]}
        subtitle="Strategy, platform engineering, GenAI, MLOps and responsible AI — end-to-end AI services plus in-house products that ship measurable ROI, not slideware."
      />

      {/* Client strip */}
      <section className="relative section-light py-10 border-y border-line overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted shrink-0">
            Trusted by teams at
          </div>
          <div className="flex-1 relative overflow-hidden">
            <div className="marquee gap-14 text-muted">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="font-display font-medium text-lg tracking-tight whitespace-nowrap"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we solve */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="absolute -top-20 -left-20 w-[32rem] h-[32rem] rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] rounded-full bg-blue/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                How we solve it
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                How we solve<br />
                <span className="font-serif-italic">your enterprise AI dilemma.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                An industry-first approach: tailored AI services combined with
                productized WORO Voice, Chat and UGC — so value compounds across
                channels, not just pilots.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-white border border-line p-7 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,10,10,0.2)] transition-all duration-500"
              >
                <div className="font-display font-medium text-5xl text-brand/30 tracking-tight leading-none mb-6">
                  0{i + 1}
                </div>
                <h3 className="font-display font-medium text-lg tracking-tight leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services portfolio */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                AI services portfolio
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Custom AI digital engineering,<br />
                <span className="font-serif-italic">built for your stack.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Nine AI disciplines under one senior team — mix and match, or
                engage the whole portfolio for a full-stack transformation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.num}
                  href="#contact"
                  className="group relative rounded-3xl overflow-hidden bg-white border border-line hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.25)] transition-all duration-500"
                >
                  <div className={`relative h-32 bg-gradient-to-br ${s.accent} overflow-hidden`}>
                    <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/25 blur-3xl" />
                    <div className="relative p-6 flex items-start justify-between text-white h-full">
                      <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="font-display font-black text-5xl leading-none text-white/25 select-none">
                        {s.num}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-medium text-xl tracking-tight mb-4">
                      {s.title}
                    </h3>
                    <ul className="space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-muted leading-snug">
                          <Check className="w-3.5 h-3.5 text-brand mt-0.5 shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-sm font-medium text-ink">
                      <span>Explore {s.title.split(" ")[0]}</span>
                      <ArrowUpRight className="w-4 h-4 arrow-fly" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stat callout */}
      <section className="relative section-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-60" />
        <div className="absolute -top-24 left-1/3 w-[40rem] h-[40rem] rounded-full bg-brand/40 blob" />
        <div className="absolute -bottom-24 right-1/3 w-[40rem] h-[40rem] rounded-full bg-blue/35 blob" style={{ animationDelay: "4s" }} />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="rounded-[2.5rem] border border-white/15 bg-white/[0.04] backdrop-blur-xl p-10 sm:p-16 text-white overflow-hidden noise">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 pulse-badge" />
                  The hard truth
                </div>
                <h2 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight">
                  <span className="text-white">85%</span>{" "}
                  <span className="text-white/75">of enterprise AI projects fail</span>{" "}
                  <span className="font-serif-italic text-white/85">because of poor data readiness.</span>
                </h2>
                <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
                  Stop guessing whether your infra, data and ops can carry an AI roadmap.
                  Get a free readiness report — scored against 40+ real-world production gates.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary btn-on-dark">
                    Get your readiness report
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#ai-services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                  >
                    See what's possible
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: "40+", v: "Production gates scored" },
                    { k: "24h", v: "Turnaround time" },
                    { k: "6 yrs", v: "AI delivery avg" },
                    { k: "0", v: "Sales-pitch slides" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
                      <div className="font-display font-medium text-4xl tracking-tight leading-none">{s.k}</div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/60 mt-2">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech partnerships */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Strategic technology partnerships
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Partnered with the<br />
                <span className="font-serif-italic">AI platforms you already run on.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Advanced tier partnerships with the clouds, model providers and
                vector stores enterprises actually deploy — no vendor lock-in theatre.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {partners.map((p) => (
              <div
                key={p}
                className="relative bg-white p-6 min-h-[110px] flex items-center justify-center text-center group hover:bg-gradient-to-br hover:from-brand/5 hover:to-blue/5 transition-all duration-500"
              >
                <span className="font-display font-medium tracking-tight text-ink/80 group-hover:text-ink transition">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="ai-cases" className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Success stories
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                AI that drives<br />
                <span className="font-serif-italic">real enterprise impact.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Six of the 40+ AI systems we've put into production in the last
                18 months — every one measured against a revenue, cost or risk metric.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((c) => (
              <article
                key={c.client}
                className="group relative rounded-3xl bg-white border border-line overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.25)] transition-all duration-500"
              >
                <div className={`relative h-36 bg-gradient-to-br ${c.tone} overflow-hidden`}>
                  <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/25 blur-2xl" />
                  <div className="relative p-6 text-white h-full flex flex-col justify-between">
                    <div className="inline-flex self-start items-center gap-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                      {c.sector}
                    </div>
                    <div className="font-display font-medium text-3xl tracking-tight leading-none">
                      {c.client}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted leading-relaxed italic">
                    &ldquo;{c.problem}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 flex-1">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-5 pt-4 border-t border-line inline-flex items-center justify-between text-sm font-medium text-ink"
                  >
                    <span>Read the case study</span>
                    <ArrowUpRight className="w-4 h-4 arrow-fly" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section className="relative section-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-60" />
        <div className="absolute inset-0 grid-bg-dark opacity-40 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
                <span className="w-6 h-px bg-white/40" />
                The WORO AI philosophy
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-white">
                Three principles.<br />
                <span className="font-serif-italic text-white/85">Every engagement.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Why teams pick WORO over a consulting shop or a one-model vendor —
                the load-bearing beliefs that shape how we design, ship and operate AI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophy.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="relative rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-8 overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
                >
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand/30 blur-3xl opacity-0 hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-serif-italic text-2xl text-white/50">{p.num}</span>
                    </div>
                    <h3 className="font-display font-medium text-2xl tracking-tight text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech / capability stack */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Capability stack
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                A full-stack<br />
                <span className="font-serif-italic">AI delivery team.</span>
              </h2>
              <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-md">
                Model engineers, platform engineers, MLOps, eval specialists, AI
                designers and AI PMs — the roles real AI systems need, under one roof.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition"
              >
                Assemble a pod
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "Model layer", tags: ["GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral"] },
                { icon: Database, title: "Data & vector", tags: ["Pinecone", "Weaviate", "Postgres/pgvector", "S3", "Snowflake"] },
                { icon: Network, title: "Orchestration", tags: ["LangChain", "LangGraph", "LlamaIndex", "Temporal"] },
                { icon: Bot, title: "Agents & tools", tags: ["Function calling", "RAG", "Multi-agent", "Browser use"] },
                { icon: FileCheck2, title: "Evals & guardrails", tags: ["Braintrust", "Ragas", "Guardrails AI", "Custom evals"] },
                { icon: Zap, title: "Serving & infra", tags: ["vLLM", "SageMaker", "Vertex AI", "Bedrock", "Kubernetes"] },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="rounded-3xl bg-white border border-line p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,10,10,0.15)] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-soft border border-line flex items-center justify-center">
                        <Icon className="w-5 h-5 text-ink" />
                      </div>
                      <div className="font-display font-medium text-lg tracking-tight">{c.title}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-soft border border-line text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (reuse existing component) */}
      <Testimonials />

      {/* Awards / recognition */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Industry recognition
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Recognized by the people<br />
                <span className="font-serif-italic">who count AI wins.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Independent analysts, cloud partners and review platforms —
                each benchmark earned on shipped outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {awards.map((a) => (
              <div
                key={a}
                className="rounded-2xl bg-white border border-line p-6 flex items-start gap-3 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,10,10,0.15)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand/15 to-blue/15 border border-line flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-brand" />
                </div>
                <span className="text-sm font-medium text-ink leading-snug">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                The WORO AI knowledge centre
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Cut through the AI noise.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Long-form field notes from production AI — what compounds, what doesn't,
                and what we'd do differently at 10× the scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((p) => (
              <Link
                key={p.title}
                href="/knowledge"
                className="group rounded-3xl border border-line bg-white overflow-hidden hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.2)] transition-all"
              >
                <div className={`relative h-44 bg-gradient-to-br ${p.tone}`}>
                  <div className="absolute inset-0 noise opacity-40" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full bg-white/70 backdrop-blur border border-white/40 text-ink/70">
                    {p.cat}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-medium text-xl tracking-tight leading-snug group-hover:text-brand transition">
                    {p.title}
                  </h3>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted">
                    {p.read} read
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition"
            >
              Browse all AI field notes
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
