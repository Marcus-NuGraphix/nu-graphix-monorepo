import * as React from "react";
import { cn } from "../../utils/cn";

export type SelectVariant = "default" | "ghost" | "unstyled";
export type SelectSize = "sm" | "md" | "lg";

type NativeSelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
>;

export interface SelectProps extends NativeSelectProps {
  variant?: SelectVariant;
  size?: SelectSize;
  isInvalid?: boolean;
  fullWidth?: boolean;
}

const baseClasses =
  [
    "rounded-md border bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-sm",
    "transition-all outline-none",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "appearance-none",
    "bg-[url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\")]",
    "bg-no-repeat bg-[length:16px_16px] bg-[right_0.75rem_center]",
  ].join(" ");

const variantClasses: Record<SelectVariant, string> = {
  default:
    "border-[var(--color-border-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-0 focus-visible:border-[var(--color-primary)]",
  ghost:
    "border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:ring-[var(--color-border-subtle)]",
  unstyled:
    "border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none px-0 py-0 bg-none",
};

const sizeClasses: Record<SelectSize, string> = {
  sm: "h-8 px-2 pr-7 text-xs",
  md: "h-10 px-3 pr-8 text-sm",
  lg: "h-11 px-4 pr-9 text-base",
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "default",
      size = "md",
      isInvalid,
      fullWidth,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          isInvalid &&
            "border-[var(--color-danger)] focus-visible:ring-[var(--color-danger)] focus-visible:border-[var(--color-danger)]",
          className
        )}
        aria-invalid={isInvalid || undefined}
        {...props}
      />
    );
  }
);

Select.displayName = "Select";
