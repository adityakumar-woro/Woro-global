"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const GLOBAL_CURSOR_CSS = `
@media (hover: hover) and (pointer: fine) {
  html, body { cursor: none; }
  a, button, input, textarea, select, [role="button"] { cursor: none !important; }
}
`;

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [variant, setVariant] = useState<"default" | "link" | "text">("default");
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  const springX = useSpring(x, { stiffness: 400, damping: 28, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mql.matches);

    // inject global cursor rules
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-cursor-global", "");
    styleEl.textContent = GLOBAL_CURSOR_CSS;
    document.head.appendChild(styleEl);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const interactive = el.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="link"]'
      );
      if (interactive) {
        setVariant("link");
        const l = (interactive as HTMLElement).getAttribute("data-cursor-label");
        setLabel(l);
      } else if (el.closest('[data-cursor="text"]')) {
        setVariant("text");
        setLabel(null);
      } else {
        setVariant("default");
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      styleEl.remove();
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Big outer ring — must sit above the scroll-trigger popup (z-[130]) so the
          cursor remains visible while hovering the close button and modal. */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] rounded-full border border-[#6C5DFC]/70 mix-blend-difference"
        style={{ x: springX, y: springY }}
        animate={{
          width: variant === "link" ? 80 : variant === "text" ? 6 : 28,
          height: variant === "link" ? 80 : variant === "text" ? 28 : 28,
          marginLeft: variant === "link" ? -40 : variant === "text" ? -3 : -14,
          marginTop: variant === "link" ? -40 : variant === "text" ? -14 : -14,
          borderRadius: variant === "text" ? 4 : 9999,
          borderColor:
            variant === "link" ? "rgba(108,93,252,1)" : "rgba(255,255,255,0.9)",
          backgroundColor:
            variant === "text" ? "rgba(108,93,252,0.9)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.5 }}
      >
        {label && variant === "link" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.18em] text-white font-medium"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[201] w-1.5 h-1.5 rounded-full bg-[#A78BFA] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          marginLeft: -3,
          marginTop: -3,
        }}
      />
    </>
  );
}
