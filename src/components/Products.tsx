"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, PhoneCall, Mic, Play, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

const products = [
  {
    slug: "woro-chat",
    name: "WORO Chat",
    label: "WhatsApp CRM",
    tagline:
      "Run sales, support and marketing from one shared WhatsApp inbox built for teams.",
    icon: MessageCircle,
    accent: "from-emerald-400 to-teal-500",
    features: [
      "Shared multi-agent inbox",
      "Broadcast & drip campaigns",
      "No-code chatbot builder",
      "Native CRM integrations",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-24 rounded-full bg-white/40" />
            <div className="h-1.5 w-14 rounded-full bg-white/20" />
          </div>
          <div className="ml-auto text-[10px] text-emerald-300/90 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            online
          </div>
        </div>
        <div className="flex">
          <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white/8 border border-white/10 px-3.5 py-2.5">
            <div className="h-1.5 w-32 rounded-full bg-white/40 mb-1.5" />
            <div className="h-1.5 w-20 rounded-full bg-white/25" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-emerald-400/25 border border-emerald-400/30 px-3.5 py-2.5">
            <div className="h-1.5 w-24 rounded-full bg-white/55 mb-1.5" />
            <div className="h-1.5 w-32 rounded-full bg-white/40" />
          </div>
        </div>
        <div className="flex">
          <div className="rounded-2xl rounded-bl-sm bg-white/8 border border-white/10 px-3.5 py-2.5 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: "0.15s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "woro-voice",
    name: "WORO Voice",
    label: "AI Voice Calling Agents",
    tagline:
      "Human-sounding AI agents that book meetings, qualify leads and handle support 24/7.",
    icon: PhoneCall,
    accent: "from-[#A78BFA] to-[#6C5DFC]",
    features: [
      "Inbound & outbound calls",
      "30+ languages & accents",
      "Auto-sync to your CRM",
      "Real-time transcripts",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C5DFC] to-[#A78BFA] flex items-center justify-center shadow-[0_0_20px_rgba(108,93,252,0.6)]">
              <PhoneCall className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="h-2 w-20 rounded-full bg-white/45 mb-1" />
              <div className="text-[10px] text-emerald-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                Live · 00:42
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/55 px-2 py-0.5 rounded-full border border-white/15">Maya</div>
        </div>
        <div className="flex items-end gap-1 h-14 px-1">
          {[6, 14, 9, 22, 16, 28, 19, 34, 14, 24, 10, 32, 18, 26, 12, 20, 8, 14, 22, 10].map((h, i) => (
            <motion.div
              key={i}
              animate={{ scaleY: [1, 1.4, 0.8, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05 }}
              className="flex-1 rounded-full bg-gradient-to-t from-[#6C5DFC] to-[#A78BFA] origin-bottom"
              style={{ height: `${h * 1.6}%` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-6 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-[9px] text-white/70">Mute</div>
          <div className="h-6 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-[9px] text-white/70">Hold</div>
          <div className="h-6 rounded-md bg-red-500/30 border border-red-400/30 flex items-center justify-center text-[9px] text-red-200">End</div>
        </div>
      </div>
    ),
  },
  {
    slug: "woro-cast",
    name: "WORO Cast",
    label: "AI Voice Generator",
    tagline:
      "Studio-grade AI voiceovers in 200+ voices for UGC, ads and short-form video.",
    icon: Mic,
    accent: "from-fuchsia-400 to-[#6C5DFC]",
    features: [
      "200+ ultra-realistic voices",
      "Voice cloning in seconds",
      "One-click export to video",
      "Emotion & tone control",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-400 to-[#6C5DFC] flex items-center justify-center">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-2 w-28 rounded-full bg-white/45" />
            <div className="h-1.5 w-20 rounded-full bg-white/22" />
          </div>
          <div className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-white/70">EN-US</div>
        </div>
        <div className="relative h-14 rounded-lg bg-white/5 border border-white/10 overflow-hidden flex items-center px-2 gap-[2px]">
          {Array.from({ length: 40 }).map((_, i) => {
            const h = Math.round(20 + Math.abs(Math.sin(i * 0.55)) * 75);
            return (
              <div
                key={i}
                className="flex-1 rounded-full bg-gradient-to-t from-fuchsia-400/85 to-[#A78BFA]"
                style={{ height: `${h}%` }}
              />
            );
          })}
          <div className="absolute left-1/3 top-0 bottom-0 w-[2px] bg-white/85 shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
            <Play className="w-3 h-3 text-white" />
          </div>
          <div className="flex-1 h-1 rounded-full bg-white/15">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-fuchsia-400 to-[#A78BFA]" />
          </div>
          <div className="text-[10px] text-white/55">0:12 / 0:38</div>
        </div>
      </div>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="relative section-dark py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 mesh-dark opacity-50" />
      <div className="absolute inset-0 grid-bg-dark opacity-40 grid-mask" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8">
            <SectionHeader
              light
              eyebrow="Flagship products"
              title="Three AI products. One unfair advantage."
            />
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="text-white/65 text-base sm:text-lg leading-relaxed">
              Production-ready SaaS built in-house — battle-tested across hundreds
              of teams in sales, support and marketing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {products.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 backdrop-blur-sm overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
              >
                {/* gradient halo on hover */}
                <div
                  className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-25 transition-opacity duration-700 blur-3xl`}
                />

                <div className="relative">
                  {/* mockup frame */}
                  <div className="relative rounded-2xl bg-black/40 border border-white/10 p-5 mb-7 overflow-hidden">
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    {p.mockup}
                  </div>

                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    {p.label}
                  </div>

                  <h3 className="font-display font-medium text-3xl tracking-tight mb-3">
                    {p.name}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-6">
                    {p.tagline}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/80">
                        <Check className="w-3.5 h-3.5 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/products/${p.slug}`}
                    className="group/btn inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/30 pb-1 hover:border-white transition"
                  >
                    Try {p.name}
                    <ArrowUpRight className="w-3.5 h-3.5 arrow-fly" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
