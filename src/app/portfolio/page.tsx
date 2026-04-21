import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Smartphone,
  Brain,
  MessageCircle,
  Heart,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Plane,
  Truck,
  Leaf,
  Landmark,
  Check,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio — WORO Global",
  description:
    "Selected work: AI products, web platforms and mobile apps we've shipped across healthcare, fintech, retail, travel, govtech and more.",
};

type Kind = "Web" | "Mobile" | "AI" | "SaaS";
type Project = {
  name: string;
  client: string;
  domain: string;
  kind: Kind[];
  year: string;
  summary: string;
  bullets: string[];
  metric: { value: string; label: string };
  icon: React.ComponentType<{ className?: string }>;
  tone: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Dr. Morepen Care Companion",
    client: "Dr. Morepen",
    domain: "Healthcare",
    kind: ["AI", "Mobile"],
    year: "2025",
    summary:
      "Multilingual AI triage companion on WhatsApp and web — handles refill, appointment and symptom flow without agents.",
    bullets: [
      "80% drop in repeat tickets",
      "HIPAA-ready deployment on AWS",
      "9 languages at launch",
    ],
    metric: { value: "80%", label: "repeat tickets cut" },
    icon: Heart,
    tone: "from-emerald-500 via-teal-500 to-cyan-500",
    tags: ["RAG", "WhatsApp API", "AWS", "Next.js"],
  },
  {
    name: "Tootle Trip Intelligence",
    client: "Tootle",
    domain: "Travel",
    kind: ["AI", "SaaS"],
    year: "2025",
    summary:
      "Personalization engine that turns trip-intent signals into same-day itinerary offers across 40 markets.",
    bullets: [
      "+35% engagement",
      "10× faster insight loop",
      "2× repeat bookings",
    ],
    metric: { value: "+35%", label: "engagement" },
    icon: Plane,
    tone: "from-cyan-500 via-sky-500 to-blue-500",
    tags: ["LangChain", "Postgres", "BigQuery", "React"],
  },
  {
    name: "Americana Kitchen OS",
    client: "Americana",
    domain: "F&B",
    kind: ["SaaS", "Web"],
    year: "2024",
    summary:
      "Real-time order assignment and kitchen ops platform across 2,000 outlets — built for peak-hour resilience.",
    bullets: [
      "Auto-assign 42% → 82%",
      "28-min avg fulfillment",
      "INR 4.2Cr saved / yr",
    ],
    metric: { value: "82%", label: "auto-assign" },
    icon: ShoppingBag,
    tone: "from-red-500 via-orange-500 to-amber-400",
    tags: ["NestJS", "Kafka", "Postgres", "Kubernetes"],
  },
  {
    name: "Gurushala Question Studio",
    client: "Gurushala",
    domain: "EdTech",
    kind: ["AI", "Web"],
    year: "2025",
    summary:
      "AI-assisted assessment authoring for 300k+ teachers — syllabus-aware, bias-checked, bloom-tagged.",
    bullets: [
      "10× faster creation",
      "3× daily active teachers",
      "92% fewer duplicate items",
    ],
    metric: { value: "10×", label: "faster authoring" },
    icon: GraduationCap,
    tone: "from-amber-400 via-orange-400 to-rose-400",
    tags: ["LLM fine-tune", "Next.js", "MongoDB", "Vector DB"],
  },
  {
    name: "MyExec AI Consultant",
    client: "MyExec",
    domain: "Productivity",
    kind: ["AI", "Mobile"],
    year: "2025",
    summary:
      "Multi-agent RAG copilot for CXOs — digest, decide and delegate inside one always-on app.",
    bullets: [
      "Multi-agent RAG on ECS",
      "Sub-2s first token",
      "4.8★ app rating",
    ],
    metric: { value: "4.8★", label: "app rating" },
    icon: Brain,
    tone: "from-violet-500 via-fuchsia-500 to-pink-500",
    tags: ["Multi-agent", "AWS ECS", "Pinecone", "React Native"],
  },
  {
    name: "Flynas Booking Intelligence",
    client: "Flynas",
    domain: "Aviation",
    kind: ["AI", "Mobile"],
    year: "2024",
    summary:
      "Conversational booking + disruption handling in 7 languages, deployed into the flagship airline app.",
    bullets: [
      "Bookings +28%",
      "Support cost −41%",
      "7 languages at launch",
    ],
    metric: { value: "−41%", label: "support cost" },
    icon: Plane,
    tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
    tags: ["Voice AI", "Arabic NLU", "Kotlin", "Swift"],
  },
  {
    name: "EV Charging Network",
    client: "ChargeHub",
    domain: "Energy",
    kind: ["Mobile", "SaaS"],
    year: "2024",
    summary:
      "OCPP-native charging network with 9k+ chargers, dynamic pricing and operator analytics.",
    bullets: [
      "9k+ live chargers",
      "99.9% session success",
      "Dynamic pricing engine",
    ],
    metric: { value: "9k+", label: "chargers live" },
    icon: Leaf,
    tone: "from-lime-500 via-emerald-500 to-teal-500",
    tags: ["Kotlin", "OCPP 2.0", "Spring Boot", "Postgres"],
  },
  {
    name: "Citizen Services Portal",
    client: "State GovTech",
    domain: "GovTech",
    kind: ["Web", "SaaS"],
    year: "2024",
    summary:
      "Unified citizen portal with e-KYC, service requests and grievance workflow — 12M citizens onboarded.",
    bullets: [
      "12M citizens onboarded",
      "ISO 27001 + SOC2",
      "350 service workflows",
    ],
    metric: { value: "12M", label: "citizens" },
    icon: Landmark,
    tone: "from-indigo-600 via-blue-500 to-sky-400",
    tags: ["Next.js", "Keycloak", "Aadhaar eKYC", "Java"],
  },
  {
    name: "Trading Desk Pro",
    client: "FinEdge",
    domain: "Fintech",
    kind: ["Web", "SaaS"],
    year: "2025",
    summary:
      "Sub-200ms trading dashboard with WebSocket order book, risk limits and co-pilot for analysts.",
    bullets: [
      "200ms latency p99",
      "99.99% uptime",
      "24/7 observability",
    ],
    metric: { value: "200ms", label: "p99 latency" },
    icon: Banknote,
    tone: "from-blue-600 via-indigo-500 to-violet-500",
    tags: ["React", "GraphQL", "Kafka", "ClickHouse"],
  },
  {
    name: "Fleet Command Center",
    client: "LogiOne",
    domain: "Logistics",
    kind: ["Web", "AI"],
    year: "2024",
    summary:
      "Real-time fleet tracking and route optimization for 5,000 vehicles with ML ETA prediction.",
    bullets: [
      "5k vehicles live",
      "20% fuel saved",
      "Sub-1min re-route",
    ],
    metric: { value: "−20%", label: "fuel cost" },
    icon: Truck,
    tone: "from-orange-500 via-amber-500 to-yellow-400",
    tags: ["React", "Kafka", "Python ML", "Mapbox"],
  },
  {
    name: "WORO Chat — Flagship SaaS",
    client: "WORO Global",
    domain: "SaaS · WhatsApp CRM",
    kind: ["SaaS", "Web"],
    year: "In production",
    summary:
      "Team inbox for WhatsApp with no-code bots, broadcast campaigns and native CRM sync — built in-house.",
    bullets: [
      "Multi-agent inbox",
      "Bot builder + analytics",
      "HubSpot & Salesforce sync",
    ],
    metric: { value: "5×", label: "faster response" },
    icon: MessageCircle,
    tone: "from-emerald-500 via-teal-500 to-cyan-500",
    tags: ["Next.js", "Postgres", "WhatsApp API", "Kafka"],
  },
  {
    name: "WORO UGC — Video Studio",
    client: "WORO Global",
    domain: "SaaS · Marketing Video",
    kind: ["SaaS", "AI"],
    year: "In production",
    summary:
      "AI UGC factory that turns product briefs into 20+ on-brand short-form ads — publish-ready in minutes.",
    bullets: [
      "AI avatars, 40+ languages",
      "Auto-captions & B-roll",
      "One-click to TikTok / Meta",
    ],
    metric: { value: "10×", label: "more UGC shipped" },
    icon: Sparkles,
    tone: "from-fuchsia-500 via-pink-500 to-rose-400",
    tags: ["GenAI video", "TTS", "Next.js", "Python"],
  },
];

