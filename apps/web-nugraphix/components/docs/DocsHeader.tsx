import * as React from "react";
import { cn } from "@nugraphix/ui/web/src/utils/cn";
import { Stack, Flex, Badge } from "@nugraphix/ui";

export interface DocsHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeVariant?: "neutral" | "primary" | "success" | "warning" | "danger" | "outline";
  className?: string;
}

export function DocsHeader({
  title,
  description,
  badge,
  badgeVariant = "primary",
  className,
}: DocsHeaderProps) {
  return (
    <Stack gap={3} className={cn("border-b border-(--color-border-subtle) pb-6 mb-8", className)}>
      <Flex align="center" gap={3}>
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      </Flex>
      {description && (
        <p className="text-lg text-(--color-foreground-muted) max-w-3xl">
          {description}
        </p>
      )}
    </Stack>
  );
}