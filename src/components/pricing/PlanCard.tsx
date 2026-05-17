import { Button } from "@/components/main/buttons";
import { FeaturesList } from "./FeaturesList";
import { cn } from "@/lib/utils";

type PlanIcon = React.ComponentType<{
  className?: string;
  weight?: "duotone";
}>;

export type PlanCardProps = {
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  icon: PlanIcon;
  badge?: string;
  features: string[];
  disabledFeatures?: string[];
  actionUrl: string;
  isHighlighted?: boolean;
};

export const PlanCard = ({
  name,
  description,
  price,
  priceLabel,
  icon: Icon,
  badge,
  features,
  disabledFeatures,
  actionUrl,
  isHighlighted,
}: PlanCardProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-6 sm:p-7",
        isHighlighted
          ? "border-[#6f8eff] bg-white shadow-lg shadow-slate-900/5"
          : "border-slate-200 bg-slate-50",
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6f8eff] px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
          {badge}
        </div>
      )}

      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6f8eff]/10">
        <Icon className="h-5 w-5 text-[#6f8eff]" weight="duotone" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
        {name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight text-slate-900">
          {price}
        </span>
        <span className="text-sm text-slate-500">{priceLabel}</span>
      </div>

      <FeaturesList
        features={features}
        disabledFeatures={disabledFeatures}
        className="mt-6"
      />

      <div className="mt-auto pt-6">
        <a href={actionUrl} className="block">
          <Button
            className={cn(
              "w-full text-white transition-colors",
              isHighlighted
                ? "bg-[#6f8eff] hover:bg-[#5a79e8]"
                : "bg-slate-900 hover:bg-slate-800",
            )}
          >
            Get started
          </Button>
        </a>
      </div>
    </div>
  );
};
