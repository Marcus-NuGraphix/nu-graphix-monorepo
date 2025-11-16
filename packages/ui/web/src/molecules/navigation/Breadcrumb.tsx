import * as React from "react";
import { cn } from "../../utils/cn";
import { Flex } from "../../atoms/layout";
import { Link } from "../../atoms/link";

export interface BreadcrumbItem {
  /** Item label */
  label: string;
  /** Item URL or path */
  href?: string;
  /** Whether item is current page */
  current?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator */
  separator?: React.ReactNode;
  /** Custom link component */
  linkComponent?: React.ElementType;
  /** Show home icon on first item */
  showHomeIcon?: boolean;
}

const defaultSeparator = (
  <svg
    className="w-4 h-4 text-(--color-foreground-muted)"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const homeIcon = (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      separator = defaultSeparator,
      linkComponent = Link,
      showHomeIcon = false,
      className,
      ...props
    },
    ref
  ) => {
    const LinkComponent = linkComponent;

    return (
      <nav
        ref={ref}
        className={cn("ui-breadcrumb", className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <Flex as="ol" align="center" gap={2}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;
            const showIcon = isFirst && showHomeIcon;

            return (
              <Flex as="li" key={index} align="center" gap={2}>
                {/* Separator */}
                {!isFirst && <span aria-hidden="true">{separator}</span>}

                {/* Item */}
                {item.current || isLast ? (
                  <Flex
                    as="span"
                    align="center"
                    gap={1.5}
                    className={cn(
                      "text-sm font-medium text-foreground cursor-default",
                      item.current && "text-(--color-primary)"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {showIcon ? homeIcon : item.icon}
                    <span>{item.label}</span>
                  </Flex>
                ) : (
                  <LinkComponent
                    href={item.href}
                    className="no-underline"
                  >
                    <Flex
                      align="center"
                      gap={1.5}
                      className={cn(
                        "text-sm font-medium",
                        "text-(--color-foreground-muted) hover:text-foreground",
                        "transition-colors duration-(--transition-fast)"
                      )}
                    >
                      {showIcon ? homeIcon : item.icon}
                      <span>{item.label}</span>
                    </Flex>
                  </LinkComponent>
                )}
              </Flex>
            );
          })}
        </Flex>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";