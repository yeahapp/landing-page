"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Ticket,
  QrCode,
  ChartBar,
  UsersThree,
  CreditCard,
  IdentificationBadge,
  Buildings,
  ChartPieSlice,
  TrendUp,
  Database,
  Funnel,
} from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { DevicePlaceholder } from "./DevicePlaceholder";
import { cn } from "@/lib/utils";

type AccentKey = "primary" | "orange" | "dark";
type DeviceVariant = "desktop" | "mobile" | "dual";

const accentMap = {
  primary: {
    eyebrow: "text-[#6f8eff]",
    iconBg: "bg-[#6f8eff]/10",
    iconText: "text-[#6f8eff]",
    pillActive: "bg-[#6f8eff] text-white",
  },
  orange: {
    eyebrow: "text-[#fb8034]",
    iconBg: "bg-[#fb8034]/10",
    iconText: "text-[#fb8034]",
    pillActive: "bg-[#fb8034] text-white",
  },
  dark: {
    eyebrow: "text-slate-900",
    iconBg: "bg-slate-900",
    iconText: "text-white",
    pillActive: "bg-slate-900 text-white",
  },
} as const;

type FeatureItem = {
  icon: React.ComponentType<{ className?: string; weight?: "duotone" }>;
  title: string;
  description: string;
};

type Tab = {
  id: string;
  navLabel: string;
  eyebrow: string;
  heading: string;
  description: string;
  accent: AccentKey;
  deviceVariant: DeviceVariant;
  deviceLabel: string;
  deviceImage: string;
  deviceImageMobile?: string;
  features: ReadonlyArray<FeatureItem>;
};

const TABS: ReadonlyArray<Tab> = [
  {
    id: "events",
    navLabel: "Events",
    eyebrow: "Events management",
    heading: "Events as the data engine, not a marketing afterthought.",
    description:
      "Most platforms treat events as a sales channel. We treat them as the primary mechanism for collecting member data — every registration, payment, and check-in feeds the directory automatically.",
    accent: "primary",
    deviceVariant: "dual",
    deviceLabel: "Event management",
    deviceImage: "/screenshots/desktop/07-mgmt-events.png",
    deviceImageMobile: "/screenshots/mobile/07-mgmt-events.png",
    features: [
      {
        icon: CalendarCheck,
        title: "Full event lifecycle",
        description:
          "Draft, publish, cancel, and complete — every event moves through a defined workflow with public pages and embeddable widgets.",
      },
      {
        icon: Ticket,
        title: "Free RSVPs and paid ticketing",
        description:
          "Attach a registration form for free events or configurable ticket types for paid ones. Stripe Checkout, multiple tiers, promo codes — handled.",
      },
      {
        icon: QrCode,
        title: "QR check-in that updates the directory",
        description:
          "Every scan writes back to the member profile. Attendance becomes data without anyone touching a spreadsheet.",
      },
      {
        icon: ChartBar,
        title: "Operational analytics",
        description:
          "Registered versus attended, no-show rates, ticket revenue, form submissions — measured per event and rolled up across the community.",
      },
    ],
  },
  {
    id: "membership",
    navLabel: "Membership",
    eyebrow: "Membership & people management",
    heading: "A profile-centric database for the people behind your mission.",
    description:
      "Membership lives where the work happens — tied to events, payments, and roles. The directory becomes a living record of who is engaged, who is lapsed, and what each person has contributed over time.",
    accent: "orange",
    deviceVariant: "dual",
    deviceLabel: "Member directory",
    deviceImage: "/screenshots/desktop/08-mgmt-members.png",
    deviceImageMobile: "/screenshots/mobile/08-mgmt-members.png",
    features: [
      {
        icon: UsersThree,
        title: "Living member directory",
        description:
          "A searchable profile-centric database that captures join date, attendance history, payment status, and membership tier in one place.",
      },
      {
        icon: CreditCard,
        title: "Recurring dues, handled end-to-end",
        description:
          "Multiple plan tiers, monthly through lifetime billing cycles, promo codes, trials, and grace periods — billed through Stripe with automatic invoicing.",
      },
      {
        icon: IdentificationBadge,
        title: "Roles, permissions, and chapters",
        description:
          "Community admin, moderator, and member roles map cleanly to volunteer hierarchies. Multi-community support handles federated structures and chapters.",
      },
      {
        icon: Buildings,
        title: "Self-service member portal",
        description:
          "Members manage their own subscriptions, payment methods, and invoices through a hosted portal — no admin intervention required.",
      },
    ],
  },
  {
    id: "bi",
    navLabel: "Business intelligence",
    eyebrow: "Business intelligence & data management",
    heading: "The operations dashboard your board has been asking for.",
    description:
      "Because everything sits in one schema — events, dues, attendance, submissions — analytics are an emergent property, not a separate product. Build the report once; reuse the data everywhere.",
    accent: "dark",
    deviceVariant: "dual",
    deviceLabel: "Reporting dashboard",
    deviceImage: "/screenshots/desktop/06-mgmt-insights.png",
    deviceImageMobile: "/screenshots/mobile/05-mgmt-finance.png",
    features: [
      {
        icon: ChartPieSlice,
        title: "Cross-domain dashboards",
        description:
          "Attendance, revenue, retention, and submission counts unified into a single operational view — not siloed per product.",
      },
      {
        icon: TrendUp,
        title: "Cohort and engagement reporting",
        description:
          "Track who is engaged, who is lapsed, and who is recovering — across events, dues, and form submissions over time.",
      },
      {
        icon: Database,
        title: "Structured exports and audit trails",
        description:
          "Every payment, registration, and check-in is timestamped and exportable. Reports for boards and auditors take minutes, not days.",
      },
      {
        icon: Funnel,
        title: "Segments that drive action",
        description:
          "Filter members by tenure, attendance, plan, or branch and turn the segment into an event invite list, dues reminder, or report.",
      },
    ],
  },
];

