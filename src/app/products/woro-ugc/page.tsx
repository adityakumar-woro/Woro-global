import type { Metadata } from "next";
import Link from "next/link";
import {
  Video,
  ArrowUpRight,
  Play,
  Sparkles,
  Languages,
  Wand2,
  Film,
  Zap,
  Download,
  Heart,
  Share2,
  MessageCircle,
  Users,
  TrendingUp,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "WORO UGC — UGC & marketing video generation platform",
  description:
    "Generate UGC-style ads and marketing videos at creator scale. AI avatars, hooks, 40+ languages, one-click publish to TikTok, Reels and Shorts.",
};

const avatars = [
  { name: "Maya", lang: "EN-US", style: "Gen-Z creator", tone: "from-fuchsia-200 to-pink-200" },
  { name: "Raj", lang: "EN-IN", style: "Tech reviewer", tone: "from-violet-200 to-fuchsia-200" },
  { name: "Sofia", lang: "ES-MX", style: "Lifestyle", tone: "from-pink-200 to-rose-200" },
  { name: "Akira", lang: "JA-JP", style: "Product unboxer", tone: "from-blue-200 to-violet-200" },
  { name: "Zoe", lang: "EN-GB", style: "Street POV", tone: "from-rose-200 to-fuchsia-200" },
  { name: "Leo", lang: "PT-BR", style: "Fitness coach", tone: "from-violet-200 to-blue-200" },
];

const features = [
  { icon: Users, title: "AI UGC avatars", desc: "Lifelike creators across ages, styles and languages — ready to say your script." },
  { icon: Wand2, title: "Viral hook templates", desc: "Proven TikTok/Reels hook formulas, auto-adapted to your product and offer." },
  { icon: Languages, title: "40+ languages", desc: "Native speakers and regional accents so ads feel local, not translated." },
  { icon: Film, title: "Auto B-roll & captions", desc: "Stock b-roll, kinetic captions and beat-synced cuts — zero manual editing." },
  { icon: Zap, title: "One-click publish", desc: "Ship directly to TikTok, Reels, Shorts, Meta Ads and YouTube." },
  { icon: TrendingUp, title: "Winning creative detection", desc: "Score every video against past winners before you spend on ads." },
];

const ugcExamples = [
  { platform: "TikTok", caption: "POV: you actually ran your ads on autopilot", views: "2.4M", likes: "184k" },
  { platform: "Reels", caption: "How DTC brands 10× UGC output with WORO", views: "1.1M", likes: "92k" },
  { platform: "Shorts", caption: "From script to viral in 90 seconds", views: "880k", likes: "67k" },
];

