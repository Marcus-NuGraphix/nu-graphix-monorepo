import * as React from "react";
import Link from "next/link";
import { Stack, Flex } from "@nugraphix/ui/web/src/atoms/layout";
import { Button } from "@nugraphix/ui/web/src/atoms/button";
import { Card } from "@nugraphix/ui/web/src/atoms/card";
import { Badge } from "@nugraphix/ui/web/src/atoms/badge";

export default function DocsHomePage() {
  return (
    <Stack gap={12}>
      {/* Hero Section */}
      <div>
        <h1 className="text-5xl font-bold text-foreground mb-4">
          NuGraphix Design System
        </h1>
        <p className="text-xl text-(--color-foreground-muted) max-w-2xl mb-6">
          A comprehensive, accessible, and beautiful component library built with React, TypeScript, and Tailwind CSS.
        </p>
        <Flex gap={3}>
          <Link href="/docs/design-system/components/atoms/button">
            <Button size="lg">Browse Components</Button>
          </Link>
          <Link href="/docs/design-system/tokens">
            <Button variant="outline" size="lg">Design Tokens</Button>
          </Link>
        </Flex>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/docs/design-system/components/atoms">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Flex align="center" gap={2} className="mb-3">
                <h3 className="text-lg font-semibold text-foreground">Atoms</h3>
                <Badge variant="primary">15</Badge>
              </Flex>
              <p className="text-sm text-(--color-foreground-muted)">
                Basic building blocks like buttons, inputs, and typography
              </p>
            </Card>
          </Link>

          <Link href="/docs/design-system/components/molecules">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Flex align="center" gap={2} className="mb-3">
                <h3 className="text-lg font-semibold text-foreground">Molecules</h3>
                <Badge variant="success">2</Badge>
              </Flex>
              <p className="text-sm text-(--color-foreground-muted)">
                Combined components like forms, navigation, and cards
              </p>
            </Card>
          </Link>

          <Link href="/docs/design-system/tokens">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Flex align="center" gap={2} className="mb-3">
                <h3 className="text-lg font-semibold text-foreground">Design Tokens</h3>
                <Badge variant="warning">Core</Badge>
              </Flex>
              <p className="text-sm text-(--color-foreground-muted)">
                Colors, typography, spacing, and other design primitives
              </p>
            </Card>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-(--color-border-subtle) bg-(--color-surface)">
            <h3 className="text-lg font-semibold text-foreground mb-2">🎨 Design Token System</h3>
            <p className="text-sm text-(--color-foreground-muted)">
              Centralized design tokens for consistent theming across all components
            </p>
          </div>

          <div className="p-6 rounded-lg border border-(--color-border-subtle) bg-(--color-surface)">
            <h3 className="text-lg font-semibold text-foreground mb-2">♿ Accessibility First</h3>
            <p className="text-sm text-(--color-foreground-muted)">
              WCAG 2.1 compliant with keyboard navigation and screen reader support
            </p>
          </div>

          <div className="p-6 rounded-lg border border-(--color-border-subtle) bg-(--color-surface)">
            <h3 className="text-lg font-semibold text-foreground mb-2">🔧 TypeScript Support</h3>
            <p className="text-sm text-(--color-foreground-muted)">
              Fully typed components with IntelliSense support for better DX
            </p>
          </div>

          <div className="p-6 rounded-lg border border-(--color-border-subtle) bg-(--color-surface)">
            <h3 className="text-lg font-semibold text-foreground mb-2">⚡ Performance Optimized</h3>
            <p className="text-sm text-(--color-foreground-muted)">
              Tree-shakeable, minimal bundle size, and optimized renders
            </p>
          </div>

          <div className="p-6 rounded-lg border border-(--color-border-subtle) bg-(--color-surface)">
            <h3 className="text-lg font-semibold text-foreground mb-2">🎭 Dark Mode Ready</h3>
            <p className="text-sm text-(--color-foreground-muted)">
              Built-in dark theme support with automatic color adjustments
            </p>
          </div>

          <div className="p-6 rounded-lg border border-(--color-border-subtle) bg-(--color-surface)">
            <h3 className="text-lg font-semibold text-foreground mb-2">📦 Atomic Design</h3>
            <p className="text-sm text-(--color-foreground-muted)">
              Organized following atomic design principles for scalability
            </p>
          </div>
        </div>
      </div>

      {/* Popular Components */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Popular Components</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: "Button", href: "/docs/design-system/components/atoms/button" },
            { name: "Input", href: "/docs/design-system/components/atoms/input" },
            { name: "Avatar", href: "/docs/design-system/components/atoms/avatar" },
            { name: "Badge", href: "/docs/design-system/components/atoms/badge" },
            { name: "Card", href: "/docs/design-system/components/atoms/card" },
            { name: "Link", href: "/docs/design-system/components/atoms/link" },
            { name: "Navigation", href: "/docs/design-system/components/molecules/navigation" },
            { name: "Form", href: "/docs/design-system/components/molecules/form" },
          ].map((component) => (
            <Link key={component.name} href={component.href}>
              <div className="p-4 rounded-lg border border-(--color-border-subtle) hover:border-(--color-primary) hover:bg-(--color-surface-subtle) transition-all cursor-pointer text-center">
                <span className="text-sm font-medium text-foreground">{component.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Stack>
  );
}