const kinds: ("All" | Kind)[] = ["All", "Web", "Mobile", "AI", "SaaS"];

const stats = [
  { k: "150+", v: "clients served" },
  { k: "120+", v: "projects shipped" },
  { k: "14", v: "industry domains" },
  { k: "12", v: "countries delivered" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work."
        italic="Shipped, scaled, surviving."
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        subtitle="A cross-section of what we've put into production — AI products, consumer apps and enterprise platforms across 14 regulated domains."
      />

      {/* Stat strip */}
      <section className="relative section-light border-y border-line py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.v} className="text-left">
              <div className="font-display font-medium text-3xl sm:text-4xl tracking-tight leading-none text-ink">
                {s.k}
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
        <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-blue/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Filter chips (visual only — shows breadth) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {kinds.map((k, i) => (
              <span
                key={k}
                className={`px-4 py-2 rounded-full text-[12px] font-medium border ${
                  i === 0
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-ink/70 border-line"
                }`}
              >
                {k}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  href="/contact"
                  key={p.name}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-line hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.25)] transition-all duration-500 flex flex-col"
                >
                  {/* Colorful banner */}
                  <div className={`relative h-44 bg-gradient-to-br ${p.tone} overflow-hidden`}>
                    <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/25 blur-3xl" />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {p.kind.map((k) => (
                          <span
                            key={k}
                            className="text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/80">
                        {p.year}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="font-display font-medium text-3xl text-white leading-none tracking-tight">
                          {p.metric.value}
                        </div>
                        <div className="text-[9px] uppercase tracking-[0.18em] text-white/80 mt-1">
                          {p.metric.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-2">
                      {p.client} · {p.domain}
                    </div>
                    <h3 className="font-display font-medium text-xl tracking-tight leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted mt-3 leading-relaxed">{p.summary}</p>
                    <ul className="mt-4 space-y-1.5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[13px] text-ink">
                          <Check className="w-3.5 h-3.5 text-brand mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded-full bg-soft border border-line text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-ink arrow-fly" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
              <Globe className="w-3.5 h-3.5" />
              Under NDA · not shown
            </div>
            <p className="text-muted text-sm max-w-md leading-relaxed">
              About 40% of our work ships under NDA. Get in touch for a live
              walkthrough of the pieces we can show one-on-one.
            </p>
            <Link
              href="/contact"
              className="mt-6 btn-primary"
            >
              Request a walkthrough
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Icon callout — "built across platforms" */}
      <section className="relative section-soft py-20 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { icon: Globe, title: "Web platforms", sub: "Next.js, Astro, headless CMS" },
              { icon: Smartphone, title: "Mobile apps", sub: "iOS, Android, React Native, Flutter" },
              { icon: Brain, title: "AI products", sub: "GenAI, RAG, agents, voice & vision" },
              { icon: MessageCircle, title: "SaaS & CRMs", sub: "Multi-tenant, billing, analytics" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-3xl bg-white border border-line p-6 flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand/15 to-blue/15 border border-line flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <div className="font-display font-medium text-lg tracking-tight">{c.title}</div>
                    <div className="text-[12px] text-muted mt-1">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
