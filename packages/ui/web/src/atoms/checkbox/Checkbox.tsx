import * as React from "react";
import { cn } from "../../utils/cn";

export type CheckboxSize = "sm" | "md";

type NativeCheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
>;

export interface CheckboxProps extends NativeCheckboxProps {
  size?: CheckboxSize;
  label?: React.ReactNode;
}

const boxBase =
  "inline-flex items-center justify-center rounded border bg-[var(--color-surface)] shadow-sm transition-all";

const sizeClasses: Record<CheckboxSize, string> = {
  sm: "h-4 w-4 text-[10px]",
  md: "h-5 w-5 text-[11px]",
};

const labelSizeClasses: Record<CheckboxSize, string> = {
  sm: "text-xs",
  md: "text-sm",
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = "md",
      label,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const checkboxId = React.useId();

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer",
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
      >
        <input
          id={checkboxId}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />

        <span
          aria-hidden="true"
          className={cn(
            boxBase,
            sizeClasses[size],
            "border-[var(--color-border-subtle)] text-[var(--color-primary-foreground)]",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-focus-ring)] peer-focus-visible:ring-offset-2",
            "peer-checked:bg-[var(--color-primary)] peer-checked:border-[var(--color-primary)]",
            "peer-checked:shadow-md"
          )}
        >
          {/* simple check mark */}
          <svg
            viewBox="0 0 16 16"
            className={cn(
              "h-3 w-3 opacity-0 transition-opacity",
              "peer-checked:opacity-100"
            )}
          >
            <polyline
              points="3.5 8.5 6.5 11.5 12.5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {label && (
          <span
            className={cn(
              "text-[var(--color-foreground)]",
              labelSizeClasses[size]
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
