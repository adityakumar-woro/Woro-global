"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
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

type Project = { name: string; stack: string[]; metric: string; tone: string };

const industryMeta: Record<string, { icon: React.ComponentType<{ className?: string }>; hue: string; pill: string; accent: string }> = {
  Healthcare: { icon: Heart, hue: "from-emerald-500/90 via-teal-400/80 to-cyan-400/70", pill: "bg-emerald-500", accent: "text-emerald-600" },
  Fintech: { icon: Banknote, hue: "from-blue-600/90 via-indigo-500/80 to-violet-400/75", pill: "bg-blue-600", accent: "text-blue-600" },
  Education: { icon: GraduationCap, hue: "from-amber-400/90 via-orange-400/80 to-rose-400/70", pill: "bg-amber-500", accent: "text-amber-600" },
  Retail: { icon: ShoppingBag, hue: "from-fuchsia-500/90 via-pink-500/80 to-rose-400/75", pill: "bg-fuchsia-500", accent: "text-fuchsia-600" },
  "Real Estate": { icon: Building2, hue: "from-sky-500/90 via-cyan-400/80 to-teal-300/70", pill: "bg-sky-500", accent: "text-sky-600" },
  Logistics: { icon: Truck, hue: "from-orange-500/90 via-amber-400/80 to-yellow-300/70", pill: "bg-orange-500", accent: "text-orange-600" },
  Travel: { icon: Plane, hue: "from-cyan-500/90 via-sky-400/80 to-blue-300/70", pill: "bg-cyan-500", accent: "text-cyan-600" },
  Manufacturing: { icon: Factory, hue: "from-slate-600/90 via-zinc-500/80 to-stone-400/70", pill: "bg-slate-600", accent: "text-slate-600" },
  Agritech: { icon: Leaf, hue: "from-lime-500/90 via-emerald-500/80 to-teal-400/70", pill: "bg-lime-500", accent: "text-lime-600" },
  "F&B": { icon: Utensils, hue: "from-red-500/90 via-orange-500/80 to-amber-400/70", pill: "bg-red-500", accent: "text-red-600" },
  Gaming: { icon: Gamepad2, hue: "from-violet-600/90 via-purple-500/80 to-fuchsia-400/70", pill: "bg-violet-600", accent: "text-violet-600" },
  GovTech: { icon: Landmark, hue: "from-indigo-600/90 via-blue-500/80 to-sky-400/70", pill: "bg-indigo-600", accent: "text-indigo-600" },
  "Media & OTT": { icon: Film, hue: "from-rose-500/90 via-pink-500/80 to-fuchsia-400/70", pill: "bg-rose-500", accent: "text-rose-600" },
  Energy: { icon: Zap, hue: "from-yellow-500/90 via-amber-500/80 to-orange-400/70", pill: "bg-yellow-500", accent: "text-yellow-600" },
};

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
  Agritech: [
    { name: "Farm IoT Cloud", stack: ["Go", "TimescaleDB"], metric: "40% water saved", tone: "from-lime-200 to-emerald-200" },
    { name: "Crop Health AI", stack: ["Python", "TensorFlow"], metric: "92% detection", tone: "from-emerald-200 to-teal-200" },
    { name: "Commodity Marketplace", stack: ["Next.js", "Postgres"], metric: "20k+ farmers", tone: "from-lime-200 to-cyan-200" },
  ],
  "F&B": [
    { name: "Cloud Kitchen OS", stack: ["NestJS", "Kafka"], metric: "3× order throughput", tone: "from-red-200 to-amber-200" },
    { name: "Restaurant POS", stack: ["React Native", "Firebase"], metric: "8k+ outlets", tone: "from-orange-200 to-rose-200" },
    { name: "Delivery Super-app", stack: ["Flutter", "Go"], metric: "28min avg ETA", tone: "from-red-200 to-orange-200" },
  ],
  Gaming: [
    { name: "Realtime Matchmaking", stack: ["Go", "Redis"], metric: "60ms pairing", tone: "from-violet-200 to-fuchsia-200" },
    { name: "In-game Economy", stack: ["Node.js", "ClickHouse"], metric: "1M DAU", tone: "from-purple-200 to-violet-200" },
    { name: "Anti-cheat Pipeline", stack: ["Rust", "ML"], metric: "99.2% catch rate", tone: "from-fuchsia-200 to-purple-200" },
  ],
  GovTech: [
    { name: "Citizen Services Portal", stack: ["Next.js", "Keycloak"], metric: "12M citizens", tone: "from-indigo-200 to-blue-200" },
    { name: "e-KYC Platform", stack: ["Java", "Aadhaar"], metric: "SOC2 + ISO 27001", tone: "from-blue-200 to-indigo-200" },
    { name: "Smart-city Dashboard", stack: ["React", "GIS"], metric: "350 datasets live", tone: "from-sky-200 to-indigo-200" },
  ],
  "Media & OTT": [
    { name: "OTT Streaming App", stack: ["Swift", "HLS"], metric: "4M MAU", tone: "from-rose-200 to-pink-200" },
    { name: "Personalization Engine", stack: ["Python", "Spark"], metric: "+38% watch time", tone: "from-pink-200 to-fuchsia-200" },
    { name: "Ad Insertion Pipeline", stack: ["Go", "SSAI"], metric: "12B impressions/mo", tone: "from-rose-200 to-fuchsia-200" },
  ],
  Energy: [
    { name: "Solar Plant Monitoring", stack: ["Node.js", "MQTT"], metric: "2.4GW monitored", tone: "from-yellow-200 to-amber-200" },
    { name: "EV Charging Network", stack: ["Kotlin", "OCPP"], metric: "9k+ chargers", tone: "from-amber-200 to-orange-200" },
    { name: "Grid Forecasting AI", stack: ["Python", "PyTorch"], metric: "±2% accuracy", tone: "from-yellow-200 to-orange-200" },
  ],
};

