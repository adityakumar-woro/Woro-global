"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Heart,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory,
  Leaf,
  Utensils,
  Gamepad2,
  Landmark,
  Film,
  Zap,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

type Project = { name: string; stack: string[]; metric: string };

type IndustryMeta = {
  icon: React.ComponentType<{ className?: string }>;
  hue: string;
  accent: string;
  image: string;
  thumb: string;
  blurb: string;
  projects: Project[];
};

const industryMeta: Record<string, IndustryMeta> = {
  Healthcare: {
    icon: Heart,
    hue: "from-emerald-500/90 via-teal-400/80 to-cyan-400/70",
    accent: "text-emerald-600",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80&auto=format&fit=crop",
    blurb: "HIPAA-aligned care platforms, patient portals and telemedicine at scale.",
    projects: [
      { name: "Patient Portal App", stack: ["React Native", "Node.js"], metric: "60% faster bookings" },
      { name: "Hospital ERP", stack: ["Next.js", "Postgres"], metric: "30% lower ops cost" },
      { name: "Telemedicine Platform", stack: ["Flutter", "WebRTC"], metric: "1M+ consults" },
    ],
  },
  Fintech: {
    icon: Banknote,
    hue: "from-blue-600/90 via-indigo-500/80 to-violet-400/75",
    accent: "text-blue-600",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80&auto=format&fit=crop",
    blurb: "Wallets, trading consoles and lending systems with SOC2 baked in.",
    projects: [
      { name: "Digital Wallet", stack: ["Swift", "Go"], metric: "99.99% uptime" },
      { name: "Trading Dashboard", stack: ["React", "GraphQL"], metric: "200ms latency" },
      { name: "Loan Management", stack: ["Django", "AWS"], metric: "5× faster approvals" },
    ],
  },
  Education: {
    icon: GraduationCap,
    hue: "from-amber-400/90 via-orange-400/80 to-rose-400/70",
    accent: "text-amber-600",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80&auto=format&fit=crop",
    blurb: "Learning platforms, virtual classrooms and real-time student analytics.",
    projects: [
      { name: "LMS Platform", stack: ["Next.js", "MongoDB"], metric: "300k students" },
      { name: "Virtual Classroom", stack: ["Vue", "WebRTC"], metric: "HD streaming" },
      { name: "Student Analytics", stack: ["Python", "BigQuery"], metric: "Real-time insights" },
    ],
  },
  Retail: {
    icon: ShoppingBag,
    hue: "from-fuchsia-500/90 via-pink-500/80 to-rose-400/75",
    accent: "text-fuchsia-600",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80&auto=format&fit=crop",
    blurb: "Commerce storefronts, inventory backbones and POS for multi-location brands.",
    projects: [
      { name: "E-commerce Platform", stack: ["Shopify", "Next.js"], metric: "40% faster load" },
      { name: "Inventory System", stack: ["NestJS", "Postgres"], metric: "Zero stock-outs" },
      { name: "POS Solution", stack: ["Flutter", "Firebase"], metric: "10k+ stores" },
    ],
  },
  "Real Estate": {
    icon: Building2,
    hue: "from-sky-500/90 via-cyan-400/80 to-teal-300/70",
    accent: "text-sky-600",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80&auto=format&fit=crop",
    blurb: "Listing marketplaces, agent CRMs and virtual property experiences.",
    projects: [
      { name: "Property Listing App", stack: ["React Native", "AWS"], metric: "2M listings" },
      { name: "CRM for Agents", stack: ["Next.js", "Postgres"], metric: "3× lead conversion" },
      { name: "Virtual Tour App", stack: ["Three.js", "Node"], metric: "360° experiences" },
    ],
  },
  Logistics: {
    icon: Truck,
    hue: "from-orange-500/90 via-amber-400/80 to-yellow-300/70",
    accent: "text-orange-600",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80&auto=format&fit=crop",
    blurb: "Fleet tracking, warehouse ops and ML-driven route optimisation.",
    projects: [
      { name: "Fleet Tracking", stack: ["React", "Kafka"], metric: "5k vehicles live" },
      { name: "Warehouse Management", stack: ["Vue", "Postgres"], metric: "50% faster picking" },
      { name: "Route Optimizer", stack: ["Python", "ML"], metric: "20% fuel saved" },
    ],
  },
  Travel: {
    icon: Plane,
    hue: "from-cyan-500/90 via-sky-400/80 to-blue-300/70",
    accent: "text-cyan-600",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80&auto=format&fit=crop",
    blurb: "Booking engines, AI itinerary assistants and loyalty platforms.",
    projects: [
      { name: "Booking Platform", stack: ["Next.js", "Stripe"], metric: "100k bookings/mo" },
      { name: "Itinerary AI", stack: ["LangChain", "GPT"], metric: "Personalized plans" },
      { name: "Loyalty Program", stack: ["Django", "Redis"], metric: "2× repeat rate" },
    ],
  },
  Manufacturing: {
    icon: Factory,
    hue: "from-slate-600/90 via-zinc-500/80 to-stone-400/70",
    accent: "text-slate-600",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&auto=format&fit=crop",
    blurb: "IoT monitoring, predictive maintenance and live production KPIs.",
    projects: [
      { name: "IoT Monitoring", stack: ["Node.js", "MQTT"], metric: "500 sites live" },
      { name: "Predictive Maintenance", stack: ["Python", "TF"], metric: "70% downtime cut" },
      { name: "Production Dashboard", stack: ["React", "Postgres"], metric: "Live KPI view" },
    ],
  },
  Agritech: {
    icon: Leaf,
    hue: "from-lime-500/90 via-emerald-500/80 to-teal-400/70",
    accent: "text-lime-600",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80&auto=format&fit=crop",
    blurb: "Farm IoT clouds, crop-health AI and commodity marketplaces.",
    projects: [
      { name: "Farm IoT Cloud", stack: ["Go", "TimescaleDB"], metric: "40% water saved" },
      { name: "Crop Health AI", stack: ["Python", "TensorFlow"], metric: "92% detection" },
      { name: "Commodity Marketplace", stack: ["Next.js", "Postgres"], metric: "20k+ farmers" },
    ],
  },
  "F&B": {
    icon: Utensils,
    hue: "from-red-500/90 via-orange-500/80 to-amber-400/70",
    accent: "text-red-600",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80&auto=format&fit=crop",
    blurb: "Cloud kitchen OS, restaurant POS and delivery super-apps.",
    projects: [
      { name: "Cloud Kitchen OS", stack: ["NestJS", "Kafka"], metric: "3× order throughput" },
      { name: "Restaurant POS", stack: ["React Native", "Firebase"], metric: "8k+ outlets" },
      { name: "Delivery Super-app", stack: ["Flutter", "Go"], metric: "28-min avg ETA" },
    ],
  },
  Gaming: {
    icon: Gamepad2,
    hue: "from-violet-600/90 via-purple-500/80 to-fuchsia-400/70",
    accent: "text-violet-600",
    image:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=400&q=80&auto=format&fit=crop",
    blurb: "Realtime matchmaking, in-game economies and anti-cheat pipelines.",
    projects: [
      { name: "Realtime Matchmaking", stack: ["Go", "Redis"], metric: "60ms pairing" },
      { name: "In-game Economy", stack: ["Node.js", "ClickHouse"], metric: "1M DAU" },
      { name: "Anti-cheat Pipeline", stack: ["Rust", "ML"], metric: "99.2% catch rate" },
    ],
  },
  GovTech: {
    icon: Landmark,
    hue: "from-indigo-600/90 via-blue-500/80 to-sky-400/70",
    accent: "text-indigo-600",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80&auto=format&fit=crop",
    blurb: "Citizen portals, e-KYC platforms and smart-city dashboards.",
    projects: [
      { name: "Citizen Services Portal", stack: ["Next.js", "Keycloak"], metric: "12M citizens" },
      { name: "e-KYC Platform", stack: ["Java", "Aadhaar"], metric: "SOC2 + ISO 27001" },
      { name: "Smart-city Dashboard", stack: ["React", "GIS"], metric: "350 datasets live" },
    ],
  },
  "Media & OTT": {
    icon: Film,
    hue: "from-rose-500/90 via-pink-500/80 to-fuchsia-400/70",
    accent: "text-rose-600",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&q=80&auto=format&fit=crop",
    blurb: "OTT streaming apps, personalization engines and ad-insertion pipelines.",
    projects: [
      { name: "OTT Streaming App", stack: ["Swift", "HLS"], metric: "4M MAU" },
      { name: "Personalization Engine", stack: ["Python", "Spark"], metric: "+38% watch time" },
      { name: "Ad Insertion Pipeline", stack: ["Go", "SSAI"], metric: "12B impressions/mo" },
    ],
  },
  Energy: {
    icon: Zap,
    hue: "from-yellow-500/90 via-amber-500/80 to-orange-400/70",
    accent: "text-yellow-600",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=85&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80&auto=format&fit=crop",
    blurb: "Solar monitoring, EV-charging networks and grid-forecasting AI.",
    projects: [
      { name: "Solar Plant Monitoring", stack: ["Node.js", "MQTT"], metric: "2.4GW monitored" },
      { name: "EV Charging Network", stack: ["Kotlin", "OCPP"], metric: "9k+ chargers" },
      { name: "Grid Forecasting AI", stack: ["Python", "PyTorch"], metric: "±2% accuracy" },
    ],
  },
};

