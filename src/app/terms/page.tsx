import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ShieldCheck, FileText, Gavel } from "lucide-react";
import LegalLayout, { type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of WORO Global's website, AI services and products. Plain-language, no surprises.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "2026-04-23";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <>
        <p>
          These terms form a legal agreement between you and <strong>WORO Global</strong>
          {" "}(also referred to as &ldquo;we&rdquo;, &ldquo;us&rdquo; or
          &ldquo;WORO&rdquo;), operating from Phase IV, Udyog Vihar, Sector 18, Gurugram,
          Haryana 122015, India. By visiting our website, submitting a form, or engaging
          our services, you agree to these terms in full.
        </p>
        <p>
          If you do not agree, please do not use the site or engage our services. If you
          are accepting these terms on behalf of a company, you confirm you have
          authority to bind that company.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Our services",
    body: (
      <>
        <p>
          WORO Global builds and operates software — including our in-house products
          <strong> WORO Chat</strong> (WhatsApp CRM), <strong>WORO Voice</strong> (AI
          voice agents), and <strong>WORO UGC</strong> (creator &amp; video platform) —
          and provides custom engagements across website development, software
          development, mobile apps, cloud, cybersecurity, IT infrastructure, AI &amp; ML,
          DevOps and QA.
        </p>
        <p>
          The specific scope of any engagement — deliverables, timeline, fees and
          acceptance criteria — is defined in a separate Statement of Work (SOW) signed
          by both parties. In case of conflict between these terms and an SOW, the SOW
          controls for that engagement.
        </p>
      </>
    ),
  },
  {
    id: "engagements",
    title: "Engagements & work product",
    body: (
      <>
        <p>
          For paid engagements, we agree on scope, timeline and fees upfront in writing.
          We follow two-week sprints with weekly demos and a transparent burndown; you
          review and accept deliverables at defined milestones.
        </p>
        <p>
          Unless the SOW states otherwise, the <strong>custom work product</strong> we
          deliver — source code, designs, written copy and documentation created
          specifically for you — transfers to you on full payment of the engagement.
          WORO retains ownership of its pre-existing tools, libraries, and underlying
          know-how; we grant you a perpetual, non-exclusive license to use them as
          embedded in the delivered work product.
        </p>
        <p>
          Access to our products (WORO Chat, WORO Voice, WORO UGC) is governed by the
          product subscription agreement. Those products remain our IP; you receive a
          non-exclusive, non-transferable license for the term of your subscription.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees, invoices & payment",
    body: (
      <>
        <p>
          Fees, currency, payment schedule and applicable taxes are set out in each SOW.
          Unless agreed otherwise:
        </p>
        <ul>
          <li>Invoices are due within 15 days of issue.</li>
          <li>Late payments accrue interest at 1.5% per month (or the maximum allowed by law, whichever is lower).</li>
          <li>Fees exclude GST and similar indirect taxes, which are billed additionally.</li>
          <li>Third-party costs (cloud credits, domains, paid APIs) are either pre-funded by you or reimbursed at cost.</li>
        </ul>
        <p>
          We can pause active work on overdue accounts after 30 days&apos; written
          notice. We do not refund fees for work already delivered.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <>
        <p>
          The WORO Global name, logo, wordmark, product names (WORO Chat, WORO Voice,
          WORO UGC), shaders, design system and documentation are our intellectual
          property. Nothing on this website grants you a license to use our trademarks
          except as necessary to reference our services fairly.
        </p>
        <p>
          Third-party trademarks shown on the site — partner clouds, frameworks,
          industry tools — belong to their respective owners and are used for
          informational purposes only.
        </p>
        <p>
          Aggregate, anonymised learnings from client engagements (patterns, reusable
          architectures, anonymous metrics) remain with WORO so we can keep building
          better products and services for all clients.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>
          Both parties receive confidential information in the course of an engagement —
          source code, business strategy, customer data, roadmaps, pricing and other
          non-public material. We treat yours with the same care we expect you to treat
          ours.
        </p>
        <p>
          We will sign your standard NDA before the first call if you need formal
          cover. All team members are bound by internal confidentiality obligations
          regardless.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "Data protection & security",
    body: (
      <>
        <p>
          When you submit a form, book a call, or subscribe to one of our products, we
          process personal data as described in our <Link href="/privacy">Privacy
          Policy</Link>. We align to GDPR and Indian DPDP Act principles and ship with
          privacy-by-design practices — encryption in transit and at rest, role-based
          access, audit trails, least-privilege infrastructure.
        </p>
        <p>
          For engagements involving regulated data (healthcare, finance, government),
          we can sign a Data Processing Agreement (DPA) and support SOC2 / ISO 27001
          alignment on request.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    title: "Warranties & disclaimers",
    body: (
      <>
        <p>
          We provide services with reasonable skill and care and warrant our deliverables
          to materially conform to the SOW acceptance criteria for thirty (30) days
          after acceptance.
        </p>
        <p>
          Except as expressly stated in these terms or an SOW, the website and services
          are provided <strong>&ldquo;as is&rdquo;</strong>. To the maximum extent
          permitted by law, we disclaim all other warranties, express or implied —
          including merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, WORO&apos;s aggregate liability for
          any and all claims arising out of or related to these terms or an engagement
          is limited to the <strong>fees actually paid by you to WORO in the twelve
          (12) months immediately preceding the event giving rise to the claim</strong>.
        </p>
        <p>
          Neither party is liable for indirect, incidental, special, consequential, or
          punitive damages — including loss of profits, revenue, goodwill or data —
          even if advised of the possibility of such damages. These limits do not apply
          to breaches of confidentiality, intentional misconduct, or liabilities that
          cannot be limited under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnification",
    body: (
      <>
        <p>
          You agree to defend, indemnify and hold WORO harmless from third-party claims
          arising from (a) content or data you provide, (b) your breach of these terms,
          or (c) your use of the deliverables outside the license granted.
        </p>
        <p>
          We will defend, indemnify and hold you harmless from third-party claims that
          the custom deliverables we create for you directly infringe a valid third
          party intellectual-property right, subject to prompt notice, our control of
          defence, and your reasonable cooperation.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <>
        <p>
          Either party may terminate an engagement with thirty (30) days&apos; written
          notice, or immediately on the other party&apos;s uncured material breach
          after fifteen (15) days&apos; notice. Termination does not affect any fees
          due for work performed up to the termination date.
        </p>
        <p>
          On termination, we hand over all accepted deliverables, return or destroy
          confidential information on written request, and provide reasonable
          transition support (billed at standard rates).
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law & disputes",
    body: (
      <>
        <p>
          These terms are governed by the laws of India, without regard to its
          conflict-of-laws rules. Courts located in Gurugram, Haryana have exclusive
          jurisdiction over any dispute arising out of or related to these terms or the
          services.
        </p>
        <p>
          Before filing suit, the parties will attempt in good faith to resolve any
          dispute through senior-leadership discussion for at least thirty (30) days.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <>
        <p>
          We may update these terms from time to time. The &ldquo;Last updated&rdquo;
          date at the top of this page tells you when. For active engagements,
          material changes take effect only upon mutual written agreement. For general
          website use, continued access after changes are posted means you accept them.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>Questions about these terms? Reach the team:</p>
        <ul>
          <li><strong>Email</strong> · hello@woroglobal.com · tech@woro.co.in</li>
          <li><strong>Phone</strong> · +91 99966 11185</li>
          <li><strong>Address</strong> · Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015, India</li>
        </ul>
        <div className="legal-callout">
          <strong>Heads up —</strong>
          <span>
            These terms are provided in plain language and should be reviewed by your
            own counsel before relying on them in a commercial relationship. If you
            need a redlined version for execution, email
            <strong> hello@woroglobal.com</strong>.
          </span>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      kicker="Legal · Terms & Conditions"
      title="Plain-language terms for"
      italic="working with WORO."
      updated={UPDATED}
      lede="This page sets out how we engage with clients, how responsibilities are shared, and how disputes are handled — written to read like a contract, not a maze."
      sections={sections}
      highlights={[
        { icon: <FileText className="w-3.5 h-3.5 text-brand" />, label: "Plain-language" },
        { icon: <Scale className="w-3.5 h-3.5 text-brand" />, label: "Governed by Indian law" },
        { icon: <Gavel className="w-3.5 h-3.5 text-brand" />, label: "Gurugram jurisdiction" },
        { icon: <ShieldCheck className="w-3.5 h-3.5 text-brand" />, label: "NDA-ready" },
      ]}
    />
  );
}
