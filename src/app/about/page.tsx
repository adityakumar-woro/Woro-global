import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import { Quote, Sparkles, Target, Compass, Users, Hammer, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — WORO Global",
  description:
    "WORO was born from the frustration of seeing great businesses stuck with average execution. We are problem-solvers, engineers, marketers and creatives.",
};

const values = [
  { icon: Target, title: "Cross-disciplinary teams", desc: "Engineers, designers, strategists and marketers — led by seasoned professionals, never juniors hiding behind PMs." },
  { icon: Users, title: "Founder-led partnerships", desc: "Founders are personally involved in every major engagement. The people you talk to are the people doing the work." },
  { icon: Compass, title: "Problem-focused, not service-focused", desc: "We start with your business problem. The stack, the framework, the org chart all flow from that." },
  { icon: Hammer, title: "Agile and iterative", desc: "Two-week sprints, weekly demos, transparent burndown. You see progress, not promises." },
  { icon: Heart, title: "Radical ownership", desc: "We measure success by your outcomes — not story points shipped or hours billed." },
];

const team = [
  { name: "Harshit Sharma", role: "Founder · IT Architect", initials: "HS", tone: "from-violet-200 to-blue-200" },
  { name: "Neha Sharma", role: "Marketing Strategist", initials: "NS", tone: "from-fuchsia-200 to-violet-200" },
  { name: "Engineering Pod", role: "12 senior full-stack engineers", initials: "EP", tone: "from-blue-200 to-cyan-200" },
  { name: "Design Studio", role: "Product designers & motion artists", initials: "DS", tone: "from-emerald-200 to-blue-200" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WORO"
        title="We don't build solutions."
        italic="We build the future."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        subtitle="WORO Global is a team of problem-solvers, engineers, marketers, analysts and creatives. We deliver thoughtful solutions — not run-of-the-mill ones."
      />

      {/* Origin story */}
      <section className="relative section-light py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Our story
              </div>
              <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,4.2rem)] tracking-tight leading-[1] text-ink">
                Born from a single<br />
                <span className="font-serif-italic">frustration.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 lg:pt-4">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-10 h-10 text-brand/20" />
                <p className="relative font-display text-2xl sm:text-3xl leading-snug tracking-tight text-ink pl-10">
                  WORO was born from the frustration of seeing great businesses stuck with average execution.
                </p>
              </div>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Our founder set out to build the place he kept looking for and never finding —
                a team where innovation and elegant design converge, where craft is the
                default, and where ownership is radical, not rationed.
              </p>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Today, WORO Global is that team. Engineers, designers, marketers, analysts
                and creatives, all sitting in the same room, all asking the same question:
                <span className="text-ink font-medium"> what would actually move the needle for this customer?</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative section-dark py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-60" />
        <div className="absolute inset-0 grid-bg-dark grid-mask opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative rounded-3xl border border-white/10 p-10 sm:p-12 bg-white/[0.03] overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand/30 blur-3xl group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/55 mb-6">
                  <Target className="w-3.5 h-3.5" />
                  Mission
                </div>
                <p className="font-display font-medium text-3xl sm:text-4xl leading-[1.1] tracking-tight text-white">
                  To solve complex business problems with{" "}
                  <span className="font-serif-italic text-white/90">beautifully engineered solutions</span>,
                  powered by sharp minds, clear processes, and radical ownership.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl border border-white/10 p-10 sm:p-12 bg-white/[0.03] overflow-hidden group">
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue/30 blur-3xl group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/55 mb-6">
                  <Compass className="w-3.5 h-3.5" />
                  Vision
                </div>
                <p className="font-display font-medium text-3xl sm:text-4xl leading-[1.1] tracking-tight text-white">
                  To be a force of transformation for{" "}
                  <span className="font-serif-italic text-white/90">forward-thinking businesses</span>,
                  through intelligent design, ethical tech, and uncompromising execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-light py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                What makes us different
              </div>
              <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,4.2rem)] tracking-tight leading-[1] text-ink">
                We don't do<br />
                <span className="font-serif-italic">"run-of-the-mill."</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Five principles we don't compromise on — even when it would be cheaper or faster to.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white p-8 sm:p-10 group hover:bg-soft transition-colors duration-500 min-h-[260px] flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center mb-6 group-hover:bg-ink group-hover:border-ink transition">
                    <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                  <h3 className="font-display font-medium text-2xl tracking-tight mb-3">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative section-soft py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                The team
              </div>
              <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,4.2rem)] tracking-tight leading-[1] text-ink">
                Senior people.<br />
                <span className="font-serif-italic">Personally invested.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                A small bench of senior practitioners — not a body shop. You meet them
                in the kickoff and they ship the work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.name} className="group relative rounded-3xl bg-white border border-line overflow-hidden card-hover">
                <div className={`relative aspect-square bg-gradient-to-br ${m.tone}`}>
                  <div className="absolute inset-0 noise opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center font-display font-medium text-7xl text-ink/80">
                    {m.initials}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-medium text-xl tracking-tight">{m.name}</h3>
                  <div className="text-sm text-muted mt-1">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />

      {/* Manifesto strip */}
      <section className="relative section-light py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <Sparkles className="w-8 h-8 mx-auto text-brand mb-6" />
          <h2 className="font-display font-medium text-[clamp(2.6rem,6vw,5rem)] tracking-tight leading-[0.95] text-ink">
            We don't just<br />build solutions.<br />
            <span className="font-serif-italic gradient-text">We build the future.</span>
          </h2>
          <Link href="/contact" className="btn-primary mt-12">
            Build it with us
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
