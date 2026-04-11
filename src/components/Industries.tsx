"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

type Project = { name: string; stack: string[]; metric: string; tone: string };

const data: Record<string, Project[]> = {
  Healthcare: [
    { name: "Patient Portal App", stack: ["React Native", "Node.js"], metric: "60% faster bookings", tone: "from-emerald-200 to-teal-200" },
    { name: "Hospital ERP", stack: ["Next.js", "Postgres"], metric: "30% lower ops cost", tone: "from-blue-200 to-cyan-200" },
    { name: "Telemedicine Platform", stack: ["Flutter", "WebRTC"], metric: "1M+ consults", tone: "from-violet-200 to-blue-200" },
  ],
  Fintech: [
    { name: "Digital Wallet", stack: ["Swift", "Go"], metric: "99.99% uptime", tone: "from-emerald-200 to-cyan-200" },
    { name: "Trading Dashboard", stack: ["React", "GraphQL"], metric: "200ms latency", tone: "from-blue-200 to-violet-200" },
    { name: "Loan Management", stack: ["Django", "AWS"], metric: "5x faster approvals", tone: "from-cyan-200 to-blue-200" },
  ],
  Education: [
    { name: "LMS Platform", stack: ["Next.js", "MongoDB"], metric: "300k students", tone: "from-violet-200 to-cyan-200" },
    { name: "Virtual Classroom", stack: ["Vue", "WebRTC"], metric: "HD streaming", tone: "from-blue-200 to-cyan-200" },
    { name: "Student Analytics", stack: ["Python", "BigQuery"], metric: "Real-time insights", tone: "from-emerald-200 to-blue-200" },
  ],
  Retail: [
    { name: "E-commerce Platform", stack: ["Shopify", "Next.js"], metric: "40% faster load", tone: "from-cyan-200 to-violet-200" },
    { name: "Inventory System", stack: ["NestJS", "Postgres"], metric: "Zero stock-outs", tone: "from-blue-200 to-emerald-200" },
    { name: "POS Solution", stack: ["Flutter", "Firebase"], metric: "10k+ stores", tone: "from-violet-200 to-blue-200" },
  ],
  "Real Estate": [
    { name: "Property Listing App", stack: ["React Native", "AWS"], metric: "2M listings", tone: "from-blue-200 to-cyan-200" },
    { name: "CRM for Agents", stack: ["Next.js", "Postgres"], metric: "3x lead conversion", tone: "from-emerald-200 to-cyan-200" },
    { name: "Virtual Tour App", stack: ["Three.js", "Node"], metric: "360° experiences", tone: "from-violet-200 to-blue-200" },
  ],
  Logistics: [
    { name: "Fleet Tracking", stack: ["React", "Kafka"], metric: "5k vehicles live", tone: "from-cyan-200 to-blue-200" },
    { name: "Warehouse Management", stack: ["Vue", "Postgres"], metric: "50% faster picking", tone: "from-blue-200 to-violet-200" },
    { name: "Route Optimizer", stack: ["Python", "ML"], metric: "20% fuel saved", tone: "from-emerald-200 to-cyan-200" },
  ],
  Travel: [
    { name: "Booking Platform", stack: ["Next.js", "Stripe"], metric: "100k bookings/mo", tone: "from-blue-200 to-cyan-200" },
    { name: "Itinerary AI", stack: ["LangChain", "GPT"], metric: "Personalized plans", tone: "from-violet-200 to-cyan-200" },
    { name: "Loyalty Program", stack: ["Django", "Redis"], metric: "2x repeat rate", tone: "from-emerald-200 to-blue-200" },
  ],
  Manufacturing: [
    { name: "IoT Monitoring", stack: ["Node.js", "MQTT"], metric: "500 sites live", tone: "from-cyan-200 to-blue-200" },
    { name: "Predictive Maintenance", stack: ["Python", "TF"], metric: "70% downtime cut", tone: "from-blue-200 to-violet-200" },
    { name: "Production Dashboard", stack: ["React", "Postgres"], metric: "Live KPI view", tone: "from-emerald-200 to-cyan-200" },
  ],
};

const tabs = Object.keys(data);

export default function Industries() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="industries" className="relative section-light py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 grid-mask" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Industries"
              title="Domain expertise that compounds."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Eight years working across regulated, complex sectors. We bring
              that pattern library to every new build.
            </p>
          </div>
        </div>

        <div className="-mx-6 px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-medium transition whitespace-nowrap border",
                  active === t
                    ? "text-white border-ink"
                    : "text-ink/70 border-line hover:text-ink hover:border-ink/40"
                )}
              >
                {active === t && (
                  <motion.span
                    layoutId="industry-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {(data[active] || []).map((p, i) => (
                <motion.a
                  href="#contact"
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group rounded-3xl bg-white border border-line overflow-hidden card-hover"
                >
                  <div className={cn("relative h-44 bg-gradient-to-br", p.tone)}>
                    <div className="absolute inset-0 mix-blend-overlay opacity-50 noise" />
                    <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ink/60">
                      Case Study
                    </div>
                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-medium text-xl tracking-tight">{p.name}</h3>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.stack.map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-soft border border-line text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-line text-sm font-medium text-brand">
                      {p.metric}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
