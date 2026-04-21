import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon, FacebookIcon } from "./SocialIcons";
import Logo from "./Logo";

const products = [
  { label: "WORO Chat — WhatsApp CRM", href: "/products/woro-chat" },
  { label: "WORO Voice — AI Calling Agents", href: "/products/woro-voice" },
  { label: "WORO UGC — UGC & Video Platform", href: "/products/woro-ugc" },
];

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Cloud Management", href: "/services/cloud-management" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "AI & ML Solutions", href: "/services/ai-ml-solutions" },
  { label: "DevOps & CI/CD", href: "/services/devops-cicd" },
];

const company = [
  { label: "WORO AI", href: "/woro-ai" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Knowledge Hub", href: "/knowledge" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative section-dark overflow-hidden">
      <div className="absolute inset-0 mesh-dark opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <h2 className="font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Let&apos;s build<br />
              <span className="font-serif-italic text-white/90">something</span>{" "}
              <span className="gradient-text-light">remarkable.</span>
            </h2>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:border-white transition"
            >
              <span className="text-sm tracking-wide">Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 arrow-fly" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">Products</h4>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-sm text-white/80 hover:text-white link-underline">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-white/80 hover:text-white link-underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">Company</h4>
              <ul className="space-y-3">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-sm text-white/80 hover:text-white link-underline">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-brand" />
                  hello@woroglobal.com
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-brand" />
                  +91 99966 11185
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand" />
                  Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Logo variant="light" />
          <div className="flex items-center gap-3">
            {[TwitterIcon, LinkedinIcon, GithubIcon, FacebookIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/5 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
            <span>© {new Date().getFullYear()} WORO Global</span>
          </div>
        </div>

        {/* Giant brand wordmark */}
        <div className="mt-16 -mx-6 lg:-mx-10 overflow-hidden">
          <div className="font-display font-black text-[22vw] leading-[0.85] text-center bg-gradient-to-b from-white/12 via-white/4 to-transparent bg-clip-text text-transparent select-none">
            woro<span className="text-brand">.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
