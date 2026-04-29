import { ShieldCheck, Vault, Database, Globe } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const tiers = [
  {
    label: "Standard",
    summary:
      "Member data lives on YeahApp's managed European infrastructure. Encrypted in transit and at rest. GDPR-aligned by default.",
    icon: ShieldCheck,
  },
  {
    label: "Pro",
    summary:
      "Adds export-on-demand tooling, configurable retention windows, and audit logs you can hand to a board or regulator.",
    icon: Database,
  },
  {
    label: "Enterprise",
    summary:
      "Optional self-hosted database. Your data, your servers, your jurisdiction — full sovereignty over the directory and its history.",
    icon: Vault,
  },
];

export default function PrivacySection() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 uppercase">
            Privacy & data sovereignty
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            The Swiss banking approach,
            <br />
            <span className="text-slate-400">applied to community data.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300">
            We treat member data the way our Swiss investors treat capital —
            with discretion, jurisdiction-aware controls, and the assumption
            that ownership ultimately belongs to the depositor. Each plan
            extends the level of control you have over where the data lives
            and who can touch it.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <Reveal key={tier.label} delay={i * 100}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.05]">
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-5 w-5 text-white" weight="duotone" />
                  </div>
                  <div className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
                    {tier.label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {tier.summary}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300} className="mt-12">
          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <Globe className="h-5 w-5 text-white" weight="duotone" />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-white">EU-built, EU-hosted.</span>{" "}
              YeahApp is designed and engineered in the EU, with
              data residency that respects the regulatory environment your
              members operate in. Your community&apos;s information does not
              cross jurisdictions you have not approved.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
