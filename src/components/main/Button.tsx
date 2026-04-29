"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { SpinnerGap } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-muted text-foreground hover:bg-muted/80",
        ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
        outline: "border border-border bg-background hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success:
          "bg-green-600 text-white hover:bg-green-700:bg-green-600",
        warning:
          "bg-amber-600 text-white hover:bg-amber-700:bg-amber-600",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        xs: "h-10 sm:h-6 px-2 text-xs",
        sm: "h-10 sm:h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-10 sm:h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-10 w-10 sm:h-8 sm:w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    // For icon-only buttons, don't show icons alongside
    const isIconButton =
      size === "icon" || size === "icon-sm" || size === "icon-lg";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <>
            <SpinnerGap className="h-4 w-4 animate-spin" />
            {!isIconButton && children}
          </>
        ) : (
          <>
            {!isIconButton && leftIcon}
            {children}
            {!isIconButton && rightIcon}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
