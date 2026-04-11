import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { MessageCircle, PhoneCall, Mic, Check, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — WORO Global",
  description:
    "WORO Chat, WORO Voice and WORO Cast — three production-ready AI products for modern sales, support and creator marketing teams.",
};

const deepDive = [
  {
    id: "chat",
    name: "WORO Chat",
    label: "WhatsApp CRM",
    icon: MessageCircle,
    accent: "from-emerald-100 to-teal-100",
    headline: "One inbox. The whole team. Every conversation.",
    description:
      "WORO Chat turns WhatsApp into a real CRM. Route conversations between agents, build no-code chatbots, run broadcast campaigns and never lose a customer in the noise.",
    bullets: [
      "Shared multi-agent inbox with assignment rules",
      "Drag-and-drop chatbot builder, no code needed",
      "Broadcast & drip campaigns with delivery analytics",
      "Native sync with HubSpot, Salesforce, Zoho",
      "Approved WhatsApp Business API templates",
    ],
    metric: { value: "5×", label: "faster response time" },
  },
  {
    id: "voice",
    name: "WORO Voice",
    label: "AI Voice Calling Agents",
    icon: PhoneCall,
    accent: "from-violet-100 to-blue-100",
    headline: "AI agents that sound human. And book real meetings.",
    description:
      "Deploy AI voice agents in minutes. They pick up inbound calls, qualify leads, schedule demos, handle support — in 30+ languages, 24/7, with your CRM auto-updated.",
    bullets: [
      "Inbound and outbound voice calls",
      "30+ languages and accents, sub-300ms latency",
      "Real-time transcripts and call summaries",
      "Auto-sync to HubSpot, Salesforce or your CRM",
      "Voice cloning for brand consistency",
    ],
    metric: { value: "24/7", label: "always on, never tired" },
  },
  {
    id: "cast",
    name: "WORO Cast",
    label: "AI Voice Generator for UGC",
    icon: Mic,
    accent: "from-fuchsia-100 to-violet-100",
    headline: "Studio voiceovers in seconds. Built for creators.",
    description:
      "Generate ultra-realistic AI voiceovers in 200+ voices for ads, UGC, shorts and explainer videos. Clone your own voice in seconds and export straight to your video editor.",
    bullets: [
      "200+ ultra-realistic voices across 40+ languages",
      "Voice cloning from a 30-second sample",
      "Emotion and tone control per sentence",
      "One-click export to MP4, MP3, SRT",
      "Direct plugins for CapCut, Premiere, DaVinci",
    ],
    metric: { value: "200+", label: "studio voices" },
  },
];

const compare = [
  { feature: "Built for", chat: "Sales & support", voice: "Sales & ops", cast: "Marketing & UGC" },
  { feature: "Channel", chat: "WhatsApp", voice: "Voice (PSTN + SIP)", cast: "Audio export" },
  { feature: "Languages", chat: "60+", voice: "30+", cast: "40+" },
  { feature: "Free trial", chat: "14 days", voice: "100 min free", cast: "5 min free" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Three AI products."
        italic="One unfair advantage."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        subtitle="Production-ready SaaS built in-house — battle-tested across hundreds of sales, support and marketing teams worldwide."
      />

      <Products />

      {/* Deep dive sections per product */}
      {deepDive.map((p, i) => {
        const Icon = p.icon;
        const reverse = i % 2 === 1;
        return (
          <section
            key={p.id}
            id={p.id}
            className={`relative py-28 sm:py-36 overflow-hidden ${i % 2 === 0 ? "section-light" : "section-soft"}`}
          >
            <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
                    <span className="w-6 h-px bg-ink/40" />
                    {p.label}
                  </div>
                  <h2 className="font-display font-medium text-[clamp(2.2rem,4.6vw,3.8rem)] tracking-tight leading-[1.02] text-ink">
                    {p.headline}
                  </h2>
                  <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-ink">
                        <Check className="w-4 h-4 mt-1 text-brand shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-10 btn-primary"
                  >
                    Try {p.name} free
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                  <div className={`relative rounded-[2rem] p-10 bg-gradient-to-br ${p.accent} border border-line aspect-[5/4] overflow-hidden`}>
                    <div className="absolute inset-0 noise opacity-50" />
                    <div className="relative h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-line flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 text-ink" />
                        </div>
                        <div className="font-serif-italic text-2xl text-ink/70">0{i + 1}</div>
                      </div>
                      <div>
                        <div className="font-display font-medium text-7xl sm:text-8xl text-ink tracking-tight leading-none">
                          {p.metric.value}
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-ink/60 mt-3">
                          {p.metric.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Comparison */}
      <section className="relative section-dark py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
                <span className="w-6 h-px bg-white/40" />
                Side by side
              </div>
              <h2 className="font-display font-medium text-[clamp(2.4rem,5.2vw,4.4rem)] tracking-tight leading-[0.98] text-white">
                Pick the one that fits.<br />
                <span className="font-serif-italic text-white/85">Or stack all three.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                Most teams start with one product and add another within 90 days. Native integrations make stacking painless.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-4 bg-white/[0.04]">
              <div className="p-5 text-[11px] uppercase tracking-[0.18em] text-white/50">Feature</div>
              <div className="p-5 text-[11px] uppercase tracking-[0.18em] text-white/85 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> WORO Chat
              </div>
              <div className="p-5 text-[11px] uppercase tracking-[0.18em] text-white/85 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" /> WORO Voice
              </div>
              <div className="p-5 text-[11px] uppercase tracking-[0.18em] text-white/85 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> WORO Cast
              </div>
            </div>
            {compare.map((row) => (
              <div key={row.feature} className="grid grid-cols-4 border-t border-white/10">
                <div className="p-5 text-sm text-white/60">{row.feature}</div>
                <div className="p-5 text-sm text-white">{row.chat}</div>
                <div className="p-5 text-sm text-white">{row.voice}</div>
                <div className="p-5 text-sm text-white">{row.cast}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
