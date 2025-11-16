import * as React from "react";
import { cn } from "../../utils/cn";

export type LinkVariant = "default" | "primary" | "secondary" | "muted" | "danger";
export type LinkSize = "sm" | "md" | "lg";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual style variant */
  variant?: LinkVariant;
  /** Size of the link */
  size?: LinkSize;
  /** Show external link indicator */
  external?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Remove underline */
  noUnderline?: boolean;
  /** Custom element type for router links */
  as?: React.ElementType;
}

const variantClasses: Record<LinkVariant, string> = {
  default: "text-foreground hover:text-(--color-primary)",
  primary: "text-(--color-primary) hover:text-(--color-primary) hover:opacity-80",
  secondary: "text-(--color-secondary) hover:text-(--color-secondary) hover:opacity-80",
  muted: "text-(--color-foreground-muted) hover:text-foreground",
  danger: "text-(--color-danger) hover:text-(--color-danger) hover:opacity-80",
};

const sizeClasses: Record<LinkSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = "default",
      size = "md",
      external = false,
      disabled = false,
      noUnderline = false,
      as: Component = "a",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "ui-link",
          "inline-flex items-center gap-1",
          "transition-colors duration-(--transition-fast) ease-(--easing-standard)",
          "focus:outline-none focus:ring-2 focus:ring-(--color-focus-ring) focus:ring-offset-1 rounded-sm",
          !noUnderline && "underline decoration-1 underline-offset-2 hover:decoration-2",
          variantClasses[variant],
          sizeClasses[size],
          disabled && "pointer-events-none opacity-50 cursor-not-allowed",
          className
        )}
        aria-disabled={disabled}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer"
        })}
        {...props}
      >
        {children}
        {external && (
          <svg
            className="w-3 h-3 ml-1 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Component>
    );
  }
);

Link.displayName = "Link";