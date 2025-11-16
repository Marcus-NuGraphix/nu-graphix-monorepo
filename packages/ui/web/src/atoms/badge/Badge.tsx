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
    "border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)] text-[var(--color-foreground)]",
  primary:
    "border-[var(--color-primary-soft)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]",
  success:
    "border-[var(--color-border-success)] bg-[var(--color-success-soft)] text-[var(--color-success)]",
  warning:
    "border-[var(--color-border-warning)] bg-[var(--color-warning-soft)] text-[var(--color-warning)]",
  danger:
    "border-[var(--color-border-danger)] bg-[var(--color-danger-soft)] text-[var(--color-danger)]",
  outline:
    "border-[var(--color-border-subtle)] bg-transparent text-[var(--color-foreground)]",
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
