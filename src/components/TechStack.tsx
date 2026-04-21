"use client";

import SectionHeader from "./SectionHeader";

const row1 = ["React", "Next.js", "Node.js", "Python", "Django", "Spring Boot", "AWS", "Flutter", "Swift", "Kotlin"];
const row2 = ["TypeScript", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Azure", "GraphQL", "Firebase", "Kotlin", "Spring Boot"];

function Badge({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className="mx-3 shrink-0">
      <div
        className={`rounded-full px-7 py-4 font-display text-2xl tracking-tight whitespace-nowrap transition ${
          dark
            ? "border border-white/15 text-white/85 hover:bg-white hover:text-ink"
            : "border border-line text-ink hover:bg-ink hover:text-white hover:border-ink"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="relative section-soft py-28 sm:py-40 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Tools of the trade"
              title="Modern, battle-tested. No fads."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              We pick proven primitives over hot trends — your software outlives the framework cycle.
            </p>
          </div>
        </div>
      </div>

      <div className="relative space-y-5">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-soft to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-soft to-transparent z-10 pointer-events-none" />
        <div className="marquee">
          {[...row1, ...row1].map((l, i) => (
            <Badge key={i} label={l} />
          ))}
        </div>
        <div className="marquee-reverse">
          {[...row2, ...row2].map((l, i) => (
            <Badge key={i} label={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
