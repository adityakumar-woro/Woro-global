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
  },
  {
    num: "02",
    icon: Code2,
    title: "Software Development",
    desc: "Custom enterprise software tailored to your unique workflows — from internal tools to multi-tenant SaaS platforms.",
    deliverables: ["SaaS platforms", "Internal tools", "Admin dashboards", "API design"],
  },
  {
    num: "03",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native iOS and Android apps as well as cross-platform builds with React Native and Flutter.",
    deliverables: ["iOS / Swift", "Android / Kotlin", "React Native", "Flutter"],
  },
  {
    num: "04",
    icon: Cloud,
    title: "Cloud Management",
    desc: "AWS, Azure and GCP architecture, migration and 24/7 cloud operations with full observability.",
    deliverables: ["Cloud architecture", "Lift & shift", "FinOps", "24/7 ops"],
  },
  {
    num: "05",
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Pen testing, threat detection, compliance audits and zero-trust security baked into every release.",
    deliverables: ["Pen testing", "SOC2 readiness", "Zero trust", "Threat hunting"],
  },
  {
    num: "06",
    icon: Server,
    title: "IT Infrastructure",
    desc: "Resilient on-prem and hybrid infrastructure designed for scale, uptime and predictable cost.",
    deliverables: ["Network design", "Hybrid cloud", "Edge computing", "Disaster recovery"],
  },
  {
    num: "07",
    icon: Brain,
    title: "AI & ML Solutions",
    desc: "Custom LLMs, predictive analytics, RAG pipelines and intelligent automation systems.",
    deliverables: ["Custom LLM apps", "RAG pipelines", "ML models", "Voice & vision AI"],
  },
  {
    num: "08",
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Streamlined pipelines, IaC and observability so you ship faster and sleep easier.",
    deliverables: ["CI/CD pipelines", "Terraform / Pulumi", "Kubernetes", "Observability"],
  },
  {
    num: "09",
    icon: TestTube2,
    title: "QA & Testing",
    desc: "Automated testing, performance and security QA for bulletproof releases at any scale.",
    deliverables: ["Test automation", "Load testing", "Security QA", "Manual QA"],
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

          <div className="space-y-px bg-line border border-line rounded-3xl overflow-hidden">
            {detailed.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href="/contact"
                  id={s.title.toLowerCase().replace(/[^a-z0-9]/g, "")}
                  className="group bg-white hover:bg-soft transition-colors duration-500 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 p-8 lg:p-12 relative"
                >
                  <div className="font-serif-italic text-3xl text-muted lg:w-20">{s.num}</div>
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                    <Icon className="w-6 h-6 text-ink group-hover:text-white transition" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-medium text-2xl sm:text-3xl tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-muted text-sm sm:text-base mt-2 max-w-2xl">{s.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {s.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-[11px] uppercase tracking-[0.12em] px-3 py-1 rounded-full bg-soft border border-line text-muted"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:shrink-0 w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-ink group-hover:text-white transition" />
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
