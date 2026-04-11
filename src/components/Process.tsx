"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const steps = [
  { num: "01", title: "Discovery", desc: "Workshops, technical audits, problem framing." },
  { num: "02", title: "Design", desc: "UX flows, design system, hi-fi prototypes." },
  { num: "03", title: "Development", desc: "Two-week sprints, weekly demos, clean code." },
  { num: "04", title: "Testing", desc: "QA automation, performance, security review." },
  { num: "05", title: "Deployment", desc: "Cloud rollout, blue/green, zero downtime." },
  { num: "06", title: "Support", desc: "24/7 monitoring, SLAs, ongoing iteration." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative section-light py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 grid-mask" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="How we work"
              title="A six-step process, repeated until ship."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Same playbook for a 2-week MVP or a 2-year platform — only the
              cadence changes.
            </p>
          </div>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* center line */}
          <div className="absolute left-7 sm:left-1/2 top-0 bottom-0 w-px bg-line -translate-x-px" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-7 sm:left-1/2 top-0 w-px bg-gradient-to-b from-brand via-blue to-brand -translate-x-px"
          />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className={`relative flex sm:items-center gap-8 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* dot */}
                <div className="absolute left-7 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-ink z-10">
                  <div className="absolute inset-0.5 rounded-full bg-brand" />
                </div>

                <div className={`pl-16 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}>
                  <div className="font-serif-italic text-2xl text-muted mb-2">{s.num}</div>
                  <h3 className="font-display font-medium text-3xl sm:text-4xl tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base">{s.desc}</p>
                </div>

                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
