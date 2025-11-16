"use client";

import * as React from "react";
import { cn } from "@nugraphix/ui/web/src/utils/cn";
import { Button } from "@nugraphix/ui";

export interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = false,
  title,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative rounded-lg border border-(--color-border-subtle) bg-(--color-surface) overflow-hidden", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-(--color-border-subtle) bg-(--color-surface-subtle)">
          <span className="text-sm font-medium text-(--color-foreground-muted)">{title}</span>
          <span className="text-xs text-(--color-foreground-muted) uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 z-10"
          title="Copy code"
        >
          {copied ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </Button>
        <pre className={cn(
          "overflow-x-auto p-4 text-sm",
          showLineNumbers && "pl-12"
        )}>
          <code className={cn(
            "language-${language}",
            "text-foreground",
            "font-mono"
          )}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}