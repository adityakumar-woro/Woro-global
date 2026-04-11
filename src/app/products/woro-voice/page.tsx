import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  ArrowUpRight,
  Languages,
  Zap,
  BarChart3,
  Headphones,
  Brain,
  Sparkles,
  Calendar,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "WORO Voice — Human-sounding AI calling agents",
  description:
    "Deploy AI voice agents in minutes. Inbound and outbound calls, 30+ languages, sub-300ms latency, real-time transcripts, native CRM sync.",
};

const useCases = [
  { icon: Calendar, title: "Appointment booking", desc: "AI agents that pick up, qualify and book real meetings — directly into your calendar." },
  { icon: Users, title: "Lead qualification", desc: "Qualify inbound leads in real time with conversational scoring." },
  { icon: Headphones, title: "Tier-1 support", desc: "Resolve common questions and hand off to humans only when needed." },
  { icon: Sparkles, title: "Outbound campaigns", desc: "Run high-volume outbound campaigns without burning out a sales team." },
];

const capabilities = [
  { icon: Languages, label: "Languages", value: "30+", desc: "English, Hindi, Spanish, Mandarin, Arabic and more — with native accents." },
  { icon: Zap, label: "Latency", value: "<300ms", desc: "End-to-end voice loop fast enough that humans don&apos;t notice it&apos;s an AI." },
  { icon: Brain, label: "Models", value: "GPT-4 + ours", desc: "Frontier LLMs with WORO&apos;s fine-tuned voice and intent layer on top." },
  { icon: BarChart3, label: "Accuracy", value: "94%", desc: "Intent classification benchmarked across enterprise call data." },
];

const transcript = [
  { speaker: "AI", text: "Hi, this is Maya from WORO. Are you the right person to discuss your team's CRM rollout?", t: "0:02" },
  { speaker: "Human", text: "Yes, that's me. What's this about?", t: "0:06" },
  { speaker: "AI", text: "Great. We help teams like yours cut response times by 5×. Could I ask — what's your current biggest pain in customer comms?", t: "0:08" },
  { speaker: "Human", text: "Honestly, our agents are drowning in WhatsApp messages.", t: "0:14" },
  { speaker: "AI", text: "Got it. I'll book you a 20-min call with our specialist on Thursday at 3pm. Sound good?", t: "0:17" },
];

