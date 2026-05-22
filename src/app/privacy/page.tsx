import type { Metadata } from "next";
import Link from "next/link";
import { Lock, UserCheck, Database, Globe2 } from "lucide-react";
import LegalLayout, { type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How WORO Global collects, uses and protects your personal data — written in plain language, aligned to GDPR and India's DPDP Act.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "2026-04-23";

const sections: LegalSection[] = [
  {
    id: "who",
    title: "Who this policy applies to",
    body: (
      <>
        <p>
          This Privacy Policy explains how <strong>WORO Global</strong> (the
          &ldquo;controller&rdquo; for data-protection purposes) handles personal data
          when you visit our website, submit a form, subscribe to our products, or
          engage us for services. Our registered address is Phase IV, Udyog Vihar,
          Sector 18, Gurugram, Haryana 122015, India.
        </p>
        <p>
          For product-specific privacy terms — WORO Chat, WORO Voice, WORO UGC — see
          the product-level Data Processing Addendum (DPA) provided at sign-up. This
          policy covers the public website and our commercial engagements.
        </p>
      </>
    ),
  },
  {
    id: "what",
    title: "What data we collect",
    body: (
      <>
        <h3>Data you give us directly</h3>
        <p>
          When you fill in any of the forms on this site — contact form, homepage
          callback strip, scroll-triggered popup, or a product signup — we collect:
        </p>
        <ul>
          <li>Name and role (where provided)</li>
          <li>Work email address and/or personal email address</li>
          <li>Phone number and dial code</li>
          <li>Company name</li>
          <li>Service interest / message you send us</li>
          <li>Project description, timelines or requirements</li>
        </ul>

        <h3>Data we collect automatically</h3>
        <p>
          When you browse the site, we collect limited technical data to keep it
          secure and improve it:
        </p>
        <ul>
          <li>IP address (hashed for analytics; retained only for submission records tied to forms)</li>
          <li>User-agent string (browser, OS, device class)</li>
          <li>Referrer URL and page path</li>
          <li>Approximate country/region (derived from IP)</li>
          <li>Usage events — page views, scroll depth, clicks on CTAs</li>
        </ul>

        <h3>Data from third parties</h3>
        <p>
          If you contact us through LinkedIn, a partner referral, an event, or via one
          of the products we operate on your behalf, we may receive your name, role
          and contact details through those channels.
        </p>
      </>
    ),
  },
  {
    id: "how",
    title: "How we use your data",
    body: (
      <>
        <p>We use personal data to:</p>
        <ul>
          <li><strong>Respond to enquiries</strong> — a senior engineer replies within a working day to every form submission.</li>
          <li><strong>Deliver and operate our services</strong> — fulfil SOWs, provision products, invoice accurately.</li>
          <li><strong>Communicate with you</strong> — project status, release notes, security notices, scheduled outages.</li>
          <li><strong>Improve the site and products</strong> — understand which pages help, which don&apos;t, which flows break.</li>
          <li><strong>Keep things secure</strong> — detect abuse, block brute-force attempts, investigate incidents.</li>
          <li><strong>Meet legal obligations</strong> — tax, audit, regulatory reporting, responding to valid legal requests.</li>
        </ul>
        <p>
          We <strong>do not sell or rent</strong> personal data to anyone. We don&apos;t
          use your submissions to train foundation models.
        </p>
      </>
    ),
  },
  {
    id: "bases",
    title: "Legal bases we rely on",
    body: (
      <>
        <p>
          Where GDPR applies, we process your personal data under the following legal
          bases (in plain terms):
        </p>
        <ul>
          <li><strong>Contract</strong> — to deliver services or products you&apos;ve engaged us for.</li>
          <li><strong>Legitimate interests</strong> — replying to enquiries, keeping the site secure, measuring non-identifying usage.</li>
          <li><strong>Consent</strong> — for optional communications or cookies that aren&apos;t strictly necessary; you can withdraw it at any time.</li>
          <li><strong>Legal obligation</strong> — tax, fraud, regulatory cooperation.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & analytics",
    body: (
      <>
        <p>
          We keep this site light on cookies. The cookies we do use fall into two
          groups:
        </p>
        <h3>Strictly necessary</h3>
        <ul>
          <li>Session cookies used while you browse or submit a form.</li>
          <li>A session-only flag so the scroll-triggered popup isn&apos;t shown repeatedly in one visit.</li>
        </ul>
        <h3>Analytics</h3>
        <p>
          We use <strong>Google Analytics 4</strong> (measurement ID G-562T0C43XN) to
          measure how the site performs. IP addresses are anonymised at the edge
          before we see them, and we never pass personal data (name, email, phone) to
          Google. You can opt out using a browser-level Do-Not-Track setting or any
          standard GA4 opt-out extension.
        </p>
        <p>
          We do not use cross-site advertising trackers, remarketing pixels, or
          third-party ad networks.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share data with",
    body: (
      <>
        <p>
          We share limited personal data only with vetted vendors who help us operate
          the site and deliver services. Each is contractually bound to process data
          on our instructions and to standards at least equivalent to ours.
        </p>
        <ul>
          <li><strong>Hosting &amp; CDN</strong> — the vendor we host the site with, plus the database service holding form submissions.</li>
          <li><strong>Email (SMTP)</strong> — Hostinger, used to send transactional emails (lead notifications, replies).</li>
          <li><strong>Analytics</strong> — Google Analytics 4, using anonymised IP.</li>
          <li><strong>Productivity &amp; CRM</strong> — the shared inbox and project-tracking tools our team uses to follow up on your enquiry.</li>
          <li><strong>Professional advisors</strong> — legal, accounting and audit firms on a strict need-to-know basis.</li>
          <li><strong>Authorities</strong> — only when legally required and after reviewing the request for validity.</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <>
        <p>
          We keep personal data only as long as we need it for the purposes above, or
          to meet legal obligations:
        </p>
        <ul>
          <li><strong>Form submissions</strong> — up to 24 months, then deleted or fully anonymised.</li>
          <li><strong>Active client records</strong> — for the duration of the engagement plus applicable statutory retention (typically 6–8 years for invoices / tax).</li>
          <li><strong>Analytics events</strong> — default GA4 retention (we set it to 14 months).</li>
          <li><strong>Security logs</strong> — up to 12 months, access restricted to on-call engineers.</li>
        </ul>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International data transfers",
    body: (
      <>
        <p>
          Your data may be processed in India (where we&apos;re based) and in other
          regions where our vendors operate (for example, Google Analytics processes
          data in the EU and US). Where cross-border transfers happen, we rely on
          appropriate safeguards such as Standard Contractual Clauses and vendor data
          processing agreements.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you have some or all of the following rights
          over your personal data:
        </p>
        <ul>
          <li><strong>Access</strong> — ask for a copy of the data we hold on you.</li>
          <li><strong>Correction</strong> — ask us to fix anything inaccurate.</li>
          <li><strong>Deletion</strong> — ask us to delete your data, subject to legal retention.</li>
          <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
          <li><strong>Objection / restriction</strong> — limit how we process your data in certain circumstances.</li>
          <li><strong>Withdraw consent</strong> — where processing is based on consent.</li>
          <li><strong>Lodge a complaint</strong> — with a supervisory authority in your jurisdiction.</li>
        </ul>
        <p>
          To exercise any of these, email <strong>hello@woroglobal.com</strong> with
          the subject line &ldquo;Privacy request&rdquo;. We respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we secure your data",
    body: (
      <>
        <p>
          Security is designed into every layer of the platform — it isn&apos;t an
          afterthought:
        </p>
        <ul>
          <li>TLS everywhere (HTTPS for web, TLS for SMTP on port 465).</li>
          <li>Encrypted database connections and encrypted backups.</li>
          <li>Role-based access and least-privilege for every engineer.</li>
          <li>Centralised audit logs and anomaly detection.</li>
          <li>Annual third-party security reviews and SOC2-aligned practices for enterprise engagements.</li>
          <li>Immediate vendor review and disclosure protocol in the event of a breach.</li>
        </ul>
        <p>
          No system is perfectly secure, but we take every reasonable step and treat
          your data with the care we&apos;d want for our own.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <>
        <p>
          Our services are aimed at businesses and people aged 18 and older. We do not
          knowingly collect personal data from children under 18. If you believe a
          minor has submitted data through our site, email us and we will delete it
          promptly.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to this policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy to reflect changes in our practices, the
          services, or applicable law. The &ldquo;Last updated&rdquo; date at the top
          of this page tells you when. Material changes are announced on the site and,
          where appropriate, by email to active clients.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact our privacy team",
    body: (
      <>
        <p>
          For any privacy question, data request, or to report a concern:
        </p>
        <ul>
          <li><strong>Email</strong> · hello@woroglobal.com · tech@woro.co.in</li>
          <li><strong>Phone</strong> · +91 99966 11185</li>
          <li><strong>Address</strong> · Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015, India</li>
        </ul>
        <p>
          For more on our contractual terms, see the{" "}
          <Link href="/terms">Terms &amp; Conditions</Link>.
        </p>
        <div className="legal-callout">
          <strong>Note —</strong>
          <span>
            This policy is written in plain language to be readable. It should be
            reviewed by your own counsel before being relied on for regulatory
            compliance. If you need a jurisdiction-specific addendum, email
            <strong> hello@woroglobal.com</strong>.
          </span>
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      kicker="Legal · Privacy Policy"
      title="How we handle"
      italic="your data."
      updated={UPDATED}
      lede="Written in plain language, aligned to GDPR principles and India's Digital Personal Data Protection Act. No dark patterns, no data selling."
      sections={sections}
      highlights={[
        { icon: <Lock className="w-3.5 h-3.5 text-brand" />, label: "Encrypted end-to-end" },
        { icon: <Database className="w-3.5 h-3.5 text-brand" />, label: "IP-anonymised analytics" },
        { icon: <UserCheck className="w-3.5 h-3.5 text-brand" />, label: "GDPR + DPDP aligned" },
        { icon: <Globe2 className="w-3.5 h-3.5 text-brand" />, label: "30-day request response" },
      ]}
    />
  );
}
