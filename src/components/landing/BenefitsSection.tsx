import {
  Database,
  CalendarCheck,
  ChartLineUp,
  Clock,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { DevicePlaceholder } from "./DevicePlaceholder";

const benefits = [
  {
    title: "A single source of truth",
    description:
      "Replace the patchwork of spreadsheets, Google Forms, and chat exports. Every interaction — registration, payment, attendance, dues — writes to one structured directory.",
    icon: Database,
  },
  {
    title: "Events that fill themselves",
    description:
      "Publish, collect RSVPs or sell tickets, and send reminders from one workflow. Attendance and revenue land in the directory automatically.",
    icon: CalendarCheck,
  },
  {
    title: "Reports for boards and auditors in minutes",
    description:
      "Member retention, attendance trends, MRR, and submission counts roll up in real time. The quarterly report becomes a query, not a project.",
    icon: ChartLineUp,
  },
  {
    title: "Hours back in your week",
    description:
      "Communities running on YeahApp consolidate four to five tools and reclaim significant administrative time — redirected to programme delivery.",
    icon: Clock,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-16">
              <div className="flex flex-col">
                <span className="inline-block w-fit rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                  Outcomes
                </span>
                <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  What changes after the migration.
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
                  The first noticeable difference is silence. The chasing
                  stops, the duplicate data entry stops, and what remains is
                  the work that justified starting the organisation in the
                  first place.
                </p>

                <div className="mt-8 hidden lg:block">
                  <DevicePlaceholder
                    variant="mobile"
                    tone="light"
                    label="Member detail"
                    className="ml-0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <Reveal key={benefit.title} delay={i * 60}>
                      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                          <Icon
                            className="h-5 w-5 text-slate-700"
                            weight="duotone"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-semibold text-slate-900">
                              {benefit.title}
                            </h3>
                            <CheckCircle
                              className="h-4 w-4 text-emerald-500"
                              weight="fill"
                            />
                          </div>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="lg:hidden">
                <DevicePlaceholder
                  variant="desktop"
                  tone="light"
                  label="Operations dashboard"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
