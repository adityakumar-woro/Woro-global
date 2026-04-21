import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import CTABanner from "@/components/CTABanner";
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
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — WORO Global",
  description:
    "Nine end-to-end services from a senior team. Web, software, mobile, cloud, security, AI, DevOps, infrastructure and QA.",
};

const detailed = [
  {
    num: "01",
    icon: Globe,
    title: "Website Development",
    desc: "Pixel-perfect, blazing fast marketing sites and complex web platforms built with Next.js, Astro and modern stacks.",
    deliverables: ["Marketing websites", "Headless CMS", "Conversion optimization", "Web performance"],
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    accent: "text-blue-600",
    tagline: "Sites that score 100/100 and convert",
  },
  {
    num: "02",
    icon: Code2,
    title: "Software Development",
    desc: "Custom enterprise software tailored to your unique workflows — from internal tools to multi-tenant SaaS platforms.",
    deliverables: ["SaaS platforms", "Internal tools", "Admin dashboards", "API design"],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    accent: "text-fuchsia-600",
    tagline: "From spec to shipped in 12 weeks",
  },
  {
    num: "03",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native iOS and Android apps as well as cross-platform builds with React Native and Flutter.",
    deliverables: ["iOS / Swift", "Android / Kotlin", "React Native", "Flutter"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "text-emerald-600",
    tagline: "4.8★ average store rating",
  },
  {
    num: "04",
    icon: Cloud,
    title: "Cloud Management",
    desc: "AWS, Azure and GCP architecture, migration and 24/7 cloud operations with full observability.",
    deliverables: ["Cloud architecture", "Lift & shift", "FinOps", "24/7 ops"],
    gradient: "from-sky-500 via-cyan-500 to-teal-400",
    accent: "text-sky-600",
    tagline: "30–40% average cloud bill reduction",
  },
  {
    num: "05",
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Pen testing, threat detection, compliance audits and zero-trust security baked into every release.",
    deliverables: ["Pen testing", "SOC2 readiness", "Zero trust", "Threat hunting"],
    gradient: "from-red-500 via-rose-500 to-orange-500",
    accent: "text-red-600",
    tagline: "SOC2 & ISO 27001 ready in 90 days",
  },
  {
    num: "06",
    icon: Server,
    title: "IT Infrastructure",
    desc: "Resilient on-prem and hybrid infrastructure designed for scale, uptime and predictable cost.",
    deliverables: ["Network design", "Hybrid cloud", "Edge computing", "Disaster recovery"],
    gradient: "from-slate-600 via-zinc-500 to-stone-400",
    accent: "text-slate-600",
    tagline: "99.99% uptime across 100+ sites",
  },
  {
    num: "07",
    icon: Brain,
    title: "AI & ML Solutions",
    desc: "Custom LLMs, predictive analytics, RAG pipelines and intelligent automation systems.",
    deliverables: ["Custom LLM apps", "RAG pipelines", "ML models", "Voice & vision AI"],
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    accent: "text-purple-600",
    tagline: "Production evals, cost controls, safety rails",
  },
  {
    num: "08",
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Streamlined pipelines, IaC and observability so you ship faster and sleep easier.",
    deliverables: ["CI/CD pipelines", "Terraform / Pulumi", "Kubernetes", "Observability"],
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    accent: "text-orange-600",
    tagline: "Ship 10× a day without the dread",
  },
  {
    num: "09",
    icon: TestTube2,
    title: "QA & Testing",
    desc: "Automated testing, performance and security QA for bulletproof releases at any scale.",
    deliverables: ["Test automation", "Load testing", "Security QA", "Manual QA"],
    gradient: "from-lime-500 via-emerald-500 to-teal-500",
    accent: "text-lime-600",
    tagline: "Zero production regressions this quarter",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nine disciplines."
        italic="One senior team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        subtitle="From a single landing page to a multi-year platform — we plug into your roadmap and ship. No juniors hiding behind PMs."
      />

      <Services />

      {/* Detailed list */}
      <section className="relative section-light py-28 sm:py-36">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <h2 className="font-display font-medium text-[clamp(2.2rem,4.6vw,3.6rem)] tracking-tight leading-[1] text-ink">
                Every service, in detail.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Each engagement starts with a free architecture audit. We map
                what to build, what to buy, and what to leave alone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {detailed.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href="/contact"
                  id={s.title.toLowerCase().replace(/[^a-z0-9]/g, "")}
                  className="group relative rounded-3xl overflow-hidden border border-line bg-white hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.25)] transition-all duration-500 flex flex-col"
                >
                  {/* Colorful banner */}
                  <div className={`relative h-40 bg-gradient-to-br ${s.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
                    <div className="absolute -bottom-12 -left-10 w-44 h-44 rounded-full bg-white/25 blur-3xl" />
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                    {/* Faint number watermark */}
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-black text-[7rem] leading-none text-white/15 select-none">
                      {s.num}
                    </span>
                    <div className="relative p-7 flex items-start justify-between text-white h-full">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-white/80">
                            Service · {s.num}
                          </div>
                          <div className="mt-1 text-[13px] text-white/90 italic font-serif-italic">
                            {s.tagline}
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-display font-medium text-2xl sm:text-3xl tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-muted text-sm sm:text-base mt-2 leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {s.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-[11px] uppercase tracking-[0.12em] px-3 py-1 rounded-full bg-soft border border-line text-muted"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                    <div className={`mt-6 pt-5 border-t border-line flex items-center justify-between text-sm font-medium ${s.accent}`}>
                      <span>Talk to an expert</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Process />
      <TechStack />
      <CTABanner />
    </>
  );
}
