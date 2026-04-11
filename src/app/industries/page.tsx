import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Industries from "@/components/Industries";
import CTABanner from "@/components/CTABanner";
import {
  Heart,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries — WORO Global",
  description:
    "Healthcare, fintech, education, retail, real estate, logistics, travel and manufacturing — WORO ships across the sectors that move the world.",
};

const sectors = [
  { id: "healthcare", icon: Heart, name: "Healthcare", tag: "HIPAA-ready", desc: "Patient portals, hospital ERPs and telemedicine platforms used by clinicians worldwide.", count: "12+ projects" },
  { id: "fintech", icon: Banknote, name: "Fintech", tag: "PCI-DSS", desc: "Wallets, trading dashboards and lending platforms with sub-200ms latency.", count: "18+ projects" },
  { id: "education", icon: GraduationCap, name: "Education", tag: "WCAG AA", desc: "LMS, virtual classrooms and student analytics serving 300k+ learners.", count: "9+ projects" },
  { id: "retail", icon: ShoppingBag, name: "Retail", tag: "Omnichannel", desc: "Headless e-commerce, inventory and POS deployed across 10k+ stores.", count: "22+ projects" },
  { id: "real-estate", icon: Building2, name: "Real Estate", tag: "MLS-ready", desc: "Listing apps, agent CRMs and immersive virtual tour experiences.", count: "8+ projects" },
  { id: "logistics", icon: Truck, name: "Logistics", tag: "Real-time", desc: "Fleet tracking, warehouse management and ML route optimization.", count: "14+ projects" },
  { id: "travel", icon: Plane, name: "Travel", tag: "GDS-ready", desc: "Booking engines, AI itinerary planners and loyalty programs.", count: "7+ projects" },
  { id: "manufacturing", icon: Factory, name: "Manufacturing", tag: "Industry 4.0", desc: "IoT monitoring, predictive maintenance and live production dashboards.", count: "11+ projects" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain depth that"
        italic="compounds with every build."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        subtitle="Eight years working across regulated and complex sectors. We bring that pattern library to every new project."
      />

      {/* Bento sector grid */}
      <section className="relative section-light py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((s, i) => {
              const Icon = s.icon;
              const big = i === 0 || i === 5;
              return (
                <Link
                  key={s.id}
                  href={`/industries/${s.id}`}
                  className={`group relative bg-white border border-line rounded-3xl p-7 card-hover overflow-hidden ${
                    big ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-transparent to-blue/0 group-hover:from-brand/8 group-hover:to-blue/5 transition-all duration-700" />
                  <div className="relative flex flex-col h-full min-h-[220px]">
                    <div className="flex items-start justify-between mb-10">
                      <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                        <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-soft border border-line text-muted">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-display font-medium text-2xl sm:text-3xl tracking-tight">{s.name}</h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed flex-1 max-w-sm">{s.desc}</p>
                    <div className="flex items-center justify-between mt-5 pt-5 border-t border-line">
                      <div className="text-[11px] uppercase tracking-[0.16em] text-brand">{s.count}</div>
                      <ArrowUpRight className="w-4 h-4 text-ink group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Industries />
      <CTABanner />
    </>
  );
}