export default function WoroUGCPage() {
  return (
    <>
      <PageHero
        eyebrow="WORO UGC · Video Platform"
        title="UGC ads & marketing video,"
        italic="on autopilot."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "WORO UGC" },
        ]}
        subtitle="Generate scroll-stopping UGC ads and marketing videos in minutes. AI avatars, trending hooks, 40+ languages, one-click publish to TikTok, Reels and Shorts."
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
                Built for performance marketers
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                The UGC factory<br />
                <span className="font-serif-italic">your ads deserve.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-lg">
                WORO UGC turns a product brief into dozens of on-brand UGC videos.
                Pick an avatar, drop in your hook, auto-generate captions and B-roll,
                then publish straight to TikTok, Reels or Meta Ads. No creators, no cameras.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Generate your first UGC
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Watch samples
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-fuchsia-300/30 to-violet-300/20 blur-2xl" />
                <div className="relative bg-ink rounded-[2rem] border border-white/10 p-5 shadow-[0_50px_100px_-30px_rgba(10,10,10,0.5)] overflow-hidden">
                  <div className="absolute inset-0 mesh-dark opacity-40" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <div className="ml-3 text-[11px] text-white/55">woro-ugc — launch-campaign.ugc</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-[10px] px-2 py-1 rounded-full border border-white/15 text-white/60">Maya · 9:16</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-4">
                      <div className="col-span-2">
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-fuchsia-500/30 via-violet-500/25 to-pink-500/25">
                          <div className="absolute inset-0 noise opacity-30" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center">
                              <Play className="w-5 h-5 text-white fill-white" />
                            </div>
                          </div>
                          <div className="absolute top-2 left-2 text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-white/15 backdrop-blur text-white border border-white/20">
                            TikTok
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 space-y-1">
                            <div className="h-1.5 rounded-full bg-white/50 w-3/4" />
                            <div className="h-1.5 rounded-full bg-white/30 w-1/2" />
                          </div>
                          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/60 backdrop-blur text-white text-[9px] font-medium tracking-tight">
                            POV: you finally found…
                          </div>
                        </div>
                      </div>

                      <div className="col-span-3 rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="text-[10px] uppercase tracking-wider text-white/45 mb-3">Script · Hook → Payoff</div>
                        <div className="space-y-2 text-[12px] text-white/85 leading-relaxed">
                          <div>
                            <span className="bg-fuchsia-500/20 border border-fuchsia-500/40 rounded px-1 text-[10px]">HOOK</span>{" "}
                            POV — your ads stopped converting last week.
                          </div>
                          <div>
                            <span className="bg-violet-500/20 border border-violet-500/40 rounded px-1 text-[10px]">PAIN</span>{" "}
                            So you tried 12 new creatives. None worked.
                          </div>
                          <div>
                            <span className="bg-pink-500/20 border border-pink-500/40 rounded px-1 text-[10px]">OFFER</span>{" "}
                            WORO UGC shipped 40 ads in an hour. CTR 4.1×.
                          </div>
                          <div>
                            <span className="bg-blue-500/20 border border-blue-500/40 rounded px-1 text-[10px]">CTA</span>{" "}
                            Link in bio. Free for 5 videos.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        <div className="px-3 py-2 rounded-xl bg-white/8 border border-white/10 text-[10px] uppercase tracking-wider text-white/70">TikTok</div>
                        <div className="px-3 py-2 rounded-xl bg-white/8 border border-white/10 text-[10px] uppercase tracking-wider text-white/70">Reels</div>
                        <div className="px-3 py-2 rounded-xl bg-white/8 border border-white/10 text-[10px] uppercase tracking-wider text-white/70">Shorts</div>
                        <div className="px-3 py-2 rounded-xl bg-white/8 border border-white/10 text-[10px] uppercase tracking-wider text-white/70">Meta Ads</div>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-[11px] font-medium text-white shadow-[0_0_20px_rgba(217,70,239,0.5)] flex items-center gap-1.5">
                        <Download className="w-3 h-3" />
                        Publish
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-6 bottom-20 bg-white border border-line rounded-2xl px-3 py-2 shadow-lg">
                  <div className="text-[9px] uppercase tracking-wider text-muted">Render time</div>
                  <div className="text-sm font-display font-medium text-ink">42s · 20 variants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avatar library */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                UGC Avatar library
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                200+ AI creators.<br />
                <span className="font-serif-italic">Brand-safe. Diverse.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Hand-picked avatars across 40+ languages, ages, accents and creator styles
                — or clone your founder as the face of every ad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {avatars.map((v) => (
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
              See all 200+ avatars
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
                <span className="font-serif-italic">performance marketer.</span>
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
                Real brand wins
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-white">
                UGC that<br />
                <span className="font-serif-italic text-white/85">goes viral.</span>
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-white border border-white/20">
                    {u.platform}
                  </div>
                  <div className="text-[10px] text-white/70 px-2 py-1 rounded-full bg-fuchsia-500/30 border border-fuchsia-500/50 backdrop-blur">
                    AI UGC
                  </div>
                </div>
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
          <Video className="w-10 h-10 text-fuchsia-500 mx-auto mb-6" />
          <h2 className="font-display font-medium text-[clamp(2.4rem,5.5vw,4.4rem)] tracking-tight leading-[0.98] text-ink">
            5 videos free.<br />
            <span className="font-serif-italic">No creator needed.</span>
          </h2>
          <p className="text-muted mt-6 text-base sm:text-lg max-w-xl mx-auto">
            Generate your first UGC ad in 90 seconds. Cancel anytime — every clip stays yours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Generate your first UGC
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
