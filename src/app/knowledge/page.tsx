import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { ArrowUpRight, BookOpen, FileText, Headphones, Video, Newspaper } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Hub — WORO Global",
  description:
    "Articles, guides, case studies and playbooks from the WORO engineering and design team.",
};

const featured = {
  category: "AI Engineering",
  title: "How we built WORO Voice — sub-300ms voice AI in production",
  excerpt:
    "Latency, jitter, hallucinations and the lessons we learned shipping a real-time voice AI to enterprise customers across 30+ languages.",
  author: "Harshit Sharma",
  readTime: "12 min read",
  date: "March 2026",
  tone: "from-violet-200 to-blue-200",
};

const articles = [
  {
    cat: "WhatsApp CRM",
    title: "Beyond chatbots: turning WhatsApp into a real CRM",
    excerpt: "How a multi-agent inbox changes the unit economics of customer support.",
    readTime: "8 min",
    date: "Mar 2026",
    icon: FileText,
    tone: "from-emerald-100 to-teal-100",
  },
  {
    cat: "Cloud",
    title: "We cut a client's AWS bill 38% in two weeks. Here's how.",
    excerpt: "A repeatable five-step audit you can run on your own infrastructure.",
    readTime: "10 min",
    date: "Mar 2026",
    icon: Newspaper,
    tone: "from-blue-100 to-cyan-100",
  },
  {
    cat: "AI",
    title: "Voice cloning ethics: what we ship and what we refuse",
    excerpt: "The guardrails behind WORO Cast and why we turned down two large deals last quarter.",
    readTime: "6 min",
    date: "Feb 2026",
    icon: Video,
    tone: "from-fuchsia-100 to-violet-100",
  },
  {
    cat: "Engineering",
    title: "From monolith to modular: a 90-day playbook",
    excerpt: "How to break apart a Django monolith without breaking your roadmap.",
    readTime: "14 min",
    date: "Feb 2026",
    icon: FileText,
    tone: "from-violet-100 to-blue-100",
  },
  {
    cat: "Product",
    title: "Designing a voice agent that doesn't sound creepy",
    excerpt: "What we learned tuning prosody, pauses and hand-offs to humans.",
    readTime: "9 min",
    date: "Feb 2026",
    icon: Headphones,
    tone: "from-emerald-100 to-blue-100",
  },
  {
    cat: "Case Study",
    title: "How a fintech client cut loan approval times 5×",
    excerpt: "Re-architecting the loan pipeline with event-driven services and ML scoring.",
    readTime: "7 min",
    date: "Jan 2026",
    icon: BookOpen,
    tone: "from-cyan-100 to-blue-100",
  },
];

const categories = [
  { name: "All", count: 42 },
  { name: "AI Engineering", count: 11 },
  { name: "Cloud", count: 8 },
  { name: "Product", count: 7 },
  { name: "Case Studies", count: 9 },
  { name: "Playbooks", count: 7 },
];

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge hub"
        title="Notes from the"
        italic="engineering desk."
        crumbs={[{ label: "Home", href: "/" }, { label: "Knowledge" }]}
        subtitle="Articles, guides, case studies and playbooks from the WORO Global team. No fluff, no SEO bait — just things we wish someone had told us."
      />

      {/* Filter pills */}
      <section className="relative section-light pt-4 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2">
            {categories.map((c, i) => (
              <button
                key={c.name}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm border transition whitespace-nowrap ${
                  i === 0
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-ink border-line hover:border-ink/40"
                }`}
              >
                {c.name}
                <span className="ml-2 text-[10px] opacity-60">{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured editorial */}
      <section className="relative section-light pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="#"
            className="group block relative rounded-[2rem] border border-line overflow-hidden card-hover"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className={`relative lg:col-span-6 aspect-[4/3] lg:aspect-auto bg-gradient-to-br ${featured.tone}`}>
                <div className="absolute inset-0 noise opacity-50" />
                <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] text-ink/70">
                  Featured
                </div>
                <div className="absolute bottom-6 left-6 right-6 font-display font-medium text-7xl sm:text-9xl text-ink/15 leading-none">
                  {featured.category.split(" ")[0]}
                </div>
              </div>
              <div className="lg:col-span-6 p-10 lg:p-14 bg-white flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-brand mb-5">
                    {featured.category}
                  </div>
                  <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.04] text-ink">
                    {featured.title}
                  </h2>
                  <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-xl">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                  <div className="text-sm text-muted">
                    {featured.author} · {featured.date} · {featured.readTime}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section className="relative section-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.title}
                  href="#"
                  className="group bg-white border border-line rounded-3xl overflow-hidden card-hover"
                >
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${a.tone}`}>
                    <div className="absolute inset-0 noise opacity-50" />
                    <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ink/70 px-2.5 py-1 rounded-full bg-white/60 backdrop-blur border border-white/40">
                      {a.cat}
                    </div>
                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-medium text-xl tracking-tight leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted mt-3 leading-relaxed">{a.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 pt-5 border-t border-line text-xs text-muted">
                      <span>{a.date}</span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <button className="btn-ghost">Load more articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative section-soft py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-badge" />
            Newsletter
          </div>
          <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,4rem)] tracking-tight leading-[1] text-ink">
            One email a month.<br />
            <span className="font-serif-italic">No filler.</span>
          </h2>
          <p className="text-muted mt-6">
            Get our latest playbooks, case studies and engineering deep-dives in your inbox.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white border border-line text-ink placeholder-muted/60 outline-none focus:border-ink transition"
            />
            <button type="submit" className="btn-primary justify-center">
              Subscribe
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
