import * as React from "react";
import { cn } from "../../utils/cn";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingAlign = "left" | "center" | "right" | "justify";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  align?: HeadingAlign;
  truncate?: boolean;
}

// Just the HTML heading tags we actually use
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const levelTag: Record<HeadingLevel, HeadingTag> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-4xl md:text-5xl font-bold tracking-tight",
  2: "text-3xl md:text-4xl font-semibold tracking-tight",
  3: "text-2xl md:text-3xl font-semibold tracking-tight",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold uppercase tracking-wide",
};

const alignClasses: Partial<Record<HeadingAlign, string>> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, align, truncate, className, children, ...props }, ref) => {
    const Tag = levelTag[level]; // "h1" | "h2" | ... | "h6"

    return (
      <Tag
        ref={ref}
        className={cn(
          "text-[var(--color-foreground)]",
          levelClasses[level],
          align && alignClasses[align],
          truncate && "truncate",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";
