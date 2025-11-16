import * as React from "react";
import { cn } from "@nugraphix/ui/web/src/utils/cn";
import { Stack } from "@nugraphix/ui/web/src/atoms/layout";

export interface DocsSectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function DocsSection({
  id,
  title,
  description,
  children,
  className,
}: DocsSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      <Stack gap={4}>
        {title && (
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {title}
            </h2>
            {description && (
              <p className="text-base text-(--color-foreground-muted)">
                {description}
              </p>
            )}
          </div>
        )}
        <div>{children}</div>
      </Stack>
    </section>
  );
}