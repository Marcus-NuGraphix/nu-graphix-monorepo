# NuGraphix Documentation System

A comprehensive documentation system for the NuGraphix design system and component library.

## Overview

This documentation system provides interactive, live previews of all components with:

- **Live Previews**: Interactive component demonstrations
- **Code Examples**: Copy-paste ready code snippets
- **Props Documentation**: Complete API references
- **Best Practices**: Guidelines for proper usage
- **Accessibility**: WCAG compliance information

## Structure

```
apps/web-nugraphix/
├── app/
│   └── docs/
│       ├── layout.tsx                    # Docs layout with sidebar
│       ├── page.tsx                      # Docs homepage
│       └── design-system/
│           └── components/
│               ├── atoms/
│               │   └── button/
│               │       └── page.tsx      # Button documentation
│               └── molecules/
│
└── components/
    └── docs/
        ├── CodeBlock.tsx                 # Code display with syntax highlighting
        ├── ComponentPreview.tsx          # Live component preview
        ├── DocsHeader.tsx                # Page header
        ├── DocsSection.tsx               # Content sections
        ├── DocsSidebar.tsx               # Navigation sidebar
        ├── DocsToc.tsx                   # Table of contents
        ├── PropsTable.tsx                # Props documentation table
        └── index.ts                      # Exports
```

## Documentation Components

### CodeBlock

Display code with syntax highlighting and copy functionality.

```tsx
<CodeBlock
  code={`import { Button } from "@nugraphix/ui";
<Button>Click me</Button>`}
  language="tsx"
  title="Example.tsx"
/>
```

### ComponentPreview

Show live component preview with collapsible code view.

```tsx
<ComponentPreview
  code={`<Button variant="primary">Click me</Button>`}
  title="Basic Button"
  description="A simple button example"
>
  <Button variant="primary">Click me</Button>
</ComponentPreview>
```

### DocsHeader

Page title and description.

```tsx
<DocsHeader
  title="Button"
  description="A versatile button component..."
  badge="Atom"
  badgeVariant="primary"
/>
```

### DocsSection

Organize content into sections with IDs for navigation.

```tsx
<DocsSection
  id="variants"
  title="Variants"
  description="Buttons come in multiple variants..."
>
  {/* Content */}
</DocsSection>
```

### DocsSidebar

Navigation sidebar with sections and items.

```tsx
<DocsSidebar sections={sidebarSections} />
```

### DocsToc

Table of contents for current page.

```tsx
<DocsToc items={tocItems} />
```

### PropsTable

Document component props with types and descriptions.

```tsx
<PropsTable props={propDefinitions} />
```

## Creating New Documentation Pages

1. **Create page file** in appropriate location:
   ```
   app/docs/design-system/components/atoms/[component]/page.tsx
   ```

2. **Import documentation components**:
   ```tsx
   import {
     DocsHeader,
     DocsSection,
     ComponentPreview,
     PropsTable,
     DocsToc,
   } from "../../../../../../components/docs";
   ```

3. **Structure your page**:
   ```tsx
   export default function ComponentDocsPage() {
     return (
       <Flex gap={8}>
         <div className="flex-1">
           <DocsHeader title="Component Name" />
           
           <Stack gap={12}>
             <DocsSection id="overview" title="Overview">
               <ComponentPreview code="...">
                 {/* Live demo */}
               </ComponentPreview>
             </DocsSection>
             
             <DocsSection id="props" title="Props">
               <PropsTable props={propDefinitions} />
             </DocsSection>
           </Stack>
         </div>
         
         <DocsToc items={tocItems} />
       </Flex>
     );
   }
   ```

4. **Add to sidebar** in `app/docs/layout.tsx`:
   ```tsx
   {
     title: "Atoms",
     items: [
       { title: "Your Component", href: "/docs/design-system/components/atoms/your-component" }
     ]
   }
   ```

## Features

### Interactive Previews

All component examples are live and interactive. Users can:
- See the component in action
- Toggle code view
- Copy code snippets
- Test interactions

### Responsive Design

Documentation adapts to different screen sizes:
- Desktop: Sidebar + Content + TOC
- Tablet: Sidebar + Content
- Mobile: Hamburger menu

### Automatic Navigation

- **Sidebar**: Shows current location
- **TOC**: Highlights current section while scrolling
- **Breadcrumbs**: Shows navigation path

### Code Highlighting

Code blocks include:
- Syntax highlighting (ready for Prism.js or similar)
- Line numbers (optional)
- Language badges
- Copy button
- File names

## Best Practices

### Writing Documentation

1. **Start with Overview**: Show simplest use case first
2. **Progressive Disclosure**: Build from simple to complex
3. **Live Examples**: Every example should be interactive
4. **Props Documentation**: Document all props with types
5. **Best Practices Section**: Include do's and don'ts
6. **Accessibility**: Document ARIA attributes and keyboard nav

### Code Examples

- Use realistic examples
- Show common use cases
- Include edge cases
- Demonstrate all variants
- Keep examples focused (one concept per example)

### Naming Conventions

- Use descriptive section IDs for deep linking
- Keep URLs kebab-case and consistent
- Group related components together

## Styling

All documentation components use the design token system:

```tsx
// Colors
text-(--color-foreground)
bg-(--color-surface)
border-(--color-border-subtle)

// Typography
font-medium
text-sm

// Spacing
gap-{n}
p-{n}
```

## Navigation Structure

```
/docs
├── /design-system
│   ├── /tokens
│   └── /components
│       ├── /atoms
│       │   ├── /avatar
│       │   ├── /badge
│       │   ├── /button
│       │   └── ... (15 atoms)
│       └── /molecules
│           ├── /form
│           └── /navigation
```

## Development

### Running Locally

```bash
cd apps/web-nugraphix
pnpm dev
```

Navigate to `http://localhost:3000/docs`

### Adding Components

1. Create component documentation page
2. Add to sidebar in layout
3. Create comprehensive examples
4. Document all props
5. Add accessibility notes
6. Include best practices

### TOC Generation

Table of contents is manually defined per page:

```tsx
const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "variants", title: "Variants", level: 2 },
  { id: "props", title: "Props", level: 2 },
];
```

## Future Enhancements

- [ ] Syntax highlighting with Prism.js or Shiki
- [ ] Dark mode toggle in docs
- [ ] Component playground (live editing)
- [ ] Search functionality
- [ ] Version selector
- [ ] Export examples to CodeSandbox
- [ ] Mobile navigation improvements
- [ ] Print-friendly styles

## Troubleshooting

### Import Errors

Ensure relative paths are correct:
```tsx
// Correct depth based on file location
import { DocsHeader } from "../../../../../../components/docs";
```

### Layout Issues

Check that parent layout includes:
- Sidebar navigation
- Proper container widths
- Responsive breakpoints

### Styling Issues

Verify:
- Design tokens are imported in globals.css
- Tailwind CSS is configured correctly
- Theme CSS is loaded

## Contributing

When adding new documentation:

1. Follow existing patterns
2. Test on mobile and desktop
3. Verify all links work
4. Ensure code examples are correct
5. Check accessibility
6. Update this README if adding new patterns

## Related

- [Design System Documentation](../packages/ui/web/README.md)
- [Component Library](../packages/ui/web/src/)
- [Design Tokens](../packages/ui/src/theme.css)
