import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — WORO Global",
  description:
    "Tell us about your project. We'll get back within 24 hours with a real engineering perspective.",
};

const channels = [
  { icon: Mail, label: "Email us", value: "hello@woroglobal.com", desc: "We answer within 24 hours, weekends included." },
  { icon: Phone, label: "Call us", value: "+1 (555) 010-2024", desc: "Mon–Fri, 9am–7pm across all time zones." },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210", desc: "The fastest way to reach a real human." },
  { icon: Calendar, label: "Book a slot", value: "Pick a 30-min window", desc: "Free architecture & strategy consultation." },
];

const offices = [
  { city: "San Francisco", country: "United States", address: "221 Innovation Way, Suite 500", time: "PST · UTC-8", tone: "from-blue-100 to-cyan-100" },
  { city: "Bengaluru", country: "India", address: "No. 14, Indiranagar 100ft Road", time: "IST · UTC+5:30", tone: "from-violet-100 to-blue-100" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us what you're"
        italic="actually trying to build."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        subtitle="No sales pitch, no slideware. We'll come back with a real engineering perspective within 24 hours."
      />

      {/* 4 contact channels */}
      <section className="relative section-light py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href="#form"
                  className="group bg-white p-7 hover:bg-soft transition-colors duration-500 min-h-[200px] flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                    <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                  <div className="mt-6">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted">{c.label}</div>
                    <div className="font-display text-xl tracking-tight mt-1.5">{c.value}</div>
                    <p className="text-xs text-muted mt-2 leading-relaxed">{c.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <div id="form" />
      <Contact />

      {/* Offices */}
      <section className="relative section-dark py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
                <span className="w-6 h-px bg-white/40" />
                Where we work
              </div>
              <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,4rem)] tracking-tight leading-[1] text-white">
                Two cities,<br />
                <span className="font-serif-italic text-white/85">one team.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                Coverage across PST and IST means there's always someone awake on your project — even at 3am.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {offices.map((o) => (
              <div key={o.city} className="group relative rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition">
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${o.tone}`}>
                  <div className="absolute inset-0 noise opacity-50" />
                  <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] text-ink/70 px-2.5 py-1 rounded-full bg-white/60 backdrop-blur border border-white/40">
                    {o.country}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 font-display font-medium text-6xl sm:text-7xl text-ink/15 leading-none">
                    {o.city}
                  </div>
                </div>
                <div className="p-8 bg-white/[0.03]">
                  <h3 className="font-display font-medium text-3xl tracking-tight text-white">{o.city}</h3>
                  <div className="mt-4 space-y-2 text-sm text-white/65">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {o.address}
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      {o.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="relative section-light py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Common questions
            </div>
            <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,4rem)] tracking-tight leading-[1] text-ink">
              Things people ask before<br />
              <span className="font-serif-italic">our first call.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What's the smallest project you take on?",
                a: "We've shipped things as small as a 1-week landing page sprint and as big as multi-year platforms. If we can add real value, we're interested.",
              },
              {
                q: "Do you sign NDAs before the first call?",
                a: "Yes, happily. Send us your standard NDA and we'll counter-sign within a few hours.",
              },
              {
                q: "How do you price engagements?",
                a: "Fixed-price for well-scoped work, time & materials for ongoing partnerships. We'll recommend whichever fits your situation.",
              },
              {
                q: "Can we hire your team and bring them in-house later?",
                a: "Absolutely — we offer build-operate-transfer arrangements where the team eventually becomes your full-time hires.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-line rounded-3xl p-7 hover:border-ink/30 transition open:border-ink/30"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-display font-medium text-lg sm:text-xl tracking-tight pr-6">
                    {f.q}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center shrink-0 group-open:bg-ink group-open:border-ink group-open:rotate-45 transition-all">
                    <span className="text-ink group-open:text-white">+</span>
                  </div>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
