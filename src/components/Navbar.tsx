"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Globe,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Brain,
  GitBranch,
  Server,
  TestTube2,
  MessageCircle,
  PhoneCall,
  Mic,
  Video,
  Heart,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  desc?: string;
};

type MegaSection = {
  title: string;
  items: SubItem[];
};

type ProductCard = {
  name: string;
  tag: string;
  tagline: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accent: string;
};

type NavLink = {
  label: string;
  href: string;
  mega?: {
    sections?: MegaSection[];
    productCards?: ProductCard[];
    feature?: { title: string; desc: string; href: string; cta: string };
  };
};

const links: NavLink[] = [
  {
    label: "Services",
    href: "/services",
    mega: {
      sections: [
        {
          title: "Build & Develop",
          items: [
            { label: "Website Development", href: "/services/website-development", icon: Globe, desc: "Next-gen marketing sites" },
            { label: "Software Development", href: "/services/software-development", icon: Code2, desc: "Custom enterprise apps" },
            { label: "Mobile App Development", href: "/services/mobile-app-development", icon: Smartphone, desc: "iOS, Android & cross-platform" },
            { label: "QA & Testing", href: "/services/qa-testing", icon: TestTube2, desc: "Automated, performance, security" },
          ],
        },
        {
          title: "Run & Scale",
          items: [
            { label: "Cloud Management", href: "/services/cloud-management", icon: Cloud, desc: "AWS, Azure, GCP architecture" },
            { label: "Cybersecurity", href: "/services/cybersecurity", icon: ShieldCheck, desc: "Pen testing & zero trust" },
            { label: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server, desc: "On-prem, hybrid & edge" },
            { label: "DevOps & CI/CD", href: "/services/devops-cicd", icon: GitBranch, desc: "Pipelines & observability" },
          ],
        },
        {
          title: "Innovate",
          items: [
            { label: "AI & ML Solutions", href: "/services/ai-ml-solutions", icon: Brain, desc: "LLMs, automation, analytics" },
          ],
        },
      ],
      feature: {
        title: "Free architecture audit",
        desc: "Book a 30-min review with our senior team — we'll map quick wins.",
        href: "/contact",
        cta: "Book a slot",
      },
    },
  },
  {
    label: "Products",
    href: "/products",
    mega: {
      productCards: [
        {
          name: "WORO Voice",
          tag: "AI Voice Agents",
          tagline: "Human-sounding AI that handles calls 24/7 in 30+ languages.",
          href: "/products/woro-voice",
          icon: PhoneCall,
          gradient: "from-[#2e1065] via-[#6C5DFC] to-[#A78BFA]",
          accent: "#A78BFA",
        },
        {
          name: "WORO Chat",
          tag: "WhatsApp CRM",
          tagline: "Shared multi-agent inbox, no-code bots, broadcast campaigns.",
          href: "/products/woro-chat",
          icon: MessageCircle,
          gradient: "from-[#0b3b2e] via-[#0b5545] to-[#10b981]",
          accent: "#10b981",
        },
        {
          name: "WORO UGC",
          tag: "UGC & Video Platform",
          tagline: "Generate UGC-style ads and marketing videos at creator scale.",
          href: "/products/woro-ugc",
          icon: Video,
          gradient: "from-[#2a0b2e] via-[#5c1159] to-[#ec4899]",
          accent: "#f472b6",
        },
      ],
      feature: {
        title: "All three products. One platform.",
        desc: "Run sales, support and creative ops on a single AI stack.",
        href: "/products",
        cta: "Explore products",
      },
    },
  },
  {
    label: "Industries",
    href: "/industries",
    mega: {
      sections: [
        {
          title: "Sectors we serve",
          items: [
            { label: "Healthcare", href: "/industries/healthcare", icon: Heart },
            { label: "Fintech", href: "/industries/fintech", icon: Banknote },
            { label: "Education", href: "/industries/education", icon: GraduationCap },
            { label: "Retail", href: "/industries/retail", icon: ShoppingBag },
          ],
        },
        {
          title: "More sectors",
          items: [
            { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
            { label: "Logistics", href: "/industries/logistics", icon: Truck },
            { label: "Travel", href: "/industries/travel", icon: Plane },
            { label: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
          ],
        },
      ],
      feature: {
        title: "Domain depth that ships.",
        desc: "8+ years working across regulated and complex sectors.",
        href: "/industries",
        cta: "See case studies",
      },
    },
  },
  { label: "WORO AI", href: "/woro-ai" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  // Home page opens with a dark cinematic hero — inner pages use a light PageHero.
  const topIsDark = pathname === "/";
  const onLight = (scrolled || !!megaOpen) || !topIsDark;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > previous && latest > 140) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-130%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
      onMouseLeave={() => setMegaOpen(null)}
    >
      <div className="relative mx-auto max-w-7xl">
        <div
          className={cn(
            "relative flex items-center justify-between rounded-full px-5 sm:px-6 py-3 transition-all duration-500",
            scrolled || megaOpen
              ? "bg-white/90 backdrop-blur-xl border border-line shadow-[0_10px_40px_-15px_rgba(10,10,10,0.18)]"
              : onLight
              ? "bg-white/60 backdrop-blur-md border border-line/60"
              : "bg-white/0 border border-transparent"
          )}
        >
          <Link href="/" className="shrink-0">
            <Logo variant={onLight ? "dark" : "light"} />
          </Link>

          <nav
            className={cn(
              "hidden lg:flex items-center gap-1 rounded-full px-1.5 py-1.5 transition-colors duration-500",
              onLight
                ? "bg-soft border border-line"
                : "bg-white/10 border border-white/15 backdrop-blur-md"
            )}
          >
            {links.map((l) => (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(l.mega ? l.label : null)}
              >
                <Link
                  href={l.href}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-[13px] font-medium transition-all flex items-center gap-1",
                    onLight
                      ? "text-ink/75 hover:text-ink hover:bg-white"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  )}
                >
                  {l.label}
                  {l.mega && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors",
                onLight
                  ? "bg-ink text-white hover:bg-brand"
                  : "bg-white text-ink hover:bg-brand hover:text-white"
              )}
            >
              Book a call
              <ArrowUpRight className="w-3.5 h-3.5 arrow-fly" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              onLight || open ? "text-ink" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mega menu panel */}
        <AnimatePresence>
          {megaOpen &&
            (() => {
              const link = links.find((l) => l.label === megaOpen);
              if (!link?.mega) return null;
              return (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden lg:flex absolute inset-x-0 top-full mt-3 justify-center px-4 pointer-events-none"
                  onMouseEnter={() => setMegaOpen(megaOpen)}
                >
                  <div className="w-full max-w-[1100px] pointer-events-auto bg-white/95 backdrop-blur-xl border border-line rounded-3xl shadow-[0_30px_80px_-20px_rgba(10,10,10,0.25)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {link.mega.productCards ? (
                      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {link.mega.productCards.map((card) => {
                          const Icon = card.icon;
                          return (
                            <Link
                              key={card.href}
                              href={card.href}
                              onClick={() => setMegaOpen(null)}
                              className="group relative rounded-2xl overflow-hidden p-5 min-h-[210px] flex flex-col justify-between bg-white border border-line hover:border-ink/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,10,10,0.2)] transition-all duration-500"
                            >
                              <div
                                className="absolute -bottom-14 -right-14 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                style={{ background: card.accent }}
                              />
                              <div className="relative flex items-start justify-between">
                                <div
                                  className={cn(
                                    "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-[0_10px_20px_-10px_rgba(10,10,10,0.25)]",
                                    card.gradient
                                  )}
                                >
                                  <Icon className="w-5 h-5" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-all arrow-fly" />
                              </div>
                              <div className="relative">
                                <div
                                  className="text-[10px] uppercase tracking-[0.2em] mb-2"
                                  style={{ color: card.accent }}
                                >
                                  {card.tag}
                                </div>
                                <div className="font-display font-medium text-xl text-ink tracking-tight leading-none mb-2">
                                  {card.name}
                                </div>
                                <p className="text-[12px] text-muted leading-snug">
                                  {card.tagline}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
                        {link.mega.sections?.map((section) => (
                          <div key={section.title} className="min-w-0">
                            <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
                              {section.title}
                            </div>
                            <ul className="space-y-1">
                              {section.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setMegaOpen(null)}
                                      className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-2xl hover:bg-soft transition-colors"
                                    >
                                      <div className="w-9 h-9 shrink-0 rounded-xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                                        <Icon className="w-4 h-4 text-ink group-hover:text-white transition" />
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <div className="text-sm font-medium text-ink leading-tight">
                                          {item.label}
                                        </div>
                                        {item.desc && (
                                          <div className="text-[11px] text-muted mt-1 leading-[1.45] whitespace-normal break-words">
                                            {item.desc}
                                          </div>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {link.mega.feature && (
                      <div className="lg:col-span-4 relative rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-ink" />
                        <div className="absolute inset-0 mesh-dark opacity-70" />
                        <div className="relative p-6 flex flex-col h-full text-white">
                          <div className="text-[10px] uppercase tracking-[0.22em] text-white/60 mb-3">
                            Featured
                          </div>
                          <div className="font-display font-medium text-2xl tracking-tight leading-tight">
                            {link.mega.feature.title}
                          </div>
                          <p className="text-sm text-white/70 mt-3 leading-relaxed flex-1">
                            {link.mega.feature.desc}
                          </p>
                          <Link
                            href={link.mega.feature.href}
                            onClick={() => setMegaOpen(null)}
                            className="mt-5 inline-flex items-center gap-2 text-sm border-b border-white/30 pb-1 self-start hover:border-white"
                          >
                            {link.mega.feature.cta}
                            <ArrowUpRight className="w-3.5 h-3.5 arrow-fly" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })()}
        </AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 bg-white border border-line rounded-3xl p-6 flex flex-col gap-1 shadow-[0_20px_50px_-20px_rgba(10,10,10,0.2)] max-h-[80vh] overflow-y-auto"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink text-base py-3 border-b border-line last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-ink text-white px-5 py-3 text-center font-medium"
            >
              Book a call
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
