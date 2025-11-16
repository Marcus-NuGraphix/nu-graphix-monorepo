import * as React from "react";
import { cn } from "../../utils/cn";
import { Container, Flex, Stack } from "../../atoms/layout";
import { Link } from "../../atoms/link";
import { Button } from "../../atoms/button";
import { Menu, MenuContent, MenuItem, MenuSeparator } from "../../atoms/menu";
import { Avatar } from "../../atoms/avatar";

export type NavigationVariant = "default" | "transparent" | "sticky" | "minimal";
export type NavigationSize = "sm" | "md" | "lg";

export interface NavigationItem {
  /** Item label */
  label: string;
  /** Item URL or path */
  href?: string;
  /** Whether item is active */
  active?: boolean;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  /** Badge content */
  badge?: React.ReactNode;
  /** Dropdown items */
  items?: NavigationItem[];
  /** External link */
  external?: boolean;
  /** Click handler (alternative to href) */
  onClick?: () => void;
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation variant */
  variant?: NavigationVariant;
  /** Navigation size */
  size?: NavigationSize;
  /** Brand/logo element */
  brand?: React.ReactNode;
  /** Navigation items */
  items?: NavigationItem[];
  /** Action buttons (login, signup, etc.) */
  actions?: React.ReactNode;
  /** User menu content */
  user?: {
    avatar?: string;
    name?: string;
    email?: string;
    items?: NavigationItem[];
  };
  /** Mobile menu breakpoint */
  mobileBreakpoint?: "sm" | "md" | "lg";
  /** Container width */
  containerWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** Custom link component */
  linkComponent?: React.ElementType;
  /** Show mobile menu toggle */
  showMobileToggle?: boolean;
}

const variantClasses: Record<NavigationVariant, string> = {
  default: "bg-(--color-surface) border-b border-(--color-border-subtle)",
  transparent: "bg-transparent",
  sticky: "bg-(--color-surface) border-b border-(--color-border-subtle) sticky top-0 z-40 backdrop-blur-sm",
  minimal: "bg-(--color-surface-subtle)",
};

const sizeClasses: Record<NavigationSize, string> = {
  sm: "py-3",
  md: "py-4",
  lg: "py-6",
};

