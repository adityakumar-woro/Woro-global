"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Server,
  Brain,
  GitBranch,
  TestTube2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { RevealText } from "./AnimatedText";

type Service = {
  num: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  stat: { k: string; v: string };
  tags: string[];
  image: string;
  tone: string;
};

const services: Service[] = [
  {
    num: "01",
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline: "Next-gen marketing sites",
    desc: "Pixel-perfect, blazing-fast marketing sites and web apps built on Next.js with a custom design system — no themed templates.",
    features: ["Next.js · App Router", "Headless CMS integration", "Lighthouse 95+ scores", "CRO & A/B tooling"],
    stat: { k: "600ms", v: "Avg. page load" },
    tags: ["Next.js", "Headless CMS", "CRO"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=85&auto=format&fit=crop",
    tone: "from-violet-500/70 to-indigo-600/70",
  },
  {
    num: "02",
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    tagline: "Custom enterprise apps",
    desc: "SaaS platforms, internal tools and workflow engines tailored to how your team actually operates — shipped in sprints.",
    features: ["Multi-tenant SaaS", "GraphQL / REST APIs", "Real-time dashboards", "Event-driven workflows"],
    stat: { k: "10×", v: "Faster ops" },
    tags: ["SaaS", "APIs", "Dashboards"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1400&q=85&auto=format&fit=crop",
    tone: "from-blue-500/70 to-sky-600/70",
  },
  {
    num: "03",
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "iOS · Android · cross-platform",
    desc: "Native and cross-platform apps users actually open every day — offline-first, tuned for the App Store and Play Store.",
    features: ["Swift & Kotlin native", "React Native & Flutter", "Push + deep links", "Release-lane CI/CD"],
    stat: { k: "4.8★", v: "Avg. store rating" },
    tags: ["iOS", "Android", "React Native"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85&auto=format&fit=crop",
    tone: "from-pink-500/70 to-fuchsia-600/70",
  },
  {
    num: "04",
    slug: "cloud-management",
    icon: Cloud,
    title: "Cloud Management",
    tagline: "AWS · Azure · GCP",
    desc: "Architecture, migration and 24/7 operations across multi-cloud — with cost controls baked in from day one.",
    features: ["Multi-cloud architecture", "Terraform + IaC", "Cost & FinOps dashboards", "24/7 on-call ops"],
    stat: { k: "−38%", v: "Cloud spend" },
    tags: ["AWS", "Terraform", "FinOps"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=85&auto=format&fit=crop",
    tone: "from-sky-500/70 to-blue-600/70",
  },
  {
    num: "05",
    slug: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    tagline: "Security baked in",
    desc: "Pen testing, SOC2 readiness and zero-trust rollouts — we model threats before they hit prod, not after.",
    features: ["Offensive pen testing", "SOC2 / ISO 27001 prep", "Zero-trust rollouts", "Threat modelling"],
    stat: { k: "0", v: "Critical findings" },
    tags: ["SOC2", "Pen test", "Zero trust"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=85&auto=format&fit=crop",
    tone: "from-emerald-500/70 to-teal-600/70",
  },
  {
    num: "06",
    slug: "it-infrastructure",
    icon: Server,
    title: "IT Infrastructure",
    tagline: "On-prem · hybrid · edge",
    desc: "Resilient networks and compute for 100+ distributed sites — retail, healthcare, logistics — delivered turnkey.",
    features: ["Network design & rollout", "Hybrid-cloud bridging", "Edge compute for retail", "Site-to-site SD-WAN"],
    stat: { k: "100+", v: "Sites shipped" },
    tags: ["Network", "Hybrid", "Edge"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&auto=format&fit=crop",
    tone: "from-indigo-500/70 to-violet-600/70",
  },
  {
    num: "07",
    slug: "ai-ml-solutions",
    icon: Brain,
    title: "AI & ML",
    tagline: "LLMs · RAG · voice · vision",
    desc: "Custom language models, retrieval-augmented copilots and vision pipelines — with evals and cost controls built in.",
    features: ["Custom fine-tuning", "RAG & agent runtimes", "Vision + voice pipelines", "Evals & guardrails"],
    stat: { k: "40+", v: "AI systems live" },
    tags: ["LLMs", "RAG", "ML Ops"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=85&auto=format&fit=crop",
    tone: "from-violet-500/70 to-fuchsia-600/70",
  },
  {
    num: "08",
    slug: "devops-cicd",
    icon: GitBranch,
    title: "DevOps & CI/CD",
    tagline: "Ship 10× a day",
    desc: "Pipelines, IaC and observability so your team ships ten times a day without the Friday-afternoon dread.",
    features: ["GitHub Actions pipelines", "K8s + Argo rollouts", "Telemetry & SLOs", "Blue/green deploys"],
    stat: { k: "10×/day", v: "Deploy frequency" },
    tags: ["GitHub Actions", "K8s", "Observability"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1400&q=85&auto=format&fit=crop",
    tone: "from-orange-500/70 to-amber-500/70",
  },
  {
    num: "09",
    slug: "qa-testing",
    icon: TestTube2,
    title: "QA & Testing",
    tagline: "Zero regressions",
    desc: "Automated suites, load testing and security QA — catching regressions before they ever reach production.",
    features: ["Playwright E2E", "Load + perf benchmarks", "Security QA sweeps", "Visual regression"],
    stat: { k: "0", v: "Prod regressions" },
    tags: ["Playwright", "Load tests", "Security"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=85&auto=format&fit=crop",
    tone: "from-cyan-500/70 to-teal-600/70",
  },
];

const AUTO_MS = 4200;

export default function StickyServicesShowcase() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-advance unless the user is hovering the component
  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => setActive((n) => (n + 1) % services.length), AUTO_MS);
    return () => clearInterval(id);
  }, [hovered]);

  // Note: no auto-scroll here — `scrollIntoView` on the active tile would
  // yank the entire page back to this section every auto-advance tick,
  // which looks like the page "jumping back up" when the user scrolls past.
  // The rail scrolls its own container naturally when the user hovers; we
  // don't force viewport scrolling.

  const current = services[active];
  const Icon = current.icon;

  return (
    <section
      id="services"
      className="relative section-light py-20 sm:py-28 md:py-40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div
        aria-hidden
        className="absolute -top-40 -left-20 w-[36rem] h-[36rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Services
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.6rem)] tracking-tight leading-[1.02] text-ink">
              <RevealText as="span">Nine disciplines,</RevealText>
              <br />
              <span
                className="font-serif-italic italic"
                style={{
                  background:
                    "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <RevealText as="span" delay={0.12}>one senior team.</RevealText>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-[15px] leading-relaxed max-w-md">
              The people you talk to are the people writing the code. Hover any discipline
              to preview the work; leave the cursor alone and the showcase advances on its own.
            </p>
          </div>
        </div>

        {/* Main grid: left preview + right rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* LEFT — big cinematic preview */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden border border-line bg-white shadow-[0_40px_80px_-40px_rgba(10,10,10,0.25)]">
              {/* Image stage */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.slug}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={`${current.title} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                      priority={active === 0}
                    />
                    <div
                      aria-hidden
                      className={`absolute inset-0 bg-gradient-to-br ${current.tone} mix-blend-multiply`}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(10,10,10,0.12) 0%, transparent 40%, rgba(10,10,10,0.72) 100%)",
                      }}
                    />
                    <div aria-hidden className="absolute inset-0 noise opacity-25 mix-blend-overlay" />
                  </motion.div>
                </AnimatePresence>

                {/* Top-left: live pill */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white">
                  <Icon className="w-3 h-3" />
                  {current.tagline}
                </div>

                {/* Top-right: discipline number */}
                <div className="absolute top-5 right-5 font-serif-italic text-3xl text-white/80 select-none">
                  {current.num}
                </div>

                {/* Bottom content */}
                <div className="absolute left-0 right-0 bottom-0 p-6 sm:p-8 text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`title-${current.slug}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
                        {current.title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  {/* Stat ribbon */}
                  <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 pl-3 pr-4 py-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`stat-${current.slug}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.4 }}
                        className="font-display font-medium text-base tracking-tight"
                      >
                        {current.stat.k}
                      </motion.span>
                    </AnimatePresence>
                    <span className="w-px h-3 bg-white/25" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/80">
                      {current.stat.v}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="relative p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`body-${current.slug}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p className="text-muted text-[15px] sm:text-base leading-relaxed max-w-xl">
                      {current.desc}
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {current.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-ink/85">
                          <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-line flex flex-wrap items-center gap-3 justify-between">
                      <div className="flex flex-wrap gap-2">
                        {current.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-soft border border-line text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/services/${current.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-brand transition"
                      >
                        Explore {current.title.split(" ")[0]}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT — discipline rail */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div
              ref={listRef}
              className="space-y-2 lg:sticky lg:top-28 max-h-none lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-1 no-scrollbar"
            >
              {services.map((s, i) => (
                <ServiceRow
                  key={s.slug}
                  service={s}
                  index={i}
                  active={i === active}
                  paused={hovered}
                  onHover={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
  active,
  paused,
  onHover,
}: {
  service: Service;
  index: number;
  active: boolean;
  paused: boolean;
  onHover: () => void;
}) {
  const Icon = service.icon;
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onFocus={onHover}
      className={`group relative w-full text-left rounded-2xl border p-4 sm:p-5 transition-all duration-500 overflow-hidden ${
        active
          ? "border-ink/30 bg-white shadow-[0_24px_60px_-30px_rgba(108,93,252,0.4)]"
          : "border-line bg-white/70 hover:bg-white hover:border-ink/20"
      }`}
    >
      {/* Active gradient border ring */}
      {active && (
        <div
          aria-hidden
          className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(108,93,252,0.5) 0%, rgba(96,165,250,0.22) 50%, rgba(167,139,250,0.5) 100%)",
            padding: 1,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      <div className="relative flex items-start gap-4">
        <div
          className={`w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center transition ${
            active
              ? "bg-gradient-to-br from-brand to-blue text-white shadow-[0_10px_24px_-10px_rgba(108,93,252,0.6)]"
              : "bg-soft border border-line text-ink group-hover:bg-ink group-hover:text-white group-hover:border-ink"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-serif-italic text-xs text-muted">{service.num}</span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] ${
                active ? "text-brand font-medium" : "text-muted"
              }`}
            >
              {service.tagline}
            </span>
          </div>
          <div className="mt-1 font-display font-medium text-lg sm:text-xl tracking-tight text-ink leading-tight truncate">
            {service.title}
          </div>
        </div>
        <span
          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            active
              ? "bg-ink text-white rotate-45"
              : "border border-line text-ink group-hover:border-ink/40"
          }`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>

      {/* Progress bar when active + auto-advancing */}
      <div className="absolute left-5 right-5 bottom-2 h-px rounded-full bg-line overflow-hidden">
        {active && !paused && (
          <motion.div
            key={`bar-${service.slug}`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
            className="h-full"
            style={{
              background: "linear-gradient(90deg, #6C5DFC, #2563EB)",
            }}
          />
        )}
        {active && paused && (
          <div
            className="h-full w-1/2"
            style={{
              background: "linear-gradient(90deg, #6C5DFC, #2563EB)",
            }}
          />
        )}
      </div>
    </motion.button>
  );
}
