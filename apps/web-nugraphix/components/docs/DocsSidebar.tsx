"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@nugraphix/ui/web/src/utils/cn";
import { Stack, Flex } from "@nugraphix/ui";

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  title: string;
  href: string;
  badge?: string;
}

export interface DocsSidebarProps {
  sections: SidebarSection[];
  className?: string;
}

export function DocsSidebar({ sections, className }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn(
      "w-64 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto",
      "scrollbar-thin scrollbar-track-(--color-surface-subtle) scrollbar-thumb-(--color-border-subtle) hover:scrollbar-thumb-(--color-border-strong)",
      "[&::-webkit-scrollbar]:w-2",
      "[&::-webkit-scrollbar-track]:bg-(--color-surface-subtle)",
      "[&::-webkit-scrollbar-track]:rounded-full",
      "[&::-webkit-scrollbar-thumb]:bg-(--color-border-subtle)",
      "[&::-webkit-scrollbar-thumb]:rounded-full",
      "[&::-webkit-scrollbar-thumb]:hover:bg-(--color-border-strong)",
      className
    )}>
      <nav>
        <Stack gap={6}>
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-foreground mb-3 px-3">
                {section.title}
              </h3>
              <Stack gap={1}>
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm rounded-md transition-colors",
                        "hover:bg-(--color-surface-subtle)",
                        isActive
                          ? "bg-(--color-primary-soft) text-(--color-primary) font-medium"
                          : "text-(--color-foreground-muted)"
                      )}
                    >
                      <Flex align="center" justify="between">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-(--color-surface-subtle) text-(--color-foreground-muted)">
                            {item.badge}
                          </span>
                        )}
                      </Flex>
                    </Link>
                  );
                })}
              </Stack>
            </div>
          ))}
        </Stack>
      </nav>
    </aside>
  );
}
