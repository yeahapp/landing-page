"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-colors",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
      clickable: {
        true: "cursor-pointer hover:bg-muted/50",
        false: "",
      },
      active: {
        true: "border-primary bg-primary/5",
        false: "",
      },
    },
    defaultVariants: {
      padding: "none",
      clickable: false,
      active: false,
    },
  },
);

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding, clickable, active, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ padding, clickable, active, className }))}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg leading-none font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// CardWithIcon - Card variant with icon and optional action
interface CardWithIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: PhosphorIcon;
  iconColor?: "primary" | "secondary" | "success" | "warning" | "error";
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const CardWithIcon = React.forwardRef<HTMLDivElement, CardWithIconProps>(
  (
    {
      className,
      icon: Icon,
      iconColor = "primary",
      title,
      description,
      action,
      children,
      ...props
    },
    ref,
  ) => {
    const iconColors = {
      primary:
        "text-slate-700 bg-slate-100",
      secondary:
        "text-blue-700 bg-blue-100",
      success:
        "text-emerald-700 bg-emerald-100",
      warning:
        "text-amber-700 bg-amber-100",
      error: "text-red-700 bg-red-100",
    };

    return (
      <Card ref={ref} className={cn("p-6", className)} {...props}>
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className={cn("rounded-xl p-3", iconColors[iconColor])}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                {description && (
                  <p className="text-muted-foreground text-sm">{description}</p>
                )}
              </div>
            </div>
            {action && <div>{action}</div>}
          </div>
          {children && <div>{children}</div>}
        </div>
      </Card>
    );
  },
);
CardWithIcon.displayName = "CardWithIcon";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardWithIcon,
  cardVariants,
};
