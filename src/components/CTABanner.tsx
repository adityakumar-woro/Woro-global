"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { RevealText } from "./AnimatedText";

export default function CTABanner() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative section-dark rounded-[2.5rem] overflow-hidden p-10 sm:p-20 noise"
        >
          <div className="absolute inset-0 mesh-dark opacity-70" />
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand/40 blob" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue/40 blob" style={{ animationDelay: "5s" }} />

          <div className="relative max-w-4xl">
            <h2 className="font-display font-medium text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-[-0.04em] text-white">
              <RevealText as="span">ready to build</RevealText>{" "}
              <span className="font-serif-italic text-white/95">
                <RevealText as="span" delay={0.15}>something</RevealText>
              </span>{" "}
              <RevealText as="span" delay={0.3}>great?</RevealText>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-7 text-white/65 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Tell us what you&apos;re building. We&apos;ll come back within 24 hours
              with a real engineering perspective — no sales pitch, no slideware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton href="#contact" className="btn-primary btn-on-dark">
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="btn-ghost border-white/30 text-white hover:bg-white hover:text-ink"
              >
                <Calendar className="w-4 h-4" />
                Schedule a call
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
