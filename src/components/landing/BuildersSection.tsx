import {
  HandHeart,
  GlobeHemisphereWest,
  Compass,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const principles = [
  {
    icon: HandHeart,
    title: "Lived experience",
    description:
      "Our team has spent years inside NGOs, volunteer collectives, and faith-based organisations — not as consultants, but as the people running registrations, chasing dues, and rebuilding the spreadsheet at 11pm.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Activism alongside profession",
    description:
      "We work in software, design, and operations by day, and contribute to civic, cultural, and humanitarian causes on the side. The product reflects the friction we hit in both worlds.",
  },
  {
    icon: Compass,
    title: "Built with operators, not for them",
    description:
      "Every workflow — events, dues, roles, payouts — comes from real conversations with community managers and treasurers. We ship what reduces their week, not what photographs well.",
  },
];

export default function BuildersSection() {
  return (
    <section className="bg-slate-50 pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:p-16">
              <div className="flex flex-col">
                <span className="inline-block w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                  Who we are
                </span>
                <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Designed by community builders.
                  <br />
                  <span className="text-slate-500">For community builders.</span>
                </h2>
                <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                  YeahApp is built by a team with extensive experience inside
                  non-profit, volunteering, and activist organisations —
                  running chapters, organising events, and managing membership
                  rolls alongside our day jobs in technology and design.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Reveal key={p.title} delay={i * 80}>
                      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                          <Icon
                            className="h-5 w-5 text-slate-700"
                            weight="duotone"
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-900">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-6">
          <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 p-8 sm:p-14">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Stack className="h-7 w-7 text-white" weight="duotone" />
              </div>
              <div>
                <div className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
                  More than an app
                </div>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  We are building an ecosystem of management and business
                  software, tailored end to end for CSOs, NGOs, and
                  communities.
                </h3>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-300">
                  YeahApp is the first product in a longer roadmap aimed at
                  the operational stack of mission-driven organisations —
                  finance, governance, communications, and reporting — built
                  in the EU, with the discretion that civic work deserves.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
