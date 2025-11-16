# Container

A centered layout container with configurable max-width and padding constraints, designed for consistent page layouts and content containment.

## Features

- **Polymorphic**: Render as any HTML element using the `as` prop
- **Preset Widths**: Six responsive width options (sm, md, lg, xl, 2xl, full)
- **Flexible Padding**: Four padding levels with responsive scaling
- **Section Spacing**: Optional vertical spacing for page sections
- **Variants**: Multiple visual styles (default, card, elevated, subtle)
- **Type-safe**: Full TypeScript support with proper prop inference
- **Ref forwarding**: Properly forwards refs to underlying elements

## Import

```tsx
import { Container } from "@nugraphix/ui/web";
```

## Basic Usage

By default, Container renders as a centered `div` with `lg` width and `md` padding:

```tsx
<Container>
  <h1>Page Content</h1>
  <p>Your content here</p>
</Container>
```

## Width Options

Container provides six preset width constraints:

```tsx
// Small container (640px)
<Container width="sm">
  Narrow content
</Container>

// Medium container (768px)
<Container width="md">
  Medium width content
</Container>

// Large container (1024px) - Default
<Container width="lg">
  Standard page width
</Container>

// Extra large container (1280px)
<Container width="xl">
  Wide content
</Container>

// 2XL container (1536px)
<Container width="2xl">
  Very wide content
</Container>

// Full width container (no constraint)
<Container width="full">
  Full viewport width
</Container>
```

## Padding Options

Control horizontal padding with responsive scaling:

```tsx
// No padding
<Container padding="none">
  Edge-to-edge content
</Container>

// Small padding (16px)
<Container padding="sm">
  Minimal padding
</Container>

// Medium padding (16px → 24px on md+) - Default
<Container padding="md">
  Standard padding
</Container>

// Large padding (24px → 32px → 48px)
<Container padding="lg">
  Generous padding
</Container>
```

## Section Spacing

Add vertical spacing to use Container as a page section:

```tsx
<Container section>
  <h2>Section Title</h2>
  <p>Section content with automatic vertical spacing</p>
</Container>

// Combines with other props
<Container width="xl" section>
  Wide section with spacing
</Container>
```

The `section` prop applies responsive vertical padding:
- Mobile: `48px` (py-12)
- Tablet: `64px` (py-16)
- Desktop: `80px` (py-20)

## Variants

Container supports visual variants with background styling:

```tsx
// Default - no background
<Container variant="default">
  Standard container
</Container>

// Card - surface background with border and shadow
<Container variant="card">
  Card-style container
</Container>

// Elevated - elevated surface with shadow
<Container variant="elevated">
  Elevated container
</Container>

// Subtle - subtle background
<Container variant="subtle">
  Subtle background container
</Container>
```

## Polymorphic Rendering

Use the `as` prop to render as different semantic elements:

```tsx
// Render as a section
<Container as="section" section>
  <h2>About Us</h2>
  <p>Content</p>
</Container>

// Render as main content
<Container as="main" width="xl">
  <h1>Page Title</h1>
  Main content
</Container>

// Render as article
<Container as="article" width="md">
  Article content
</Container>

// Render as header
<Container as="header">
  Header content
</Container>

// Render as footer
<Container as="footer" variant="subtle">
  Footer content
</Container>
```

## Centered vs. Uncenetered

By default, Container is centered. Disable centering if needed:

```tsx
// Centered (default)
<Container>
  Centered content
</Container>

// Not centered
<Container centered={false}>
  Left-aligned content
</Container>
```

## Common Patterns

### Page Layout

```tsx
export default function Page() {
  return (
    <>
      <Container as="header" section variant="subtle">
        <h1>Site Header</h1>
      </Container>
      
      <Container as="main" section>
        <h2>Main Content</h2>
        <p>Page content here</p>
      </Container>
      
      <Container as="footer" variant="card">
        <p>Footer content</p>
      </Container>
    </>
  );
}
```

### Hero Section

```tsx
<Container as="section" width="xl" section>
  <div className="text-center">
    <h1 className="text-5xl font-bold mb-4">Welcome</h1>
    <p className="text-xl text-gray-600">
      Your journey starts here
    </p>
  </div>
</Container>
```

### Card Grid

```tsx
<Container section>
  <h2 className="text-3xl font-bold mb-8">Features</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 border rounded-lg">Feature 1</div>
    <div className="p-6 border rounded-lg">Feature 2</div>
    <div className="p-6 border rounded-lg">Feature 3</div>
  </div>
</Container>
```

