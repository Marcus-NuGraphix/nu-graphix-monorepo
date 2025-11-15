import * as React from "react";
import { cn } from "../../utils/cn";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number; // 0–10
  align?: "start" | "center" | "end" | "stretch";
}

function gapToClass(gap?: number) {
  if (gap == null) return "gap-2";
  if (gap < 0 || gap > 10) return "gap-2";
  return `gap-${gap}`;
}

function alignToClass(align?: StackProps["align"]) {
  switch (align) {
    case "start": return "items-start";
    case "center": return "items-center";
    case "end": return "items-end";
    case "stretch": return "items-stretch";
    default: return "";
  }
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ gap, align, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        gapToClass(gap),
        alignToClass(align),
        className
      )}
      {...props}
    />
  )
);

Stack.displayName = "Stack";
