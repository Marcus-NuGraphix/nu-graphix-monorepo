# Navigation Components

Professional, accessible, and feature-rich navigation components built with atomic design principles.

## Components Overview

- **🧭 Navigation** - Complete navigation bar with dropdowns, mobile menu, and user management
- **📋 NavBar** - Simplified navigation container for custom layouts  
- **🍞 Breadcrumb** - Hierarchical navigation breadcrumbs
- **📑 Tabs** - Tab navigation with multiple variants and content panels
- **🔗 Link** - Enhanced link component with external indicators
- **📂 Menu** - Flexible dropdown menu system

---

## Navigation

A comprehensive navigation component perfect for website headers with full responsive behavior.

### Features

- 📱 **Responsive Design** - Mobile menu with customizable breakpoints
- 👤 **User Management** - Built-in user menu with avatar
- 📂 **Dropdown Support** - Multi-level navigation menus  
- 🎨 **Multiple Variants** - Default, transparent, sticky, minimal
- 🔗 **Router Integration** - Custom link component support
- ♿ **Fully Accessible** - ARIA compliant with keyboard navigation

### Usage

```tsx
import { Navigation } from "@ui/molecules/navigation";

// Basic navigation
<Navigation
  brand={<Logo />}
  items={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Products", 
      items: [
        { label: "Software", href: "/products/software" },
        { label: "Hardware", href: "/products/hardware" },
      ]
    }
  ]}
  actions={
    <div className="space-x-2">
      <Button variant="ghost">Login</Button>
      <Button variant="primary">Sign Up</Button>
    </div>
  }
  user={{
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg",
    items: [
      { label: "Profile", href: "/profile" },
      { label: "Settings", href: "/settings" },
      { label: "Logout", onClick: logout }
    ]
  }}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "transparent" \| "sticky" \| "minimal"` | `"default"` | Visual variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size of navigation |
| `brand` | `ReactNode` | - | Logo/brand element |
| `items` | `NavigationItem[]` | `[]` | Navigation menu items |
| `actions` | `ReactNode` | - | Action buttons (login, etc.) |
| `user` | `UserConfig` | - | User menu configuration |
| `mobileBreakpoint` | `"sm" \| "md" \| "lg"` | `"lg"` | When to show mobile menu |
| `containerWidth` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | `"xl"` | Container width |
| `linkComponent` | `React.ElementType` | `Link` | Custom link component |

---

## NavBar

A simplified navigation container for custom navigation layouts.

### Usage

```tsx
import { NavBar, Link, Button } from "@ui/components";

<NavBar
  brand={<Logo />}
  background="transparent"
  sticky
>
  <div className="flex items-center justify-end space-x-6">
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    <Button variant="primary">Get Started</Button>
  </div>
</NavBar>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `ReactNode` | - | Brand/logo element |
| `containerWidth` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | `"xl"` | Container width |
| `background` | `"default" \| "transparent" \| "muted"` | `"default"` | Background variant |
| `border` | `"none" \| "bottom" \| "around"` | `"bottom"` | Border style |
| `sticky` | `boolean` | `false` | Sticky positioning |

---

## Breadcrumb

Hierarchical navigation breadcrumbs with customizable separators.

### Usage

```tsx
import { Breadcrumb } from "@ui/molecules/navigation";

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Software", href: "/products/software" },
    { label: "Current Page", current: true }
  ]}
  showHomeIcon
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | - | Breadcrumb items |
| `separator` | `ReactNode` | `ChevronRight` | Custom separator |
| `linkComponent` | `React.ElementType` | `Link` | Custom link component |
| `showHomeIcon` | `boolean` | `false` | Show home icon on first item |

---

## Tabs

Versatile tab navigation with multiple visual variants.

### Usage

```tsx
import { Tabs } from "@ui/molecules/navigation";

<Tabs
  variant="underline"
  items={[
    {
      id: "overview",
      label: "Overview", 
      content: <OverviewPanel />
    },
    {
      id: "details",
      label: "Details",
      icon: <InfoIcon />,
      content: <DetailsPanel />
    },
    {
      id: "settings",
      label: "Settings",
      count: 3,
      content: <SettingsPanel />
    }
  ]}
  onTabChange={(tabId) => console.log(tabId)}
/>
```

### Variants

- **`default`** - Classic tabs with bottom border
- **`pills`** - Rounded pill-style tabs  
- **`underline`** - Minimal underline indicator
- **`cards`** - Card-style tabs with background

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TabItem[]` | - | Tab items with content |
| `activeTab` | `string` | - | Controlled active tab |
| `onTabChange` | `(tabId: string) => void` | - | Tab change callback |
| `variant` | `"default" \| "pills" \| "underline" \| "cards"` | `"default"` | Visual variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tab size |
| `fullWidth` | `boolean` | `false` | Full width tabs |
| `showContent` | `boolean` | `true` | Show tab content panels |

---

## Link

Enhanced link component with external indicators and router support.

### Usage

```tsx
import { Link } from "@ui/atoms/link";

