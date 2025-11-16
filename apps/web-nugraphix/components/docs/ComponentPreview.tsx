"use client";

import * as React from "react";
import { cn } from "@nugraphix/ui/web/src/utils/cn";
import { Stack } from "@nugraphix/ui/web/src/atoms/layout";
import { CodeBlock } from "./CodeBlock";

export interface ComponentPreviewProps {
  children: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
  showCode?: boolean;
  className?: string;
}

export function ComponentPreview({
  children,
  code,
  title,
  description,
  showCode: initialShowCode = false,
  className,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = React.useState(initialShowCode);

  return (
    <Stack gap={0} className={cn("rounded-lg border border-(--color-border-subtle) overflow-hidden", className)}>
      {/* Header */}
      {(title || description) && (
        <div className="px-4 py-3 border-b border-(--color-border-subtle) bg-(--color-surface-subtle)">
          {title && <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>}
          {description && <p className="text-xs text-(--color-foreground-muted)">{description}</p>}
        </div>
      )}

      {/* Preview */}
      <div className="p-6 bg-background min-h-[200px] flex items-center justify-center">
        {children}
      </div>

      {/* Code Toggle & Display */}
      {code && (
        <div className="border-t border-(--color-border-subtle)">
          <button
            onClick={() => setShowCode(!showCode)}
            className="w-full px-4 py-2 text-sm font-medium text-(--color-foreground-muted) hover:text-foreground hover:bg-(--color-surface-subtle) transition-colors text-left flex items-center justify-between"
          >
            <span>{showCode ? "Hide" : "View"} Code</span>
            <svg
              className={cn("w-4 h-4 transition-transform", showCode && "rotate-180")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showCode && (
            <div className="border-t border-(--color-border-subtle)">
              <CodeBlock code={code} language="tsx" />
            </div>
          )}
        </div>
      )}
    </Stack>
  );
}
