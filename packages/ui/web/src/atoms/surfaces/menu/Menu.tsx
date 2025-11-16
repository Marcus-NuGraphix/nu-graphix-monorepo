import * as React from "react";
import { cn } from "../../utils/cn";

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the menu is open */
  open?: boolean;
  /** Callback when menu state changes */
  onOpenChange?: (open: boolean) => void;
  /** Menu trigger element */
  trigger?: React.ReactNode;
  /** Menu alignment */
  align?: "start" | "end" | "center";
  /** Menu side */
  side?: "top" | "bottom" | "left" | "right";
  /** Offset from trigger */
  offset?: number;
}

export interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content alignment */
  align?: "start" | "end" | "center";
  /** Menu side */
  side?: "top" | "bottom" | "left" | "right";
}

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether item is disabled */
  disabled?: boolean;
  /** Custom element type */
  as?: React.ElementType;
}

export interface MenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface MenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

const MenuContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ open: controlledOpen, onOpenChange, trigger, children, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;
    
    const setOpen = React.useCallback(
      (newOpen: boolean) => {
        if (!isControlled) {
          setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      },
      [isControlled, onOpenChange]
    );

    const menuRef = React.useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [open, setOpen]);

    // Close menu on escape
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, setOpen]);

    return (
      <MenuContext.Provider value={{ open, setOpen }}>
        <div ref={menuRef} className="ui-menu relative inline-block" {...props}>
          <div
            onClick={() => setOpen(!open)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(!open);
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={open}
            aria-haspopup="menu"
          >
            {trigger}
          </div>
          {children}
        </div>
      </MenuContext.Provider>
    );
  }
);

export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
  ({ align = "start", side = "bottom", className, children, ...props }, ref) => {
    const { open } = React.useContext(MenuContext);

    if (!open) return null;

    const alignClasses = {
      start: "left-0",
      end: "right-0",
      center: "left-1/2 -translate-x-1/2",
    };

    const sideClasses = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2 top-0",
      right: "left-full ml-2 top-0",
    };

    return (
      <div
        ref={ref}
        role="menu"
        className={cn(
          "ui-menu-content",
          "absolute z-50 min-w-48 py-2",
          "bg-(--color-surface) border border-(--color-border-subtle)",
          "rounded-md shadow-(--shadow-md)",
          "animate-in fade-in-0 zoom-in-95 duration-(--transition-fast)",
          alignClasses[align],
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ disabled = false, as: Component = "div", className, children, onClick, ...props }, ref) => {
    const { setOpen } = React.useContext(MenuContext);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      onClick?.(event);
      setOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick?.(event as any);
        setOpen(false);
      }
    };

    return (
      <Component
        ref={ref}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        className={cn(
          "ui-menu-item",
          "flex items-center px-3 py-2 text-sm",
          "cursor-pointer select-none outline-none",
          "transition-colors duration-(--transition-fast) ease-(--easing-standard)",
          !disabled && [
            "hover:bg-(--color-surface-subtle) focus:bg-(--color-surface-subtle)",
            "text-foreground",
          ],
          disabled && [
            "opacity-50 cursor-not-allowed pointer-events-none",
            "text-(--color-foreground-muted)",
          ],
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export const MenuSeparator = React.forwardRef<HTMLDivElement, MenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn(
        "ui-menu-separator",
        "mx-2 my-1 h-px bg-(--color-border-subtle)",
        className
      )}
      {...props}
    />
  )
);

export const MenuLabel = React.forwardRef<HTMLDivElement, MenuLabelProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "ui-menu-label",
        "px-3 py-1.5 text-xs font-medium text-(--color-foreground-muted)",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Menu.displayName = "Menu";
MenuContent.displayName = "MenuContent";
MenuItem.displayName = "MenuItem";
MenuSeparator.displayName = "MenuSeparator";
MenuLabel.displayName = "MenuLabel";