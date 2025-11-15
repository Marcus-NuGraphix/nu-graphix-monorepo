import * as React from "react";
import { cn } from "../../utils/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const baseClasses =
  [
    "inline-flex items-center justify-center rounded-md font-medium",
    "transition-all transform-gpu",
    "disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
    "active:scale-[0.97]",
  ].join(" ");

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200",
  outline:
    "border border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md",
  link: "bg-transparent text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline px-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-9 w-9 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth,
      isLoading,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      type, // <-- we’ll default this below
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type ?? "button"} // default type for safety
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          "hover:translate-y-px", // subtle movement
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={isLoading || undefined}
        data-variant={variant}
        data-size={size}
        {...props}
      >
        {isLoading && (
          <span
            className={cn(
              "mr-2 inline-block h-4 w-4 rounded-full border-2 border-transparent border-t-current border-l-current animate-spin",
              size === "sm" && "h-3 w-3",
              size === "lg" && "h-5 w-5",
              size === "icon" && "mr-0"
            )}
            aria-hidden="true"
          />
        )}

        {leftIcon && size !== "icon" && (
          <span className={cn("mr-2 inline-flex", isLoading && "opacity-75")}>
            {leftIcon}
          </span>
        )}

        {children && (
          <span className={cn(isLoading && "opacity-80")}>{children}</span>
        )}

        {rightIcon && size !== "icon" && (
          <span className={cn("ml-2 inline-flex", isLoading && "opacity-75")}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
