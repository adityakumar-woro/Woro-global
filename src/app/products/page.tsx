import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { MessageCircle, PhoneCall, Video, Check, ArrowUpRight, Sparkles, Play, Send, Heart, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — WORO Global",
  description:
    "WORO Chat, WORO Voice and WORO UGC — three production-ready AI products for modern sales, support and creator marketing teams.",
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
    id: "ugc",
    name: "WORO UGC",
    label: "UGC & Marketing Video Platform",
    icon: Video,
    accent: "from-fuchsia-100 to-violet-100",
    headline: "UGC ads on autopilot. Built for growth teams.",
    description:
      "Generate scroll-stopping UGC and marketing videos in minutes. AI avatars, proven hooks, auto-captions, B-roll and direct publish to TikTok, Reels, Shorts and Meta Ads — no creators, no cameras.",
    bullets: [
      "AI UGC avatars across 40+ languages",
      "Viral hook templates auto-tuned to your product",
      "Auto-captions, B-roll and beat-synced edits",
      "Winning-creative scoring before you spend",
      "One-click publish to TikTok, Reels, Shorts, Meta Ads",
    ],
    metric: { value: "10×", label: "more UGC shipped" },
  },
];

const compare = [
  { feature: "Built for", chat: "Sales & support", voice: "Sales & ops", ugc: "Marketing & UGC" },
  { feature: "Channel", chat: "WhatsApp", voice: "Voice (PSTN + SIP)", ugc: "Short-form video" },
  { feature: "Languages", chat: "60+", voice: "30+", ugc: "40+" },
  { feature: "Free trial", chat: "14 days", voice: "100 min free", ugc: "5 videos free" },
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
                  <ProductVisual id={p.id} metric={p.metric} />
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
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> WORO UGC
              </div>
            </div>
            {compare.map((row) => (
              <div key={row.feature} className="grid grid-cols-4 border-t border-white/10">
                <div className="p-5 text-sm text-white/60">{row.feature}</div>
                <div className="p-5 text-sm text-white">{row.chat}</div>
                <div className="p-5 text-sm text-white">{row.voice}</div>
                <div className="p-5 text-sm text-white">{row.ugc}</div>
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

function ProductVisual({
  id,
  metric,
}: {
  id: string;
  metric: { value: string; label: string };
}) {
  if (id === "chat") {
    return (
      <div className="relative rounded-[2rem] overflow-hidden border border-line bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6 sm:p-8 aspect-[5/4]">
        <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-emerald-300/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-teal-300/40 blur-3xl" />
        <div className="absolute inset-0 noise opacity-40" />
        <div className="relative h-full flex flex-col">
          {/* Inbox mockup */}
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-line p-5 shadow-[0_20px_50px_-20px_rgba(10,10,10,0.15)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">Team inbox</div>
                  <div className="text-[10px] text-muted flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-badge" />
                    14 agents live
                  </div>
                </div>
              </div>
              <div className="text-[10px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                +32 new
              </div>
            </div>
            <div className="space-y-2">
              {["Priya · Refund query", "Sam · Upgrade plan", "Arjun · Integration"].map((n, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-soft transition">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-medium text-ink truncate">{n}</div>
                    <div className="h-1 w-20 rounded-full bg-soft mt-1" />
                  </div>
                  <div className="text-[9px] text-muted">2m</div>
                </div>
              ))}
            </div>
          </div>
          {/* Chat bubble floating */}
          <div className="relative mt-auto flex justify-end">
            <div className="absolute -top-10 left-0 rounded-2xl rounded-bl-sm bg-white border border-line px-3 py-2 shadow-lg max-w-[70%]">
              <div className="text-xs text-ink">&ldquo;How fast can we ship WhatsApp?&rdquo;</div>
            </div>
            <div className="rounded-2xl rounded-br-sm bg-gradient-to-br from-emerald-500 to-teal-500 text-white px-3 py-2 shadow-lg max-w-[70%]">
              <div className="text-xs">In a week. We'll port your templates.</div>
            </div>
          </div>
          {/* Metric tag */}
          <div className="absolute top-6 right-6 bg-white border border-line rounded-2xl px-4 py-2 shadow-lg">
            <div className="font-display font-medium text-2xl text-ink leading-none">{metric.value}</div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-muted mt-1">{metric.label}</div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "voice") {
    return (
      <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-ink p-6 sm:p-8 aspect-[5/4] text-white">
        <div className="absolute inset-0 mesh-dark opacity-70" />
        <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-[#6C5DFC]/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-[#A78BFA]/30 blur-3xl" />
        <div className="relative h-full flex flex-col">
          <div className="rounded-2xl bg-white/[0.06] backdrop-blur border border-white/10 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C5DFC] to-[#A78BFA] flex items-center justify-center shadow-[0_0_20px_rgba(108,93,252,0.6)]">
                  <PhoneCall className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">Maya · Agent</div>
                  <div className="text-[10px] text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Live · 00:42 · EN-US
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-white/55 px-2 py-0.5 rounded-full border border-white/15">
                #1847
              </div>
            </div>
            <div className="flex items-end gap-1 h-16 mt-4 px-1">
              {[6, 14, 9, 22, 16, 28, 19, 34, 14, 24, 10, 32, 18, 26, 12, 20, 8, 14, 22, 10, 18, 24, 30, 12].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full bg-gradient-to-t from-[#6C5DFC] to-[#A78BFA] animate-pulse"
                    style={{
                      height: `${h * 1.6}%`,
                      animationDelay: `${i * 0.05}s`,
                      animationDuration: "1.2s",
                    }}
                  />
                )
              )}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
              <div className="rounded-lg bg-white/10 border border-white/10 py-1.5 text-center text-white/80">Mute</div>
              <div className="rounded-lg bg-white/10 border border-white/10 py-1.5 text-center text-white/80">Hold</div>
              <div className="rounded-lg bg-red-500/30 border border-red-400/40 py-1.5 text-center text-red-200">End</div>
            </div>
          </div>

          <div className="relative mt-auto flex items-end justify-between">
            <div className="rounded-2xl bg-white/[0.06] backdrop-blur border border-white/10 px-4 py-3 max-w-[65%]">
              <div className="text-[9px] uppercase tracking-[0.18em] text-white/50 mb-1">Live transcript</div>
              <div className="text-xs text-white/85 leading-snug">
                &ldquo;…I'll book the demo for Tuesday at 4pm IST.&rdquo;
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6C5DFC] to-[#A78BFA] rounded-2xl px-4 py-3 shadow-[0_20px_50px_-15px_rgba(108,93,252,0.7)]">
              <div className="font-display font-medium text-2xl leading-none">{metric.value}</div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-white/80 mt-1">{metric.label}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // UGC
  return (
    <div className="relative rounded-[2rem] overflow-hidden border border-line bg-gradient-to-br from-fuchsia-50 via-violet-50 to-pink-50 p-6 sm:p-8 aspect-[5/4]">
      <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-fuchsia-300/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="absolute inset-0 noise opacity-40" />
      <div className="relative h-full grid grid-cols-5 gap-4">
        {/* 9:16 phone preview */}
        <div className="col-span-2">
          <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/40 bg-gradient-to-br from-fuchsia-500/70 via-violet-500/60 to-pink-500/60 shadow-[0_20px_50px_-20px_rgba(217,70,239,0.5)]">
            <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur border border-white/50 flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            <div className="absolute top-2 left-2 text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-white/25 backdrop-blur text-white border border-white/30">
              TikTok
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <div className="px-2 py-1 rounded bg-black/50 backdrop-blur text-white text-[9px] font-medium inline-block mb-1.5">
                POV: viral ad
              </div>
              <div className="flex gap-3 text-white text-[9px]">
                <div className="flex items-center gap-1">
                  <Heart className="w-2.5 h-2.5 fill-white" />
                  184k
                </div>
                <div className="flex items-center gap-1">
                  <Send className="w-2.5 h-2.5" />
                  2.4M
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — script + stats */}
        <div className="col-span-3 flex flex-col gap-3">
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-line p-4 flex-1 shadow-[0_10px_30px_-10px_rgba(10,10,10,0.1)]">
            <div className="text-[10px] uppercase tracking-wider text-muted mb-2">
              Script · 4 variants
            </div>
            <div className="space-y-1.5 text-[11px] text-ink leading-snug">
              <div>
                <span className="bg-fuchsia-100 border border-fuchsia-200 rounded px-1 text-[9px]">HOOK</span>{" "}
                POV — your ads stopped working.
              </div>
              <div>
                <span className="bg-violet-100 border border-violet-200 rounded px-1 text-[9px]">OFFER</span>{" "}
                WORO UGC shipped 40 ads in an hour.
              </div>
              <div>
                <span className="bg-pink-100 border border-pink-200 rounded px-1 text-[9px]">CTA</span>{" "}
                Free for 5 videos.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "4.1×", v: "CTR" },
              { k: "3.8×", v: "ROAS" },
              { k: "10×", v: "output" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl bg-white/80 backdrop-blur border border-line px-3 py-2 shadow-sm"
              >
                <div className="font-display font-medium text-lg text-ink leading-none">{s.k}</div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-muted mt-1">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white px-4 py-3 shadow-[0_20px_50px_-20px_rgba(217,70,239,0.6)] flex items-center justify-between">
            <div>
              <div className="font-display font-medium text-2xl leading-none">{metric.value}</div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-white/85 mt-1">{metric.label}</div>
            </div>
            <TrendingUp className="w-6 h-6 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
