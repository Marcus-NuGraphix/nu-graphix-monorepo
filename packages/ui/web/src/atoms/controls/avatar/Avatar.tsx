import * as React from "react";
import { cn } from "../../../utils/cn";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "offline" | "busy" | "away";
export type AvatarShape = "circle" | "rounded" | "square";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src?: string | null;
  /** Alt text for the image */
  alt?: string;
  /** Full name used to generate initials */
  name?: string;
  /** Size variant */
  size?: AvatarSize;
  /** Shape variant */
  shape?: AvatarShape;
  /** Status indicator */
  status?: AvatarStatus;
  /** Show status indicator */
  showStatus?: boolean;
  /** Force interactive styles; otherwise inferred from onClick/role */
  isInteractive?: boolean;
  /** Custom fallback content when no image or name */
  fallback?: React.ReactNode;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-[0.625rem]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

const shapeClasses: Record<AvatarShape, string> = {
  circle: "rounded-[var(--radius-full)]",
  rounded: "rounded-[var(--radius-md)]",
  square: "rounded-[var(--radius-xs)]",
};

const statusClasses: Record<AvatarStatus, string> = {
  online: "bg-[var(--color-success)]",
  offline: "bg-[var(--color-foreground-muted)]",
  busy: "bg-[var(--color-danger)]",
  away: "bg-[var(--color-warning)]",
};

const statusIndicatorSize: Record<AvatarSize, string> = {
  xs: "h-1.5 w-1.5 ring-1",
  sm: "h-2 w-2 ring-1",
  md: "h-2.5 w-2.5 ring-2",
  lg: "h-3 w-3 ring-2",
  xl: "h-4 w-4 ring-[3px]",
};

function getInitials(name?: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (
    parts[0]!.charAt(0).toUpperCase() +
    parts[parts.length - 1]!.charAt(0).toUpperCase()
  );
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = "md",
      shape = "circle",
      status,
      showStatus = false,
      className,
      isInteractive,
      onClick,
      role,
      fallback,
      ...props
    },
    ref
  ) => {
    const [imageState, setImageState] = React.useState<"loading" | "loaded" | "error">("loading");
    const initials = React.useMemo(() => getInitials(name), [name]);

    const interactive =
      isInteractive || typeof onClick === "function" || role === "button";

    // Reset image state when src changes
    React.useEffect(() => {
      if (src) {
        setImageState("loading");
      }
    }, [src]);

    return (
      <div
        ref={ref}
        onClick={onClick}
        role={role}
        aria-label={alt ?? name ?? "Avatar"}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={
          interactive
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.(e as any);
                }
              }
            : undefined
        }
        className={cn(
          "avatar",
          "relative inline-flex items-center justify-center",
          "bg-(--color-surface) text-foreground select-none",
          "font-medium transition-all duration-(--transition-normal) ease-(--easing-standard)",
          interactive && [
            "avatar--interactive cursor-pointer",
            "hover:shadow-(--shadow-sm)",
            "focus:outline-none focus:ring-2 focus:ring-(--color-focus-ring) focus:ring-offset-2",
            "active:scale-[0.97]",
          ],
          sizeClasses[size],
          shapeClasses[shape],
          className
        )}
        {...props}
      >
        {/* Image container with clipping */}
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center" style={{ borderRadius: 'inherit' }}>
          {/* Loading placeholder */}
          {src && imageState === "loading" && (
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "text-(--color-foreground-muted) bg-(--color-surface-subtle)",
              "avatar--loading",
              size === "xs" && "text-[0.5rem]",
              size === "sm" && "text-[0.625rem]",
              size === "md" && "text-xs",
              size === "lg" && "text-sm",
              size === "xl" && "text-base"
            )}
            aria-hidden="true"
          >
            {initials || "…"}
          </span>
        )}

          {/* Image */}
          {src && imageState !== "error" && (
            <img
              src={src}
              alt={alt ?? name ?? "Avatar"}
              className={cn(
                "h-full w-full object-cover transition-opacity duration-(--transition-normal)",
                imageState === "loaded" ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageState("loaded")}
              onError={() => setImageState("error")}
              draggable={false}
            />
          )}

          {/* Fallback: initials or custom fallback */}
          {(!src || imageState === "error") && (
            <span
              className="font-medium uppercase"
              aria-hidden="true"
            >
              {fallback ?? (initials || "?")}
            </span>
          )}
        </div>

        {/* Status indicator */}
        {showStatus && status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 rounded-(--radius-full)",
              "ring-(--color-surface) transition-colors duration-(--transition-fast)",
              statusClasses[status],
              statusIndicatorSize[size]
            )}
            aria-label={`Status: ${status}`}
            role="img"
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
