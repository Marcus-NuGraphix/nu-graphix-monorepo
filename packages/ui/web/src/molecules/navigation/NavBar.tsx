import * as React from "react";
import { cn } from "../../utils/cn";
import { Container, Flex } from "../../atoms/layout";
import { Link } from "../../atoms/link";

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand/logo element */
  brand?: React.ReactNode;
  /** Navigation content */
  children?: React.ReactNode;
  /** Container width */
  containerWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** Background variant */
  background?: "default" | "transparent" | "muted";
  /** Border variant */
  border?: "none" | "bottom" | "around";
  /** Sticky behavior */
  sticky?: boolean;
}

const backgroundClasses = {
  default: "bg-(--color-surface)",
  transparent: "bg-transparent",
  muted: "bg-(--color-surface-subtle)",
};

const borderClasses = {
  none: "",
  bottom: "border-b border-(--color-border-subtle)",
  around: "border border-(--color-border-subtle)",
};

export const NavBar = React.forwardRef<HTMLElement, NavBarProps>(
  (
    {
      brand,
      children,
      containerWidth = "xl",
      background = "default",
      border = "bottom",
      sticky = false,
      className,
      ...props
    },
    ref
  ) => (
    <nav
      ref={ref}
      className={cn(
        "ui-navbar",
        "w-full py-4 transition-colors duration-(--transition-normal)",
        backgroundClasses[background],
        borderClasses[border],
        sticky && "sticky top-0 z-40 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <Container width={containerWidth} padding="lg">
        <Flex align="center" justify="between" gap={4}>
          {brand && <div className="shrink-0">{brand}</div>}
          {children && <div className="flex-1">{children}</div>}
        </Flex>
      </Container>
    </nav>
  )
);

NavBar.displayName = "NavBar";