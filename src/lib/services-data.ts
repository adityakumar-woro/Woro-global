import {
  Globe,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Server,
  Brain,
  GitBranch,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  num: string;
  icon: LucideIcon;
  name: string;
  short: string;
  hero: { title: string; italic: string; subtitle: string };
  intro: string;
  capabilities: { title: string; desc: string }[];
  techStack: string[];
  outcomes: { value: string; label: string }[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

export const services: Service[] = [
  {
    slug: "website-development",
    num: "01",
    icon: Globe,
    name: "Website Development",
    short: "Pixel-perfect, blazing fast websites built with Next.js, Astro and modern stacks.",
    hero: {
      title: "Websites that load fast",
      italic: "and convert better.",
      subtitle:
        "From a single high-converting landing page to multi-region marketing platforms — we ship sites that look beautiful and ship measurable results.",
    },
    intro:
      "Your website is your most-trafficked sales rep. We design and build it like a product — with a real design system, real performance budgets and real analytics from day one. No theme builders, no plugin sprawl.",
    capabilities: [
      { title: "Marketing websites", desc: "Brand sites, product pages, microsites — all built for speed and SEO." },
      { title: "Headless CMS", desc: "Sanity, Contentful, Payload — content teams ship without engineering bottlenecks." },
      { title: "Conversion optimization", desc: "A/B testing, analytics, funnel design — we optimize for outcomes, not vanity metrics." },
      { title: "Web performance", desc: "Sub-1s LCP, 95+ Lighthouse scores, Core Web Vitals dialed in." },
      { title: "Internationalization", desc: "Multi-region, multi-language sites with edge-routed delivery." },
      { title: "Accessibility", desc: "WCAG AA-compliant out of the box — not a bolted-on afterthought." },
    ],
    techStack: ["Next.js", "Astro", "React", "TypeScript", "Sanity", "Contentful", "Tailwind", "Vercel", "Cloudflare"],
    outcomes: [
      { value: "0.6s", label: "Average LCP" },
      { value: "98", label: "Lighthouse score" },
      { value: "+38%", label: "Conversion lift" },
      { value: "100+", label: "Sites shipped" },
    ],
    process: [
      { title: "Brand & UX audit", desc: "We audit your current site, brand and analytics to find quick wins." },
      { title: "Design system", desc: "A tight component library that powers every page consistently." },
      { title: "Build & integrate", desc: "Two-week sprints to wire content, search, analytics and CRM." },
      { title: "Launch & iterate", desc: "Performance budgets enforced in CI; ongoing CRO sprints post-launch." },
    ],
    faqs: [
      { q: "Do you use templates or themes?", a: "No. Every site is custom-designed and built from scratch on a modern stack." },
      { q: "Can content editors update the site themselves?", a: "Yes — we wire up a headless CMS so non-technical teams can publish without a deploy." },
      { q: "What's the typical timeline?", a: "Marketing sites: 4–8 weeks. Larger platforms with portal/auth/i18n: 10–16 weeks." },
    ],
    related: ["software-development", "ai-ml-solutions", "devops-cicd"],
  },
  {
    slug: "software-development",
    num: "02",
    icon: Code2,
    name: "Software Development",
    short: "Custom enterprise software tailored to your unique workflows.",
    hero: {
      title: "Enterprise software",
      italic: "built like a product.",
      subtitle:
        "We design, build and operate custom SaaS, internal tools and admin platforms that replace spreadsheets, legacy apps and off-the-shelf software you've outgrown.",
    },
    intro:
      "Off-the-shelf software always becomes the bottleneck. We build software that fits your workflows exactly — typed, tested, monitored and shipped in two-week sprints with weekly demos.",
    capabilities: [
      { title: "Multi-tenant SaaS", desc: "Auth, billing, RBAC, audit logs — production-grade from sprint one." },
      { title: "Internal tools", desc: "Replace Notion + Sheets + Zapier with one tool that actually fits your team." },
      { title: "Admin dashboards", desc: "Operations dashboards with charts, exports, and bulk actions." },
      { title: "API design", desc: "REST, GraphQL, gRPC — typed, versioned, documented." },
      { title: "Legacy modernization", desc: "Strangler-fig refactors out of monoliths — without breaking the roadmap." },
      { title: "Integrations", desc: "HubSpot, Salesforce, Stripe, NetSuite — pick any system and we'll wire it." },
    ],
    techStack: ["TypeScript", "Node.js", "Next.js", "Postgres", "Prisma", "tRPC", "Redis", "Stripe", "AWS"],
    outcomes: [
      { value: "200+", label: "Apps shipped" },
      { value: "99.95%", label: "Average uptime" },
      { value: "2 weeks", label: "Sprint cadence" },
      { value: "0", label: "Juniors on calls" },
    ],
    process: [
      { title: "Domain modeling", desc: "We map entities, flows and edge cases before writing code." },
      { title: "Architecture review", desc: "Database, services, queues, infra — decided in week one." },
      { title: "Sprint delivery", desc: "Two-week sprints with weekly demos and PR-based review." },
      { title: "Operate & evolve", desc: "We stay on as the support team, not just the build team." },
    ],
    faqs: [
      { q: "Do you do build-operate-transfer?", a: "Yes — we can hand the team off to in-house engineers once it's stable." },
      { q: "Can you work with our existing engineers?", a: "Absolutely. We embed alongside in-house teams as much as we lead solo builds." },
      { q: "Who owns the code?", a: "You do. From day one, in your repos, with no licensing strings attached." },
    ],
    related: ["website-development", "devops-cicd", "ai-ml-solutions"],
  },
  {
    slug: "mobile-app-development",
    num: "03",
    icon: Smartphone,
    name: "Mobile App Development",
    short: "Native and cross-platform iOS & Android apps that users love to open.",
    hero: {
      title: "Mobile apps users",
      italic: "actually want to open.",
      subtitle:
        "Native iOS and Android apps as well as cross-platform builds with React Native and Flutter — designed, built and shipped to the app stores by senior mobile engineers.",
    },
    intro:
      "Mobile is the hardest place to ship great software. App store rules, fragmentation, performance budgets, offline modes — we know the traps because we've shipped 50+ apps to production.",
    capabilities: [
      { title: "Native iOS", desc: "Swift + SwiftUI apps with deep platform integration." },
      { title: "Native Android", desc: "Kotlin + Jetpack Compose with Material You design." },
      { title: "React Native", desc: "Cross-platform apps with near-native performance and shared codebases." },
      { title: "Flutter", desc: "Single-codebase apps with custom animations and offline-first design." },
      { title: "App store strategy", desc: "Submission, ASO, A/B testing, ratings recovery — we manage all of it." },
      { title: "Mobile backends", desc: "Realtime sync, push, deep linking, offline-first storage." },
    ],
    techStack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "GraphQL", "Sentry", "OneSignal"],
    outcomes: [
      { value: "50+", label: "Apps in store" },
      { value: "4.7★", label: "Avg rating" },
      { value: "5M+", label: "Combined installs" },
      { value: "<60ms", label: "Tap response" },
    ],
    process: [
      { title: "Platform decision", desc: "We help you pick native vs cross-platform based on actual constraints." },
      { title: "Design + prototype", desc: "Hi-fi prototypes you can install on your phone before we build." },
      { title: "Iterative builds", desc: "TestFlight + Play internal testing every sprint." },
      { title: "Store launch", desc: "Submission, review, rollout, crash monitoring." },
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "Depends on your team and use case — we'll recommend honestly. Most projects work well in React Native today." },
      { q: "Do you handle App Store submission?", a: "Yes, including review prep, rejections, ASO and screenshot design." },
      { q: "Can you work with our existing app?", a: "Yes — we often join existing apps to add features, refactor or improve performance." },
    ],
    related: ["software-development", "qa-testing", "devops-cicd"],
  },
  {
    slug: "cloud-management",
    num: "04",
    icon: Cloud,
    name: "Cloud Management",
    short: "AWS, Azure and GCP architecture, migration and 24/7 cloud operations.",
    hero: {
      title: "Cloud infrastructure",
      italic: "that just works.",
      subtitle:
        "Architecture, migration and 24/7 operations across AWS, Azure and GCP. We design for cost, reliability and the team that has to maintain it on a Friday night.",
    },
    intro:
      "Cloud is easy to start with and brutal to scale. We help teams design infrastructure that's right-sized today and ready for what's coming next — without a runaway bill.",
    capabilities: [
      { title: "Cloud architecture", desc: "Reference architectures across AWS, Azure, GCP — picked for your workload." },
      { title: "Lift & shift migrations", desc: "Move off legacy infra without downtime or data loss." },
      { title: "FinOps & cost reduction", desc: "Most clients see 25–40% bill reduction in the first quarter." },
      { title: "Multi-region setups", desc: "Active-active, blue/green, zero-downtime deploys." },
      { title: "Security baselines", desc: "IAM, KMS, network segmentation — locked down by default." },
      { title: "24/7 cloud ops", desc: "On-call rotation, runbooks, SLAs — we operate so you don't have to." },
    ],
    techStack: ["AWS", "Azure", "GCP", "Terraform", "Pulumi", "Kubernetes", "Datadog", "CloudWatch", "Vault"],
    outcomes: [
      { value: "−38%", label: "Avg cost cut" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "0", label: "Migration downtime" },
      { value: "24/7", label: "Ops coverage" },
    ],
    process: [
      { title: "Architecture audit", desc: "Cost, security and reliability review of your current cloud." },
      { title: "Migration plan", desc: "Phased rollout with rollback safety nets." },
      { title: "Build with IaC", desc: "Everything in Terraform — reproducible, reviewable, recoverable." },
      { title: "Operate & optimize", desc: "Weekly cost reviews, quarterly architecture reviews." },
    ],
    faqs: [
      { q: "AWS, Azure or GCP?", a: "Whichever fits your team and workload — we work across all three and have no incentive to push one." },
      { q: "Can you reduce our cloud bill?", a: "Almost always. Most teams overspend 30–50% on rightsizing, idle resources and reserved instances." },
      { q: "Do you offer 24/7 support?", a: "Yes, with multi-tier on-call across PST and IST time zones." },
    ],
    related: ["devops-cicd", "cybersecurity", "it-infrastructure"],
  },
  {
    slug: "cybersecurity",
    num: "05",
    icon: ShieldCheck,
    name: "Cybersecurity Services",
    short: "Pen testing, threat detection, compliance audits and zero-trust security.",
    hero: {
      title: "Security that's",
      italic: "shipped, not bolted on.",
      subtitle:
        "Pen testing, compliance audits, threat hunting and zero-trust architectures. We bake security into the build process — not into a frantic pre-launch checklist.",
    },
    intro:
      "Security debt is the worst kind of tech debt — it's invisible until it isn't. We work like an embedded security team: writing code reviews, threat models, and runbooks alongside your engineers.",
    capabilities: [
      { title: "Penetration testing", desc: "Black-box and white-box pen tests for web, mobile, and infrastructure." },
      { title: "SOC2 readiness", desc: "End-to-end SOC2 prep — controls, evidence, auditor communication." },
      { title: "Zero-trust architecture", desc: "Identity-aware proxies, mTLS, fine-grained RBAC." },
      { title: "Threat detection", desc: "SIEM setup, alert tuning, incident response runbooks." },
      { title: "Code security review", desc: "Static analysis, secret scanning, dependency audits in CI." },
      { title: "Incident response", desc: "On-call IR team for active breaches and post-incident reviews." },
    ],
    techStack: ["Burp Suite", "Snyk", "Vault", "Okta", "Auth0", "AWS GuardDuty", "Datadog SIEM", "1Password"],
    outcomes: [
      { value: "0", label: "Critical findings post-launch" },
      { value: "SOC2", label: "Type II ready" },
      { value: "<15min", label: "Incident response" },
      { value: "100%", label: "Code coverage in scans" },
    ],
    process: [
      { title: "Threat modeling", desc: "We map attack surfaces and prioritize the riskiest paths first." },
      { title: "Hardening", desc: "Network, identity, code, secrets — fixed at the source." },
      { title: "Continuous testing", desc: "Pen tests in CI; nothing ships without a security gate." },
      { title: "Incident readiness", desc: "Runbooks, drills, tabletop exercises every quarter." },
    ],
    faqs: [
      { q: "Do you do SOC2 prep?", a: "Yes — end-to-end including evidence, controls and auditor coordination." },
      { q: "Can you do a quick pen test?", a: "Yes. One-week black-box assessments for an MVP scope, full reports included." },
      { q: "Are you ethical hackers?", a: "Yes, our team holds OSCP, CEH, and CISSP certifications." },
    ],
    related: ["cloud-management", "it-infrastructure", "devops-cicd"],
  },
  {
    slug: "it-infrastructure",
    num: "06",
    icon: Server,
    name: "IT Infrastructure",
    short: "Resilient on-prem and hybrid infrastructure designed for scale and uptime.",
    hero: {
      title: "Infrastructure",
      italic: "you can sleep on.",
      subtitle:
        "On-prem, hybrid and edge infrastructure designed for scale, uptime and predictable cost. From data center design to edge deployments at 100+ sites.",
    },
    intro:
      "Cloud isn't always the answer. For latency-critical, regulated or cost-sensitive workloads, on-prem and hybrid infrastructure can be the better fit. We design systems that fit reality, not the cloud-first hype cycle.",
    capabilities: [
      { title: "Network design", desc: "L2/L3 networks, SD-WAN, VPN, segmentation." },
      { title: "Hybrid cloud", desc: "On-prem + cloud with secure connectivity and shared identity." },
      { title: "Edge computing", desc: "Distributed compute at retail, factories, healthcare sites." },
      { title: "Disaster recovery", desc: "RTO/RPO targets met with tested failover playbooks." },
      { title: "Data center setup", desc: "Rack design, power, cooling, cabling, monitoring." },
      { title: "Identity & directory", desc: "AD, LDAP, SSO, MFA across hybrid environments." },
    ],
    techStack: ["Cisco", "Fortinet", "VMware", "Proxmox", "Active Directory", "Ansible", "Nagios", "Zabbix"],
    outcomes: [
      { value: "100+", label: "Sites managed" },
      { value: "5min", label: "Failover RTO" },
      { value: "99.99%", label: "Uptime" },
      { value: "−45%", label: "Hosting cost" },
    ],
    process: [
      { title: "Capacity planning", desc: "Real workload modeling, not vendor brochures." },
      { title: "Network blueprint", desc: "Documented, version-controlled topology and IPAM." },
      { title: "Roll out", desc: "Site-by-site, with cutover windows and rollback paths." },
      { title: "Operate", desc: "24/7 monitoring with SLAs and quarterly reviews." },
    ],
    faqs: [
      { q: "Do you replace cloud with on-prem?", a: "Sometimes. We're not religious about it — we recommend whatever fits your workload and economics." },
      { q: "Can you manage 100+ branch offices?", a: "Yes, we run network and edge ops for retail, healthcare and logistics clients with hundreds of sites." },
      { q: "Do you handle hardware procurement?", a: "Yes, including vendor negotiation, warranties and spares management." },
    ],
    related: ["cloud-management", "cybersecurity", "devops-cicd"],
  },
  {
    slug: "ai-ml-solutions",
    num: "07",
    icon: Brain,
    name: "AI & ML Solutions",
    short: "Custom LLMs, predictive analytics and intelligent automation systems.",
    hero: {
      title: "AI that ships",
      italic: "to production.",
      subtitle:
        "Custom LLM apps, RAG pipelines, predictive analytics, voice and vision AI. We build AI features that survive contact with real users, real data and real budgets.",
    },
    intro:
      "Most AI demos die in production. We focus on shipping AI that's evaluated, observable, cost-controlled and useful — not just impressive in a recorded demo.",
    capabilities: [
      { title: "Custom LLM applications", desc: "GPT-4, Claude, Llama — picked for the job, not the hype." },
      { title: "RAG pipelines", desc: "Retrieval-augmented generation with real evals and grounded answers." },
      { title: "Voice & vision AI", desc: "Speech-to-text, voice cloning, OCR, object detection." },
      { title: "Predictive ML models", desc: "Forecasting, churn, fraud detection, recommendation systems." },
      { title: "Agentic workflows", desc: "Multi-step AI agents that read, decide and act on real systems." },
      { title: "ML ops", desc: "Eval pipelines, drift detection, A/B testing, cost monitoring." },
    ],
    techStack: ["GPT-4", "Claude", "Llama", "LangChain", "LangGraph", "Pinecone", "Weaviate", "PyTorch", "Hugging Face"],
    outcomes: [
      { value: "30+", label: "AI apps in prod" },
      { value: "−65%", label: "Avg cost vs naive build" },
      { value: "<1s", label: "Median latency" },
      { value: "92%", label: "Eval accuracy" },
    ],
    process: [
      { title: "Use case framing", desc: "We separate the AI hype from the actual job to be done." },
      { title: "Eval first", desc: "We build the evaluation harness before the model — so we know what good looks like." },
      { title: "Build & iterate", desc: "Prompt engineering, fine-tuning, RAG — whatever the evals say works." },
      { title: "Productionize", desc: "Cost controls, fallbacks, observability, on-call rotation." },
    ],
    faqs: [
      { q: "Should we use GPT-4, Claude or open-source?", a: "Depends on cost, latency, privacy and accuracy needs. We'll benchmark for your use case." },
      { q: "Can you fine-tune models on our data?", a: "Yes — full fine-tunes, LoRAs, instruction tuning, you name it." },
      { q: "How do you control AI costs?", a: "Caching, smaller models for routing, prompt compression, and per-tenant budgets." },
    ],
    related: ["software-development", "devops-cicd", "website-development"],
  },
  {
    slug: "devops-cicd",
    num: "08",
    icon: GitBranch,
    name: "DevOps & CI/CD",
    short: "Streamlined pipelines, IaC and observability so you ship faster, safer.",
    hero: {
      title: "Ship faster.",
      italic: "Sleep better.",
      subtitle:
        "Streamlined CI/CD pipelines, Infrastructure as Code, observability and platform engineering — so your team can ship 10× a day without the dread.",
    },
    intro:
      "Bad DevOps is invisible until it isn't. Good DevOps disappears into the background — your team just ships, the deploys just work, the dashboards just stay green. That's what we build.",
    capabilities: [
      { title: "CI/CD pipelines", desc: "GitHub Actions, GitLab CI, Buildkite — fast, parallel, reliable." },
      { title: "Infrastructure as Code", desc: "Terraform, Pulumi, Ansible — your infra in version control." },
      { title: "Kubernetes", desc: "Production-grade clusters with sane autoscaling and observability." },
      { title: "Observability", desc: "Datadog, Grafana, Sentry — real signal, no alert fatigue." },
      { title: "Platform engineering", desc: "Internal developer platforms that make the right thing the easy thing." },
      { title: "Release engineering", desc: "Feature flags, blue/green, canaries, instant rollback." },
    ],
    techStack: ["GitHub Actions", "Terraform", "Kubernetes", "ArgoCD", "Datadog", "Grafana", "Sentry", "Pulumi"],
    outcomes: [
      { value: "10×", label: "Deploy frequency" },
      { value: "<5min", label: "Build time" },
      { value: "99.99%", label: "Pipeline uptime" },
      { value: "−80%", label: "Mean time to recover" },
    ],
    process: [
      { title: "Audit", desc: "We measure deploy frequency, lead time, MTTR — the DORA metrics." },
      { title: "Pipeline rebuild", desc: "Fast, parallel, cached pipelines that don't make engineers wait." },
      { title: "Observability", desc: "Real dashboards, real alerts, no noise." },
      { title: "Platform handoff", desc: "Documentation, runbooks and training so your team owns it." },
    ],
    faqs: [
      { q: "Do you replace our DevOps team?", a: "We can — or we embed alongside them to level up the practice." },
      { q: "How long until we see 10× deploy frequency?", a: "Most teams see major improvements in 4–6 weeks." },
      { q: "Can you migrate us to Kubernetes?", a: "Yes — and we'll honestly tell you if you don't need it." },
    ],
    related: ["cloud-management", "it-infrastructure", "qa-testing"],
  },
  {
    slug: "qa-testing",
    num: "09",
    icon: TestTube2,
    name: "QA & Testing",
    short: "Automated testing, performance and security QA for bulletproof releases.",
    hero: {
      title: "Quality that's",
      italic: "built in, not bolted on.",
      subtitle:
        "Test automation, performance testing, security QA and exploratory testing — embedded in your CI pipeline so quality stops being a bottleneck.",
    },
    intro:
      "QA isn't a phase — it's a discipline that runs alongside development. We build test suites that catch real bugs, performance suites that catch regressions, and security tests that catch the vulnerabilities others miss.",
    capabilities: [
      { title: "Test automation", desc: "Playwright, Cypress, Detox — fast, reliable, not flaky." },
      { title: "Load & performance", desc: "k6, Locust, JMeter — modeling realistic traffic patterns." },
      { title: "Security QA", desc: "OWASP Top 10, dependency scanning, secret scanning in CI." },
      { title: "Manual exploratory", desc: "Senior QA engineers finding the bugs automation misses." },
      { title: "API contract testing", desc: "Pact, Postman, Spectral — API breakages caught at the contract layer." },
      { title: "Accessibility QA", desc: "WCAG audits, screen reader testing, keyboard nav coverage." },
    ],
    techStack: ["Playwright", "Cypress", "Detox", "k6", "Postman", "Pact", "OWASP ZAP", "Lighthouse"],
    outcomes: [
      { value: "85%+", label: "Test coverage" },
      { value: "<1%", label: "Flaky test rate" },
      { value: "0", label: "Production regressions" },
      { value: "−60%", label: "Manual QA hours" },
    ],
    process: [
      { title: "Coverage audit", desc: "Where are the gaps and what should we automate first?" },
      { title: "Test strategy", desc: "Unit, integration, e2e, perf — the right pyramid for your stack." },
      { title: "Build the suite", desc: "Reliable, fast tests wired into PR review and CI." },
      { title: "Sustain & evolve", desc: "Owned by the dev team, supported by our QA pod." },
    ],
    faqs: [
      { q: "Do you do manual or automated QA?", a: "Both. Automated for regression coverage, manual for exploratory and edge cases." },
      { q: "How do you handle flaky tests?", a: "Aggressively. We treat flakes as bugs and fix them at the root cause." },
      { q: "Can you join our existing QA team?", a: "Yes — we often embed alongside in-house QA to accelerate the practice." },
    ],
    related: ["devops-cicd", "software-development", "cybersecurity"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