export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  (
    {
      variant = "default",
      size = "md",
      brand,
      items = [],
      actions,
      user,
      mobileBreakpoint = "lg",
      containerWidth = "xl",
      linkComponent = Link,
      showMobileToggle = true,
      className,
      ...props
    },
    ref
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const LinkComponent = linkComponent;

    const mobileBreakpointClasses = {
      sm: "sm:hidden",
      md: "md:hidden",
      lg: "lg:hidden",
    };

    const desktopBreakpointClasses = {
      sm: "hidden sm:flex",
      md: "hidden md:flex",
      lg: "hidden lg:flex",
    };

    const renderNavigationItem = (item: NavigationItem, isMobile = false) => {
      if (item.items && item.items.length > 0) {
        // Dropdown item
        return (
          <Menu key={item.label}>
            <Menu
              trigger={
                <button
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md",
                    "transition-colors duration-(--transition-fast) ease-(--easing-standard)",
                    "hover:bg-(--color-surface-subtle) focus:bg-(--color-surface-subtle)",
                    "focus:outline-none focus:ring-2 focus:ring-(--color-focus-ring)",
                    item.active && "text-(--color-primary) bg-(--color-primary-soft)",
                    item.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
                    isMobile && "w-full"
                  )}
                  disabled={item.disabled}
                >
                  <Flex align="center" gap={2} justify={isMobile ? "start" : "center"}>
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge}
                    <svg
                      className="w-4 h-4 ml-auto transition-transform duration-(--transition-fast)"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Flex>
                </button>
              }
            >
              <MenuContent align={isMobile ? "start" : "center"}>
                {item.items.map((subItem) => (
                  <MenuItem
                    key={subItem.label}
                    as={subItem.href ? LinkComponent : "button"}
                    {...(subItem.href && { href: subItem.href })}
                    disabled={subItem.disabled}
                    onClick={subItem.onClick}
                  >
                    <Flex align="center" gap={2}>
                      {subItem.icon}
                      <span>{subItem.label}</span>
                      {subItem.badge && <div className="ml-auto">{subItem.badge}</div>}
                    </Flex>
                  </MenuItem>
                ))}
              </MenuContent>
            </Menu>
          </Menu>
        );
      }

      // Regular item
      const ItemComponent = item.href ? LinkComponent : "button";
      return (
        <ItemComponent
          key={item.label}
          {...(item.href && { href: item.href })}
          {...(item.external && { external: true })}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md",
            "transition-colors duration-(--transition-fast) ease-(--easing-standard)",
            "hover:bg-(--color-surface-subtle) focus:bg-(--color-surface-subtle)",
            "focus:outline-none focus:ring-2 focus:ring-(--color-focus-ring)",
            "no-underline",
            item.active && "text-(--color-primary) bg-(--color-primary-soft)",
            item.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
            isMobile && "w-full"
          )}
          disabled={item.disabled}
          onClick={item.onClick}
        >
          <Flex align="center" gap={2} justify={isMobile ? "start" : "center"}>
            {item.icon}
            <span>{item.label}</span>
            {item.badge}
          </Flex>
        </ItemComponent>
      );
    };

    return (
      <nav
        ref={ref}
        className={cn(
          "ui-navigation",
          "w-full transition-colors duration-(--transition-normal) ease-(--easing-standard)",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <Container width={containerWidth} padding="lg">
          <Flex align="center" justify="between" gap={4}>
            {/* Brand */}
            {brand && (
              <div className="shrink-0">
                {brand}
              </div>
            )}

            {/* Desktop Navigation */}
            <Flex
              align="center"
              gap={1}
              className={cn("flex-1 justify-center", desktopBreakpointClasses[mobileBreakpoint])}
            >
              {items.map((item) => renderNavigationItem(item))}
            </Flex>

            {/* Actions & User Menu */}
            <Flex align="center" gap={3} className="shrink-0">
              {/* Actions */}
              {actions && (
                <div className={cn("hidden", desktopBreakpointClasses[mobileBreakpoint].replace("flex", "block"))}>
                  {actions}
                </div>
              )}

              {/* User Menu */}
              {user && (
                <Menu>
                  <Menu
                    trigger={
                      <button
                        className="p-1 rounded-full transition-colors duration-(--transition-fast) hover:bg-(--color-surface-subtle) focus:outline-none focus:ring-2 focus:ring-(--color-focus-ring)"
                        aria-label="User menu"
                      >
                        <Flex align="center" gap={2}>
                          <Avatar
                            src={user.avatar}
                            name={user.name}
                            size="sm"
                          />
                        </Flex>
                      </button>
                    }
                  >
                    <MenuContent align="end">
                      {user.name && (
                        <>
                          <Stack gap={0.5} className="px-3 py-2">
                            <p className="font-medium text-sm">{user.name}</p>
                            {user.email && (
                              <p className="text-xs text-(--color-foreground-muted)">{user.email}</p>
                            )}
                          </Stack>
                          <MenuSeparator />
                        </>
                      )}
                      {user.items?.map((item) => (
                        <MenuItem
                          key={item.label}
                          as={item.href ? LinkComponent : "button"}
                          {...(item.href && { href: item.href })}
                          disabled={item.disabled}
                          onClick={item.onClick}
                        >
                          <Flex align="center" gap={2}>
                            {item.icon}
                            <span>{item.label}</span>
                            {item.badge && <div className="ml-auto">{item.badge}</div>}
                          </Flex>
                        </MenuItem>
                      ))}
                    </MenuContent>
                  </Menu>
                </Menu>
              )}

              {/* Mobile Menu Toggle */}
              {showMobileToggle && (
                <Button
                  variant="ghost"
                  size="sm"
                  className={mobileBreakpointClasses[mobileBreakpoint]}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </Button>
              )}
            </Flex>
          </Flex>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className={cn(
                "mt-4 pt-4 border-t border-(--color-border-subtle)",
                mobileBreakpointClasses[mobileBreakpoint]
              )}
            >
              <Stack gap={2}>
                {items.map((item) => renderNavigationItem(item, true))}
                
                {/* Mobile Actions */}
                {actions && (
                  <div className="mt-4 pt-4 border-t border-(--color-border-subtle)">
                    {actions}
                  </div>
                )}
              </Stack>
            </div>
          )}
        </Container>
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";