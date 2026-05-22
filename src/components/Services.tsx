"use client";

import { motion } from "framer-motion";
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
import SectionHeader from "./SectionHeader";

const services = [
  {
    num: "01",
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    desc: "Pixel-perfect, blazing fast websites built with Next.js and modern stacks.",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    soft: "from-blue-50 via-indigo-50 to-violet-50",
    accent: "text-blue-600",
    tags: ["Next.js", "Headless CMS", "CRO"],
  },
  {
    num: "02",
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    desc: "Custom enterprise software tailored to your unique business workflows.",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    soft: "from-violet-50 via-fuchsia-50 to-pink-50",
    accent: "text-fuchsia-600",
    tags: ["SaaS", "APIs", "Dashboards"],
  },
  {
    num: "03",
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform iOS & Android apps that users love to open.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    soft: "from-emerald-50 via-teal-50 to-cyan-50",
    accent: "text-emerald-600",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    num: "04",
    slug: "cloud-management",
    icon: Cloud,
    title: "Cloud Management",
    desc: "AWS, Azure and GCP architecture, migration and 24/7 cloud operations.",
    gradient: "from-sky-500 via-cyan-500 to-teal-400",
    soft: "from-sky-50 via-cyan-50 to-teal-50",
    accent: "text-sky-600",
    tags: ["AWS", "Terraform", "FinOps"],
  },
  {
    num: "05",
    slug: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity Services",
    desc: "Pen testing, threat detection, compliance audits and zero-trust security.",
    gradient: "from-red-500 via-rose-500 to-orange-500",
    soft: "from-red-50 via-rose-50 to-orange-50",
    accent: "text-red-600",
    tags: ["SOC2", "Pen test", "Zero trust"],
  },
  {
    num: "06",
    slug: "it-infrastructure",
    icon: Server,
    title: "IT Infrastructure",
    desc: "Resilient on-prem and hybrid infrastructure designed for scale and uptime.",
    gradient: "from-slate-600 via-zinc-500 to-stone-400",
    soft: "from-slate-50 via-zinc-50 to-stone-50",
    accent: "text-slate-600",
    tags: ["Network", "Hybrid", "Edge"],
  },
  {
    num: "07",
    slug: "ai-ml-solutions",
    icon: Brain,
    title: "AI & ML Solutions",
    desc: "Custom LLMs, predictive analytics and intelligent automation systems.",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    soft: "from-fuchsia-50 via-purple-50 to-indigo-50",
    accent: "text-purple-600",
    tags: ["LLMs", "RAG", "ML Ops"],
  },
  {
    num: "08",
    slug: "devops-cicd",
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Streamlined pipelines, IaC and observability so you ship faster, safer.",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    soft: "from-orange-50 via-amber-50 to-yellow-50",
    accent: "text-orange-600",
    tags: ["GitHub Actions", "K8s", "Observability"],
  },
  {
    num: "09",
    slug: "qa-testing",
    icon: TestTube2,
    title: "QA & Testing",
    desc: "Automated testing, performance and security QA for bulletproof releases.",
    gradient: "from-lime-500 via-emerald-500 to-teal-500",
    soft: "from-lime-50 via-emerald-50 to-teal-50",
    accent: "text-lime-600",
    tags: ["Playwright", "Load tests", "Security"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-40 section-light overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 grid-mask" />
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-blue/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="What we do"
              title="End-to-end services for ambitious teams"
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Nine disciplines, one senior team. From a single landing page to a
              multi-year platform — we plug into your roadmap and ship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                href={`/services/${s.slug}`}
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-line hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.25)] transition-all duration-500"
              >
                {/* Colorful banner header */}
                <div className={`relative h-36 bg-gradient-to-br ${s.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
                  <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-white/25 blur-3xl" />
                  <div className="absolute inset-0 p-6 flex items-start justify-between text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif-italic text-2xl text-white/90">{s.num}</span>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">service</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((d) => (
                        <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      ))}
                    </div>
                    <Sparkles className="w-4 h-4 text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className={`relative p-7 lg:p-8`}>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.soft} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <h3 className="font-display font-medium text-2xl tracking-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className={`text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-soft border border-line text-muted`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className={`flex items-center justify-between text-sm font-medium ${s.accent}`}>
                      <span>Learn more</span>
                      <span className="w-9 h-9 rounded-full border border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
