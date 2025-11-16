"use client";

import * as React from "react";
import { Button, Stack, Flex } from "@nugraphix/ui";
import {
  DocsHeader,
  DocsSection,
  ComponentPreview,
  PropsTable,
  type PropDefinition,
  DocsToc,
  type TocItem,
} from "../../../../../../components/docs";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "variants", title: "Variants", level: 2 },
  { id: "sizes", title: "Sizes", level: 2 },
  { id: "with-icons", title: "With Icons", level: 2 },
  { id: "loading-state", title: "Loading State", level: 2 },
  { id: "full-width", title: "Full Width", level: 2 },
  { id: "disabled", title: "Disabled State", level: 2 },
  { id: "props", title: "Props", level: 2 },
];

const buttonProps: PropDefinition[] = [
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'",
    defaultValue: "'primary'",
    description: "The visual style variant of the button",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg' | 'icon'",
    defaultValue: "'md'",
    description: "The size of the button",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the button should take full width of its container",
  },
  {
    name: "isLoading",
    type: "boolean",
    defaultValue: "false",
    description: "Show loading spinner and disable the button",
  },
  {
    name: "leftIcon",
    type: "React.ReactNode",
    description: "Icon to display on the left side of the button text",
  },
  {
    name: "rightIcon",
    type: "React.ReactNode",
    description: "Icon to display on the right side of the button text",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disable the button",
  },
  {
    name: "type",
    type: "'button' | 'submit' | 'reset'",
    defaultValue: "'button'",
    description: "The HTML button type",
  },
];

