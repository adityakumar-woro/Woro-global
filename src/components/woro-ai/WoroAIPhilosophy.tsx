"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Target,
    title: "Business-first strategy",
    desc: "We don't start with models — we start with P&L. Every engagement maps AI spend to a measurable business lever before a line of code ships.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85&auto=format&fit=crop",
    alt: "Strategy whiteboard with financial charts",
    tone: "from-violet-400/60 to-indigo-500/60",
    tag: "P&L · ROI modelling",
  },
  {
    num: "02",
    icon: Rocket,
    title: "Pragmatic, scalable implementation",
    desc: "Cloud-native architectures, evals from day one, cost-aware inference. What we hand over is a maintainable enterprise asset, not a demo.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=85&auto=format&fit=crop",
    alt: "Engineers collaborating on code",
    tone: "from-sky-400/60 to-blue-500/60",
    tag: "Cloud-native · evals · CI/CD",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Responsible AI & governance",
    desc: "Trust is non-negotiable. We ship with privacy, bias mitigation, audit trails and regulatory alignment (GDPR, HIPAA, SOC2) from prototype onward.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=85&auto=format&fit=crop",
    alt: "Security and governance visualization",
    tone: "from-emerald-400/60 to-teal-500/60",
    tag: "GDPR · HIPAA · SOC2",
  },
];

export default function WoroAIPhilosophy() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 w-[36rem] h-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-1/4 w-[36rem] h-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              The WORO AI philosophy
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
              Three principles.<br />
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
                Every engagement.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Why teams pick WORO over a consulting shop or a one-model vendor — the
              load-bearing beliefs that shape how we design, ship and operate AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden border border-line bg-white hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(108,93,252,0.4)] transition-all duration-500"
              >
                {/* Gradient border ring on hover */}
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(108,93,252,0.5) 0%, rgba(96,165,250,0.2) 50%, rgba(167,139,250,0.5) 100%)",
                    padding: 1,
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Image header */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-br ${p.tone} mix-blend-multiply`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0.55) 100%)",
                    }}
                  />
                  <div aria-hidden className="absolute inset-0 noise opacity-25 mix-blend-overlay" />

                  <div className="relative h-full p-5 flex flex-col justify-between text-white">
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif-italic text-3xl text-white/70">
                        {p.num}
                      </span>
                    </div>
                    <div className="inline-flex self-start items-center gap-1.5 rounded-full bg-white/20 backdrop-blur border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                      {p.tag}
                    </div>
                  </div>
                </div>

                {/* Hover glow halo */}
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(108,93,252,0.3) 0%, transparent 70%)",
                  }}
                />

                {/* Body */}
                <div className="relative p-6 sm:p-7 bg-white">
                  <h3 className="font-display font-medium text-2xl tracking-tight text-ink leading-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
