"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // show once per session
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("woro-intro-seen");
    if (seen === "1") {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("woro-intro-seen", "1");
      setVisible(false);
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll while visible
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  // A ring of dots that coalesce into the wordmark center
  const dots = 28;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center overflow-hidden"
        >
          {/* radial glow core */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[420px] h-[420px] rounded-full bg-[#6C5DFC]/35 blur-[120px]"
          />

          {/* Orbiting dots that fly to center */}
          <motion.div
            className="absolute"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          >
            {Array.from({ length: dots }).map((_, i) => {
              const angle = (i / dots) * Math.PI * 2;
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.span
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white"
                  initial={{ x, y, opacity: 0, scale: 0 }}
                  animate={{
                    x: [x, x, 0],
                    y: [y, y, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    times: [0, 0.5, 1],
                    delay: i * 0.012,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ left: "50%", top: "50%", marginLeft: -3, marginTop: -3 }}
                />
              );
            })}
          </motion.div>

          {/* Wordmark — mask reveal from center outward */}
          <div className="relative z-10 overflow-hidden">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, filter: "blur(20px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[18vw] leading-none tracking-[-0.06em] text-white flex items-baseline"
            >
              wo
              <span className="relative inline-block">
                r
                <span className="absolute -top-1 -right-1 w-[0.14em] h-[0.14em] rounded-full bg-[#6C5DFC]" />
              </span>
              o
              <sup className="text-[0.2em] ml-1 text-[#A78BFA] self-start mt-[0.15em]">®</sup>
            </motion.div>
            {/* Sliding wipe */}
            <motion.div
              initial={{ x: "-101%" }}
              animate={{ x: "101%" }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>

          {/* Bottom progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 origin-left w-48 h-[1px] bg-white/60"
          />

          {/* Corner labels */}
          <div className="absolute top-8 left-8 text-[10px] uppercase tracking-[0.28em] text-white/55">
            WORO · Global
          </div>
          <div className="absolute top-8 right-8 text-[10px] uppercase tracking-[0.28em] text-white/55">
            Est. 2017
          </div>
          <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.28em] text-white/55">
            v2.0
          </div>
          <div className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.28em] text-white/55">
            Loading experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
