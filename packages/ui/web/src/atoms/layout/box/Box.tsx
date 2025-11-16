import * as React from "react";
import { cn } from "../../../utils/cn";

type ElementType =
  | keyof React.JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

export type BoxProps<E extends ElementType = "div"> = {
  /**
   * Render as a different element or component.
   * @example
   * <Box as="section">...</Box>
   * <Box as={Link} href="/home">...</Box>
   */
  as?: E;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className">;

type BoxComponent = <E extends ElementType = "div">(
  props: BoxProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null;

/**
 * Box
 *
 * Generic, unopinionated layout primitive.
 * - Renders a `div` by default
 * - Accepts an `as` prop for polymorphism
 * - Forwards all props and refs to the underlying element
 * - Does **not** apply any styling by default (only what you pass via className)
 */
export const Box = React.forwardRef(
  <E extends ElementType = "div">(
    { as, className, ...rest }: BoxProps<E>,
    ref: React.Ref<any>
  ) => {
    const Component = as || "div";

    return <Component ref={ref} className={cn(className)} {...rest} />;
  }
) as BoxComponent & { displayName: string };

Box.displayName = "Box";
