import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, AlertCircle, Lightbulb } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { industries, getIndustry } from "@/lib/industries-data";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry — WORO Global" };
  return {
    title: `${industry.name} — WORO Global`,
    description: industry.short,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const Icon = industry.icon;
  const relatedItems = industry.related
    .map((slug) => getIndustry(slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <PageHero
        eyebrow={`Industry · ${industry.tag}`}
        title={industry.hero.title}
        italic={industry.hero.italic}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        subtitle={industry.hero.subtitle}
      />

      {/* Intro + showcase */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-soft to-white border border-line relative overflow-hidden">
                <div className="absolute inset-0 mesh opacity-60" />
                <div className="absolute inset-0 noise opacity-40" />
                <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] text-muted">
                  {industry.tag}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-40 h-40 text-ink/85" strokeWidth={1.1} />
                </div>
                <div className="absolute bottom-6 left-6 right-6 font-display font-medium text-5xl text-ink/90">
                  {industry.name}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Sector overview
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
                Domain depth that<br />
                <span className="font-serif-italic">compounds.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed">{industry.intro}</p>

              <div className="mt-10 grid grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                {industry.stats.map((s) => (
                  <div key={s.label} className="bg-white p-6">
                    <div className="font-display font-medium text-3xl text-ink tracking-tight">{s.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                The reality
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
                What slows teams down<br />
                <span className="font-serif-italic">and what we do about it.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-white border border-line p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted">Challenges</div>
              </div>
              <ul className="space-y-5">
                {industry.challenges.map((c) => (
                  <li key={c.title}>
                    <h4 className="font-display font-medium text-lg tracking-tight">{c.title}</h4>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-ink text-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 mesh-dark opacity-40" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-brand" />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">Our approach</div>
                </div>
                <ul className="space-y-5">
                  {industry.solutions.map((s) => (
                    <li key={s.title}>
                      <h4 className="font-display font-medium text-lg tracking-tight text-white">{s.title}</h4>
                      <p className="text-sm text-white/65 mt-1 leading-relaxed">{s.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Case studies
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
                Production work in<br />
                <span className="font-serif-italic">{industry.name.toLowerCase()}.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {industry.caseStudies.map((c) => (
              <Link key={c.name} href="/contact" className="group bg-white border border-line rounded-3xl overflow-hidden card-hover">
                <div className={`relative h-44 bg-gradient-to-br ${c.tone}`}>
                  <div className="absolute inset-0 noise opacity-50" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ink/60">Case Study</div>
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-medium text-xl tracking-tight">{c.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.stack.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-soft border border-line text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-line text-sm font-medium text-brand">{c.metric}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="relative section-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                <span className="w-6 h-px bg-ink/40" />
                Related sectors
              </div>
              <h2 className="font-display font-medium text-3xl sm:text-4xl tracking-tight">Other industries we serve</h2>
            </div>
            <Link href="/industries" className="hidden sm:inline-flex items-center gap-2 text-sm border-b border-ink/30 hover:border-ink transition">
              All industries
              <ArrowUpRight className="w-3.5 h-3.5 arrow-fly" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedItems.map((r) => {
              const RelIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  href={`/industries/${r.slug}`}
                  className="group bg-white border border-line rounded-3xl p-7 card-hover relative overflow-hidden flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                    <RelIcon className="w-6 h-6 text-ink group-hover:text-white transition" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-medium text-xl tracking-tight">{r.name}</h3>
                    <p className="text-sm text-muted mt-1 truncate">{r.short}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
