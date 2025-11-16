# Box

A generic, unopinionated layout primitive that serves as the foundation for building layouts and compositions.

## Features

- **Polymorphic**: Render as any HTML element or React component using the `as` prop
- **Unstyled by default**: No preset styles—complete styling control via `className`
- **Type-safe**: Full TypeScript support with proper prop inference based on the rendered element
- **Ref forwarding**: Properly forwards refs to underlying elements
- **Flexible**: Accept all valid props of the rendered element

## Import

```tsx
import { Box } from "@nugraphix/ui/web";
```

## Basic Usage

By default, Box renders as a `div`:

```tsx
<Box className="p-4 bg-gray-100">
  Basic box content
</Box>
```

## Polymorphic Rendering

Use the `as` prop to render as different HTML elements:

```tsx
// Render as a section
<Box as="section" className="container">
  <h2>Section Content</h2>
</Box>

// Render as an article
<Box as="article" className="prose">
  Article content here
</Box>

// Render as a header
<Box as="header" className="sticky top-0">
  Header content
</Box>
```

## With Custom Components

Box can render as any React component:

```tsx
import { Link } from "next/link";

// Render as a Link component
<Box as={Link} href="/about" className="text-blue-500">
  About Us
</Box>

// Render as a custom component
<Box as={CustomButton} variant="primary">
  Click Me
</Box>
```

## Layout Patterns

### Container

```tsx
<Box className="max-w-7xl mx-auto px-4">
  {/* Centered container with padding */}
</Box>
```

### Card

```tsx
<Box className="rounded-lg border border-gray-200 p-6 shadow-sm">
  {/* Card content */}
</Box>
```

### Grid Item

```tsx
<Box className="grid grid-cols-3 gap-4">
  <Box className="col-span-2">Main content</Box>
  <Box className="col-span-1">Sidebar</Box>
</Box>
```

### Flexbox

```tsx
<Box className="flex items-center justify-between gap-4">
  <Box>Left item</Box>
  <Box>Right item</Box>
</Box>
```

## Props

### `as`

- **Type**: `ElementType` (HTML tag string or React component)
- **Default**: `"div"`
- **Description**: The element or component to render as

```tsx
<Box as="section">...</Box>
<Box as={Link}>...</Box>
```

### `className`

- **Type**: `string`
- **Optional**: Yes
- **Description**: CSS classes to apply to the element

```tsx
<Box className="p-4 bg-white rounded">...</Box>
```

### Element-specific props

Box accepts all valid props for the element it renders as. TypeScript will properly infer these based on the `as` prop:

```tsx
// When as="a", href and target are available and type-checked
<Box as="a" href="https://example.com" target="_blank">
  Link
</Box>

// When as="button", type and onClick are available
<Box as="button" type="submit" onClick={handleClick}>
  Submit
</Box>

// When as="input", value and onChange are available
<Box as="input" type="text" value={value} onChange={handleChange} />
```

## TypeScript

### Generic Type Parameter

The Box component is fully typed with a generic parameter that defaults to `"div"`:

```tsx
type BoxProps<E extends ElementType = "div"> = {
  as?: E;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className">;
```

### Type Inference

TypeScript automatically infers the correct props based on the `as` prop:

```tsx
// ✅ Valid: anchor elements accept href
<Box as="a" href="/home">Home</Box>

// ❌ Error: div elements don't accept href
<Box as="div" href="/home">Home</Box>

// ✅ Valid: button elements accept disabled
<Box as="button" disabled>Submit</Box>
```

### Ref Types

When using refs, TypeScript infers the correct element type:

```tsx
const divRef = useRef<HTMLDivElement>(null);
<Box ref={divRef}>Div content</Box>

const buttonRef = useRef<HTMLButtonElement>(null);
<Box as="button" ref={buttonRef}>Button</Box>
```

## Composition

Box is designed to be composed with other components:

```tsx
// Build a custom Card component
export const Card = ({ children, ...props }) => (
  <Box
    className="rounded-lg border border-gray-200 p-6 shadow-sm"
    {...props}
  >
    {children}
  </Box>
);

// Build a custom Section component
export const Section = ({ children, ...props }) => (
  <Box
    as="section"
    className="py-12"
    {...props}
  >
    <Box className="max-w-7xl mx-auto px-4">
      {children}
    </Box>
  </Box>
);
```

## Best Practices

### ✅ Do

- Use Box as a foundation for building custom layout components
- Leverage the `as` prop for semantic HTML
- Apply styling through the `className` prop
- Use Box when you need a generic container without preset styles

```tsx
// Good: Semantic HTML with proper element
<Box as="main" className="container">
  <Box as="article" className="prose">
    Content
  </Box>
</Box>
```

### ❌ Don't

- Don't use Box when a more specific component exists (use `Flex`, `Stack`, `Container` instead if available)
- Don't add inline styles—use `className` instead
- Don't override the `as` prop unnecessarily—use the default `div` when appropriate

```tsx
// Avoid: Unnecessary complexity
<Box as="div" className="...">  // Just use <Box className="...">
  Content
</Box>

// Avoid: Inline styles
<Box style={{ padding: '1rem' }}>  // Use className instead
  Content
</Box>
```

## Accessibility

When using Box as interactive elements, ensure proper accessibility:

### Buttons

```tsx
<Box
  as="button"
  type="button"
  aria-label="Close dialog"
  className="..."
>
  <CloseIcon />
</Box>
```

### Links

```tsx
<Box
  as="a"
  href="/products"
  aria-label="View all products"
  className="..."
>
  Products
</Box>
```

### Landmarks

Use semantic elements for proper page structure:

```tsx
<Box as="nav" aria-label="Main navigation">
  {/* Navigation items */}
</Box>

<Box as="main" id="main-content">
  {/* Main content */}
</Box>

<Box as="aside" aria-label="Related content">
  {/* Sidebar */}
</Box>
```

## Performance

Box is a lightweight primitive with minimal overhead:

- No default styles to parse
- Direct prop forwarding
- Efficient ref handling
- No unnecessary re-renders

## Related Components

- **Flex**: Pre-styled flexbox container
- **Stack**: Vertical or horizontal stacking with spacing
- **Container**: Centered container with max-width constraints
- **Grid**: Grid layout component

## Examples

### Responsive Grid

```tsx
<Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item) => (
    <Box key={item.id} className="border rounded p-4">
      {item.content}
    </Box>
  ))}
</Box>
```

### Modal Overlay

```tsx
<Box
  className="fixed inset-0 bg-black/50 flex items-center justify-center"
  onClick={handleClose}
>
  <Box
    className="bg-white rounded-lg p-6 max-w-md"
    onClick={(e) => e.stopPropagation()}
  >
    Modal content
  </Box>
</Box>
```

### Hero Section

```tsx
<Box
  as="section"
  className="relative h-screen flex items-center justify-center"
>
  <Box className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600" />
  <Box className="relative z-10 text-center text-white">
    <h1>Welcome</h1>
    <p>Your journey starts here</p>
  </Box>
</Box>
```
