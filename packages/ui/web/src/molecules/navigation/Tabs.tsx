import * as React from "react";
import { cn } from "../../utils/cn";
import { Flex } from "../../atoms/layout";

export interface TabItem {
  /** Tab identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Tab content */
  content?: React.ReactNode;
  /** Whether tab is disabled */
  disabled?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  /** Badge content */
  badge?: React.ReactNode;
  /** Number of notifications/items */
  count?: number;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tab items */
  items: TabItem[];
  /** Currently active tab */
  activeTab?: string;
  /** Callback when tab changes */
  onTabChange?: (tabId: string) => void;
  /** Tab variant */
  variant?: "default" | "pills" | "underline" | "cards";
  /** Tab size */
  size?: "sm" | "md" | "lg";
  /** Whether tabs should be full width */
  fullWidth?: boolean;
  /** Show content panels */
  showContent?: boolean;
}

const variantClasses = {
  default: {
    container: "border-b border-(--color-border-subtle)",
    tab: "px-4 py-2 -mb-px border-b-2 border-transparent hover:border-(--color-border-subtle)",
    activeTab: "border-(--color-primary) text-(--color-primary)",
  },
  pills: {
    container: "",
    tab: "px-4 py-2 rounded-md hover:bg-(--color-surface-subtle)",
    activeTab: "bg-(--color-primary) text-(--color-primary-foreground)",
  },
  underline: {
    container: "",
    tab: "px-4 py-2 relative hover:text-(--color-primary)",
    activeTab: "text-(--color-primary) after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-(--color-primary)",
  },
  cards: {
    container: "bg-(--color-surface-subtle) p-1 rounded-lg",
    tab: "px-4 py-2 rounded-md hover:bg-(--color-surface)",
    activeTab: "bg-(--color-surface) shadow-sm text-(--color-primary)",
  },
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      activeTab: controlledActiveTab,
      onTabChange,
      variant = "default",
      size = "md",
      fullWidth = false,
      showContent = true,
      className,
      ...props
    },
    ref
  ) => {
    const [internalActiveTab, setInternalActiveTab] = React.useState(
      items.find(item => !item.disabled)?.id || items[0]?.id || ""
    );

    const isControlled = controlledActiveTab !== undefined;
    const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

    const setActiveTab = React.useCallback(
      (tabId: string) => {
        if (!isControlled) {
          setInternalActiveTab(tabId);
        }
        onTabChange?.(tabId);
      },
      [isControlled, onTabChange]
    );

    const activeTabContent = React.useMemo(
      () => items.find(item => item.id === activeTab)?.content,
      [items, activeTab]
    );

    const variantStyles = variantClasses[variant];

    return (
      <div ref={ref} className={cn("ui-tabs", className)} {...props}>
        {/* Tab List */}
        <Flex
          as="div"
          className={cn(
            variantStyles.container,
            fullWidth && "w-full"
          )}
          role="tablist"
        >
          {items.map((item) => {
            const isActive = item.id === activeTab;
            const isDisabled = item.disabled;

            return (
              <button
                key={item.id}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                aria-selected={isActive}
                aria-controls={`tabpanel-${item.id}`}
                id={`tab-${item.id}`}
                disabled={isDisabled}
                className={cn(
                  "ui-tab",
                  "font-medium transition-all duration-(--transition-fast) ease-(--easing-standard)",
                  "focus:outline-none focus:ring-2 focus:ring-(--color-focus-ring) focus:ring-offset-1",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  sizeClasses[size],
                  variantStyles.tab,
                  isActive && variantStyles.activeTab,
                  fullWidth && "flex-1",
                  !isActive && !isDisabled && "text-(--color-foreground-muted)"
                )}
                onClick={() => !isDisabled && setActiveTab(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const currentIndex = items.findIndex(i => i.id === item.id);
                    const direction = e.key === "ArrowRight" ? 1 : -1;
                    const nextIndex = (currentIndex + direction + items.length) % items.length;
                    const nextItem = items[nextIndex];
                    if (nextItem && !nextItem.disabled) {
                      setActiveTab(nextItem.id);
                    }
                  }
                }}
              >
                <Flex align="center" gap={2} justify={fullWidth ? "center" : "start"}>
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge}
                  {typeof item.count === "number" && item.count > 0 && (
                    <span
                      className={cn(
                        "inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-xs font-medium",
                        isActive ? "bg-(--color-primary-foreground) text-(--color-primary)" : "bg-(--color-surface-subtle) text-(--color-foreground-muted)"
                      )}
                    >
                      {item.count > 99 ? "99+" : item.count}
                    </span>
                  )}
                </Flex>
              </button>
            );
          })}
        </Flex>

        {/* Tab Content */}
        {showContent && activeTabContent && (
          <div
            className="ui-tab-content mt-4"
            role="tabpanel"
            tabIndex={0}
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            {activeTabContent}
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = "Tabs";