export default function WoroVoicePage() {
  return (
    <>
      <PageHero
        eyebrow="WORO Voice · AI Calling Agents"
        title="Voice AI that books"
        italic="real meetings."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "WORO Voice" },
        ]}
        subtitle="Human-sounding AI agents that pick up inbound calls, qualify leads, schedule demos and handle support — in 30+ languages, 24/7, with your CRM auto-updated."
      />

      {/* Live call mockup */}
      <section className="relative section-light py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-brand/30 blob" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-blue/30 blob" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-badge" />
                Live in 30+ languages
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                AI agents that<br />
                <span className="font-serif-italic">sound human.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-lg">
                WORO Voice deploys production-grade AI agents that handle real conversations,
                in real time, in real languages. Sub-300ms latency. Real prosody. No robotic pauses.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Hear a live demo
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Book a strategy call
                </Link>
              </div>
            </div>

            {/* Live call card */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-brand/30 to-blue/20 blur-2xl" />
                <div className="relative bg-ink rounded-[2rem] border border-white/10 p-7 sm:p-9 overflow-hidden">
                  <div className="absolute inset-0 mesh-dark opacity-50" />
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-blue flex items-center justify-center shadow-[0_0_25px_rgba(108,93,252,0.7)]">
                          <PhoneCall className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-display text-lg">Maya · AI Agent</div>
                          <div className="text-emerald-300 text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                            Live · 00:42
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-white/55 px-2.5 py-1 rounded-full border border-white/15">
                        EN-US · GPT-4
                      </div>
                    </div>

                    {/* Waveform */}
                    <div className="flex items-end gap-1 h-16 px-1 mb-6">
                      {[6, 14, 9, 22, 16, 28, 19, 34, 14, 24, 10, 32, 18, 26, 12, 20, 8, 14, 22, 10, 18, 30, 14, 22].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-full bg-gradient-to-t from-brand to-[#A78BFA] origin-bottom"
                          style={{ height: `${h * 2}%` }}
                        />
                      ))}
                    </div>

                    {/* Transcript */}
                    <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-2 no-scrollbar">
                      {transcript.map((line, i) => (
                        <div
                          key={i}
                          className={`text-xs ${
                            line.speaker === "AI"
                              ? "border-l-2 border-brand pl-3"
                              : "border-l-2 border-white/20 pl-3"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className={`text-[9px] uppercase tracking-wider font-medium ${
                                line.speaker === "AI" ? "text-brand" : "text-white/60"
                              }`}
                            >
                              {line.speaker === "AI" ? "Maya" : "Caller"}
                            </span>
                            <span className="text-[9px] text-white/40">{line.t}</span>
                          </div>
                          <div className="text-white/85 leading-relaxed">{line.text}</div>
                        </div>
                      ))}
                    </div>

                    {/* Controls */}
                    <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-white/10">
                      <div className="h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-[10px] text-white/70 uppercase tracking-wider">Mute</div>
                      <div className="h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-[10px] text-white/70 uppercase tracking-wider">Transfer</div>
                      <div className="h-9 rounded-xl bg-red-500/30 border border-red-400/40 flex items-center justify-center text-[10px] text-red-200 uppercase tracking-wider">End</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Use cases
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Four ways teams<br />
                <span className="font-serif-italic">deploy WORO Voice.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {useCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <div
                  key={u.title}
                  className="bg-white p-8 group hover:bg-soft transition-colors duration-500 min-h-[260px] flex flex-col"
                >
                  <div className="font-serif-italic text-2xl text-muted mb-6">0{i + 1}</div>
                  <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition">
                    <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                  <h3 className="font-display font-medium text-xl tracking-tight mb-2">{u.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{u.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability stats */}
      <section className="relative section-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
                <span className="w-6 h-px bg-white/40" />
                Under the hood
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-white">
                Built like<br />
                <span className="font-serif-italic text-white/85">production infra.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] transition relative overflow-hidden group"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative">
                    <Icon className="w-6 h-6 text-brand mb-6" />
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">{c.label}</div>
                    <div className="font-display font-medium text-4xl text-white mt-1">{c.value}</div>
                    <p className="text-xs text-white/60 mt-3 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CRM sync */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                CRM sync
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
                Every call.<br />
                <span className="font-serif-italic">Auto-logged.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-lg">
                The full transcript, sentiment, intent, summary and action items —
                pushed to your CRM the moment the call ends. No manual data entry, ever.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-2">
                {["HubSpot", "Salesforce", "Pipedrive", "Zoho", "Close", "Webhook"].map((t) => (
                  <div key={t} className="text-center px-3 py-3 rounded-xl bg-soft border border-line text-sm font-display">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-white border border-line rounded-3xl p-7 shadow-[0_30px_80px_-30px_rgba(10,10,10,0.18)]">
                <div className="flex items-center justify-between mb-5 pb-5 border-b border-line">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted">Call summary</div>
                    <div className="font-display font-medium text-lg mt-1">Sarah Mitchell · Acme Inc</div>
                  </div>
                  <div className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
                    Qualified
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted mb-1">Intent</div>
                    <div>Evaluating CRM solutions for 50-person sales team</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted mb-1">Sentiment</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-soft overflow-hidden">
                        <div className="h-full w-[78%] bg-gradient-to-r from-brand to-emerald-400" />
                      </div>
                      <span className="text-xs font-medium">78%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted mb-1">Action items</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand" /> Send pricing PDF</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand" /> Book demo on Thu 3pm</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand" /> Loop in account exec</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-line text-[10px] uppercase tracking-wider text-muted">
                    Synced to HubSpot · 2s ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <PhoneCall className="w-10 h-10 text-brand mx-auto mb-6" />
          <h2 className="font-display font-medium text-[clamp(2.4rem,5.5vw,4.4rem)] tracking-tight leading-[0.98] text-ink">
            100 minutes free.<br />
            <span className="font-serif-italic">Hear it for yourself.</span>
          </h2>
          <p className="text-muted mt-6 text-base sm:text-lg max-w-xl mx-auto">
            Spin up a real AI agent in under 10 minutes. No setup fees, no annual contract.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Get free minutes
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/products/woro-cast" className="btn-ghost">
              Explore WORO Cast
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
