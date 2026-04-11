"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap, Headphones, Layers, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  { icon: Zap, title: "Agile delivery", desc: "Two-week sprints, weekly demos, transparent burndown." },
  { icon: Headphones, title: "24/7 support", desc: "Around-the-clock support across multiple time zones." },
  { icon: Layers, title: "Scalable architecture", desc: "Cloud-native systems engineered to grow with you." },
  { icon: ShieldCheck, title: "Security-first", desc: "SOC2-aligned practices baked into every release." },
];

const stats = [
  { value: 200, suffix: "+", label: "Happy clients" },
  { value: 98, suffix: "%", label: "Retention" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 15, suffix: "+", label: "Countries" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });
  const mv = useMotionValue(0);
  const r = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);
  const [d, setD] = useState("0" + suffix);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    const u = r.on("change", setD);
    return () => { c.stop(); u(); };
  }, [inView, to, mv, r]);
  return <span ref={ref}>{d}</span>;
}

export default function WhyUs() {
  return (
    <section className="relative section-soft py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 mesh opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why teams choose us"
              title="A senior team obsessed with outcomes."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              No juniors hiding behind project managers. The people you talk to
              are the people writing the code.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8 sm:p-10">
                <div className="font-display font-medium text-5xl sm:text-6xl tracking-tight gradient-text">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-white transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                    <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-xl tracking-tight">{f.title}</h3>
                    <p className="text-sm text-muted mt-1.5 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
