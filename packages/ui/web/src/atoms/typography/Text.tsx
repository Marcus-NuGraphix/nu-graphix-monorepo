import * as React from "react";
import { cn } from "../../utils/cn";

export type TextVariant = "sm" | "md" | "lg" | "muted" | "caption";
export type TextAlign = "left" | "center" | "right" | "justify";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "p" | "div";
  variant?: TextVariant;
  align?: TextAlign;
  truncate?: boolean;
}

const variantClasses: Record<TextVariant, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  muted: "text-sm text-slate-500",
  caption: "text-[11px] uppercase tracking-wide text-slate-500",
};

const alignClasses: Partial<Record<TextAlign, string>> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as = "span",
      variant = "md",
      align,
      truncate,
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
          "text-slate-900",
          variantClasses[variant],
          align && alignClasses[align],
          truncate && "truncate",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";
