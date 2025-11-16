import * as React from "react";
import { cn } from "../../utils/cn";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum width constraint */
  width?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** Apply padding on all sides */
  padding?: "none" | "sm" | "md" | "lg";
  /** Center the container */
  centered?: boolean;
  /** Apply section spacing (top/bottom padding) */
  section?: boolean;
  /** Custom element type */
  as?: React.ElementType;
}

const widthClasses: Record<NonNullable<ContainerProps["width"]>, string> = {
  sm: "max-w-[var(--container-width-sm)]",
  md: "max-w-[var(--container-width-md)]",
  lg: "max-w-[var(--container-width-lg)]",
  xl: "max-w-[var(--container-width-xl)]",
  "2xl": "max-w-7xl",
  full: "max-w-none",
};

const paddingClasses: Record<NonNullable<ContainerProps["padding"]>, string> = {
  none: "",
  sm: "px-4",
  md: "px-4 md:px-6",
  lg: "px-6 md:px-8 lg:px-12",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      width = "lg",
      padding = "md",
      centered = true,
      section = false,
      as: Component = "div",
      className,
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      className={cn(
        "ui-container",
        "w-full transition-[max-width,padding] duration-(--transition-normal) ease-(--easing-standard)",
        centered && "mx-auto",
        section && "py-12 md:py-16 lg:py-20",
        widthClasses[width],
        paddingClasses[padding],
        className
      )}
      {...props}
    />
  )
);

Container.displayName = "Container";
