import { type Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  UsersThree,
  CurrencyEur,
  ChartLineUp,
  ClipboardText,
  TreeStructure,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/landing/Reveal";
import { DevicePlaceholder } from "@/components/landing/DevicePlaceholder";
import { Button } from "@/components/main/buttons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Features | YeahApp",
  description:
    "Events, membership, payments, and reporting in one workspace for community teams.",
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

type Feature = {
  icon: React.ComponentType<{ className?: string; weight?: "duotone" }>;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageMobile?: string;
};

const features: ReadonlyArray<Feature> = [
  {
    icon: CalendarCheck,
    eyebrow: "Events",
    title: "Events that double as your data engine.",
    description:
      "Draft, publish, and run events through a defined lifecycle — free RSVPs or paid Stripe ticketing, QR check-in, and per-event analytics. Every registration and scan writes straight back to the directory.",
    image: "/screenshots/desktop/07-mgmt-events.png",
    imageMobile: "/screenshots/mobile/07-mgmt-events.png",
  },
  {
    icon: UsersThree,
    eyebrow: "Membership",
    title: "A living directory of your people.",
    description:
      "A searchable, profile-centric database with join dates, attendance history, and payment status in one place. Recurring dues across plan tiers, billed end to end through Stripe.",
    image: "/screenshots/desktop/08-mgmt-members.png",
    imageMobile: "/screenshots/mobile/08-mgmt-members.png",
  },
  {
    icon: CurrencyEur,
    eyebrow: "Finance",
    title: "Revenue and payouts in one ledger.",
    description:
      "Ticket sales, membership dues, and refunds reconciled in a single view. Stripe payouts, revenue broken down by event, and exportable transactions ready for the treasurer.",
    image: "/screenshots/desktop/05-mgmt-finance.png",
    imageMobile: "/screenshots/mobile/05-mgmt-finance.png",
  },
  {
    icon: ChartLineUp,
    eyebrow: "Business intelligence",
    title: "The operations dashboard your board asks for.",
    description:
      "Attendance, retention, engagement, and revenue unified into one operational view. Because every domain shares a schema, the reports are an emergent property — not a separate product.",
    image: "/screenshots/desktop/06-mgmt-insights.png",
    imageMobile: "/screenshots/mobile/06-mgmt-insights.png",
  },
  {
    icon: ClipboardText,
    eyebrow: "Forms",
    title: "Custom forms wired into every profile.",
    description:
      "Build registration and intake forms once, then attach them to events or membership flows. Submissions land structured against the member record — no exports, no copy-paste.",
    image: "/screenshots/desktop/09-mgmt-forms.png",
    imageMobile: "/screenshots/mobile/09-mgmt-forms.png",
  },
  {
    icon: TreeStructure,
    eyebrow: "Governance",
    title: "Roles and committees, term by term.",
    description:
      "Model your volunteer hierarchy with positions, terms, and assignments. Branches and chapters map cleanly to federated structures and multi-community setups.",
    image: "/screenshots/desktop/10-mgmt-committee.png",
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pt-[calc(env(safe-area-inset-top,_0px)_+_8rem)] pb-10 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 uppercase">
            Features
          </span>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Everything it takes to run a community.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600">
            One connected workspace for the people, events, and operations
            behind your organisation — modelled as a single system instead of a
            patchwork of point tools.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const flip = i % 2 === 1;
            return (
              <Reveal key={feature.title}>
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50">
                  <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-14">
                    <div className={cn("flex flex-col", flip && "lg:order-2")}>
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6f8eff]/10">
                        <Icon
                          className="h-5 w-5 text-[#6f8eff]"
                          weight="duotone"
                        />
                      </div>
                      <span className="mt-5 text-xs font-semibold tracking-widest text-[#6f8eff] uppercase">
                        {feature.eyebrow}
                      </span>
                      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                        {feature.title}
                      </h2>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "flex items-center justify-center",
                        flip && "lg:order-1",
                      )}
                    >
                      <DevicePlaceholder
                        variant={feature.imageMobile ? "dual" : "desktop"}
                        tone="light"
                        label={feature.eyebrow}
                        src={feature.image}
                        srcMobile={feature.imageMobile}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-6">
          <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 p-10 text-center sm:p-14">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              See it with your own community.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-300">
              Start on the free tier — no credit card required — or book a walk
              through with the team.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`${APP_URL}/signup`}>
                <Button
                  size="lg"
                  className="h-13 bg-white px-8 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Start free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 border-white/15 bg-transparent px-8 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Book a demo
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
