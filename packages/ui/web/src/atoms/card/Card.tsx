'use client';

import * as React from "react";
import { cn } from "../../utils/cn";

export type CardVariant = "elevated" | "outline" | "ghost";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  isInteractive?: boolean;
  as?: "div" | "section" | "article";
}

const baseClasses =
  [
    "rounded-xl border bg-white text-slate-900 shadow-sm",
    "transition-all",
  ].join(" ");

const variantClasses: Record<CardVariant, string> = {
  elevated: "shadow-md hover:shadow-lg border-transparent",
  outline: "border-slate-200",
  ghost: "border-transparent bg-transparent shadow-none",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

const interactiveClasses =
  "cursor-pointer hover:-translate-y-[1px] hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "outline",
      padding = "md",
      isInteractive,
      as = "div",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref as any}
        className={cn(
          baseClasses,
          variantClasses[variant],
          paddingClasses[padding],
          isInteractive && interactiveClasses,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
