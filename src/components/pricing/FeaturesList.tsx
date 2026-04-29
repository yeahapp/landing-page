import { CheckCircle, XCircle } from "@phosphor-icons/react";

type FeaturesListProps = {
  features: string[];
  disabledFeatures?: string[];
  extraFeatures?: string[];
};

export const FeaturesList = ({
  features,
  disabledFeatures,
  extraFeatures,
}: FeaturesListProps) => (
  <ul className="space-y-3">
    {features.map((feature) => (
      <li key={feature} className="flex items-start gap-3">
        <CheckCircle
          weight="fill"
          className="h-5 w-5 flex-shrink-0 text-green-500"
        />
        <span className="text-sm">{feature}</span>
      </li>
    ))}
    {disabledFeatures?.map((feature) => (
      <li key={feature} className="flex items-start gap-3 opacity-50">
        <XCircle
          weight="fill"
          className="h-5 w-5 flex-shrink-0 text-gray-400"
        />
        <span className="text-sm line-through">{feature}</span>
      </li>
    ))}
    {extraFeatures?.map((feature) => (
      <li key={feature} className="flex items-start gap-3">
        <CheckCircle
          weight="fill"
          className="h-5 w-5 flex-shrink-0 text-purple-500"
        />
        <span className="text-sm font-medium">{feature}</span>
      </li>
    ))}
  </ul>
);
