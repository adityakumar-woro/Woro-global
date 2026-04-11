import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  ArrowUpRight,
  Play,
  Sparkles,
  Languages,
  Wand2,
  Film,
  Volume2,
  Download,
  Heart,
  Share2,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "WORO Cast — AI voice generator for UGC video",
  description:
    "Studio-grade AI voiceovers for ads, UGC, shorts and explainer videos. 200+ voices, 40+ languages, voice cloning, one-click export.",
};

const voices = [
  { name: "Maya", lang: "EN-US", style: "Friendly", tone: "from-fuchsia-200 to-pink-200" },
  { name: "Raj", lang: "EN-IN", style: "Confident", tone: "from-violet-200 to-fuchsia-200" },
  { name: "Sofia", lang: "ES-MX", style: "Warm", tone: "from-pink-200 to-rose-200" },
  { name: "Akira", lang: "JA-JP", style: "Calm", tone: "from-blue-200 to-violet-200" },
  { name: "Zoe", lang: "EN-GB", style: "Punchy", tone: "from-rose-200 to-fuchsia-200" },
  { name: "Leo", lang: "PT-BR", style: "Energetic", tone: "from-violet-200 to-blue-200" },
];

const features = [
  { icon: Mic, title: "200+ voices", desc: "Studio-grade voices in every age, tone and accent imaginable." },
  { icon: Languages, title: "40+ languages", desc: "Native speakers, regional accents, dialect-aware pronunciation." },
  { icon: Wand2, title: "Voice cloning", desc: "Clone your own voice from a 30-second sample. Ethical, opt-in only." },
  { icon: Volume2, title: "Emotion control", desc: "Tune happy, serious, sarcastic, urgent — sentence by sentence." },
  { icon: Film, title: "Video plugins", desc: "Direct exports to CapCut, Premiere, DaVinci, Final Cut." },
  { icon: Download, title: "One-click export", desc: "MP4, MP3, WAV, SRT — all formats, ready for upload." },
];

const ugcExamples = [
  { platform: "TikTok", caption: "POV: you actually like your AI voiceover", views: "2.4M", likes: "184k" },
  { platform: "Reels", caption: "How creators 10× their output with WORO Cast", views: "1.1M", likes: "92k" },
  { platform: "Shorts", caption: "Cloned my voice in 30 seconds, no joke 🎙️", views: "880k", likes: "67k" },
];

