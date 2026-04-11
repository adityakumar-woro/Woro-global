import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import { Search, Palette, Code2, Bug, Rocket, LifeBuoy, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Process — WORO Global",
  description:
    "Our six-step development process — discovery, design, development, testing, deployment and support. Repeated until ship.",
};

const phases = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    duration: "1–2 weeks",
    summary: "We learn your business, your users, your stack and your constraints.",
    deliverables: ["Stakeholder workshops", "Technical audit", "Problem framing doc", "Roadmap & estimate"],
  },
  {
    num: "02",
    icon: Palette,
    title: "Design",
    duration: "2–4 weeks",
    summary: "From wireframes to a tight design system to interactive prototypes.",
    deliverables: ["UX flows", "Hi-fi prototypes", "Component library", "Motion specs"],
  },
  {
    num: "03",
    icon: Code2,
    title: "Development",
    duration: "Ongoing sprints",
    summary: "Two-week sprints, weekly demos, transparent burndown — and clean code.",
    deliverables: ["Sprint demos", "PR-based review", "Continuous deploys", "Daily standups"],
  },
  {
    num: "04",
    icon: Bug,
    title: "Testing",
    duration: "Continuous",
    summary: "QA automation, performance testing and security review baked in from day one.",
    deliverables: ["Test automation", "Load testing", "Security audit", "Manual QA"],
  },
  {
    num: "05",
    icon: Rocket,
    title: "Deployment",
    duration: "1 sprint",
    summary: "Cloud rollout, blue/green and zero downtime — no Friday deploys.",
    deliverables: ["Cloud rollout", "Runbooks", "Monitoring", "Disaster recovery"],
  },
  {
    num: "06",
    icon: LifeBuoy,
    title: "Support",
    duration: "Ongoing",
    summary: "24/7 monitoring, SLAs and ongoing iteration with the same team that built it.",
    deliverables: ["24/7 monitoring", "SLA-backed support", "Quarterly reviews", "Roadmap planning"],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A six-step playbook,"
        italic="repeated until ship."
        crumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
        subtitle="Same playbook for a 2-week MVP or a 2-year platform — only the cadence changes. Transparent, iterative, calm."
      />

      <Process />

      {/* Detailed phases */}
      <section className="relative section-soft py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Each phase, in detail
              </div>
              <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,4rem)] tracking-tight leading-[1] text-ink">
                What actually happens<br />
                <span className="font-serif-italic">in each sprint.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="group bg-white border border-line rounded-3xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 hover:border-ink/30 transition-colors card-hover"
                >
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="font-serif-italic text-3xl text-muted">{p.num}</div>
                    <div className="hidden lg:block w-px h-16 bg-line" />
                    <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                      <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-brand mb-2">{p.duration}</div>
                    <h3 className="font-display font-medium text-3xl sm:text-4xl tracking-tight">{p.title}</h3>
                    <p className="text-muted text-base sm:text-lg mt-3 leading-relaxed max-w-lg">{p.summary}</p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted mb-3">Deliverables</div>
                    <ul className="space-y-2">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-ink">
                          <Check className="w-4 h-4 text-brand" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