### Narrow Content

```tsx
// Blog post or article layout
<Container as="article" width="md" section>
  <h1>Article Title</h1>
  <div className="prose">
    Article content...
  </div>
</Container>
```

### Full-Width Background with Constrained Content

```tsx
<div className="bg-blue-500">
  <Container section>
    <h2 className="text-white">Constrained content within full-width background</h2>
  </Container>
</div>
```

## Props

### `as`

- **Type**: `ElementType` (HTML tag string or React component)
- **Default**: `"div"`
- **Description**: The element or component to render as

```tsx
<Container as="section">...</Container>
<Container as="main">...</Container>
```

### `width`

- **Type**: `"sm" | "md" | "lg" | "xl" | "2xl" | "full"`
- **Default**: `"lg"`
- **Description**: Maximum width constraint

| Value | Max Width | Pixels |
|-------|-----------|--------|
| `sm`  | max-w-screen-sm | 640px |
| `md`  | max-w-screen-md | 768px |
| `lg`  | max-w-screen-lg | 1024px |
| `xl`  | max-w-screen-xl | 1280px |
| `2xl` | max-w-screen-2xl | 1536px |
| `full` | max-w-none | None |

### `padding`

- **Type**: `"none" | "sm" | "md" | "lg"`
- **Default**: `"md"`
- **Description**: Horizontal padding with responsive scaling

| Value | Mobile | Tablet (md+) | Desktop (lg+) |
|-------|--------|--------------|---------------|
| `none` | 0 | 0 | 0 |
| `sm` | 16px | 16px | 16px |
| `md` | 16px | 24px | 24px |
| `lg` | 24px | 32px | 48px |

### `centered`

- **Type**: `boolean`
- **Default**: `true`
- **Description**: Center the container horizontally using `mx-auto`

### `section`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Add vertical spacing (py-12 md:py-16 lg:py-20)

### `variant`

- **Type**: `"default" | "card" | "elevated" | "subtle"`
- **Default**: `"default"`
- **Description**: Visual variant with background styling

- **`default`**: No background or styling
- **`card`**: Surface background with border and subtle shadow
- **`elevated`**: Elevated surface with medium shadow
- **`subtle`**: Subtle background color

### `className`

- **Type**: `string`
- **Optional**: Yes
- **Description**: Additional CSS classes to apply

### Element-specific props

Container accepts all valid props for the element it renders as:

```tsx
// When as="section", ARIA attributes available
<Container as="section" aria-labelledby="section-title">
  <h2 id="section-title">Section</h2>
</Container>

// When as="main", id and role available
<Container as="main" id="main-content" role="main">
  Main content
</Container>
```

## TypeScript

### Generic Type Parameter

Container is fully typed with a generic parameter:

```tsx
type ContainerProps<E extends ElementType = "div"> = {
  as?: E;
  width?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  centered?: boolean;
  section?: boolean;
  variant?: "default" | "card" | "elevated" | "subtle";
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<E>, /* ... */>;
```

### Type Inference

TypeScript infers the correct props based on the `as` prop:

```tsx
// ✅ Valid: section elements accept aria-labelledby
<Container as="section" aria-labelledby="title">...</Container>

// ✅ Valid: main elements accept role
<Container as="main" role="main">...</Container>

// ✅ Valid: article elements accept all standard HTML attributes
<Container as="article" id="post">...</Container>
```

### Ref Types

```tsx
const sectionRef = useRef<HTMLElement>(null);
<Container as="section" ref={sectionRef}>...</Container>

const divRef = useRef<HTMLDivElement>(null);
<Container ref={divRef}>...</Container>
```

## Best Practices

### ✅ Do

- Use semantic HTML elements with the `as` prop
- Choose appropriate width for your content type
- Use `section` prop for page sections with vertical rhythm
- Combine variants for visual hierarchy

```tsx
// Good: Semantic markup with appropriate width
<Container as="main" width="lg" section>
  <Container as="article" width="md">
    Blog post content
  </Container>
</Container>

// Good: Visual hierarchy with variants
<Container variant="subtle" section>
  <h2>Featured Section</h2>
</Container>
```

### ❌ Don't

- Don't nest containers unnecessarily
- Don't use Container for fine-grained layout control (use Box, Flex, or Stack)
- Don't override width with className when props suffice
- Don't use `section` prop without semantic meaning

