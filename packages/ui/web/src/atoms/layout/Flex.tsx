import * as React from "react";
import { cn } from "../../utils/cn";

export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type FlexWrap = "wrap" | "nowrap" | "wrap-reverse";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Align items along the cross axis */
  align?: FlexAlign;
  /** Justify content along the main axis */
  justify?: FlexJustify;
  /** Flex direction */
  direction?: FlexDirection;
  /** Gap between items (Tailwind scale 0-10) */
  gap?: number;
  /** Flex wrap behavior */
  wrap?: FlexWrap;
  /** Make responsive (column on mobile, row on desktop) */
  responsive?: boolean;
  /** Inline flex instead of block flex */
  inline?: boolean;
  /** Custom element type */
  as?: React.ElementType;
}

function alignToClass(align?: FlexAlign) {
  switch (align) {
    case "start": return "items-start";
    case "center": return "items-center";
    case "end": return "items-end";
    case "stretch": return "items-stretch";
    case "baseline": return "items-baseline";
    default: return "";
  }
}

function wrapToClass(wrap?: FlexWrap) {
  switch (wrap) {
    case "wrap": return "flex-wrap";
    case "nowrap": return "flex-nowrap";
    case "wrap-reverse": return "flex-wrap-reverse";
    default: return "";
  }
}

function justifyToClass(justify?: FlexJustify) {
  switch (justify) {
    case "start": return "justify-start";
    case "center": return "justify-center";
    case "end": return "justify-end";
    case "between": return "justify-between";
    case "around": return "justify-around";
    case "evenly": return "justify-evenly";
    default: return "";
  }
}

function directionToClass(direction?: FlexDirection) {
  switch (direction) {
    case "row": return "flex-row";
    case "column": return "flex-col";
    case "row-reverse": return "flex-row-reverse";
    case "column-reverse": return "flex-col-reverse";
    default: return "";
  }
}

function gapToClass(gap?: number) {
  if (gap == null) return "";
  if (gap < 0 || gap > 10) return "";
  return `gap-${gap}`;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      align,
      justify,
      direction = "row",
      gap,
      wrap,
      responsive = false,
      inline = false,
      as: Component = "div",
      className,
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      className={cn(
        "ui-flex",
        inline ? "inline-flex" : "flex",
        "transition-[gap] duration-(--transition-fast) ease-(--easing-standard)",
        directionToClass(direction),
        alignToClass(align),
        justifyToClass(justify),
        wrapToClass(wrap),
        gapToClass(gap),
        responsive && "flex-col md:flex-row",
        className
      )}
      {...props}
    />
  )
);

Flex.displayName = "Flex";
