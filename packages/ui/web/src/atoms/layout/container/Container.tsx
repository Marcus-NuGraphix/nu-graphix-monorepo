import * as React from "react";
import { cn } from "../../../utils/cn";

type ElementType =
  | keyof React.JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

export type ContainerProps<E extends ElementType = "div"> = {
  /**
   * Render as a different element or component.
   * @example
   * <Container as="section">...</Container>
   * <Container as="main">...</Container>
   */
  as?: E;
  /**
   * Maximum width constraint.
   * @default "lg"
   */
  width?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /**
   * Apply horizontal padding.
   * @default "md"
   */
  padding?: "none" | "sm" | "md" | "lg";
  /**
   * Center the container horizontally.
   * @default true
   */
  centered?: boolean;
  /**
   * Apply section spacing (vertical padding).
   * @default false
   */
  section?: boolean;
  /**
   * Container variant with background styling.
   */
  variant?: "default" | "card" | "elevated" | "subtle";
  className?: string;
} & Omit<
  React.ComponentPropsWithoutRef<E>,
  "as" | "className" | "width" | "padding" | "centered" | "section" | "variant"
>;

type ContainerComponent = <E extends ElementType = "div">(
  props: ContainerProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null;

const widthClasses: Record<
  NonNullable<ContainerProps["width"]>,
  string
> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-none",
};

const paddingClasses: Record<
  NonNullable<ContainerProps["padding"]>,
  string
> = {
  none: "",
  sm: "px-4",
  md: "px-4 md:px-6",
  lg: "px-6 md:px-8 lg:px-12",
};

const variantClasses: Record<
  NonNullable<ContainerProps["variant"]>,
  string
> = {
  default: "",
  card: "ui-container--card",
  elevated: "ui-container--elevated",
  subtle: "ui-container--subtle",
};

/**
 * Container
 *
 * A centered layout container with configurable max-width and padding.
 * - Renders a `div` by default
 * - Accepts an `as` prop for polymorphism
 * - Provides preset width and padding options
 * - Can be used as a page section with vertical spacing
 * - Forwards all props and refs to the underlying element
 */
export const Container = React.forwardRef(
  <E extends ElementType = "div">(
    {
      as,
      width = "lg",
      padding = "md",
      centered = true,
      section = false,
      variant = "default",
      className,
      ...rest
    }: ContainerProps<E>,
    ref: React.Ref<any>
  ) => {
    const Component = as || "div";

    return (
      <Component
        ref={ref}
        className={cn(
          "ui-container",
          "w-full",
          centered && "mx-auto",
          section && "py-12 md:py-16 lg:py-20",
          widthClasses[width],
          paddingClasses[padding],
          variantClasses[variant],
          className
        )}
        {...rest}
      />
    );
  }
) as ContainerComponent & { displayName: string };

Container.displayName = "Container";
