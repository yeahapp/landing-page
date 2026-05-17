import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | YeahApp",
  description:
    "How Elevatech Oy collects, uses, and protects personal data through YeahApp.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{children}</p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-600 marker:text-slate-400">
      {children}
    </ul>
  );
}

const subprocessors: ReadonlyArray<{
  name: string;
  purpose: string;
  data: string;
}> = [
  {
    name: "Vercel",
    purpose: "Application hosting and content delivery",
    data: "Technical data, data in transit",
  },
  {
    name: "Neon",
    purpose: "Managed PostgreSQL database",
    data: "All persistent account and community data",
  },
  {
    name: "Stripe",
    purpose: "Payment processing and Stripe Connect payouts",
    data: "Name, email, billing and payout details",
  },
  {
    name: "UploadThing",
    purpose: "File and image uploads",
    data: "Profile images, form attachments",
  },
  {
    name: "Resend / Plunk",
    purpose: "Transactional and notification email",
    data: "Email address, email content",
  },
  {
    name: "Google",
    purpose: "Optional OAuth sign-in",
    data: "Name, email, profile picture",
  },
  {
    name: "Google Analytics",
    purpose: "Website analytics (loaded only with your consent)",
    data: "Pseudonymous usage and device data",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 pt-[calc(env(safe-area-inset-top,_0px)_+_8rem)] pb-24 sm:px-6 lg:px-8">
        <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 uppercase">
          Draft
        </span>
        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Draft for review — last updated 17 May 2026. Effective date:{" "}
          <span className="font-medium text-slate-700">
            [effective date to be confirmed]
          </span>
          .
        </p>

        <P>
          This Privacy Policy explains how personal data is collected, used, and
          protected in connection with YeahApp, the community operating system
          for civil society organisations. YeahApp is a product of{" "}
          <span className="font-medium text-slate-700">Elevatech Oy</span>, a
          limited company (osakeyhtiö) registered in Finland under business ID
          (Y-tunnus) 3417825-3, with its registered address at Mannerheiminaukio
          1, 00100 Helsinki, Finland (&ldquo;YeahApp&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;).
        </P>
        <P>
          It applies to this marketing website (yeahapp.co) and to the YeahApp
          application at app.yeahapp.co. We process personal data in line with
          the EU General Data Protection Regulation (GDPR) and the Finnish Data
          Protection Act.
        </P>

        <H2>1. Controller and processor roles</H2>
        <P>
          Elevatech Oy is the <strong>data controller</strong> for the personal
          data of the organisers and administrators who hold a YeahApp account,
          and for visitors to this website.
        </P>
        <P>
          For the member directories that community organisers build and manage
          inside YeahApp, the organising community is the data controller and
          Elevatech Oy acts as a <strong>data processor</strong>, processing
          that data on the community&rsquo;s instructions and under our Data
          Processing terms.
        </P>

        <H2>2. Data we collect</H2>
        <P>
          <strong>Account and profile data.</strong> Name, email address, phone
          number, date of birth, password credentials, and optional profile
          details such as a biography and avatar.
        </P>
        <P>
          <strong>Community and member-directory data.</strong> When a community
          uses YeahApp, the directory may include each member&rsquo;s name and
          contact details, join date, event attendance history, QR check-in
          records, membership tier and status, payment history, and responses to
          custom forms configured by the community.
        </P>
        <P>
          <strong>Payment data.</strong> Billing details needed to process
          subscription fees, ticket sales, and membership dues. Card numbers are
          handled directly by Stripe — we never receive or store them.
        </P>
        <P>
          <strong>Technical and usage data.</strong> IP address, device and
          browser information, and — where you have consented — analytics data
          about how the website is used.
        </P>

        <H2>3. How we use personal data</H2>
        <UL>
          <li>To provide, operate, and secure the YeahApp service.</li>
          <li>
            To process payments, subscriptions, and payouts through Stripe.
          </li>
          <li>
            To send transactional messages such as confirmations, receipts, and
            account notices.
          </li>
          <li>
            To send product updates or marketing only where you have opted in.
          </li>
          <li>
            To understand and improve website performance, with your consent.
          </li>
          <li>To comply with legal, accounting, and tax obligations.</li>
        </UL>

        <H2>4. Legal bases</H2>
        <P>
          We rely on the following GDPR Article 6 legal bases: performance of a
          contract (providing the service you sign up for); consent (analytics
          cookies and optional marketing); legitimate interests (securing and
          improving the service); and legal obligation (financial record-keeping
          and responding to lawful requests).
        </P>

        <H2>5. Subprocessors</H2>
        <P>
          We rely on a small number of vetted service providers to run YeahApp.
          Each processes personal data only as needed to provide its service and
          under a data processing agreement.
        </P>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-[14px]">
            <thead className="bg-slate-50 text-xs font-semibold tracking-wide text-slate-600 uppercase">
              <tr>
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Purpose</th>
                <th className="px-4 py-3">Data involved</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {subprocessors.map((s) => (
                <tr key={s.name}>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {s.name}
                  </td>
                  <td className="px-4 py-3">{s.purpose}</td>
                  <td className="px-4 py-3">{s.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Account authentication is handled by a self-hosted Better Auth setup
          running on our own infrastructure.
        </P>

        <H2>6. Payments</H2>
        <P>
          Payments are processed by Stripe. Each community organiser connects
          their own Stripe account through Stripe Connect; subscription fees,
          ticket sales, and membership dues are split at Stripe between our
          platform fee and the organiser&rsquo;s balance, and payouts are made by
          Stripe directly to the organiser. Elevatech Oy never holds member
          funds and never stores card details. Stripe&rsquo;s processing is
          governed by its own privacy policy.
        </P>

        <H2>7. Data residency and security</H2>
        <P>
          YeahApp is designed and engineered in the EU, and we host member data
          with EU data residency in mind{" "}
          <span className="font-medium text-slate-700">
            [exact data region to be confirmed]
          </span>
          . Personal data is encrypted in transit and at rest. Higher service
          tiers add audit logs and configurable retention windows, and the
          Enterprise tier offers the option of a self-hosted database for full
          data sovereignty.
        </P>

        <H2>8. Cookies and analytics</H2>
        <P>
          This website uses essential cookies required for it to function. It
          also uses Google Analytics to understand site usage — this loads{" "}
          <strong>only after you accept</strong> through the cookie banner shown
          on your first visit. If you decline, no analytics cookies are set. You
          can change your choice at any time by clearing your browser storage for
          this site.
        </P>

        <H2>9. Data retention</H2>
        <P>
          We retain personal data for as long as an account or community remains
          active, and afterwards only as long as needed for the purposes
          described here or as required by law (for example, financial records
          kept for statutory accounting periods). When an account is deleted,
          associated personal data is deleted or anonymised.
        </P>

        <H2>10. Your rights</H2>
        <P>
          Under the GDPR you have the right to access your personal data, to
          have it corrected or erased, to restrict or object to processing, to
          data portability, and to withdraw consent at any time. To exercise
          these rights, contact us using the details below.
        </P>
        <P>
          If a community holds your data as the controller (for example, as a
          member of its directory), please direct directory-related requests to
          that community; we will support them as their processor.
        </P>
        <P>
          You also have the right to lodge a complaint with the Finnish Data
          Protection Ombudsman (Tietosuojavaltuutetun toimisto) or your local
          supervisory authority.
        </P>

        <H2>11. International transfers</H2>
        <P>
          Where a subprocessor processes data outside the EU/EEA, that transfer
          is covered by appropriate safeguards such as the European
          Commission&rsquo;s Standard Contractual Clauses.
        </P>

        <H2>12. Children</H2>
        <P>
          YeahApp is intended for organisations and their adult members. It is
          not directed at children, and we do not knowingly collect personal
          data from children without an appropriate legal basis and any required
          parental consent.
        </P>

        <H2>13. Changes to this policy</H2>
        <P>
          We may update this Privacy Policy from time to time. Material changes
          will be communicated through the service or this page, and the
          &ldquo;last updated&rdquo; date above will be revised.
        </P>

        <H2>14. Contact</H2>
        <P>
          For any privacy question or to exercise your rights, contact us at{" "}
          <a
            href="mailto:support@yeahapp.co"
            className="font-medium text-[#6f8eff] hover:underline"
          >
            support@yeahapp.co
          </a>{" "}
          <span className="font-medium text-slate-700">
            [dedicated privacy/DPO contact email to be confirmed]
          </span>
          , or by post to Elevatech Oy, Mannerheiminaukio 1, 00100 Helsinki,
          Finland.
        </P>

        <p className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          This document is a working draft and not yet legal advice. Bracketed
          items must be confirmed, and it should be reviewed by qualified counsel
          before publication.
        </p>
      </div>
    </div>
  );
}
