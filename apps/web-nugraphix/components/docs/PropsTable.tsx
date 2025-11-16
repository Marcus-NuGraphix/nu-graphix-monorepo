import * as React from "react";
import { cn } from "@nugraphix/ui/web/src/utils/cn";
import { Badge } from "@nugraphix/ui";

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

export interface PropsTableProps {
  props: PropDefinition[];
  className?: string;
}

export function PropsTable({ props, className }: PropsTableProps) {
  return (
    <div className={cn("overflow-x-auto rounded-lg border border-(--color-border-subtle)", className)}>
      <table className="w-full text-sm">
        <thead className="bg-(--color-surface-subtle) border-b border-(--color-border-subtle)">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Default</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-(--color-border-subtle)">
          {props.map((prop) => (
            <tr key={prop.name} className="hover:bg-(--color-surface-subtle) transition-colors">
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <code className="text-(--color-primary) font-mono text-xs bg-(--color-primary-soft) px-1.5 py-0.5 rounded">
                    {prop.name}
                  </code>
                  {prop.required && (
                    <Badge variant="danger" size="sm">
                      Required
                    </Badge>
                  )}
                </div>
              </td>
              <td className="px-4 py-3">
                <code className="text-(--color-foreground-muted) font-mono text-xs">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {prop.defaultValue ? (
                  <code className="text-(--color-foreground-muted) font-mono text-xs bg-(--color-surface-subtle) px-1.5 py-0.5 rounded">
                    {prop.defaultValue}
                  </code>
                ) : (
                  <span className="text-(--color-foreground-muted)">-</span>
                )}
              </td>
              <td className="px-4 py-3 text-(--color-foreground-muted)">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
