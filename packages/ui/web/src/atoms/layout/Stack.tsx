import * as React from "react";
import { cn } from "../../utils/cn";

export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gap between items (Tailwind scale 0-10) */
  gap?: number;
  /** Align items horizontally */
  align?: StackAlign;
  /** Justify items vertically */
  justify?: StackJustify;
  /** Add dividers between items */
  dividers?: boolean;
  /** Reverse the stack order */
  reverse?: boolean;
  /** Custom element type */
  as?: React.ElementType;
}

function gapToClass(gap?: number) {
  if (gap == null) return "gap-4";
  if (gap < 0 || gap > 10) return "gap-4";
  return `gap-${gap}`;
}

function alignToClass(align?: StackAlign) {
  switch (align) {
    case "start": return "items-start";
    case "center": return "items-center";
    case "end": return "items-end";
    case "stretch": return "items-stretch";
    default: return "";
  }
}

function justifyToClass(justify?: StackJustify) {
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

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      gap,
      align,
      justify,
      dividers = false,
      reverse = false,
      as: Component = "div",
      className,
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      className={cn(
        "ui-stack",
        "flex",
        reverse ? "flex-col-reverse" : "flex-col",
        "transition-[gap] duration-(--transition-fast) ease-(--easing-standard)",
        gapToClass(gap),
        alignToClass(align),
        justifyToClass(justify),
        dividers && "ui-stack--divided",
        className
      )}
      {...props}
    />
  )
);

Stack.displayName = "Stack";
