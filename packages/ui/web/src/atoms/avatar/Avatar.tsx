import * as React from "react";
import { cn } from "../../utils/cn";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

function getInitials(name?: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, name, size = "md", className, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const initials = getInitials(name);

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-slate-200 text-slate-700 overflow-hidden",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src && !isLoaded && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-500">
            {initials || "…"}
          </span>
        )}

        {src && (
          <img
            src={src}
            alt={alt ?? name ?? "Avatar"}
            className="h-full w-full object-cover"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(false)}
          />
        )}

        {!src && (
          <span className="font-medium">{initials || "?"}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
