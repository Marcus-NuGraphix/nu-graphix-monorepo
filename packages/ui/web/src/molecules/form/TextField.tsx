import * as React from "react";
import { Stack, Flex } from "../../atoms/layout";
import { Input, type InputProps } from "../../atoms/form/input";

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
      <Stack gap={1.5} className={className}>
        {label && (
          <label
            htmlFor={fieldId}
            className="text-sm font-medium text-foreground"
          >
            <Flex align="center" gap={1}>
              {label}
              {required && (
                <span className="text-(--color-danger)" aria-hidden="true">
                  *
                </span>
              )}
            </Flex>
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
            className="text-xs text-(--color-danger)"
          >
            {error}
          </p>
        ) : description ? (
          <p
            id={descriptionId}
            className="text-xs text-(--color-foreground-muted)"
          >
            {description}
          </p>
        ) : null}
      </Stack>
    );
  }
);

TextField.displayName = "TextField";