export default function PositioningSection() {
  const [activeId, setActiveId] = useState<string>(TABS[0]!.id);
  const active = TABS.find((t) => t.id === activeId) ?? TABS[0]!;

  return (
    <section className="bg-slate-50 pt-20 pb-12 sm:pt-28 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 uppercase">
            Platform overview
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Where social media meets
            <br />
            <span className="text-[#6f8eff]">enterprise resource planning.</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-slate-600">
            At a fraction of the cost.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600">
            YeahApp is built for the operational reality of civil society
            organisations. Where Eventbrite or Luma optimise a single
            transaction, YeahApp models the entire process — members, events,
            payments, communications, and reporting — as one connected system.
          </p>
        </Reveal>

        {/* Tabbed area: sticky pill nav + content card. The wrapper is the sticky boundary
            — when its bottom scrolls past the offset, the nav unsticks and leaves with the section. */}
        <div className="relative mt-12">
          <div className="sticky top-[calc(max(env(safe-area-inset-top,_0px),_0.75rem)_+_4.5rem)] z-30 flex justify-center">
            <div
              role="tablist"
              aria-label="Platform pillars"
              className="scrollbar-hide flex max-w-full gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white/95 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            >
              {TABS.map((tab) => {
                const styles = accentMap[tab.accent];
                const isActive = tab.id === activeId;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveId(tab.id)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 sm:px-5 sm:py-2.5",
                      isActive
                        ? styles.pillActive
                        : "text-slate-700 hover:bg-slate-100",
                    )}
                  >
                    {tab.navLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <Reveal className="mt-6">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white lg:min-h-[calc(80vh-5rem)]">
              <div
                key={active.id}
                role="tabpanel"
                className="animate-in fade-in duration-300 h-full"
              >
                <TabContent tab={active} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TabContent({ tab }: { tab: Tab }) {
  const styles = accentMap[tab.accent];
  const isDark = tab.accent === "dark";
  const surface = isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900";
  const subText = isDark ? "text-slate-300" : "text-slate-600";
  const itemBorder = isDark ? "border-white/10" : "border-slate-200";
  const itemBg = isDark ? "bg-white/[0.03]" : "bg-slate-50";
  const itemTitle = isDark ? "text-white" : "text-slate-900";
  const itemSub = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <div
      className={cn(
        "flex h-full flex-col transition-colors duration-300",
        surface,
      )}
    >
      <div className="grid flex-1 gap-10 px-4 pt-8 pb-16 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:p-14">
        <div className="flex flex-col">
          <span
            className={cn(
              "text-xs font-semibold tracking-widest uppercase",
              styles.eyebrow,
            )}
          >
            {tab.eyebrow}
          </span>
          <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {tab.heading}
          </h3>
          <p
            className={cn("mt-4 text-pretty text-base leading-relaxed", subText)}
          >
            {tab.description}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {tab.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "flex items-start gap-4 rounded-2xl border p-4",
                    itemBorder,
                    itemBg,
                  )}
                >
                  <div
                    className={cn(
                      "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                      styles.iconBg,
                    )}
                  >
                    <Icon
                      className={cn("h-4 w-4", styles.iconText)}
                      weight="duotone"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className={cn("text-sm font-semibold", itemTitle)}>
                      {feature.title}
                    </div>
                    <p className={cn("mt-1 text-sm leading-relaxed", itemSub)}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={cn(
            "flex items-center justify-center",
            isDark && "lg:pl-12",
          )}
        >
          <DevicePlaceholder
            variant={tab.deviceVariant}
            tone={isDark ? "dark" : "light"}
            label={tab.deviceLabel}
            src={tab.deviceImage}
            srcMobile={tab.deviceImageMobile}
            phoneSide={isDark ? "left" : "right"}
            phoneAnchor="top"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