const tabs = Object.keys(industryMeta);

export default function Industries() {
  const [active, setActive] = useState(tabs[0]);
  const meta = industryMeta[active];
  const Icon = meta.icon;

  return (
    <section id="industries" className="relative section-light py-20 sm:py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div
        aria-hidden
        className={cn(
          "absolute -top-24 -left-16 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-30 bg-gradient-to-br transition-all duration-700",
          meta.hue
        )}
      />
      <div
        aria-hidden
        className={cn(
          "absolute -bottom-24 -right-16 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-25 bg-gradient-to-br transition-all duration-700",
          meta.hue
        )}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Industries & Domains"
              title="Domain expertise that compounds."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Hover any domain below and the detail panel updates instantly — 14 regulated,
              complex sectors we ship into every quarter, no scrolling between them.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* LEFT — cinematic detail panel */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden border border-line bg-white shadow-[0_40px_100px_-40px_rgba(10,10,10,0.25)] min-h-[520px]">
              {/* Stage image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={meta.image}
                      alt={`${active} industry visual`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br mix-blend-multiply",
                        meta.hue
                      )}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(10,10,10,0.12) 0%, transparent 40%, rgba(10,10,10,0.7) 100%)",
                      }}
                    />
                    <div aria-hidden className="absolute inset-0 noise opacity-25 mix-blend-overlay" />
                  </motion.div>
                </AnimatePresence>

                {/* Top-left chip */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white">
                  <Icon className="w-3 h-3" />
                  Domain · {String(tabs.indexOf(active) + 1).padStart(2, "0")} / {tabs.length}
                </div>

                {/* Top-right glass KPI */}
                <div className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {meta.projects.length} flagship builds
                </div>

                {/* Bottom headline */}
                <div className="absolute left-0 right-0 bottom-0 p-6 sm:p-8 text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`title-${active}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none">
                          {active}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-white/90 max-w-lg leading-relaxed">
                        {meta.blurb}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Projects */}
              <div className="relative p-6 sm:p-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
                  Flagship builds
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`proj-${active}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                  >
                    {meta.projects.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-2xl border border-line bg-white p-4 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(108,93,252,0.2)] transition-all"
                      >
                        <div className="font-display font-medium text-sm tracking-tight text-ink leading-tight min-h-[2.5rem]">
                          {p.name}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="text-[9px] uppercase tracking-[0.12em] px-1.5 py-0.5 rounded-full bg-soft border border-line text-muted"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div
                          className={cn(
                            "mt-3 pt-3 border-t border-line text-[11px] font-medium flex items-center gap-1.5",
                            meta.accent
                          )}
                        >
                          <Check className="w-3 h-3" />
                          {p.metric}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 pt-6 border-t border-line flex items-center justify-between flex-wrap gap-3">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    Enterprise scale · compliance · ops-ready
                  </span>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-brand transition"
                  >
                    Talk about {active}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — hover/click tile grid */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-line bg-white/80 backdrop-blur-sm p-3 shadow-[0_30px_60px_-40px_rgba(10,10,10,0.2)]">
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    Domains · {tabs.length}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand">
                    · hover to preview
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-none lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto no-scrollbar pr-0.5">
                  {tabs.map((t, i) => {
                    const m = industryMeta[t];
                    const TIcon = m.icon;
                    const isActive = active === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onMouseEnter={() => setActive(t)}
                        onFocus={() => setActive(t)}
                        onClick={() => setActive(t)}
                        className={cn(
                          "group relative rounded-2xl overflow-hidden border text-left transition-all duration-500 min-h-[112px]",
                          isActive
                            ? "border-ink/30 -translate-y-0.5 shadow-[0_20px_40px_-20px_rgba(108,93,252,0.4)]"
                            : "border-line hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_14px_30px_-15px_rgba(10,10,10,0.18)]"
                        )}
                      >
                        {/* HD thumbnail background */}
                        <Image
                          src={m.thumb}
                          alt=""
                          fill
                          sizes="200px"
                          className={cn(
                            "object-cover transition-all duration-700",
                            isActive ? "scale-[1.08]" : "scale-100 group-hover:scale-[1.04]"
                          )}
                        />
                        {/* Color wash */}
                        <div
                          aria-hidden
                          className={cn("absolute inset-0 bg-gradient-to-br mix-blend-multiply", m.hue)}
                        />
                        {/* Dark gradient for text contrast */}
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.7) 100%)",
                          }}
                        />
                        <div aria-hidden className="absolute inset-0 noise opacity-25 mix-blend-overlay" />

                        {/* Active ring */}
                        {isActive && (
                          <div
                            aria-hidden
                            className="absolute -inset-px rounded-2xl pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.6) 100%)",
                              padding: 1,
                              WebkitMask:
                                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                              WebkitMaskComposite: "xor",
                              maskComposite: "exclude",
                            }}
                          />
                        )}

                        <div className="relative h-full p-3 flex flex-col justify-between text-white">
                          <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                              <TIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-serif-italic text-[11px] text-white/80">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div>
                            <div className="font-display font-medium text-sm tracking-tight leading-tight">
                              {t}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile hint — tap to switch */}
              <div className="lg:hidden text-center mt-3 text-[10px] uppercase tracking-[0.22em] text-muted">
                Tap a domain to preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