// Icon components for examples
const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export default function ButtonDocsPage() {
  return (
    <Flex gap={8}>
      {/* Main Content */}
      <div className="flex-1">
        <DocsHeader
          title="Button"
          description="A versatile button component with multiple variants, sizes, and states. Supports icons, loading states, and full accessibility."
          badge="Atom"
          badgeVariant="primary"
        />

        <Stack gap={12}>
          {/* Overview */}
          <DocsSection
            id="overview"
            title="Overview"
            description="Buttons allow users to take actions and make choices with a single tap."
          >
            <ComponentPreview
              code={`import { Button } from "@nugraphix/ui/web/src/atoms/button";

export function Example() {
  return <Button>Click me</Button>;
}`}
            >
              <Button>Click me</Button>
            </ComponentPreview>
          </DocsSection>

          {/* Variants */}
          <DocsSection
            id="variants"
            title="Variants"
            description="Buttons come in six variants: primary, secondary, outline, ghost, destructive, and link."
          >
            <ComponentPreview
              code={`<Flex gap={3} wrap>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</Flex>`}
            >
              <Flex gap={3} wrap="wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </Flex>
            </ComponentPreview>
          </DocsSection>

          {/* Sizes */}
          <DocsSection
            id="sizes"
            title="Sizes"
            description="Buttons are available in three sizes: small, medium (default), and large. There's also an icon-only size for square buttons."
          >
            <ComponentPreview
              code={`<Flex gap={3} align="center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
    <PlusIcon />
  </Button>
</Flex>`}
            >
              <Flex gap={3} align="center">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <PlusIcon />
                </Button>
              </Flex>
            </ComponentPreview>
          </DocsSection>

          {/* With Icons */}
          <DocsSection
            id="with-icons"
            title="With Icons"
            description="Add icons to the left or right of button text for enhanced visual communication."
          >
            <ComponentPreview
              code={`<Flex gap={3}>
  <Button leftIcon={<PlusIcon />}>
    Add Item
  </Button>
  <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
    Continue
  </Button>
  <Button variant="outline" leftIcon={<DownloadIcon />} rightIcon={<ArrowRightIcon />}>
    Download
  </Button>
</Flex>`}
            >
              <Flex gap={3} wrap="wrap">
                <Button leftIcon={<PlusIcon />}>
                  Add Item
                </Button>
                <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
                  Continue
                </Button>
                <Button variant="outline" leftIcon={<DownloadIcon />} rightIcon={<ArrowRightIcon />}>
                  Download
                </Button>
              </Flex>
            </ComponentPreview>
          </DocsSection>

          {/* Loading State */}
          <DocsSection
            id="loading-state"
            title="Loading State"
            description="Show a loading spinner when an async action is in progress. The button is automatically disabled during loading."
          >
            <ComponentPreview
              code={`<Flex gap={3}>
  <Button isLoading>Loading</Button>
  <Button variant="secondary" isLoading>Processing</Button>
  <Button variant="outline" isLoading leftIcon={<DownloadIcon />}>
    Downloading
  </Button>
</Flex>`}
            >
              <Flex gap={3} wrap="wrap">
                <Button isLoading>Loading</Button>
                <Button variant="secondary" isLoading>Processing</Button>
                <Button variant="outline" isLoading leftIcon={<DownloadIcon />}>
                  Downloading
                </Button>
              </Flex>
            </ComponentPreview>
          </DocsSection>

          {/* Full Width */}
          <DocsSection
            id="full-width"
            title="Full Width"
            description="Make buttons span the full width of their container."
          >
            <ComponentPreview
              code={`<Stack gap={3} className="w-full max-w-md">
  <Button fullWidth>Full Width Button</Button>
  <Button variant="secondary" fullWidth>Secondary Full Width</Button>
</Stack>`}
            >
              <Stack gap={3} className="w-full max-w-md">
                <Button fullWidth>Full Width Button</Button>
                <Button variant="secondary" fullWidth>Secondary Full Width</Button>
              </Stack>
            </ComponentPreview>
          </DocsSection>

          {/* Disabled */}
          <DocsSection
            id="disabled"
            title="Disabled State"
            description="Disabled buttons are not interactive and have reduced opacity."
          >
            <ComponentPreview
              code={`<Flex gap={3}>
  <Button disabled>Disabled Primary</Button>
  <Button variant="secondary" disabled>Disabled Secondary</Button>
  <Button variant="outline" disabled>Disabled Outline</Button>
</Flex>`}
            >
              <Flex gap={3} wrap="wrap">
                <Button disabled>Disabled Primary</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
              </Flex>
            </ComponentPreview>
          </DocsSection>

          {/* Props Table */}
          <DocsSection
            id="props"
            title="Props"
            description="Complete list of props supported by the Button component."
          >
            <PropsTable props={buttonProps} />
          </DocsSection>

          {/* Best Practices */}
          <DocsSection
            id="best-practices"
            title="Best Practices"
          >
            <Stack gap={4}>
              <div className="p-4 rounded-lg bg-(--color-success-soft) border border-(--color-border-success)">
                <h4 className="font-semibold text-(--color-success) mb-2">✓ Do</h4>
                <ul className="space-y-1 text-sm text-(--color-foreground-muted)">
                  <li>• Use primary buttons for the main action on a page</li>
                  <li>• Use descriptive button text that clearly indicates the action</li>
                  <li>• Show loading states for async operations</li>
                  <li>• Maintain consistent button sizes within the same context</li>
                  <li>• Use icon-only buttons sparingly and ensure they have aria-labels</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-(--color-danger-soft) border border-(--color-border-danger)">
                <h4 className="font-semibold text-(--color-danger) mb-2">✗ Don&apos;t</h4>
                <ul className="space-y-1 text-sm text-(--color-foreground-muted)">
                  <li>• Don&apos;t use multiple primary buttons in the same area</li>
                  <li>• Don&apos;t use vague text like &quot;Click here&quot; or &quot;Submit&quot;</li>
                  <li>• Don&apos;t disable buttons without providing feedback why</li>
                  <li>• Don&apos;t make buttons too small - maintain minimum touch targets</li>
                  <li>• Don&apos;t use destructive variant for non-destructive actions</li>
                </ul>
              </div>
            </Stack>
          </DocsSection>

          {/* Accessibility */}
          <DocsSection
            id="accessibility"
            title="Accessibility"
          >
            <Stack gap={3}>
              <p className="text-sm text-(--color-foreground-muted)">
                The Button component is built with accessibility in mind:
              </p>
              <ul className="space-y-2 text-sm text-(--color-foreground-muted)">
                <li>• <strong>Keyboard Navigation:</strong> Fully accessible via keyboard with Tab and Enter/Space</li>
                <li>• <strong>Focus Indicators:</strong> Clear focus ring for keyboard navigation</li>
                <li>• <strong>ARIA Attributes:</strong> Proper aria-disabled and aria-busy states</li>
                <li>• <strong>Loading States:</strong> Announced to screen readers via aria-busy</li>
                <li>• <strong>Semantic HTML:</strong> Uses native button element with proper type attribute</li>
              </ul>
            </Stack>
          </DocsSection>
        </Stack>
      </div>

      {/* Table of Contents */}
      <DocsToc items={tocItems} />
    </Flex>
  );
}
