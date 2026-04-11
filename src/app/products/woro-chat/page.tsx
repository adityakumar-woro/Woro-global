import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Check,
  ArrowUpRight,
  Bot,
  Users,
  Megaphone,
  Zap,
  Inbox,
  Workflow,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "WORO Chat — WhatsApp CRM for sales, support and marketing",
  description:
    "Run sales, support and marketing from one shared WhatsApp inbox. No-code chatbots, broadcast campaigns, multi-agent assignment and CRM sync.",
};

const features = [
  { icon: Inbox, title: "Shared inbox", desc: "Every conversation, every agent, in one searchable timeline." },
  { icon: Bot, title: "No-code chatbots", desc: "Drag-and-drop bot builder that handles 70% of tickets autonomously." },
  { icon: Workflow, title: "Automation flows", desc: "Triggers, conditions and actions — like Zapier, but native to WhatsApp." },
  { icon: Users, title: "Multi-agent routing", desc: "Smart assignment based on skills, language and availability." },
  { icon: Megaphone, title: "Broadcast campaigns", desc: "Drip campaigns and bulk messages with delivery analytics." },
  { icon: ShieldCheck, title: "Approved templates", desc: "WhatsApp Business API templates, pre-approved and stored." },
  { icon: BarChart3, title: "Real-time analytics", desc: "Response times, CSAT, agent performance — live." },
  { icon: Zap, title: "CRM sync", desc: "Native HubSpot, Salesforce, Zoho — every chat lands in your CRM." },
];

const automationFlow = [
  { trigger: "Customer sends 'pricing'", action: "Bot replies with PDF + pricing link" },
  { trigger: "No reply in 2 hours", action: "Auto-assign to senior agent" },
  { trigger: "Order shipped event", action: "Send tracking + delivery ETA" },
  { trigger: "Negative sentiment detected", action: "Escalate to team lead instantly" },
];

const stats = [
  { value: "5×", label: "Faster response" },
  { value: "70%", label: "Auto-resolved" },
  { value: "4.9★", label: "Customer rating" },
  { value: "24/7", label: "Always on" },
];

