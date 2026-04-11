"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  href,
  strength = 22,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set(((e.clientX - cx) / r.width) * strength);
    y.set(((e.clientY - cy) / r.height) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        // @ts-expect-error ref type narrowing
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(className)}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      // @ts-expect-error ref type narrowing
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(className)}
    >
      {inner}
    </motion.button>
  );
}
