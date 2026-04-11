import {
  Heart,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  tag: string;
  short: string;
  hero: { title: string; italic: string; subtitle: string };
  intro: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  caseStudies: { name: string; stack: string[]; metric: string; tone: string }[];
  stats: { value: string; label: string }[];
  related: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    icon: Heart,
    name: "Healthcare",
    tag: "HIPAA-ready",
    short: "Patient portals, hospital ERPs and telemedicine platforms used by clinicians worldwide.",
    hero: {
      title: "Software for clinicians,",
      italic: "patients and care teams.",
      subtitle:
        "HIPAA-aligned patient portals, hospital ERPs, telemedicine and clinical decision tools — built with clinicians, not for them.",
    },
    intro:
      "Healthcare software has to be reliable on its worst day. We design for the night shift — clear UI, fast inputs, real audit trails, and zero patience for downtime.",
    challenges: [
      { title: "Fragmented systems", desc: "EHR, billing, scheduling, lab results — none of them talk to each other." },
      { title: "Strict compliance", desc: "HIPAA, HL7, FHIR — the wrong move means real legal exposure." },
      { title: "Clinician burnout", desc: "Software that adds clicks instead of removing them." },
      { title: "Patient trust", desc: "PHI data has to be safe, and visible only to the right people." },
    ],
    solutions: [
      { title: "Interoperability", desc: "FHIR APIs, HL7 integrations, single source of truth across systems." },
      { title: "HIPAA compliance", desc: "BAA-ready hosting, audit logs, encryption at rest and in transit." },
      { title: "Clinician-first UX", desc: "Designed with real clinicians; tested in real wards." },
      { title: "Telemedicine", desc: "Video, async messaging, e-prescriptions, remote monitoring." },
    ],
    caseStudies: [
      { name: "Patient Portal App", stack: ["React Native", "Node.js"], metric: "60% faster bookings", tone: "from-emerald-200 to-teal-200" },
      { name: "Hospital ERP", stack: ["Next.js", "Postgres"], metric: "30% lower ops cost", tone: "from-blue-200 to-cyan-200" },
      { name: "Telemedicine Platform", stack: ["Flutter", "WebRTC"], metric: "1M+ consults", tone: "from-violet-200 to-blue-200" },
    ],
    stats: [
      { value: "12+", label: "Healthcare projects" },
      { value: "1M+", label: "Patients served" },
      { value: "100%", label: "HIPAA aligned" },
      { value: "0", label: "Reportable incidents" },
    ],
    related: ["education", "fintech"],
  },
  {
    slug: "fintech",
    icon: Banknote,
    name: "Fintech",
    tag: "PCI-DSS",
    short: "Wallets, trading dashboards and lending platforms with sub-200ms latency.",
    hero: {
      title: "Fintech infrastructure",
      italic: "built for trust.",
      subtitle:
        "Wallets, trading dashboards, lending platforms and payment infrastructure — built with the latency, security and compliance posture finance demands.",
    },
    intro:
      "In finance, software is the product. A 200ms regression is a churn event. We build trading-floor-grade systems that hold up under load, audits and adversarial conditions.",
    challenges: [
      { title: "Latency", desc: "Trading and payments demand sub-200ms response — no excuses." },
      { title: "Regulation", desc: "PCI-DSS, SOC2, GDPR, KYC, AML — a maze of overlapping rules." },
      { title: "Fraud", desc: "Real-time fraud detection that doesn't false-positive your real users." },
      { title: "Trust", desc: "One outage can erode years of brand trust." },
    ],
    solutions: [
      { title: "Real-time architecture", desc: "Event streams, in-memory caches, edge routing." },
      { title: "Compliance first", desc: "PCI-DSS, SOC2 Type II, audit-ready from day one." },
      { title: "ML fraud detection", desc: "Real-time scoring with feedback loops and analyst review." },
      { title: "Resilience", desc: "Active-active multi-region, chaos testing, real DR drills." },
    ],
    caseStudies: [
      { name: "Digital Wallet", stack: ["Swift", "Go"], metric: "99.99% uptime", tone: "from-emerald-200 to-cyan-200" },
      { name: "Trading Dashboard", stack: ["React", "GraphQL"], metric: "200ms latency", tone: "from-blue-200 to-violet-200" },
      { name: "Loan Management", stack: ["Django", "AWS"], metric: "5x faster approvals", tone: "from-cyan-200 to-blue-200" },
    ],
    stats: [
      { value: "18+", label: "Fintech projects" },
      { value: "99.99%", label: "Uptime" },
      { value: "<200ms", label: "Latency" },
      { value: "PCI-DSS", label: "Certified" },
    ],
    related: ["retail", "logistics"],
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    tag: "WCAG AA",
    short: "LMS, virtual classrooms and student analytics serving 300k+ learners.",
    hero: {
      title: "Education software",
      italic: "for the next generation.",
      subtitle:
        "Learning management, virtual classrooms and student analytics serving 300k+ learners across K-12, higher-ed and corporate L&D.",
    },
    intro:
      "Education software is used by people who didn't choose it. That's the hardest UX challenge there is — and it's the one we love most.",
    challenges: [
      { title: "Wide user range", desc: "From 6-year-olds to professors to admins — one tool, many users." },
      { title: "Accessibility", desc: "WCAG AA isn't optional — it's the law in most regions." },
      { title: "Engagement", desc: "Keeping learners coming back without gimmicks." },
      { title: "Outcomes", desc: "Showing real measurable learning gains, not just usage stats." },
    ],
    solutions: [
      { title: "LMS platforms", desc: "Course delivery, assessments, gradebook, certifications." },
      { title: "Virtual classrooms", desc: "HD video, whiteboards, breakout rooms, recordings." },
      { title: "Student analytics", desc: "Real-time learning insights and at-risk detection." },
      { title: "Mobile first", desc: "Most learners are on phones — we design for them first." },
    ],
    caseStudies: [
      { name: "LMS Platform", stack: ["Next.js", "MongoDB"], metric: "300k students", tone: "from-violet-200 to-cyan-200" },
      { name: "Virtual Classroom", stack: ["Vue", "WebRTC"], metric: "HD streaming", tone: "from-blue-200 to-cyan-200" },
      { name: "Student Analytics", stack: ["Python", "BigQuery"], metric: "Real-time insights", tone: "from-emerald-200 to-blue-200" },
    ],
    stats: [
      { value: "9+", label: "Edtech projects" },
      { value: "300k+", label: "Learners served" },
      { value: "WCAG AA", label: "Accessibility" },
      { value: "95%", label: "Course completion" },
    ],
    related: ["healthcare", "retail"],
  },
  {
    slug: "retail",
    icon: ShoppingBag,
    name: "Retail",
    tag: "Omnichannel",
    short: "Headless e-commerce, inventory and POS deployed across 10k+ stores.",
    hero: {
      title: "Retail tech",
      italic: "from cart to counter.",
      subtitle:
        "Headless e-commerce, inventory systems, omnichannel POS and customer loyalty — deployed across 10,000+ stores worldwide.",
    },
    intro:
      "Retail margins are thin and tech debt is fatal. We build retail systems that hold up on Black Friday and integrate with the warehouse, the store, the marketing stack and the finance team.",
    challenges: [
      { title: "Omnichannel", desc: "Orders move between online, in-store, kiosk, marketplace." },
      { title: "Inventory accuracy", desc: "Out-of-stocks and overselling kill margin and trust." },
      { title: "Black Friday", desc: "Peaks 50× normal traffic in minutes." },
      { title: "Customer data", desc: "Built-up loyalty data is the moat — and easy to leak." },
    ],
    solutions: [
      { title: "Headless commerce", desc: "Decouple frontend from backend for speed and freedom." },
      { title: "Real-time inventory", desc: "Single source of truth across all channels." },
      { title: "Edge POS", desc: "Offline-first POS that syncs when connectivity returns." },
      { title: "Customer 360", desc: "Loyalty, history, preferences — unified across touchpoints." },
    ],
    caseStudies: [
      { name: "E-commerce Platform", stack: ["Shopify", "Next.js"], metric: "40% faster load", tone: "from-cyan-200 to-violet-200" },
      { name: "Inventory System", stack: ["NestJS", "Postgres"], metric: "Zero stock-outs", tone: "from-blue-200 to-emerald-200" },
      { name: "POS Solution", stack: ["Flutter", "Firebase"], metric: "10k+ stores", tone: "from-violet-200 to-blue-200" },
    ],
    stats: [
      { value: "22+", label: "Retail projects" },
      { value: "10k+", label: "Stores deployed" },
      { value: "0", label: "Black Friday outages" },
      { value: "40%", label: "Faster checkout" },
    ],
    related: ["logistics", "fintech"],
  },
  {
    slug: "real-estate",
    icon: Building2,
    name: "Real Estate",
    tag: "MLS-ready",
    short: "Listing apps, agent CRMs and immersive virtual tour experiences.",
    hero: {
      title: "Real estate software",
      italic: "for a digital-first market.",
      subtitle:
        "Listing portals, agent CRMs, virtual tours and transaction platforms — built for brokers, agents and buyers across mature and emerging markets.",
    },
    intro:
      "Real estate is going through the biggest software transformation since Zillow. Listing data, virtual tours, AI valuations — buyers expect more, and we help brokerages deliver it.",
    challenges: [
      { title: "MLS complexity", desc: "Every region has its own data feed and rules." },
      { title: "Agent productivity", desc: "Most agents waste hours on data entry and follow-up." },
      { title: "Visualization", desc: "Buyers want VR/AR tours, not 2D photos." },
      { title: "Lead conversion", desc: "Speed-to-lead is everything." },
    ],
    solutions: [
      { title: "Listing portals", desc: "Fast, SEO-optimized, mobile-first listing experiences." },
      { title: "Agent CRMs", desc: "Pipeline, comms, document management — built for agent workflows." },
      { title: "Virtual tours", desc: "360°, VR and AR experiences powered by Three.js / Unity." },
      { title: "AI valuations", desc: "Comparable analysis and price suggestions." },
    ],
    caseStudies: [
      { name: "Property Listing App", stack: ["React Native", "AWS"], metric: "2M listings", tone: "from-blue-200 to-cyan-200" },
      { name: "CRM for Agents", stack: ["Next.js", "Postgres"], metric: "3x lead conversion", tone: "from-emerald-200 to-cyan-200" },
      { name: "Virtual Tour App", stack: ["Three.js", "Node"], metric: "360° experiences", tone: "from-violet-200 to-blue-200" },
    ],
    stats: [
      { value: "8+", label: "Real estate projects" },
      { value: "2M+", label: "Listings powered" },
      { value: "3×", label: "Lead conversion" },
      { value: "360°", label: "Tour coverage" },
    ],
    related: ["fintech", "retail"],
  },
  {
    slug: "logistics",
    icon: Truck,
    name: "Logistics",
    tag: "Real-time",
    short: "Fleet tracking, warehouse management and ML route optimization.",
    hero: {
      title: "Logistics software",
      italic: "in real time.",
      subtitle:
        "Fleet tracking, warehouse management and ML-powered route optimization — for fleets of 5 to 5,000.",
    },
    intro:
      "Logistics is a real-time game. Trucks move, warehouses fill, routes change — and software has to keep up at the millisecond level. We build systems that do.",
    challenges: [
      { title: "Real-time data", desc: "GPS, telematics, scanners — all flooding in at once." },
      { title: "Optimization", desc: "Route, load, time-window — the math gets hairy fast." },
      { title: "Integration", desc: "ERPs, customs systems, partner APIs — it's a zoo." },
      { title: "Fuel cost", desc: "Every percent matters across thousands of routes." },
    ],
    solutions: [
      { title: "Fleet tracking", desc: "Live GPS, geofencing, alerting at scale." },
      { title: "Warehouse management", desc: "Pick paths, slotting, real-time inventory." },
      { title: "ML route optimization", desc: "Daily routes optimized for fuel, time and constraints." },
      { title: "Driver mobile apps", desc: "Offline-first, simple, robust under bad connectivity." },
    ],
    caseStudies: [
      { name: "Fleet Tracking", stack: ["React", "Kafka"], metric: "5k vehicles live", tone: "from-cyan-200 to-blue-200" },
      { name: "Warehouse Management", stack: ["Vue", "Postgres"], metric: "50% faster picking", tone: "from-blue-200 to-violet-200" },
      { name: "Route Optimizer", stack: ["Python", "ML"], metric: "20% fuel saved", tone: "from-emerald-200 to-cyan-200" },
    ],
    stats: [
      { value: "14+", label: "Logistics projects" },
      { value: "5k+", label: "Vehicles live" },
      { value: "−20%", label: "Fuel saved" },
      { value: "50%", label: "Faster picking" },
    ],
    related: ["retail", "manufacturing"],
  },
  {
    slug: "travel",
    icon: Plane,
    name: "Travel",
    tag: "GDS-ready",
    short: "Booking engines, AI itinerary planners and loyalty programs.",
    hero: {
      title: "Travel tech for",
      italic: "the post-pandemic traveler.",
      subtitle:
        "Booking engines, GDS integrations, AI itinerary planners and loyalty programs — built for OTAs, airlines and tour operators.",
    },
    intro:
      "Travel is back, but the rules have changed. Travelers want personalization, transparency and speed. We build the tech that delivers it.",
    challenges: [
      { title: "GDS complexity", desc: "Sabre, Amadeus, Travelport — none of them are simple." },
      { title: "Search latency", desc: "Travelers abandon searches after 2 seconds." },
      { title: "Personalization", desc: "Cookie-cutter results don't sell." },
      { title: "Loyalty mechanics", desc: "Points, tiers, redemption — easy to get wrong." },
    ],
    solutions: [
      { title: "Booking engines", desc: "Multi-source search with caching and intelligent fallbacks." },
      { title: "GDS integrations", desc: "Sabre, Amadeus, Travelport — abstracted behind clean APIs." },
      { title: "AI itinerary planning", desc: "LLM-powered trip suggestions with real bookable inventory." },
      { title: "Loyalty platforms", desc: "Points, tiers, partner integrations, fraud prevention." },
    ],
    caseStudies: [
      { name: "Booking Platform", stack: ["Next.js", "Stripe"], metric: "100k bookings/mo", tone: "from-blue-200 to-cyan-200" },
      { name: "Itinerary AI", stack: ["LangChain", "GPT"], metric: "Personalized plans", tone: "from-violet-200 to-cyan-200" },
      { name: "Loyalty Program", stack: ["Django", "Redis"], metric: "2x repeat rate", tone: "from-emerald-200 to-blue-200" },
    ],
    stats: [
      { value: "7+", label: "Travel projects" },
      { value: "100k+", label: "Bookings/mo" },
      { value: "2×", label: "Repeat rate" },
      { value: "<2s", label: "Search latency" },
    ],
    related: ["retail", "fintech"],
  },
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    tag: "Industry 4.0",
    short: "IoT monitoring, predictive maintenance and live production dashboards.",
    hero: {
      title: "Industry 4.0",
      italic: "for the factory floor.",
      subtitle:
        "IoT sensor networks, predictive maintenance, digital twins and real-time production dashboards — at 500+ sites and counting.",
    },
    intro:
      "Manufacturing software has to survive vibration, dust, intermittent connectivity and 30-year-old PLCs. We build systems that hold up — and unlock real ROI in the first quarter.",
    challenges: [
      { title: "Legacy machines", desc: "30-year-old PLCs that don't speak modern protocols." },
      { title: "Connectivity", desc: "Factories rarely have great internet." },
      { title: "Downtime cost", desc: "Every minute of unplanned downtime costs thousands." },
      { title: "Integration", desc: "MES, ERP, SCADA, QMS — all silos that need to talk." },
    ],
    solutions: [
      { title: "IoT monitoring", desc: "Edge sensors with offline buffering and resilient sync." },
      { title: "Predictive maintenance", desc: "ML models that catch failures before they happen." },
      { title: "Digital twins", desc: "Real-time 3D representations of production lines." },
      { title: "OEE dashboards", desc: "Live production KPIs visible to operators and management." },
    ],
    caseStudies: [
      { name: "IoT Monitoring", stack: ["Node.js", "MQTT"], metric: "500 sites live", tone: "from-cyan-200 to-blue-200" },
      { name: "Predictive Maintenance", stack: ["Python", "TF"], metric: "70% downtime cut", tone: "from-blue-200 to-violet-200" },
      { name: "Production Dashboard", stack: ["React", "Postgres"], metric: "Live KPI view", tone: "from-emerald-200 to-cyan-200" },
    ],
    stats: [
      { value: "11+", label: "Manufacturing projects" },
      { value: "500+", label: "Sites live" },
      { value: "−70%", label: "Downtime cut" },
      { value: "Industry 4.0", label: "Ready" },
    ],
    related: ["logistics", "retail"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
