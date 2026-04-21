"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  Sparkles,
} from "lucide-react";
import { RevealText } from "./AnimatedText";

const services = [
  {
    num: "01",
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    desc: "Pixel-perfect, blazing fast sites built on Next.js. Custom, not themed.",
    tags: ["Next.js", "Headless CMS", "CRO"],
  },
  {
    num: "02",
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    desc: "Custom SaaS and internal tools tailored to your workflows. Shipped fast.",
    tags: ["SaaS", "APIs", "Dashboards"],
  },
  {
    num: "03",
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform apps that users actually open every day.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    num: "04",
    slug: "cloud-management",
    icon: Cloud,
    title: "Cloud Management",
    desc: "AWS, Azure, GCP architecture and 24/7 ops. Cut costs by 30-40%.",
    tags: ["AWS", "Terraform", "FinOps"],
  },
  {
    num: "05",
    slug: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Pen testing, SOC2 prep, zero-trust. Security baked in, not bolted on.",
    tags: ["SOC2", "Pen test", "Zero trust"],
  },
  {
    num: "06",
    slug: "it-infrastructure",
    icon: Server,
    title: "IT Infrastructure",
    desc: "On-prem, hybrid and edge. Resilient networks for 100+ sites.",
    tags: ["Network", "Hybrid", "Edge"],
  },
  {
    num: "07",
    slug: "ai-ml-solutions",
    icon: Brain,
    title: "AI & ML",
    desc: "Custom LLMs, RAG, voice/vision AI. Evals and cost controls included.",
    tags: ["LLMs", "RAG", "ML Ops"],
  },
  {
    num: "08",
    slug: "devops-cicd",
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Pipelines, IaC, observability. Ship 10× a day without the dread.",
    tags: ["GitHub Actions", "K8s", "Observability"],
  },
  {
    num: "09",
    slug: "qa-testing",
    icon: TestTube2,
    title: "QA & Testing",
    desc: "Automated tests, perf suites, security QA. Zero production regressions.",
    tags: ["Playwright", "Load tests", "Security"],
  },
];

export default function StickyServicesShowcase() {
  return (
    <section id="services" className="relative section-light py-28 sm:py-40">
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT — sticky panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
                <span className="w-6 h-px bg-ink/40" />
                Services
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1] tracking-[-0.04em] text-ink">
                <RevealText as="span">nine disciplines.</RevealText>
                <br />
                <span className="font-serif-italic italic">
                  <RevealText as="span" delay={0.12}>one senior team.</RevealText>
                </span>
              </h2>
              <p className="mt-5 text-muted text-[15px] leading-relaxed max-w-md">
                No juniors hiding behind project managers. The people you talk
                to are the people writing the code.
              </p>

              {/* Stat trio */}
              <div className="mt-6 grid grid-cols-3 gap-2.5 max-w-md">
                {[
                  { k: "09", v: "disciplines" },
                  { k: "120+", v: "ships/yr" },
                  { k: "8y", v: "senior avg" },
                ].map((s, i) => (
                  <motion.div
                    key={s.k}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="rounded-xl bg-white border border-line px-3 py-2 text-left"
                  >
                    <div className="font-display font-medium text-lg text-ink tracking-tight leading-none">{s.k}</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted mt-1">{s.v}</div>
                  </motion.div>
                ))}
              </div>

              {/* Animated disciplines orbit */}
              <div className="mt-6 relative aspect-[4/3] max-w-sm rounded-3xl overflow-hidden border border-line bg-gradient-to-br from-soft via-white to-brand/5">
                <div className="absolute inset-0 mesh opacity-60" />
                <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />

                {/* rotating rings */}
                <motion.div
                  className="absolute inset-6 rounded-full border border-ink/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  {services.slice(0, 6).map((s, i) => {
                    const angle = (i / 6) * 360;
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.slug}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `rotate(${angle}deg) translateY(-45%) rotate(-${angle}deg)` }}
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                          className="w-10 h-10 rounded-xl bg-white border border-line shadow-[0_6px_20px_-8px_rgba(10,10,10,0.15)] flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-ink" />
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
                <motion.div
                  className="absolute inset-20 rounded-full border border-brand/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                >
                  {services.slice(6, 9).map((s, i) => {
                    const angle = (i / 3) * 360;
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.slug}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `rotate(${angle}deg) translateY(-45%) rotate(-${angle}deg)` }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                          className="w-9 h-9 rounded-xl bg-ink text-white border border-ink flex items-center justify-center"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* center badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 blur-2xl bg-brand/35 rounded-full" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-brand to-blue text-white flex flex-col items-center justify-center shadow-[0_30px_60px_-20px_rgba(108,93,252,0.5)]">
                      <Sparkles className="w-4 h-4 mb-1" />
                      <div className="font-display font-bold text-xl leading-none">09</div>
                      <div className="text-[9px] uppercase tracking-[0.2em] mt-1 text-white/80">services</div>
                    </div>
                  </motion.div>
                </div>

                {/* corner markers */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
                </div>
                <div className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.22em] text-muted">
                  end-to-end
                </div>
                <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.22em] text-muted">
                  woro.global
                </div>
                <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.22em] text-brand">
                  · live
                </div>
              </div>

              <Link
                href="/services"
                data-cursor-label="All"
                className="mt-6 inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition self-start"
              >
                View all services
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT — scrolling list */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    data-cursor-label="Open"
                    className="group block rounded-3xl border border-line bg-white p-7 sm:p-8 hover:border-ink/50 hover:bg-soft transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-brand/10 to-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative flex items-start gap-6">
                      <div className="font-serif-italic text-3xl text-muted shrink-0 w-12">
                        {s.num}
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center shrink-0 group-hover:bg-ink group-hover:border-ink transition">
                        <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-medium text-2xl sm:text-3xl tracking-tight text-ink">
                          {s.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted mt-2 leading-relaxed">
                          {s.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-soft border border-line text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-11 h-11 rounded-full border border-line flex items-center justify-center shrink-0 group-hover:bg-ink group-hover:border-ink group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4 text-ink group-hover:text-white" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
