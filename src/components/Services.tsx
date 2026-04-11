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
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  { num: "01", slug: "website-development", icon: Globe, title: "Website Development", desc: "Pixel-perfect, blazing fast websites built with Next.js and modern stacks." },
  { num: "02", slug: "software-development", icon: Code2, title: "Software Development", desc: "Custom enterprise software tailored to your unique business workflows." },
  { num: "03", slug: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform iOS & Android apps that users love to open." },
  { num: "04", slug: "cloud-management", icon: Cloud, title: "Cloud Management", desc: "AWS, Azure and GCP architecture, migration and 24/7 cloud operations." },
  { num: "05", slug: "cybersecurity", icon: ShieldCheck, title: "Cybersecurity Services", desc: "Pen testing, threat detection, compliance audits and zero-trust security." },
  { num: "06", slug: "it-infrastructure", icon: Server, title: "IT Infrastructure", desc: "Resilient on-prem and hybrid infrastructure designed for scale and uptime." },
  { num: "07", slug: "ai-ml-solutions", icon: Brain, title: "AI & ML Solutions", desc: "Custom LLMs, predictive analytics and intelligent automation systems." },
  { num: "08", slug: "devops-cicd", icon: GitBranch, title: "DevOps & CI/CD", desc: "Streamlined pipelines, IaC and observability so you ship faster, safer." },
  { num: "09", slug: "qa-testing", icon: TestTube2, title: "QA & Testing", desc: "Automated testing, performance and security QA for bulletproof releases." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-40 section-light overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 grid-mask" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
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
                className="group relative border-r border-b border-line p-8 lg:p-10 bg-white hover:bg-soft transition-colors duration-500 overflow-hidden"
              >
                {/* hover gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-serif-italic text-2xl text-muted">{s.num}</span>
                    <ArrowUpRight className="w-5 h-5 text-ink opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center mb-5 group-hover:bg-ink group-hover:border-ink transition">
                    <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                  <h3 className="font-display font-medium text-2xl tracking-tight mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-xs">
                    {s.desc}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
