import { Button } from "@/components/main/buttons";
import { FeaturesList } from "./FeaturesList";
import Link from "next/link";

export type PlanCardProps = {
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  badge?: string;
  features: string[];
  disabledFeatures?: string[];
  actionUrl: string;
  isHighlighted?: boolean;
  isCurrentPlan?: boolean;
  extraFeatures?: string[];
  buttonColor?: string;
  savings?: number;
  highlights?: string[];
};

export const PlanCard = ({
  name,
  description,
  price,
  priceLabel,
  badge,
  features,
  disabledFeatures,
  actionUrl,
  isHighlighted,
  isCurrentPlan,
  extraFeatures,
  highlights,
}: PlanCardProps) => {
  const borderClass = isHighlighted
    ? "border-2 border-violet-500"
    : isCurrentPlan
      ? "border-2 border-green-500"
      : "border border-gray-200";

  const shadowClass = isHighlighted
    ? "shadow-md hover:shadow-lg"
    : "shadow-sm hover:shadow-md";

  return (
    <div
      className={`relative w-full rounded-2xl ${borderClass} p-8 ${shadowClass} flex flex-col gap-6 transition-all ${isHighlighted ? "lg:scale-105" : ""}`}
    >
      {badge && (
        <div className="absolute -top-5 right-0 left-0 mx-auto w-fit rounded-full bg-violet-500 px-4 py-1 text-center text-sm font-semibold text-white">
          {badge}
        </div>
      )}

      {isCurrentPlan && (
        <div className="absolute -top-5 right-0 left-0 mx-auto w-fit rounded-full bg-green-500 px-4 py-1 text-center text-sm font-semibold text-white">
          CURRENT PLAN
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-x-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">{priceLabel}</span>
        </div>
      </div>

      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      <FeaturesList
        features={features}
        disabledFeatures={disabledFeatures}
        extraFeatures={extraFeatures}
      />

      <div className="mt-auto">
        {isCurrentPlan ? (
          <Button className="w-full" disabled>
            Current plan
          </Button>
        ) : (
          <Link href={actionUrl} className="w-full">
            <Button
              className={`w-full ${isHighlighted ? "bg-violet-600 hover:bg-violet-700" : ""}`}
            >
              Get started
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
