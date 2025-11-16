import * as React from "react";
import { cn } from "../../../utils/cn";

export type SpinnerSize = "xs" | "sm" | "md" | "lg";

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}

const sizeClasses: Record<SpinnerSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-block rounded-full border-2 border-(--color-border-subtle) border-t-(--color-primary) animate-spin",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-live="polite"
      {...props}
    >
      <span className="sr-only">Loading</span>
    </div>
  )
);

Spinner.displayName = "Spinner";
