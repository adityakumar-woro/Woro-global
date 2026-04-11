import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { services, getService } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service — WORO Global" };
  return {
    title: `${service.name} — WORO Global`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const relatedItems = service.related
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow={`Service · ${service.num}`}
        title={service.hero.title}
        italic={service.hero.italic}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        subtitle={service.hero.subtitle}
      />

      {/* Intro + icon */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-soft to-white border border-line p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 mesh opacity-50" />
                <Icon className="relative w-32 h-32 text-ink" strokeWidth={1.2} />
                <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] text-muted">
                  {service.num}
                </div>
                <div className="absolute bottom-6 right-6 text-xs font-display text-muted">
                  {service.name}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                What we do
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
                Built like a product,<br />
                <span className="font-serif-italic">not a service.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed">{service.intro}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-soft border border-line text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Capabilities
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
                Everything we ship<br />
                <span className="font-serif-italic">in this practice.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {service.capabilities.map((c, i) => (
              <div
                key={c.title}
                className="bg-white p-8 sm:p-10 group hover:bg-soft transition-colors duration-500 min-h-[220px] flex flex-col"
              >
                <div className="font-serif-italic text-2xl text-muted mb-6">0{i + 1}</div>
                <h3 className="font-display font-medium text-2xl tracking-tight mb-3">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative section-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
                <span className="w-6 h-px bg-white/40" />
                Outcomes
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1] text-white">
                Numbers from real<br />
                <span className="font-serif-italic text-white/85">production engagements.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {service.outcomes.map((o) => (
              <div key={o.label} className="bg-white/[0.03] p-8 sm:p-10 backdrop-blur-sm">
                <div className="font-display font-medium text-5xl sm:text-6xl text-white tracking-tight">
                  {o.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mt-3">
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                How we work
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
                Four phases.<br />
                <span className="font-serif-italic">No surprises.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <div key={p.title} className="bg-white border border-line rounded-3xl p-7 hover:border-ink/30 transition card-hover relative overflow-hidden">
                <div className="font-serif-italic text-3xl text-muted mb-6">0{i + 1}</div>
                <h3 className="font-display font-medium text-xl tracking-tight mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              FAQs
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.4vw,3.4rem)] tracking-tight leading-[1.05] text-ink">
              Things people ask<br />
              <span className="font-serif-italic">about {service.name.toLowerCase()}.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-line rounded-3xl p-7 hover:border-ink/30 transition open:border-ink/30"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-display font-medium text-lg sm:text-xl tracking-tight pr-6">{f.q}</h3>
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

      {/* Related services */}
      <section className="relative section-light py-20 sm:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                <span className="w-6 h-px bg-ink/40" />
                Related services
              </div>
              <h2 className="font-display font-medium text-3xl sm:text-4xl tracking-tight">
                You might also need
              </h2>
            </div>
            <Link href="/services" className="hidden sm:inline-flex items-center gap-2 text-sm border-b border-ink/30 hover:border-ink transition">
              All services
              <ArrowUpRight className="w-3.5 h-3.5 arrow-fly" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedItems.map((r) => {
              const RelIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group bg-white border border-line rounded-3xl p-7 card-hover relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition">
                      <RelIcon className="w-5 h-5 text-ink group-hover:text-white transition" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                  <h3 className="font-display font-medium text-xl tracking-tight">{r.name}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{r.short}</p>
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
