import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import WoroAICinematicHero from "@/components/woro-ai/WoroAICinematicHero";
import WoroAIVisualIntro from "@/components/woro-ai/WoroAIVisualIntro";
import WoroAISignals from "@/components/woro-ai/WoroAISignals";
import WoroAICapabilities from "@/components/woro-ai/WoroAICapabilities";
import WoroAIImpactViz from "@/components/woro-ai/WoroAIImpactViz";
import WoroAIPartners from "@/components/woro-ai/WoroAIPartners";
import WoroAISectors from "@/components/woro-ai/WoroAISectors";
import WoroAIPhilosophy from "@/components/woro-ai/WoroAIPhilosophy";
import WoroAIStackGraph from "@/components/woro-ai/WoroAIStackGraph";
import WoroAITestimonials from "@/components/woro-ai/WoroAITestimonials";
import WoroAIAwardsOrbit from "@/components/woro-ai/WoroAIAwardsOrbit";
import WoroAIFinalCTA from "@/components/woro-ai/WoroAIFinalCTA";

export const metadata: Metadata = {
  title: "WORO AI — Your enterprise AI transformation partner",
  description:
    "Strategy, platform engineering, GenAI, ML, MLOps and responsible AI — end-to-end AI services and in-house AI products for enterprises that want compounding advantage.",
};

const partners = [
  "AWS", "Microsoft Azure", "Google Cloud", "NVIDIA", "OpenAI",
  "Anthropic", "Databricks", "Snowflake", "HuggingFace", "Pinecone",
  "LangChain", "LlamaIndex",
];

const awards = [
  "AWS Advanced Partner · 2025",
  "Deloitte Fast 50 · 2024",
  "Clutch Top AI · 2025",
  "Statista High-Growth · 2025",
  "ISO 27001 Certified",
  "SOC2 Type II",
  "G2 Leader · AI",
  "GPTW Certified · 2025",
];

const posts = [
  {
    cat: "Agents",
    title: "How to choose the right AI agent framework in 2026",
    read: "8 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=85&auto=format&fit=crop",
  },
  {
    cat: "GenAI",
    title: "25 enterprise GenAI use cases we actually saw ship this year",
    read: "11 min",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85&auto=format&fit=crop",
  },
  {
    cat: "MLOps",
    title: "The eval-first playbook: why 85% of AI pilots never reach prod",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=85&auto=format&fit=crop",
  },
];

export default function WoroAIPage() {
  return (
    <>
      {/* 1. Light cinematic hero */}
      <WoroAICinematicHero />

      {/* 2. Light trusted-by marquee */}
      <section className="relative bg-white border-y border-line py-8 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 mb-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted text-center">
            Trusted by AI teams building on
          </div>
        </div>
        <div
          className="relative mx-auto max-w-[1400px] flex flex-col gap-2"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="marquee gap-12 items-center">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`m1-${i}`}
                className="font-display font-medium text-lg tracking-tight whitespace-nowrap text-ink/45"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Visual intro — HD AI image + overlays */}
      <WoroAIVisualIntro />

      {/* 4. Signals — tight 4-up card grid */}
      <WoroAISignals />

      {/* 5. Capabilities — auto-sliding carousel */}
      <WoroAICapabilities />

      {/* 6. Hard-truth impact viz (light) */}
      <WoroAIImpactViz />

      {/* 7. Strategic technology partnerships */}
      <WoroAIPartners />

      {/* 8. Sectors — center-focus auto slider */}
      <WoroAISectors />

      {/* 9. Philosophy — 3 light cards with HD imagery */}
      <WoroAIPhilosophy />

      {/* 10. Capability stack — light cards */}
      <WoroAIStackGraph />

      {/* 11. Testimonials */}
      <WoroAITestimonials />

      {/* 12. Awards constellation */}
      <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
        <div
          aria-hidden
          className="absolute top-20 left-1/4 w-[32rem] h-[32rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Industry recognition
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Recognized by<br />
                <span
                  className="font-serif-italic"
                  style={{
                    background:
                      "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  the people who count AI wins.
                </span>
              </h2>
              <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-md">
                Independent analysts, cloud partners and review platforms — each benchmark
                earned on shipped outcomes.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition"
              >
                See our case studies
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <WoroAIAwardsOrbit awards={awards} />
            </div>
          </div>
        </div>
      </section>

      {/* 13. Knowledge posts */}
      <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                The WORO AI knowledge centre
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Cut through the AI noise.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Long-form field notes from production AI — what compounds, what doesn&apos;t,
                and what we&apos;d do differently at 10× the scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((p) => (
              <Link
                key={p.title}
                href="/knowledge"
                className="group rounded-3xl border border-line bg-white overflow-hidden hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_rgba(108,93,252,0.3)] transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0.45) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 mix-blend-overlay opacity-60"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(108,93,252,0.25) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.22em] px-3 py-1 rounded-full bg-white/75 backdrop-blur border border-white/50 text-ink/70 font-medium">
                    {p.cat}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-medium text-xl tracking-tight leading-snug text-ink group-hover:text-brand transition">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
                    <Sparkles className="w-3 h-3 text-brand" />
                    {p.read} read
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-ink transition"
            >
              Browse all AI field notes
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Final CTA — light showstopper */}
      <WoroAIFinalCTA />
    </>
  );
}
