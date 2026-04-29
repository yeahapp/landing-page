"use client";

import { PlanCard, type PlanCardProps } from "./PlanCard";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

// Hardcoded mirror of basePlans + tier features from the main app at the time
// of the marketing-site fork. Keep in sync if the in-app pricing changes.
const plans: PlanCardProps[] = [
  {
    name: "Starter",
    description:
      "For small communities getting started with events and ticketing.",
    price: "$99",
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
    highlights: ["80 members", "6% fee", "3 communities"],
  },
  {
    name: "Pro",
    description:
      "For growing organizations that need forms, memberships, and analytics.",
    price: "$249",
    priceLabel: "/year",
    actionUrl: `${APP_URL}/signup?plan=pro`,
    isHighlighted: true,
    badge: "MOST POPULAR",
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
    highlights: ["200 members", "3% fee", "10 communities"],
  },
  {
    name: "Business",
    description:
      "For large organizations with unlimited members and all features.",
    price: "$499",
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
    highlights: ["Unlimited members", "1.5% fee", "Unlimited communities"],
  },
];

export default function PricingPlans() {
  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-8">
      {plans.map((plan, index) => (
        <div key={index} className="w-full max-w-md lg:w-1/3">
          <PlanCard
            {...plan}
            buttonColor={plan.isHighlighted ? "violet-600" : undefined}
          />
        </div>
      ))}
    </div>
  );
}
