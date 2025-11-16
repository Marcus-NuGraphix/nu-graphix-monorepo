# Layout Components

Professional, accessible, and feature-rich layout components with full design token integration.

---

## Container

A responsive container component for constraining content width with optional padding and section spacing.

### Features

- 📏 **Multiple Width Variants** - `sm`, `md`, `lg`, `xl`, `2xl`, `full`
- 🎨 **Flexible Padding** - `none`, `sm`, `md`, `lg`
- 🎯 **Section Spacing** - Built-in top/bottom padding for sections
- 🔄 **Smooth Transitions** - Responsive width and padding changes
- 🎭 **Polymorphic** - Render as any HTML element
- ♿ **Fully Accessible** - Semantic HTML support

### Usage

#### Basic Container

```tsx
import { Container } from "@ui/web";

<Container>
  <h1>Content goes here</h1>
</Container>
```

#### Width Variants

```tsx
<Container width="sm">Narrow content</Container>
<Container width="md">Medium content</Container>
<Container width="lg">Default content</Container>
<Container width="xl">Wide content</Container>
<Container width="2xl">Extra wide content</Container>
<Container width="full">Full width</Container>
```

#### Padding Options

```tsx
<Container padding="none">No padding</Container>
<Container padding="sm">Small padding (16px)</Container>
<Container padding="md">Medium padding (responsive)</Container>
<Container padding="lg">Large padding (responsive)</Container>
```

#### Section Spacing

```tsx
<Container section>
  {/* Adds vertical padding for page sections */}
  <h2>Section Title</h2>
</Container>
```

#### Polymorphic Rendering

```tsx
<Container as="section">Section element</Container>
<Container as="article">Article element</Container>
<Container as="main">Main element</Container>
```

#### Not Centered

```tsx
<Container centered={false}>
  Left-aligned container
</Container>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | `"lg"` | Maximum width constraint |
| `padding` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | Horizontal padding |
| `centered` | `boolean` | `true` | Center the container |
| `section` | `boolean` | `false` | Add section spacing (vertical padding) |
| `as` | `React.ElementType` | `"div"` | Custom element type |

---

## Flex

A flexible flexbox layout component with comprehensive alignment and spacing options.

### Features

- 🎯 **Full Flexbox Control** - Align, justify, direction, wrap
- 📱 **Responsive Mode** - Auto-responsive column to row
- 🎨 **Gap Support** - Tailwind gap scale (0-10)
- 🔄 **Smooth Transitions** - Animated gap changes
- 🎭 **Polymorphic** - Render as any HTML element
- 💪 **Inline Flex** - Support for inline-flex display

### Usage

#### Basic Flex

```tsx
import { Flex } from "@ui/web";

<Flex>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

#### Alignment

```tsx
<Flex align="start">Align start</Flex>
<Flex align="center">Align center</Flex>
<Flex align="end">Align end</Flex>
<Flex align="stretch">Align stretch</Flex>
<Flex align="baseline">Align baseline</Flex>
```

#### Justification

```tsx
<Flex justify="start">Justify start</Flex>
<Flex justify="center">Justify center</Flex>
<Flex justify="end">Justify end</Flex>
<Flex justify="between">Space between</Flex>
<Flex justify="around">Space around</Flex>
<Flex justify="evenly">Space evenly</Flex>
```

#### Direction

```tsx
<Flex direction="row">Horizontal</Flex>
<Flex direction="column">Vertical</Flex>
<Flex direction="row-reverse">Reverse horizontal</Flex>
<Flex direction="column-reverse">Reverse vertical</Flex>
```

#### Gap

```tsx
<Flex gap={2}>Small gap (0.5rem)</Flex>
<Flex gap={4}>Medium gap (1rem)</Flex>
<Flex gap={6}>Large gap (1.5rem)</Flex>
```

#### Wrap

```tsx
<Flex wrap="wrap">Items wrap</Flex>
<Flex wrap="nowrap">No wrap</Flex>
<Flex wrap="wrap-reverse">Wrap reverse</Flex>
```

#### Responsive Layout

```tsx
<Flex responsive>
  {/* Column on mobile, row on desktop */}
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

#### Combined Example

```tsx
<Flex
  direction="row"
  align="center"
  justify="between"
  gap={4}
  wrap="wrap"
>
  <div>Left item</div>
  <div>Right item</div>
</Flex>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `"start" \| "center" \| "end" \| "stretch" \| "baseline"` | - | Align items along cross axis |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around" \| "evenly"` | - | Justify content along main axis |
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | `"row"` | Flex direction |
| `gap` | `number` (0-10) | - | Gap between items (Tailwind scale) |
| `wrap` | `"wrap" \| "nowrap" \| "wrap-reverse"` | - | Flex wrap behavior |
| `responsive` | `boolean` | `false` | Column on mobile, row on desktop |
| `inline` | `boolean` | `false` | Use inline-flex instead of flex |
| `as` | `React.ElementType` | `"div"` | Custom element type |

