"use client";

import * as React from "react";
import { cn } from "@nugraphix/ui/web/src/utils/cn";
import { Stack } from "@nugraphix/ui/web/src/atoms/layout";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface DocsTocProps {
  items: TocItem[];
  className?: string;
}

export function DocsToc({ items, className }: DocsTocProps) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className={cn("w-56 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto", className)}>
      <div className="border-l border-(--color-border-subtle) pl-4">
        <h4 className="text-sm font-semibold text-foreground mb-3">On this page</h4>
        <Stack gap={2}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-sm transition-colors block",
                item.level === 3 && "pl-4",
                activeId === item.id
                  ? "text-(--color-primary) font-medium"
                  : "text-(--color-foreground-muted) hover:text-foreground"
              )}
            >
              {item.title}
            </a>
          ))}
        </Stack>
      </div>
    </aside>
  );
}
