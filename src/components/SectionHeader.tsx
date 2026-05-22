"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RevealText } from "./AnimatedText";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn(align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-4xl")}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] mb-6",
            light ? "text-white/60" : "text-muted"
          )}
        >
          <span className={cn("w-6 h-px", light ? "bg-white/40" : "bg-ink/40")} />
          {eyebrow}
        </motion.div>
      )}
      <h2
        className={cn(
          "font-display font-medium text-[clamp(1.9rem,5.2vw,4.4rem)] leading-[1.02] tracking-[-0.035em]",
          light ? "text-white" : "text-ink"
        )}
      >
        <RevealText as="span">{title}</RevealText>
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={cn(
            "mt-6 text-base sm:text-lg max-w-xl",
            align === "center" && "mx-auto",
            light ? "text-white/65" : "text-muted"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
