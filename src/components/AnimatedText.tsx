"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word reveal mask animation.
 * Splits the children string into words; each word slides up from below
 * its mask. Triggers once when the element enters the viewport.
 */
export function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.045,
  as: Tag = "h2",
}: {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const words = children.split(" ");

  const MotionTag = motion[Tag];

  return (
    // @ts-expect-error generic motion tag
    <MotionTag ref={ref} className={cn("inline-block align-bottom", className)}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom leading-[1.25] pt-[0.08em] pb-[0.25em] px-[0.08em] -mx-[0.02em] mr-[0.2em] -mb-[0.1em]"
        >
          <motion.span
            className="inline-block leading-[1.25]"
            initial={{ y: "120%" }}
            animate={inView ? { y: 0 } : { y: "120%" }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/**
 * Multi-line reveal — split children by line breaks.
 */
export function RevealLines({
  lines,
  className,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          <RevealText delay={delay + i * 0.08} as="span">
            {line}
          </RevealText>
        </span>
      ))}
    </span>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 30,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
