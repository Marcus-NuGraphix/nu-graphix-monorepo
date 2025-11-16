"use client";

import * as React from "react";
import Link from "next/link";
import { Stack, Flex, Button, Badge, Avatar, Card } from "@nugraphix/ui";
import {
  DocsHeader,
  DocsSection,
} from "../../../../../components/docs";

interface AtomComponent {
  name: string;
  description: string;
  href: string;
  status: "stable" | "beta" | "new";
  category: string;
  preview: React.ReactNode;
}

const atomComponents: AtomComponent[] = [
  {
    name: "Avatar",
    description: "Display user profile images with status indicators and fallbacks",
    href: "/docs/design-system/components/atoms/avatar",
    status: "stable",
    category: "Display",
    preview: (
      <Flex gap={2}>
        <Avatar src="https://i.pravatar.cc/150?img=1" name="John Doe" size="sm" />
        <Avatar src="https://i.pravatar.cc/150?img=2" name="Jane Smith" size="md" status="online" />
      </Flex>
    ),
  },
  {
    name: "Badge",
    description: "Small status indicators and labels for UI elements",
    href: "/docs/design-system/components/atoms/badge",
    status: "stable",
    category: "Display",
    preview: (
      <Flex gap={2}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
      </Flex>
    ),
  },
  {
    name: "Button",
    description: "Interactive buttons with multiple variants and states",
    href: "/docs/design-system/components/atoms/button",
    status: "stable",
    category: "Action",
    preview: (
      <Flex gap={2}>
        <Button variant="primary" size="sm">Primary</Button>
        <Button variant="secondary" size="sm">Secondary</Button>
        <Button variant="outline" size="sm">Outline</Button>
      </Flex>
    ),
  },
  {
    name: "Card",
    description: "Container component for grouping related content",
    href: "/docs/design-system/components/atoms/card",
    status: "stable",
    category: "Layout",
    preview: (
      <Card className="w-full max-w-[200px] p-4">
        <p className="text-sm">Card content</p>
      </Card>
    ),
  },
  {
    name: "Checkbox",
    description: "Toggle selection states for binary choices",
    href: "/docs/design-system/components/atoms/checkbox",
    status: "stable",
    category: "Input",
    preview: (
      <Flex gap={3}>
        <input type="checkbox" defaultChecked className="w-5 h-5" />
        <input type="checkbox" className="w-5 h-5" />
      </Flex>
    ),
  },
  {
    name: "Input",
    description: "Text input fields with validation states",
    href: "/docs/design-system/components/atoms/input",
    status: "stable",
    category: "Input",
    preview: (
      <input
        type="text"
        placeholder="Enter text..."
        className="px-3 py-2 text-sm border border-(--color-border-subtle) rounded-md w-full max-w-[200px]"
      />
    ),
  },
  {
    name: "Layout",
    description: "Flex, Stack, and Container components for consistent layouts",
    href: "/docs/design-system/components/atoms/layout",
    status: "stable",
    category: "Layout",
    preview: (
      <Flex gap={2} className="text-xs">
        <div className="w-12 h-12 bg-(--color-primary) rounded" />
        <div className="w-12 h-12 bg-(--color-secondary) rounded" />
        <div className="w-12 h-12 bg-(--color-success) rounded" />
      </Flex>
    ),
  },
  {
    name: "Link",
    description: "Navigation links with external indicators and variants",
    href: "/docs/design-system/components/atoms/link",
    status: "new",
    category: "Navigation",
    preview: (
      <Stack gap={2}>
        <a href="#" className="text-sm text-(--color-primary) hover:underline">Internal Link</a>
        <a href="#" className="text-sm text-(--color-primary) hover:underline">External Link →</a>
      </Stack>
    ),
  },
  {
    name: "Menu",
    description: "Dropdown menus with keyboard navigation",
    href: "/docs/design-system/components/atoms/menu",
    status: "new",
    category: "Navigation",
    preview: (
      <Button variant="outline" size="sm">
        Menu ▼
      </Button>
    ),
  },
  {
    name: "Select",
    description: "Dropdown selection inputs",
    href: "/docs/design-system/components/atoms/select",
    status: "stable",
    category: "Input",
    preview: (
      <select className="px-3 py-2 text-sm border border-(--color-border-subtle) rounded-md">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    ),
  },
  {
    name: "Spinner",
    description: "Loading indicators and spinners",
    href: "/docs/design-system/components/atoms/spinner",
    status: "stable",
    category: "Feedback",
    preview: (
      <div className="w-6 h-6 border-2 border-(--color-primary) border-t-transparent rounded-full animate-spin" />
    ),
  },
  {
    name: "Switch",
    description: "Toggle switches for binary settings",
    href: "/docs/design-system/components/atoms/switch",
    status: "stable",
    category: "Input",
    preview: (
      <div className="w-11 h-6 bg-(--color-primary) rounded-full relative">
        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5" />
      </div>
    ),
  },
  {
    name: "Textarea",
    description: "Multi-line text input fields",
    href: "/docs/design-system/components/atoms/textarea",
    status: "stable",
    category: "Input",
    preview: (
      <textarea
        placeholder="Enter text..."
        rows={2}
        className="px-3 py-2 text-sm border border-(--color-border-subtle) rounded-md w-full max-w-[200px] resize-none"
      />
    ),
  },
  {
    name: "Typography",
    description: "Text and heading components with consistent styling",
    href: "/docs/design-system/components/atoms/typography",
    status: "stable",
    category: "Display",
    preview: (
      <Stack gap={1}>
        <h3 className="text-lg font-semibold">Heading</h3>
        <p className="text-sm text-(--color-foreground-muted)">Body text</p>
      </Stack>
    ),
  },
];