<Link href="/about" variant="primary">About Us</Link>
<Link href="https://external.com" external>External Link</Link>
<Link as={NextLink} href="/next-route">Next.js Route</Link>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "primary" \| "secondary" \| "muted" \| "danger"` | `"default"` | Visual variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Link size |
| `external` | `boolean` | `false` | Show external indicator |
| `disabled` | `boolean` | `false` | Disabled state |
| `noUnderline` | `boolean` | `false` | Remove underline |
| `as` | `React.ElementType` | `"a"` | Custom element/component |

---

## Menu

Flexible dropdown menu system for navigation and actions.

### Usage

```tsx
import { Menu, MenuContent, MenuItem, MenuSeparator, MenuLabel } from "@ui/atoms/menu";

<Menu trigger={<Button>Options</Button>}>
  <MenuContent>
    <MenuLabel>Actions</MenuLabel>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Duplicate</MenuItem>
    <MenuSeparator />
    <MenuItem disabled>Delete</MenuItem>
  </MenuContent>
</Menu>
```

### Props

#### Menu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Open change callback |
| `trigger` | `ReactNode` | - | Trigger element |

#### MenuContent  
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `"start" \| "end" \| "center"` | `"start"` | Alignment |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Positioning side |

---

## Design Patterns

### App Header with Authentication

```tsx
<Navigation
  brand={<AppLogo />}
  variant="sticky"
  items={[
    { label: "Dashboard", href: "/dashboard", active: true },
    { label: "Projects", href: "/projects" },
    { 
      label: "Team", 
      items: [
        { label: "Members", href: "/team/members" },
        { label: "Roles", href: "/team/roles" },
        { label: "Invites", href: "/team/invites", badge: <Badge>2</Badge> }
      ]
    }
  ]}
  user={{
    name: "Sarah Johnson",
    email: "sarah@company.com", 
    avatar: "/avatars/sarah.jpg",
    items: [
      { label: "Profile", href: "/profile", icon: <UserIcon /> },
      { label: "Settings", href: "/settings", icon: <SettingsIcon /> },
      { label: "Billing", href: "/billing", icon: <CreditCardIcon /> },
      { label: "Sign out", onClick: signOut, icon: <LogOutIcon /> }
    ]
  }}
/>
```

### Marketing Website Header

```tsx
<Navigation
  brand={<Logo />}
  variant="transparent"
  items={[
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" }
  ]}
  actions={
    <Flex gap={2}>
      <Button variant="ghost" as={Link} href="/login">
        Login
      </Button>
      <Button variant="primary" as={Link} href="/signup">
        Get Started
      </Button>
    </Flex>
  }
/>
```

### Page Navigation with Breadcrumbs

```tsx
<Stack gap={4}>
  <Breadcrumb
    items={[
      { label: "Dashboard", href: "/dashboard" },
      { label: "Projects", href: "/projects" },
      { label: "Website Redesign", current: true }
    ]}
    showHomeIcon
  />
  
  <Tabs
    variant="underline"
    items={[
      { id: "overview", label: "Overview", content: <ProjectOverview /> },
      { id: "tasks", label: "Tasks", count: 12, content: <TaskList /> },
      { id: "files", label: "Files", content: <FileManager /> },
      { id: "settings", label: "Settings", content: <ProjectSettings /> }
    ]}
  />
</Stack>
```

---

## Accessibility

- ✅ **ARIA Compliant** - Proper roles, labels, and states
- ⌨️ **Keyboard Navigation** - Full keyboard support with arrow keys
- 🎯 **Focus Management** - Visible focus indicators and logical tab order  
- 📱 **Screen Reader** - Descriptive labels and announcements
- 🎨 **High Contrast** - Enhanced visibility in high contrast mode
- ⚡ **Reduced Motion** - Respects user motion preferences

## Performance

- 🚀 **Lightweight** - Minimal JavaScript, CSS-driven animations
- 📱 **Mobile Optimized** - Touch-friendly with proper sizing
- 🎯 **Tree Shaking** - Import only what you need
- ⚡ **Fast Interactions** - Optimized for 60fps animations
- 💾 **Memory Efficient** - Proper event cleanup and state management

---

## Router Integration

Works with any router library:

### Next.js

```tsx
import NextLink from 'next/link';

<Navigation 
  linkComponent={NextLink}
  items={navigationItems}
/>
```

### React Router

```tsx
import { Link as RouterLink } from 'react-router-dom';

<Navigation 
  linkComponent={RouterLink}
  items={navigationItems}
/>
```

### Custom Router

```tsx
const CustomLink = ({ href, children, ...props }) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      router.push(href);
    }}
    {...props}
  >
    {children}
  </a>
);

<Navigation linkComponent={CustomLink} />
```