export default function WoroChatPage() {
  return (
    <>
      <PageHero
        eyebrow="WORO Chat · WhatsApp CRM"
        title="One inbox."
        italic="Every conversation."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "WORO Chat" },
        ]}
        subtitle="Turn WhatsApp into a real CRM. Route conversations, build no-code chatbots, run broadcast campaigns and never lose a customer in the noise."
      />

      {/* Phone mockup hero */}
      <section className="relative section-light py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-200/40 blob" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-emerald-700 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-badge" />
                Live on WhatsApp Business API
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Chat with customers,<br />
                <span className="font-serif-italic">not at them.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-lg">
                WORO Chat sits on top of your WhatsApp Business API and turns it into a real
                customer platform. One shared inbox for the whole team. Bots that actually
                resolve tickets. Campaigns with delivery analytics.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Try WORO Chat free
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Book a demo
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white p-4 text-center">
                    <div className="font-display font-medium text-2xl text-ink">{s.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.14em] text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-200/50 to-teal-200/30 blur-2xl" />
                <div className="relative w-[300px] sm:w-[340px] aspect-[9/19] bg-ink rounded-[2.6rem] p-3 shadow-[0_50px_80px_-30px_rgba(10,10,10,0.5)] border border-ink">
                  <div className="relative w-full h-full bg-[#0b141a] rounded-[2.2rem] overflow-hidden">
                    {/* status bar */}
                    <div className="flex justify-between items-center px-6 pt-3 pb-2 text-white text-[10px]">
                      <span>9:41</span>
                      <span className="font-mono">●●●●● 5G</span>
                    </div>
                    {/* WA header */}
                    <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-display font-medium">
                        W
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm font-medium">WORO Support</div>
                        <div className="text-emerald-400 text-[10px] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          online · typing…
                        </div>
                      </div>
                    </div>
                    {/* messages */}
                    <div className="px-3 py-4 space-y-3 bg-[#0b141a] h-full">
                      <div className="flex">
                        <div className="max-w-[78%] bg-[#202c33] rounded-2xl rounded-bl-sm px-3 py-2 text-white text-xs">
                          Hey! Need help with my order
                          <div className="text-white/40 text-[9px] mt-1 text-right">9:42</div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[78%] bg-[#005c4b] rounded-2xl rounded-br-sm px-3 py-2 text-white text-xs">
                          Hi! 👋 I&apos;m WORO Bot. Can I have your order number?
                          <div className="text-white/50 text-[9px] mt-1 text-right">9:42 ✓✓</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="max-w-[78%] bg-[#202c33] rounded-2xl rounded-bl-sm px-3 py-2 text-white text-xs">
                          #WG-44218
                          <div className="text-white/40 text-[9px] mt-1 text-right">9:43</div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[78%] bg-[#005c4b] rounded-2xl rounded-br-sm px-3 py-2 text-white text-xs">
                          Found it. Ships tomorrow 9am 📦<br />
                          Tracking: <span className="underline">trk.woro/44218</span>
                          <div className="text-white/50 text-[9px] mt-1 text-right">9:43 ✓✓</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-[#202c33] rounded-2xl rounded-bl-sm px-3 py-2 flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: "0.15s" }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: "0.3s" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* floating bot tag */}
                <div className="absolute -left-8 top-32 bg-white border border-line rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-xs font-medium text-ink">Bot active</span>
                </div>
                <div className="absolute -right-12 bottom-32 bg-white border border-line rounded-2xl px-3 py-2 shadow-lg">
                  <div className="text-[9px] uppercase tracking-wider text-muted">Avg reply</div>
                  <div className="text-sm font-display font-medium text-ink">12s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative section-soft py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Features
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                A real CRM,<br />
                <span className="font-serif-italic">on top of WhatsApp.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Eight focused capabilities — every one designed for teams that
                live in WhatsApp all day.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white p-7 group hover:bg-emerald-50/30 transition-colors duration-500 min-h-[200px] flex flex-col"
                >
                  <div className="w-11 h-11 rounded-2xl bg-soft border border-line flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition">
                    <Icon className="w-5 h-5 text-ink group-hover:text-white transition" />
                  </div>
                  <h3 className="font-display font-medium text-xl tracking-tight mb-2">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation flow */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 grid-mask" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Automations
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-ink">
                Set it once.<br />
                <span className="font-serif-italic">Reply forever.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {automationFlow.map((a, i) => (
              <div
                key={i}
                className="group bg-white border border-line rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:border-emerald-500/40 transition card-hover"
              >
                <div className="lg:col-span-1 font-serif-italic text-3xl text-muted">0{i + 1}</div>
                <div className="lg:col-span-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-1">Trigger</div>
                    <div className="font-display font-medium text-lg tracking-tight">{a.trigger}</div>
                  </div>
                </div>
                <div className="lg:col-span-1 flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-muted rotate-45" />
                </div>
                <div className="lg:col-span-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center shrink-0">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-1">Action</div>
                    <div className="font-display font-medium text-lg tracking-tight">{a.action}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative section-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
                <span className="w-6 h-px bg-white/40" />
                Native integrations
              </div>
              <h2 className="font-display font-medium text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.02] text-white">
                Plugs into your stack.<br />
                <span className="font-serif-italic text-white/85">Day one.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "HubSpot",
              "Salesforce",
              "Zoho",
              "Pipedrive",
              "Shopify",
              "Stripe",
              "Slack",
              "Notion",
              "Google Sheets",
              "Zapier",
              "Make",
              "Webhook",
            ].map((int) => (
              <div
                key={int}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 text-center hover:bg-white/[0.08] hover:border-emerald-500/40 transition"
              >
                <div className="font-display text-base text-white/85">{int}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <MessageCircle className="w-10 h-10 text-emerald-500 mx-auto mb-6" />
          <h2 className="font-display font-medium text-[clamp(2.4rem,5.5vw,4.4rem)] tracking-tight leading-[0.98] text-ink">
            14 days free.<br />
            <span className="font-serif-italic">No credit card.</span>
          </h2>
          <p className="text-muted mt-6 text-base sm:text-lg max-w-xl mx-auto">
            Pricing starts at $49/month for 3 agents. Cancel anytime, your data is yours forever.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Start free trial
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/products/woro-voice" className="btn-ghost">
              Explore WORO Voice
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