const categories = Array.from(new Set(atomComponents.map(c => c.category)));

function getStatusBadge(status: AtomComponent["status"]) {
  switch (status) {
    case "new":
      return <Badge variant="success" size="sm">New</Badge>;
    case "beta":
      return <Badge variant="warning" size="sm">Beta</Badge>;
    case "stable":
      return <Badge variant="neutral" size="sm">Stable</Badge>;
  }
}

export default function AtomsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredComponents = selectedCategory
    ? atomComponents.filter(c => c.category === selectedCategory)
    : atomComponents;

  return (
    <div className="flex-1">
      <DocsHeader
        title="Atoms"
        description="Atomic components are the smallest building blocks of the design system. They include basic HTML elements styled with our design tokens and cannot be broken down further."
        badge="15 Components"
        badgeVariant="primary"
      />

      <Stack gap={8}>
        {/* Category Filter */}
        <DocsSection title="Categories" description="Filter components by category">
          <Flex gap={2} wrap="wrap">
            <Button
              variant={selectedCategory === null ? "primary" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All ({atomComponents.length})
            </Button>
            {categories.map((category) => {
              const count = atomComponents.filter(c => c.category === category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({count})
                </Button>
              );
            })}
          </Flex>
        </DocsSection>

        {/* Component Grid */}
        <DocsSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="group block"
              >
                <div className="h-full border border-(--color-border-subtle) rounded-lg p-6 bg-(--color-surface) hover:border-(--color-primary) hover:shadow-md transition-all">
                  <Stack gap={4}>
                    {/* Header */}
                    <Flex align="center" justify="between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-(--color-primary) transition-colors">
                        {component.name}
                      </h3>
                      {getStatusBadge(component.status)}
                    </Flex>

                    {/* Description */}
                    <p className="text-sm text-(--color-foreground-muted) line-clamp-2">
                      {component.description}
                    </p>

                    {/* Preview */}
                    <div className="flex items-center justify-center min-h-20 p-4 rounded-md bg-(--color-surface-subtle)">
                      {component.preview}
                    </div>

                    {/* Footer */}
                    <Flex align="center" justify="between" className="pt-2 border-t border-(--color-border-subtle)">
                      <span className="text-xs text-(--color-foreground-muted)">
                        {component.category}
                      </span>
                      <span className="text-xs text-(--color-primary) group-hover:underline">
                        View docs →
                      </span>
                    </Flex>
                  </Stack>
                </div>
              </Link>
            ))}
          </div>
        </DocsSection>

        {/* Quick Start */}
        <DocsSection
          title="Quick Start"
          description="Get started with atomic components in your project"
        >
          <div className="p-6 rounded-lg bg-(--color-surface-subtle) border border-(--color-border-subtle)">
            <Stack gap={4}>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Import Components</h4>
                <code className="text-sm font-mono bg-(--color-surface) p-3 rounded block">
                  import {`{ Button, Badge, Avatar }`} from &quot;@nugraphix/ui/web/src/atoms&quot;;
                </code>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Use in Your App</h4>
                <code className="text-sm font-mono bg-(--color-surface) p-3 rounded block">
                  {`<Button variant="primary">Click me</Button>`}
                </code>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Best Practices</h4>
                <ul className="space-y-2 text-sm text-(--color-foreground-muted)">
                  <li>• Always use atoms as the foundation for larger components</li>
                  <li>• Prefer composition over creating new variants</li>
                  <li>• Follow the design token system for consistency</li>
                  <li>• Test accessibility with keyboard navigation and screen readers</li>
                </ul>
              </div>
            </Stack>
          </div>
        </DocsSection>
      </Stack>
    </div>
  );
}
