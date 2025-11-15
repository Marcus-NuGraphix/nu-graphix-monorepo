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
    "rounded-md border bg-white text-slate-900 shadow-sm",
    "transition-all outline-none",
    "placeholder:text-slate-400",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "resize-y", // allow vertical resize only
  ].join(" ");

const variantClasses: Record<TextareaVariant, string> = {
  default:
    "border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:border-blue-500",
  ghost:
    "border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:ring-slate-400",
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
            "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        aria-invalid={isInvalid || undefined}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