```tsx
// Avoid: Unnecessary nesting
<Container>
  <Container>  // Redundant
    Content
  </Container>
</Container>

// Avoid: Wrong tool for the job
<Container className="flex gap-4">  // Use <Flex> instead
  Items
</Container>

// Avoid: Fighting with props
<Container width="lg" className="max-w-screen-sm">  // Confusing
  Content
</Container>
```

## Accessibility

### Semantic Structure

Use appropriate semantic elements for document structure:

```tsx
<Container as="header" role="banner">
  Site header
</Container>

<Container as="nav" aria-label="Main navigation">
  Navigation links
</Container>

<Container as="main" id="main-content">
  Primary content
</Container>

<Container as="aside" aria-label="Related content">
  Sidebar
</Container>

<Container as="footer" role="contentinfo">
  Footer content
</Container>
```

### Skip Links

Combine with skip link targets:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<Container as="main" id="main-content" tabIndex={-1}>
  Main content starts here
</Container>
```

### ARIA Labels

Add labels for sections:

```tsx
<Container as="section" aria-labelledby="features-heading" section>
  <h2 id="features-heading">Features</h2>
  Content...
</Container>
```

## Performance

Container is optimized for performance:

- No JavaScript overhead
- CSS classes applied statically
- No runtime style calculations
- Minimal DOM manipulation
- Efficient class concatenation with `cn()`

## Responsive Behavior

Container automatically adapts to viewport size:

- **Width**: Max-width constraints scale with viewport
- **Padding**: Responsive padding increases on larger screens
- **Section spacing**: Vertical padding scales from mobile to desktop
- **Centering**: Always maintains horizontal centering (when enabled)

## CSS Custom Properties

Container uses these design tokens:

```css
.ui-container {
  /* Defined in layout.css */
}

.ui-container--card {
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.ui-container--elevated {
  background: var(--color-surface-elevated);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-lg);
}

.ui-container--subtle {
  background: var(--color-surface-subtle);
  border-radius: var(--radius-md);
}
```

## Related Components

- **Box**: Generic layout primitive with no preset styles
- **Flex**: Flexbox container with gap and alignment controls
- **Stack**: Vertical or horizontal stacking with consistent spacing
- **Grid**: CSS Grid layout component

## Migration from Box

If you're using Box as a container, consider migrating:

```tsx
// Before (Box)
<Box className="max-w-5xl mx-auto px-4 md:px-6">
  Content
</Box>

// After (Container)
<Container width="lg" padding="md">
  Content
</Container>
```

Container provides a more semantic and maintainable API for common layout patterns.

## Examples

### Multi-Section Page

```tsx
export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <Container as="section" width="2xl" section>
        <div className="text-center">
          <h1 className="text-6xl font-bold">Welcome</h1>
          <p className="text-xl mt-4">Get started today</p>
        </div>
      </Container>

      {/* Features */}
      <Container as="section" width="xl" section variant="subtle">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature cards */}
        </div>
      </Container>

      {/* CTA */}
      <Container as="section" section variant="card">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Ready to start?</h2>
          <button className="mt-4">Get Started</button>
        </div>
      </Container>
    </>
  );
}
```

### Blog Layout

```tsx
export default function BlogPost({ post }) {
  return (
    <>
      {/* Header */}
      <Container as="header" section variant="subtle">
        <Container width="md">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <p className="text-gray-600 mt-2">{post.author} • {post.date}</p>
        </Container>
      </Container>

      {/* Content */}
      <Container as="article" width="md" section>
        <div className="prose prose-lg">
          {post.content}
        </div>
      </Container>

      {/* Related Posts */}
      <Container as="aside" section variant="subtle">
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Related post cards */}
        </div>
      </Container>
    </>
  );
}
```

### Dashboard Layout

```tsx
export default function Dashboard() {
  return (
    <Container as="main" width="full" padding="lg" section>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats cards */}
        <Container variant="card" centered={false}>
          <h3>Total Users</h3>
          <p className="text-4xl font-bold">1,234</p>
        </Container>
        
        <Container variant="card" centered={false}>
          <h3>Revenue</h3>
          <p className="text-4xl font-bold">$12,345</p>
        </Container>
        
        <Container variant="card" centered={false}>
          <h3>Active Sessions</h3>
          <p className="text-4xl font-bold">56</p>
        </Container>
      </div>
    </Container>
  );
}
```