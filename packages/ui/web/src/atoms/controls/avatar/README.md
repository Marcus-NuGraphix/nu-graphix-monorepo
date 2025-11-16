# Avatar Component

A professional, accessible, and feature-rich avatar component with full design token integration.

## Features

✨ **Multiple Size Variants** - `xs`, `sm`, `md`, `lg`, `xl`  
🔷 **Shape Variants** - `circle`, `rounded`, `square`  
🟢 **Status Indicators** - `online`, `offline`, `busy`, `away`  
🎨 **Proper Design Tokens** - Uses all NuGraphix design tokens correctly  
♿ **Fully Accessible** - ARIA labels, keyboard navigation, reduced motion support  
🖼️ **Smart Image Handling** - Loading states, error fallbacks, lazy loading ready  
⚡ **Smooth Animations** - Professional transitions with respect for user preferences  
🎯 **Interactive States** - Hover, focus, active states with proper affordances  
🔤 **Auto Initials** - Intelligent name parsing for initials generation  
🎭 **Custom Fallbacks** - Support for custom fallback content  

---

## Usage

### Basic Avatar

```tsx
import { Avatar } from "@nugraphix/ui/web";

<Avatar name="John Doe" />
```

### With Image

```tsx
<Avatar
  src="/path/to/image.jpg"
  alt="John Doe"
  name="John Doe"
/>
```

### Size Variants

```tsx
<Avatar size="xs" name="John Doe" />
<Avatar size="sm" name="John Doe" />
<Avatar size="md" name="John Doe" /> {/* default */}
<Avatar size="lg" name="John Doe" />
<Avatar size="xl" name="John Doe" />
```

### Shape Variants

```tsx
<Avatar shape="circle" name="John Doe" /> {/* default */}
<Avatar shape="rounded" name="John Doe" />
<Avatar shape="square" name="John Doe" />
```

### Status Indicators

```tsx
<Avatar
  name="John Doe"
  status="online"
  showStatus
/>

<Avatar
  name="Jane Smith"
  status="busy"
  showStatus
/>
```

### Interactive Avatar

```tsx
<Avatar
  name="John Doe"
  onClick={() => console.log("Avatar clicked")}
  role="button"
/>

{/* Or force interactive styling */}
<Avatar
  name="John Doe"
  isInteractive
/>
```

### Custom Fallback

```tsx
<Avatar fallback={<Icon name="user" />} />
<Avatar fallback="AB" />
```

### Avatar Stack/Group

```tsx
<div className="flex -space-x-3">
  <Avatar
    src="/user1.jpg"
    name="User 1"
    className="ring-2 ring-(--color-surface)"
  />
  <Avatar
    src="/user2.jpg"
    name="User 2"
    className="ring-2 ring-(--color-surface)"
  />
  <Avatar
    name="+5"
    className="ring-2 ring-(--color-surface) bg-(--color-primary) text-(--color-primary-foreground)"
  />
</div>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string \| null` | - | Image source URL |
| `alt` | `string` | - | Alt text for the image |
| `name` | `string` | - | Full name (used for initials and alt text) |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Size variant |
| `shape` | `"circle" \| "rounded" \| "square"` | `"circle"` | Shape variant |
| `status` | `"online" \| "offline" \| "busy" \| "away"` | - | Status indicator type |
| `showStatus` | `boolean` | `false` | Show status indicator |
| `isInteractive` | `boolean` | - | Force interactive styling |
| `fallback` | `ReactNode` | - | Custom fallback content |
| `className` | `string` | - | Additional CSS classes |
| `onClick` | `function` | - | Click handler (makes interactive) |
| `role` | `string` | - | ARIA role (e.g., "button") |

Plus all standard HTML div attributes.

---

## Design Token Usage

The Avatar component properly uses the following design tokens:

### Colors
- `--color-surface-subtle` - Background for initials
- `--color-foreground` - Text color
- `--color-foreground-muted` - Loading state text
- `--color-surface` - Ring color for status indicators
- `--color-success` - Online status
- `--color-danger` - Busy status
- `--color-warning` - Away status
- `--color-focus-ring` - Focus outline

### Typography
- `font-medium` - Text weight (uses `--font-weight-medium`)

### Spacing & Layout
- `--radius-full` - Circle shape
- `--radius-md` - Rounded shape
- `--radius-xs` - Square shape

### Shadows
- `--shadow-xs` - Active state
- `--shadow-sm` - Hover state
- `--shadow-focus` - Focus state

### Motion
- `--transition-fast` - Quick interactions
- `--transition-normal` - Standard transitions
- `--transition-slow` - Loading animation
- `--easing-standard` - Default easing curve

---

## Accessibility

### Keyboard Navigation
- Interactive avatars are keyboard navigable with `Tab`
- Activate with `Enter` or `Space`

### Screen Readers
- Proper ARIA labels on all states
- Status indicators have descriptive labels
- Alt text fallbacks to name if not provided

### Reduced Motion
- Respects `prefers-reduced-motion` preference
- Disables all animations when requested

### High Contrast
- Enhanced outlines in high contrast mode
- Thicker focus indicators

---

## Initials Generation

The component intelligently generates initials:

- **Full Name**: "John Doe" → "JD"
- **Single Name**: "John" → "J"
- **Multiple Names**: "Maria Elena Rodriguez" → "MR" (first and last)
- **No Name**: Shows "?" as fallback

---

## Image Loading States

1. **Loading**: Shows initials with pulse animation
2. **Loaded**: Smooth fade-in of the image
3. **Error**: Falls back to initials automatically

---

## Performance Considerations

- Uses `useMemo` for initials calculation
- Proper `useEffect` for image state management
- Resets loading state when `src` changes
- No unnecessary re-renders

---

## Browser Support

- Modern browsers with CSS custom properties support
- Graceful degradation for older browsers
- CSS containment for better performance

---

## Examples

See `Avatar.examples.tsx` for comprehensive usage examples including:
- All size and shape variants
- Status indicators
- Interactive states
- Loading and error states
- Avatar stacks
- Custom styling
- Accessibility features
