# Layout Component Composition in Molecules

## Overview

All molecule components now properly compose our layout atoms (`Flex`, `Stack`, `Container`) for consistent spacing, maintainability, and proper design token usage throughout the component library.

## Benefits of Using Layout Atoms

### 1. **Consistency**
- All spacing uses our design token system (`gap-*` values)
- Predictable layout behavior across all components
- Unified alignment and distribution patterns

### 2. **Maintainability**
- Layout logic centralized in reusable atoms
- Easier to update spacing system globally
- Less duplicate CSS classes

### 3. **Atomic Design Principles**
- Molecules properly compose atoms (as intended)
- Clear component hierarchy and dependencies
- Better separation of concerns

### 4. **Design Token Integration**
- Proper spacing through design system
- Consistent with our theming approach
- Type-safe gap values (0.5, 1, 1.5, 2, 3, 4, etc.)

## Implementation Examples

### Navigation Components

#### Before (Manual Layout)
```tsx
// ❌ Manual flex classes, inconsistent spacing
<nav>
  <ol className="flex items-center space-x-2">
    <li className="flex items-center gap-1.5">
      {/* content */}
    </li>
  </ol>
</nav>
```

#### After (Layout Atoms)
```tsx
// ✅ Using Flex atom with design tokens
<nav>
  <Flex as="ol" align="center" gap={2}>
    <Flex as="li" align="center" gap={1.5}>
      {/* content */}
    </Flex>
  </Flex>
</nav>
```

### Form Components

#### Before (Manual Layout)
```tsx
// ❌ Mixed spacing approaches
<div className="flex flex-col gap-1.5">
  <label className="flex items-center gap-1">
    {label}
  </label>
  <Input />
</div>
```

#### After (Layout Atoms)
```tsx
// ✅ Using Stack for vertical layout, Flex for horizontal
<Stack gap={1.5}>
  <label>
    <Flex align="center" gap={1}>
      {label}
    </Flex>
  </label>
  <Input />
</Stack>
```

### Tab Components

#### Before (Manual Layout)
```tsx
// ❌ Inline flex classes
<button className="flex items-center gap-2 justify-center">
  {icon}
  {label}
</button>
```

#### After (Layout Atoms)
```tsx
// ✅ Using Flex with proper props
<button>
  <Flex align="center" gap={2} justify="center">
    {icon}
    {label}
  </Flex>
</button>
```

## Updated Components

### Navigation Module (`molecules/navigation/`)

1. **Navigation.tsx**
   - Uses `Container`, `Flex`, and `Stack` throughout
   - Navigation items use `Flex` for consistent icon/label spacing
   - Mobile menu uses `Stack` for vertical layout
   - User menu info uses `Stack` for name/email stacking

2. **NavBar.tsx**
   - Already using `Container` and `Flex` ✓
   - Proper composition of layout atoms

3. **Breadcrumb.tsx**
   - Now uses `Flex` for horizontal list layout
   - Individual items use `Flex` for icon/label spacing
   - Consistent `gap` values throughout

4. **Tabs.tsx**
   - Tab list uses `Flex` for horizontal layout
   - Individual tabs use `Flex` for internal content
   - Proper alignment and justification props

### Form Module (`molecules/form/`)

1. **TextField.tsx**
   - Uses `Stack` for vertical field layout
   - Label uses `Flex` for required indicator alignment
   - Consistent spacing for description/error messages

## Layout Atom Usage Guide

### When to Use `Flex`
- Horizontal or vertical layouts with alignment needs
- When items should flex/grow
- Any time you need `justify` or `align` control
- Navigation items, button content, inline layouts

### When to Use `Stack`
- Vertical layouts with consistent spacing
- Form fields, lists, cards
- Any time you need vertical rhythm
- Menu items, option lists

### When to Use `Container`
- Page-level or section-level width constraints
- Horizontal padding management
- Content centering with max-width
- Top-level navigation wrappers

## Design Token Integration

All gap values now properly use our spacing system:

```tsx
// Available gap values (maps to our design tokens)
gap={0.5}  // --space-0.5 / 0.125rem / 2px
gap={1}    // --space-1 / 0.25rem / 4px
gap={1.5}  // --space-1.5 / 0.375rem / 6px
gap={2}    // --space-2 / 0.5rem / 8px
gap={3}    // --space-3 / 0.75rem / 12px
gap={4}    // --space-4 / 1rem / 16px
gap={6}    // --space-6 / 1.5rem / 24px
gap={8}    // --space-8 / 2rem / 32px
```

## Best Practices

### ✅ Do

```tsx
// Use layout atoms for composition
<Stack gap={4}>
  <Heading>Title</Heading>
  <Flex align="center" gap={2}>
    <Avatar />
    <Text>Name</Text>
  </Flex>
</Stack>

// Use polymorphic rendering when semantic HTML matters
<Flex as="ul" gap={2}>
  <Flex as="li">Item 1</Flex>
  <Flex as="li">Item 2</Flex>
</Flex>
```

### ❌ Don't

```tsx
// Don't manually recreate layout atom functionality
<div className="flex items-center gap-2">
  {/* Just use <Flex> */}
</div>

// Don't mix approaches
<Stack gap={2}>
  <div className="flex items-center space-x-3">
    {/* Use Flex here too */}
  </div>
</Stack>
```

## Migration Checklist

When creating or updating molecules:

- [ ] Replace `div` with `Stack` for vertical layouts
- [ ] Replace manual `flex` classes with `Flex` component
- [ ] Use `gap` prop instead of `space-x-*` or `space-y-*`
- [ ] Use proper `align` and `justify` props
- [ ] Consider `as` prop for semantic HTML
- [ ] Remove redundant flex/grid utility classes
- [ ] Ensure consistent spacing with design tokens

## Performance Impact

**Positive:**
- No performance overhead (layout atoms are simple wrappers)
- Better tree-shaking with explicit imports
- Reduced CSS bundle size (less utility classes)

**Neutral:**
- Same render performance as manual divs
- No additional re-renders introduced

## Accessibility

Layout atoms maintain accessibility:
- Support for `as` prop for semantic HTML
- All ARIA props pass through
- Proper focus management unchanged
- Keyboard navigation unaffected

## Future Considerations

As we add more molecules:
1. Always start with layout atoms for structure
2. Use `Container` for width-constrained sections
3. Use `Stack` for vertical rhythm
4. Use `Flex` for alignment needs
5. Only drop to manual divs when absolutely necessary

## Related Documentation

- [Layout Components (atoms/layout)](../../atoms/layout/README.md)
- [Design Tokens (theme.md)](../../theme.md)
- [Atomic Design Principles](../README.md)
