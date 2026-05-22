"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, ShieldCheck, Trophy, BadgeCheck } from "lucide-react";

const ICONS = [Award, Sparkles, ShieldCheck, Trophy, BadgeCheck, Award, Sparkles, Trophy];

// Hand-tuned positions laid out on an oval around the center.
// Values are percentages of the container width/height.
const POSITIONS = [
  { x: 8, y: 16 },
  { x: 82, y: 12 },
  { x: 2, y: 48 },
  { x: 90, y: 46 },
  { x: 10, y: 82 },
  { x: 82, y: 82 },
  { x: 38, y: 2 },
  { x: 48, y: 96 },
];

export default function WoroAIAwardsOrbit({ awards }: { awards: string[] }) {
  const nodes = awards.slice(0, POSITIONS.length);

  return (
    <div className="relative mx-auto w-full max-w-[640px] aspect-square">
      {/* Ambient halo */}
      <div
        aria-hidden
        className="absolute inset-[12%] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,93,252,0.28) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      {/* Decorative dashed rings */}
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[6%] rounded-full border border-dashed border-ink/10"
      />
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[22%] rounded-full border border-dashed border-ink/15"
      />

      {/* Connecting SVG lines from center to each node */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="awardLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6C5DFC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {nodes.map((_, i) => {
          const p = POSITIONS[i];
          return (
            <motion.line
              key={i}
              x1={50}
              y1={50}
              x2={p.x}
              y2={p.y}
              stroke="url(#awardLine)"
              strokeWidth="0.25"
              strokeDasharray="0.8 1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {/* Award badges */}
      {nodes.map((a, i) => {
        const p = POSITIONS[i];
        const Icon = ICONS[i % ICONS.length];
        const dark = i % 2 === 1;

        return (
          <motion.div
            key={a}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.6,
              delay: 0.4 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
              className={`group relative inline-flex items-center gap-2 rounded-full border backdrop-blur-xl px-3 py-1.5 shadow-[0_16px_40px_-18px_rgba(10,10,10,0.3)] whitespace-nowrap cursor-default transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-18px_rgba(108,93,252,0.5)] ${
                dark
                  ? "bg-ink/95 border-white/10 text-white"
                  : "bg-white/95 border-line text-ink"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  dark
                    ? "bg-white/10 border border-white/15"
                    : "bg-gradient-to-br from-brand/20 to-blue/15 border border-line"
                }`}
              >
                <Icon className={`w-3 h-3 ${dark ? "text-white/90" : "text-brand"}`} />
              </div>
              <span
                className={`text-[10px] sm:text-[11px] font-medium ${
                  dark ? "text-white" : "text-ink"
                }`}
              >
                {a}
              </span>

              {/* Pulsing node dot */}
              <motion.span
                aria-hidden
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.9, 0.2, 0.9],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className={`absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                  dark ? "bg-[#60A5FA]" : "bg-brand"
                }`}
                style={{
                  boxShadow: dark
                    ? "0 0 10px rgba(96,165,250,0.9)"
                    : "0 0 10px rgba(108,93,252,0.9)",
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center medallion */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Outer glow */}
          <div
            aria-hidden
            className="absolute -inset-8 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle, #6C5DFC 0%, #4F46E5 40%, transparent 70%)",
            }}
          />
          {/* Rotating conic aurora */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.5 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #6C5DFC, #4F46E5, #2563EB, #60A5FA, #A78BFA, #6C5DFC)",
              filter: "blur(8px)",
            }}
          />
          {/* Core */}
          <div
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center text-white shadow-[0_30px_80px_-30px_rgba(108,93,252,0.7)] border border-white/20"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #A78BFA 0%, #6C5DFC 40%, #2e1065 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-full opacity-40 mix-blend-overlay"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%221.4%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>")',
              }}
            />
            <div className="relative">
              <Trophy className="w-5 h-5 mx-auto mb-1.5" />
              <div className="font-display font-bold text-3xl sm:text-4xl leading-none text-center">
                {awards.length}+
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] mt-2 text-white/80 text-center">
                recognitions
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