export default function WoroCastPage() {
  return (
    <>
      <PageHero
        eyebrow="WORO Cast · AI Voice for UGC"
        title="Studio voiceovers"
        italic="in 30 seconds."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "WORO Cast" },
        ]}
        subtitle="200+ ultra-realistic AI voices for ads, UGC, shorts and explainer videos. Clone your own voice, control emotion sentence-by-sentence, export straight to your editor."
      />

      {/* Editor mockup hero */}
      <section className="relative section-light py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full bg-fuchsia-300/40 blob" />
        <div className="absolute top-40 -right-24 w-[500px] h-[500px] rounded-full bg-violet-300/40 blob" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-fuchsia-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 pulse-badge" />
                Built for creators
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                The voice tool<br />
                <span className="font-serif-italic">creators love.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-lg">
                WORO Cast turns your script into a studio-grade voiceover in seconds.
                Tune emotion per sentence. Clone your own voice. Export straight to CapCut,
                Premiere or DaVinci. No microphone required.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Generate your first voice
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Listen to samples
                </Link>
              </div>
            </div>

            {/* Editor mockup */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-fuchsia-300/30 to-violet-300/20 blur-2xl" />
                <div className="relative bg-ink rounded-[2rem] border border-white/10 p-5 shadow-[0_50px_100px_-30px_rgba(10,10,10,0.5)] overflow-hidden">
                  <div className="absolute inset-0 mesh-dark opacity-40" />
                  <div className="relative">
                    {/* Title bar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <div className="ml-3 text-[11px] text-white/55">woro-cast — untitled.cast</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-[10px] px-2 py-1 rounded-full border border-white/15 text-white/60">EN-US · Maya</div>
                      </div>
                    </div>

                    {/* Script editor */}
                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 mb-4">
                      <div className="text-[10px] uppercase tracking-wider text-white/45 mb-3">Script</div>
                      <div className="space-y-2 text-sm text-white/85 leading-relaxed">
                        <div>
                          <span className="bg-fuchsia-500/20 border border-fuchsia-500/40 rounded px-1">[excited]</span>{" "}
                          POV — you just discovered the only voice tool you&apos;ll ever need.
                        </div>
                        <div>
                          <span className="bg-violet-500/20 border border-violet-500/40 rounded px-1">[calm]</span>{" "}
                          200 voices. 40 languages. One click to your editor.
                        </div>
                        <div>
                          <span className="bg-pink-500/20 border border-pink-500/40 rounded px-1">[urgent]</span>{" "}
                          Try it free at woro.global/cast
                        </div>
                      </div>
                    </div>

                    {/* Waveform timeline */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-500 flex items-center justify-center shadow-[0_0_18px_rgba(217,70,239,0.6)]">
                            <Play className="w-3.5 h-3.5 text-white fill-white" />
                          </div>
                          <div className="text-[10px] text-white/55">0:12 / 0:38</div>
                        </div>
                        <div className="text-[10px] text-white/40">44.1 kHz · Stereo</div>
                      </div>
                      {/* waveform with playhead */}
                      <div className="relative h-16 rounded-lg bg-white/[0.04] border border-white/10 overflow-hidden flex items-center px-2 gap-[2px]">
                        {Array.from({ length: 60 }).map((_, i) => {
                          const h = Math.round(20 + Math.abs(Math.sin(i * 0.45)) * 75);
                          const past = i < 20;
                          return (
                            <div
                              key={i}
                              className={`flex-1 rounded-full ${
                                past
                                  ? "bg-gradient-to-t from-fuchsia-400 to-violet-300"
                                  : "bg-white/15"
                              }`}
                              style={{ height: `${h}%` }}
                            />
                          );
                        })}
                        <div className="absolute left-[33%] top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
                      </div>
                      {/* Time markers */}
                      <div className="flex justify-between mt-2 text-[9px] text-white/30 font-mono">
                        <span>0:00</span>
                        <span>0:10</span>
                        <span>0:20</span>
                        <span>0:30</span>
                        <span>0:38</span>
                      </div>
                    </div>

                    {/* Action bar */}
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex gap-2">
                        <div className="px-3 py-2 rounded-xl bg-white/8 border border-white/10 text-[10px] uppercase tracking-wider text-white/70">CapCut</div>
                        <div className="px-3 py-2 rounded-xl bg-white/8 border border-white/10 text-[10px] uppercase tracking-wider text-white/70">Premiere</div>
                        <div className="px-3 py-2 rounded-xl bg-white/8 border border-white/10 text-[10px] uppercase tracking-wider text-white/70">DaVinci</div>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-[11px] font-medium text-white shadow-[0_0_20px_rgba(217,70,239,0.5)] flex items-center gap-1.5">
                        <Download className="w-3 h-3" />
                        Export
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating tag */}
                <div className="absolute -left-6 bottom-20 bg-white border border-line rounded-2xl px-3 py-2 shadow-lg">
                  <div className="text-[9px] uppercase tracking-wider text-muted">Render time</div>
                  <div className="text-sm font-display font-medium text-ink">2.4s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice library */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Voice library
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                200+ voices.<br />
                <span className="font-serif-italic">All studio-grade.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Hand-picked across 40+ languages, ages, accents and energy levels.
                Or clone your own.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {voices.map((v) => (
              <div
                key={v.name}
                className={`group relative rounded-3xl bg-white border border-line overflow-hidden card-hover`}
              >
                <div className={`relative aspect-[5/3] bg-gradient-to-br ${v.tone}`}>
                  <div className="absolute inset-0 noise opacity-50" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-white/60 backdrop-blur border border-white/40 text-ink/70">
                    {v.lang}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                  {/* mini waveform overlay */}
                  <div className="absolute bottom-4 left-4 right-20 flex items-end gap-[2px] h-8">
                    {Array.from({ length: 18 }).map((_, i) => {
                      const h = Math.round(20 + Math.abs(Math.sin(i * 0.6)) * 70);
                      return (
                        <div key={i} className="flex-1 rounded-full bg-white/70" style={{ height: `${h}%` }} />
                      );
                    })}
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-medium text-xl tracking-tight">{v.name}</h3>
                    <div className="text-xs text-muted mt-1">{v.style}</div>
                  </div>
                  <Sparkles className="w-4 h-4 text-fuchsia-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-ghost">
              See all 200+ voices
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Features
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Built for the<br />
                <span className="font-serif-italic">creator economy.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white p-8 sm:p-10 group hover:bg-gradient-to-br hover:from-fuchsia-50 hover:to-violet-50 transition-all duration-500 min-h-[240px] flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center mb-6 group-hover:bg-fuchsia-500 group-hover:border-fuchsia-500 transition">
                    <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                  <h3 className="font-display font-medium text-2xl tracking-tight mb-3">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UGC examples */}
      <section className="relative section-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
                <span className="w-6 h-px bg-white/40" />
                Real creator wins
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-white">
                Voices that<br />
                <span className="font-serif-italic text-white/85">go viral.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {ugcExamples.map((u, i) => (
              <div
                key={i}
                className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] aspect-[9/16] hover:border-fuchsia-500/50 transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/15 to-pink-500/15" />
                <div className="absolute inset-0 noise opacity-30" />
                {/* fake video frame */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                {/* top info */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-white border border-white/20">
                    {u.platform}
                  </div>
                  <div className="text-[10px] text-white/70 px-2 py-1 rounded-full bg-fuchsia-500/30 border border-fuchsia-500/50 backdrop-blur">
                    AI voice
                  </div>
                </div>
                {/* bottom info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm leading-snug font-medium mb-3">{u.caption}</p>
                  <div className="flex items-center gap-4 text-white/85 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-fuchsia-400 text-fuchsia-400" />
                      {u.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {u.views}
                    </div>
                    <div className="flex items-center gap-1 ml-auto">
                      <Share2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <Mic className="w-10 h-10 text-fuchsia-500 mx-auto mb-6" />
          <h2 className="font-display font-medium text-[clamp(2.4rem,5.5vw,4.4rem)] tracking-tight leading-[0.98] text-ink">
            5 minutes free.<br />
            <span className="font-serif-italic">No microphone needed.</span>
          </h2>
          <p className="text-muted mt-6 text-base sm:text-lg max-w-xl mx-auto">
            Generate your first AI voiceover in 30 seconds. Cancel anytime, your projects stay yours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Generate your first voice
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/products/woro-chat" className="btn-ghost">
              Explore WORO Chat
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
