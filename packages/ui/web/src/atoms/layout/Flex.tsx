import * as React from "react";
import { cn } from "../../utils/cn";

export type FlexAlign = "start" | "center" | "end" | "stretch";
export type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: FlexAlign;
  justify?: FlexJustify;
  direction?: FlexDirection;
  gap?: number; // 0–10 as Tailwind gap-x
}

function alignToClass(align?: FlexAlign) {
  switch (align) {
    case "start": return "items-start";
    case "center": return "items-center";
    case "end": return "items-end";
    case "stretch": return "items-stretch";
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
  ({ align, justify, direction = "row", gap, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex",
        directionToClass(direction),
        alignToClass(align),
        justifyToClass(justify),
        gapToClass(gap),
        className
      )}
      {...props}
    />
  )
);

Flex.displayName = "Flex";
