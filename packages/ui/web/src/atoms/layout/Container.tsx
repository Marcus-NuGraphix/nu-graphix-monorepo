import * as React from "react";
import { cn } from "../../utils/cn";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  width?: "sm" | "md" | "lg" | "xl" | "full";
}

const widthClasses: Record<NonNullable<ContainerProps["width"]>, string> = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  full: "max-w-none",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ width = "lg", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full px-4 md:px-6",
        widthClasses[width],
        className
      )}
      {...props}
    />
  )
);

Container.displayName = "Container";
