import {
  Cube,
  Plugs,
  TreeStructure,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const objections = [
  {
    icon: Cube,
    title: "An industrial-grade ERP would be overkill.",
    body:
      "We agree. SAP, Microsoft Dynamics, and Salesforce were built for multinationals with seven-figure implementation budgets. YeahApp adopts the same process-centred discipline — but sized, priced, and worded for the organisations that actually need it.",
  },
  {
    icon: Plugs,
    title: "You deserve one platform, not five.",
    body:
      "Most community teams operate across an event tool, a CRM, a forms product, a billing system, and a private chat. Each one captures part of the picture, none of them speak to each other, and the spreadsheet quietly becomes the source of truth. We replace the stack with a single record.",
  },
  {
    icon: TreeStructure,
    title: "We are building more than an app.",
    body:
      "YeahApp is the first product in a deliberate ecosystem of management and business software for civil society organisations. Finance, governance, and reporting modules are on the roadmap — designed to interoperate, not to be sold as upsells.",
  },
];

export default function ObjectionHandlingSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                A considered position
              </span>
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                On the questions worth answering plainly.
              </h2>
            </div>

            <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
              {objections.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6">
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100">
                        <Icon
                          className="h-5 w-5 text-slate-700"
                          weight="duotone"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
