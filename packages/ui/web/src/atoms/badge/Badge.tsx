import * as React from "react";
import { cn } from "../../utils/cn";

export type BadgeVariant =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "outline";

export type BadgeSize = "sm" | "md";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const baseClasses =
  "inline-flex items-center rounded-full border font-medium transition-colors";

const variantClasses: Record<BadgeVariant, string> = {
  neutral:
    "border-slate-200 bg-slate-100 text-slate-800",
  primary:
    "border-blue-200 bg-blue-50 text-blue-700",
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
  warning:
    "border-amber-200 bg-amber-50 text-amber-800",
  danger:
    "border-red-200 bg-red-50 text-red-700",
  outline:
    "border-slate-300 bg-transparent text-slate-800",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-0.5 text-[11px]",
  md: "px-3 py-0.5 text-xs",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "neutral",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
