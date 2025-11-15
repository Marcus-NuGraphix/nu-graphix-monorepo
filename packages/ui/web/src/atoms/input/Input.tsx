import * as React from "react";
import { cn } from "../../utils/cn";

export type InputVariant = "default" | "ghost" | "unstyled";
export type InputSize = "sm" | "md" | "lg";

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>;

export interface InputProps extends NativeInputProps {
  variant?: InputVariant;
  size?: InputSize;
  isInvalid?: boolean;
  fullWidth?: boolean;
}


const baseClasses =
  [
    "rounded-md border bg-white text-slate-900 shadow-sm",
    "transition-all outline-none",
    "placeholder:text-slate-400",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" ");

const variantClasses: Record<InputVariant, string> = {
  default:
    "border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:border-blue-500",
  ghost:
    "border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:ring-slate-400",
  unstyled:
    "border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none px-0 py-0",
};

const sizeClasses: Record<InputSize, string> = {
  sm: "h-8 px-2 text-xs",
  md: "h-10 px-3 text-sm",
  lg: "h-11 px-4 text-base",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "md",
      isInvalid,
      fullWidth,
      className,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type ?? "text"}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          isInvalid &&
            "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        aria-invalid={isInvalid || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
