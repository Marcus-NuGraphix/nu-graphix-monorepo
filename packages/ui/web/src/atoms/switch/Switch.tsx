import * as React from "react";
import { cn } from "../../utils/cn";

export type SwitchSize = "sm" | "md";

export interface SwitchProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "onChange"
  > {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: SwitchSize;
  label?: React.ReactNode;
}

const trackBase =
  "relative inline-flex items-center rounded-full border border-transparent transition-all";
const thumbBase =
  "pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform";

const sizeClasses: Record<
  SwitchSize,
  { track: string; thumb: string; translate: string; label: string }
> = {
  sm: {
    track: "h-4 w-7",
    thumb: "h-3 w-3",
    translate: "translate-x-3",
    label: "text-xs",
  },
  md: {
    track: "h-5 w-9",
    thumb: "h-4 w-4",
    translate: "translate-x-4",
    label: "text-sm",
  },
};

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked,
      onCheckedChange,
      disabled,
      size = "md",
      label,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState(
      defaultChecked ?? false
    );

    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : uncontrolled;

    const toggle = () => {
      if (disabled) return;
      const next = !checked;
      if (!isControlled) setUncontrolled(next);
      onCheckedChange?.(next);
    };

    const sizeCfg = sizeClasses[size];

    const switchId = React.useId();

    return (
      <button
        {...props}
        ref={ref}
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled || undefined}
        onClick={toggle}
        disabled={disabled}
        className={cn(
          "inline-flex items-center gap-2",
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
      >
        <span
          className={cn(
            trackBase,
            sizeCfg.track,
            checked ? "bg-blue-600" : "bg-slate-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          )}
        >
          <span
            className={cn(
              thumbBase,
              sizeCfg.thumb,
              checked ? sizeCfg.translate : "translate-x-0"
            )}
          />
        </span>

        {label && (
          <span className={cn("text-slate-900", sizeCfg.label)}>
            {label}
          </span>
        )}
      </button>
    );
  }
);

Switch.displayName = "Switch";
