"use client";

import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  { quote: "WORO rebuilt our trading dashboard in 8 weeks. Page loads dropped from 4.2s to under 600ms. Game changing.", name: "Sarah Mitchell", role: "VP Engineering", company: "Quantix Capital", rating: 5 },
  { quote: "Their AI team took our backlog of unstructured data and gave us a real product. Closed two enterprise deals because of it.", name: "David Okafor", role: "CTO", company: "MedFlow AI", rating: 5 },
  { quote: "Honestly the most senior team we've worked with — they push back on bad ideas and ship clean code. Rare combo.", name: "Priya Raman", role: "Product Lead", company: "Lumen Retail", rating: 5 },
  { quote: "Migrated us off legacy infra without a single second of downtime. Cloud bill is down 38%.", name: "Marcus Hart", role: "Director of IT", company: "Atlas Logistics", rating: 5 },
  { quote: "From discovery to launch in 90 days. Their delivery cadence is genuinely impressive.", name: "Elena Voss", role: "Founder", company: "Brightline EdTech", rating: 5 },
  { quote: "Security audit found 0 critical issues post-launch. Their security-first approach paid off.", name: "Hiroshi Tanaka", role: "CISO", company: "SafeBridge Bank", rating: 5 },
];

function Card({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="w-[360px] sm:w-[440px] shrink-0 mx-3">
      <div className="relative h-full bg-white border border-line rounded-3xl p-7 hover:border-ink/30 transition-colors">
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-ink text-ink" />
          ))}
        </div>
        <p className="font-display text-xl leading-snug tracking-tight text-ink">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="mt-7 flex items-center gap-3 pt-5 border-t border-line">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-blue text-white flex items-center justify-center font-medium">
            {t.name.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-sm text-ink">{t.name}</div>
            <div className="text-xs text-muted">{t.role} · {t.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative section-light py-20 sm:py-28 md:py-40 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Testimonials"
              title="What teams say after we ship."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Real quotes from real founders, VPs and engineering leaders.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <div className="marquee">
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
