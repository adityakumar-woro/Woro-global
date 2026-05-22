"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siVuedotjs,
  siSvelte,
  siNodedotjs,
  siPython,
  siDjango,
  siGo,
  siSpring,
  siRust,
  siSwift,
  siKotlin,
  siFlutter,
  siGooglecloud,
  siVercel,
  siCloudflare,
  siPostgresql,
  siMongodb,
  siRedis,
  siGraphql,
  siSnowflake,
  siDocker,
  siKubernetes,
  siTerraform,
  siGithub,
  siGitlab,
  siAnthropic,
  siLangchain,
  siHuggingface,
  siNvidia,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type Tech = {
  name: string;
  cat: string;
  icon?: SimpleIcon;
  /** Fallback for brands not in simple-icons (e.g. AWS, Azure — excluded for
   *  trademark reasons). Rendered as a monogram tile. */
  fallback?: { mono: string; hex: string };
};

// Curated set covering the seven disciplines we actually ship.
const techs: Tech[] = [
  // Frontend
  { name: "React",       icon: siReact,        cat: "Frontend" },
  { name: "Next.js",     icon: siNextdotjs,    cat: "Frontend" },
  { name: "TypeScript",  icon: siTypescript,   cat: "Frontend" },
  { name: "Tailwind",    icon: siTailwindcss,  cat: "Frontend" },
  { name: "Vue",         icon: siVuedotjs,     cat: "Frontend" },
  { name: "Svelte",      icon: siSvelte,       cat: "Frontend" },
  // Backend
  { name: "Node.js",     icon: siNodedotjs,    cat: "Backend" },
  { name: "Python",      icon: siPython,       cat: "Backend" },
  { name: "Django",      icon: siDjango,       cat: "Backend" },
  { name: "Go",          icon: siGo,           cat: "Backend" },
  { name: "Spring",      icon: siSpring,       cat: "Backend" },
  { name: "Rust",        icon: siRust,         cat: "Backend" },
  // Mobile
  { name: "Swift",       icon: siSwift,        cat: "Mobile" },
  { name: "Kotlin",      icon: siKotlin,       cat: "Mobile" },
  { name: "Flutter",     icon: siFlutter,      cat: "Mobile" },
  // Cloud
  { name: "AWS",         cat: "Cloud",         fallback: { mono: "AWS", hex: "FF9900" } },
  { name: "Azure",       cat: "Cloud",         fallback: { mono: "Az",  hex: "0078D4" } },
  { name: "Google Cloud",icon: siGooglecloud,  cat: "Cloud" },
  { name: "Vercel",      icon: siVercel,       cat: "Cloud" },
  { name: "Cloudflare",  icon: siCloudflare,   cat: "Cloud" },
  // Data
  { name: "PostgreSQL",  icon: siPostgresql,   cat: "Data" },
  { name: "MongoDB",     icon: siMongodb,      cat: "Data" },
  { name: "Redis",       icon: siRedis,        cat: "Data" },
  { name: "GraphQL",     icon: siGraphql,      cat: "Data" },
  { name: "Snowflake",   icon: siSnowflake,    cat: "Data" },
  // DevOps
  { name: "Docker",      icon: siDocker,       cat: "DevOps" },
  { name: "Kubernetes",  icon: siKubernetes,   cat: "DevOps" },
  { name: "Terraform",   icon: siTerraform,    cat: "DevOps" },
  { name: "GitHub",      icon: siGithub,       cat: "DevOps" },
  { name: "GitLab",      icon: siGitlab,       cat: "DevOps" },
  // AI
  { name: "OpenAI",      cat: "AI",            fallback: { mono: "AI", hex: "10A37F" } },
  { name: "Anthropic",   icon: siAnthropic,    cat: "AI" },
  { name: "LangChain",   icon: siLangchain,    cat: "AI" },
  { name: "HuggingFace", icon: siHuggingface,  cat: "AI" },
  { name: "NVIDIA",      icon: siNvidia,       cat: "AI" },
];

const categories = ["Frontend", "Backend", "Mobile", "Cloud", "Data", "DevOps", "AI"] as const;
type Category = (typeof categories)[number] | "All";

function TechTile({ tech, index }: { tech: Tech; index: number }) {
  const hex = tech.icon?.hex ?? tech.fallback?.hex ?? "6C5DFC";
  const brand = `#${hex}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.018, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center gap-2 rounded-2xl border border-line bg-white p-3 sm:p-4 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_16px_32px_-16px_rgba(10,10,10,0.18)] transition-all"
    >
      <span
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors"
        style={{
          background: `linear-gradient(135deg, ${brand}22 0%, ${brand}0A 100%)`,
        }}
      >
        {tech.icon ? (
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:scale-110"
            style={{ color: brand }}
            fill="currentColor"
            aria-label={tech.name}
          >
            <title>{tech.name}</title>
            <path d={tech.icon.path} />
          </svg>
        ) : (
          <span
            className="font-display font-bold text-[10px] sm:text-[11px] tracking-tight transition-transform duration-500 group-hover:scale-110"
            style={{ color: brand }}
            aria-label={tech.name}
          >
            {tech.fallback?.mono ?? tech.name.slice(0, 2)}
          </span>
        )}
      </span>
      <span className="text-[11px] sm:text-xs font-medium text-ink/85 tracking-tight truncate max-w-full">
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="relative section-soft py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh opacity-40" />
      <div
        aria-hidden
        className="absolute -top-24 left-1/3 w-[34rem] h-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.16) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Tools of the trade"
              title="Modern, battle-tested. No fads."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {techs.length} technologies across {categories.length} disciplines — every
              one shipped to production, every one picked for longevity over hype.
            </p>
          </div>
        </div>

        {/* Category summary chips */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {categories.map((c) => {
            const count = techs.filter((t) => t.cat === c).length;
            return (
              <div
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[11px] text-ink/75"
              >
                <span className="w-1 h-1 rounded-full bg-brand" />
                <span className="font-medium">{c}</span>
                <span className="text-muted">· {count}</span>
              </div>
            );
          })}
        </div>

        {/* Dense unified grid */}
        <div className="relative rounded-3xl border border-line bg-white/85 backdrop-blur-sm p-4 sm:p-6 shadow-[0_30px_60px_-40px_rgba(10,10,10,0.15)]">
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
            {techs.map((t, i) => (
              <TechTile key={t.name} tech={t} index={i} />
            ))}
          </div>
        </div>

        {/* Tiny footnote */}
        <div className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted text-center">
          Plus {categories.length - 1}+ adjacent tools · observability, CI/CD, evals and more.
        </div>
      </div>
    </section>
  );
}
