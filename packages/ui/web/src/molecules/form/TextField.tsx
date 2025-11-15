import * as React from "react";
import { cn } from "../../utils/cn";
import { Input, type InputProps } from "../../atoms/input";

export interface TextFieldProps
  extends Omit<InputProps, "id" | "isInvalid"> {
  id?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
  isInvalid?: boolean;
  required?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      label,
      description,
      error,
      isInvalid,
      required,
      className,
      ...inputProps
    },
    ref
  ) => {
    const autoId = React.useId();
    const fieldId = id ?? autoId;

    const descriptionId =
      description && !error ? `${fieldId}-description` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label
            htmlFor={fieldId}
            className="text-sm font-medium text-slate-900 flex items-center gap-1"
          >
            {label}
            {required && (
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <Input
          ref={ref}
          id={fieldId}
          aria-invalid={isInvalid || undefined}
          aria-describedby={errorId ?? descriptionId}
          isInvalid={isInvalid}
          required={required}
          {...inputProps}
        />

        {error ? (
          <p
            id={errorId}
            className="text-xs text-red-600"
          >
            {error}
          </p>
        ) : description ? (
          <p
            id={descriptionId}
            className="text-xs text-slate-500"
          >
            {description}
          </p>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";