const tabs = Object.keys(data);

export default function Industries() {
  const [active, setActive] = useState(tabs[0]);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const menuItemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const activeMeta = industryMeta[active];

  // Scroll-sync: highlight whichever panel is closest to the top of the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibility = new Map<string, number>();

    panelRefs.current.forEach((el, idx) => {
      if (!el) return;
      const name = tabs[idx];
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visibility.set(name, entry.intersectionRatio);
          }
          let best = { name: tabs[0], ratio: -1 };
          for (const [n, r] of visibility) {
            if (r > best.ratio) best = { name: n, ratio: r };
          }
          if (best.ratio > 0) setActive(best.name);
        },
        { root: null, rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Keep active menu item in view inside the sticky scroll rail
  useEffect(() => {
    const idx = tabs.indexOf(active);
    const item = menuItemRefs.current[idx];
    const container = menuContainerRef.current;
    if (!item || !container) return;
    const top = item.offsetTop - container.offsetTop;
    container.scrollTo({ top: top - container.clientHeight / 2 + item.clientHeight / 2, behavior: "smooth" });
  }, [active]);

  const scrollToDomain = (name: string) => {
    const idx = tabs.indexOf(name);
    const el = panelRefs.current[idx];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="industries" className="relative section-light">
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div
        aria-hidden
        className={cn(
          "absolute -top-24 -left-16 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-30 bg-gradient-to-br transition-all duration-700",
          activeMeta?.hue
        )}
      />
      <div
        aria-hidden
        className={cn(
          "absolute -bottom-24 -right-16 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-25 bg-gradient-to-br transition-all duration-700",
          activeMeta?.hue
        )}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 sm:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Industries & Domains"
              title="Domain expertise that compounds."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Scroll through 14 regulated, complex domains we ship into every
              quarter — every one with a pattern library we bring to your build.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-28 sm:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT — sticky domain rail */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-line bg-white/70 backdrop-blur-sm p-4 sm:p-5 shadow-[0_30px_60px_-40px_rgba(10,10,10,0.2)]">
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    Domains · {tabs.length}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand">
                    · live scroll
                  </div>
                </div>
                <div
                  ref={menuContainerRef}
                  className="max-h-[70vh] overflow-y-auto no-scrollbar pr-1 space-y-1 scroll-smooth"
                >
                  {tabs.map((t, i) => {
                    const meta = industryMeta[t];
                    const Icon = meta?.icon;
                    const isActive = active === t;
                    return (
                      <button
                        key={t}
                        ref={(el) => {
                          menuItemRefs.current[i] = el;
                        }}
                        onClick={() => scrollToDomain(t)}
                        className={cn(
                          "relative w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-all text-left overflow-hidden",
                          isActive
                            ? "text-white shadow-[0_10px_24px_-12px_rgba(10,10,10,0.25)]"
                            : "text-ink/75 hover:text-ink hover:bg-soft"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="industry-rail-pill"
                            className={cn(
                              "absolute inset-0 rounded-2xl bg-gradient-to-br",
                              meta?.hue
                            )}
                            transition={{ type: "spring", stiffness: 320, damping: 30 }}
                          />
                        )}
                        <span
                          className={cn(
                            "relative z-10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                            isActive
                              ? "bg-white/20 backdrop-blur border border-white/30"
                              : "bg-soft border border-line"
                          )}
                        >
                          {Icon && (
                            <Icon
                              className={cn(
                                "w-4 h-4",
                                isActive ? "text-white" : meta?.accent
                              )}
                            />
                          )}
                        </span>
                        <span className="relative z-10 flex-1 min-w-0">
                          <span
                            className={cn(
                              "block text-sm font-medium truncate",
                              isActive ? "text-white" : "text-ink"
                            )}
                          >
                            {t}
                          </span>
                          <span
                            className={cn(
                              "block text-[10px] uppercase tracking-[0.18em] mt-0.5 truncate",
                              isActive ? "text-white/80" : "text-muted"
                            )}
                          >
                            {(data[t] || []).length} flagship builds
                          </span>
                        </span>
                        <span
                          className={cn(
                            "relative z-10 font-serif-italic text-xs",
                            isActive ? "text-white/90" : "text-muted/70"
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — scrolling per-domain panels */}
          <div className="lg:col-span-8 space-y-16">
            {tabs.map((name, idx) => {
              const meta = industryMeta[name];
              const projects = data[name] || [];
              const DomainIcon = meta?.icon;
              return (
                <div
                  key={name}
                  ref={(el) => {
                    panelRefs.current[idx] = el;
                  }}
                  id={`domain-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="scroll-mt-28"
                >
                  {/* Domain header card */}
                  <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 text-white">
                    <div className={cn("absolute inset-0 bg-gradient-to-br", meta?.hue)} />
                    <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
                    <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/20 blur-3xl" />
                    <div className="relative flex items-start justify-between gap-6 flex-wrap">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] mb-4">
                          Domain · {String(idx + 1).padStart(2, "0")} / {tabs.length}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center">
                            {DomainIcon && <DomainIcon className="w-6 h-6 text-white" />}
                          </div>
                          <h3 className="font-display font-medium text-3xl sm:text-4xl tracking-tight leading-none">
                            {name}
                          </h3>
                        </div>
                        <p className="mt-4 text-sm sm:text-base text-white/85 max-w-lg leading-relaxed">
                          {projects.length} production systems shipped — compliance,
                          ops and end-user scale battle-tested.
                        </p>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-2.5 text-sm font-medium hover:scale-105 transition-transform shrink-0"
                      >
                        Talk about {name}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Case-study grid */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {projects.map((p) => (
                      <a
                        href="#contact"
                        key={p.name}
                        className="group rounded-3xl bg-white border border-line overflow-hidden card-hover"
                      >
                        <div
                          className={cn(
                            "relative h-32 bg-gradient-to-br overflow-hidden",
                            p.tone
                          )}
                        >
                          <div className="absolute inset-0 mix-blend-overlay opacity-50 noise" />
                          <div
                            className={cn(
                              "absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-70",
                              meta?.pill
                            )}
                          />
                          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ink/70 bg-white/70 backdrop-blur px-2 py-1 rounded-full">
                            Case study
                          </div>
                          <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                          {DomainIcon && (
                            <div className="absolute bottom-4 left-4 w-9 h-9 rounded-xl bg-white/70 backdrop-blur border border-white/50 flex items-center justify-center">
                              <DomainIcon className={cn("w-4 h-4", meta?.accent)} />
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h4 className="font-display font-medium text-lg tracking-tight">
                            {p.name}
                          </h4>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-soft border border-line text-muted"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                          <div
                            className={cn(
                              "mt-3 pt-3 border-t border-line text-sm font-medium",
                              meta?.accent
                            )}
                          >
                            {p.metric}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
