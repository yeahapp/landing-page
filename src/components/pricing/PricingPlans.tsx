import Link from "next/link";
import {
  Rocket,
  TrendUp,
  Buildings,
  Vault,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/main/buttons";
import { PlanCard, type PlanCardProps } from "./PlanCard";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

// Hardcoded mirror of basePlans + tier features from the main app at the time
// of the marketing-site fork. Keep in sync if the in-app pricing changes.
const plans: PlanCardProps[] = [
  {
    name: "Starter",
    icon: Rocket,
    description:
      "For small communities getting started with events and ticketing.",
    price: "€99",
    priceLabel: "/year",
    actionUrl: `${APP_URL}/signup?plan=starter`,
    features: [
      "Member limit: 80 members",
      "Communities: 3 communities",
      "Transaction fee: 6%",
      "Ticketing & payments",
    ],
    disabledFeatures: [
      "Custom registration forms",
      "Paid membership system",
      "Insights & analytics",
      "Promo codes",
    ],
  },
  {
    name: "Pro",
    icon: TrendUp,
    description:
      "For growing organizations that need forms, memberships, and analytics.",
    price: "€249",
    priceLabel: "/year",
    actionUrl: `${APP_URL}/signup?plan=pro`,
    isHighlighted: true,
    badge: "Most popular",
    features: [
      "Member limit: 200 members",
      "Communities: 10 communities",
      "Transaction fee: 3%",
      "Ticketing & payments",
      "Custom registration forms",
      "Paid membership system",
      "Insights & analytics",
    ],
    disabledFeatures: ["Promo codes"],
  },
  {
    name: "Business",
    icon: Buildings,
    description:
      "For large organizations with unlimited members and all features.",
    price: "€499",
    priceLabel: "/year",
    actionUrl: `${APP_URL}/signup?plan=business`,
    features: [
      "Member limit: Unlimited",
      "Communities: Unlimited",
      "Transaction fee: 1.5%",
      "Ticketing & payments",
      "Custom registration forms",
      "Paid membership system",
      "Insights & analytics",
      "Promo codes",
    ],
  },
];

const enterpriseFeatures = [
  "Everything in Business",
  "Self-hosted database — your data on your own infrastructure",
  "Bring-your-own-stack: PostgreSQL, file storage, and email provider",
  "Full data portability — standard-format exports, no extraction fees",
  "Custom transaction fees and contract terms",
  "Dedicated onboarding and priority support",
];

export default function PricingPlans() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </div>

      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="flex flex-col">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6f8eff]/10">
              <Vault className="h-5 w-5 text-[#6f8eff]" weight="duotone" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              Enterprise
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-semibold tracking-tight text-slate-900">
                Custom
              </span>
              <span className="text-sm text-slate-500">
                negotiated annual terms
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              For large or federated organisations that need to run YeahApp on
              their own infrastructure with bespoke commercial terms.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="bg-slate-900 px-6 text-white transition-colors hover:bg-slate-800">
                  Contact sales
                </Button>
              </Link>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {enterpriseFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <Check
                  weight="bold"
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                />
                <span className="text-sm text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
