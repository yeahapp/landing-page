import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type FeaturesListProps = {
  features: string[];
  disabledFeatures?: string[];
  className?: string;
};

export const FeaturesList = ({
  features,
  disabledFeatures,
  className,
}: FeaturesListProps) => (
  <ul className={cn("space-y-2.5", className)}>
    {features.map((feature) => (
      <li key={feature} className="flex items-start gap-2.5">
        <Check
          weight="bold"
          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
        />
        <span className="text-sm text-slate-600">{feature}</span>
      </li>
    ))}
    {disabledFeatures?.map((feature) => (
      <li key={feature} className="flex items-start gap-2.5 text-slate-400">
        <X weight="bold" className="mt-0.5 h-4 w-4 shrink-0" />
        <span className="text-sm line-through">{feature}</span>
      </li>
    ))}
  </ul>
);