---

## Stack

A vertical layout component for stacking elements with consistent spacing and alignment.

### Features

- 📚 **Vertical Layout** - Optimized for stacking items
- 🎯 **Full Alignment** - Horizontal and vertical control
- 📏 **Consistent Spacing** - Gap support with smooth transitions
- 🔀 **Dividers** - Optional dividers between items
- 🔄 **Reverse Order** - Flip the stack direction
- 🎭 **Polymorphic** - Render as any HTML element

### Usage

#### Basic Stack

```tsx
import { Stack } from "@ui/web";

<Stack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

#### Gap Spacing

```tsx
<Stack gap={2}>Small spacing (0.5rem)</Stack>
<Stack gap={4}>Medium spacing (1rem)</Stack>
<Stack gap={6}>Large spacing (1.5rem)</Stack>
```

#### Horizontal Alignment

```tsx
<Stack align="start">Align left</Stack>
<Stack align="center">Align center</Stack>
<Stack align="end">Align right</Stack>
<Stack align="stretch">Full width items</Stack>
```

#### Vertical Justification

```tsx
<Stack justify="start">Items at top</Stack>
<Stack justify="center">Items centered</Stack>
<Stack justify="end">Items at bottom</Stack>
<Stack justify="between">Space between</Stack>
```

#### With Dividers

```tsx
<Stack dividers>
  <div>Section 1</div>
  <div>Section 2</div>
  <div>Section 3</div>
</Stack>
```

#### Reverse Order

```tsx
<Stack reverse>
  <div>Appears last</div>
  <div>Appears middle</div>
  <div>Appears first</div>
</Stack>
```

#### Combined Example

```tsx
<Stack
  gap={4}
  align="stretch"
  dividers
>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Stack>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `number` (0-10) | `4` | Gap between items (Tailwind scale) |
| `align` | `"start" \| "center" \| "end" \| "stretch"` | - | Horizontal alignment |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around" \| "evenly"` | - | Vertical justification |
| `dividers` | `boolean` | `false` | Add dividers between items |
| `reverse` | `boolean` | `false` | Reverse stack order |
| `as` | `React.ElementType` | `"div"` | Custom element type |

---

## Design Token Usage

All layout components properly use the following design tokens:

### Transitions
- `--transition-fast` - Gap changes
- `--transition-normal` - Width and padding changes
- `--easing-standard` - Default easing curve

### Colors
- `--color-surface` - Container backgrounds
- `--color-border-subtle` - Dividers and borders
- `--shadow-sm` / `--shadow-md` - Elevation

### Spacing
- Container widths use `--container-width-*` tokens
- Custom spacing can use `--space-*` tokens

---

## Accessibility

### Semantic HTML
All components support polymorphic rendering with the `as` prop for proper semantic HTML structure.

```tsx
<Container as="main">
  <Container as="section">
    <Stack as="nav">Navigation items</Stack>
  </Container>
</Container>
```

### Reduced Motion
All transitions respect `prefers-reduced-motion` user preference and disable animations when requested.

### Focus Management
Containers properly handle focus-within states for keyboard navigation.

---

## Common Patterns

### Page Layout

```tsx
<Container as="main" section>
  <Stack gap={8}>
    <header>
      <h1>Page Title</h1>
    </header>
    
    <Flex direction="column" gap={6}>
      <section>Content 1</section>
      <section>Content 2</section>
    </Flex>
  </Stack>
</Container>
```

### Card Grid

```tsx
<Container>
  <Flex wrap="wrap" gap={4}>
    <Card>Card 1</Card>
    <Card>Card 2</Card>
    <Card>Card 3</Card>
  </Flex>
</Container>
```

### Sidebar Layout

```tsx
<Container width="full" padding="none">
  <Flex gap={0}>
    <aside className="w-64">Sidebar</aside>
    <Container as="main" width="lg">
      Main content
    </Container>
  </Flex>
</Container>
```

### Form Layout

```tsx
<Container width="md">
  <Stack gap={6}>
    <Stack gap={4}>
      <TextField label="Name" />
      <TextField label="Email" />
    </Stack>
    
    <Flex justify="end" gap={3}>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </Flex>
  </Stack>
</Container>
```

---

## Performance

- Minimal re-renders with proper memoization
- Efficient CSS transitions
- No JavaScript animations
- Proper will-change hints for smooth transitions
- Respects reduced motion preferences
