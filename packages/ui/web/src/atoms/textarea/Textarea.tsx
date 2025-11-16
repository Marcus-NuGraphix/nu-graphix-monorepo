import * as React from "react";
import { cn } from "../../utils/cn";

export type TextareaVariant = "default" | "ghost" | "unstyled";
export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  size?: TextareaSize;
  isInvalid?: boolean;
  fullWidth?: boolean;
}

const baseClasses =
  [
    "rounded-md border bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-sm",
    "transition-all outline-none",
    "placeholder:text-[var(--color-foreground-muted)]",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "resize-y", // allow vertical resize only
  ].join(" ");

const variantClasses: Record<TextareaVariant, string> = {
  default:
    "border-[var(--color-border-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-0 focus-visible:border-[var(--color-primary)]",
  ghost:
    "border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:ring-[var(--color-border-subtle)]",
  unstyled:
    "border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none px-0 py-0",
};

const sizeClasses: Record<TextareaSize, string> = {
  sm: "min-h-[80px] px-2 py-1.5 text-xs",
  md: "min-h-[96px] px-3 py-2 text-sm",
  lg: "min-h-[120px] px-4 py-2.5 text-base",
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      <textarea
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

Textarea.displayName = "Textarea";
