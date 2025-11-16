import * as React from "react";
import Link from "next/link";
import { Container, Flex } from "@nugraphix/ui/web/src/atoms/layout";
import { DocsSidebar, type SidebarSection } from "../../components/docs";

const sidebarSections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Design System",
    items: [
      { title: "Overview", href: "/docs/design-system" },
      { title: "Design Tokens", href: "/docs/design-system/tokens" },
      { title: "Components", href: "/docs/design-system/components" },
    ],
  },
  {
    title: "Atoms",
    items: [
      { title: "Overview", href: "/docs/design-system/components/atoms" },
      { title: "Avatar", href: "/docs/design-system/components/atoms/avatar" },
      { title: "Badge", href: "/docs/design-system/components/atoms/badge" },
      { title: "Button", href: "/docs/design-system/components/atoms/button" },
      { title: "Card", href: "/docs/design-system/components/atoms/card" },
      { title: "Checkbox", href: "/docs/design-system/components/atoms/checkbox" },
      { title: "Input", href: "/docs/design-system/components/atoms/input" },
      { title: "Layout", href: "/docs/design-system/components/atoms/layout" },
      { title: "Link", href: "/docs/design-system/components/atoms/link" },
      { title: "Menu", href: "/docs/design-system/components/atoms/menu" },
      { title: "Select", href: "/docs/design-system/components/atoms/select" },
      { title: "Spinner", href: "/docs/design-system/components/atoms/spinner" },
      { title: "Switch", href: "/docs/design-system/components/atoms/switch" },
      { title: "Textarea", href: "/docs/design-system/components/atoms/textarea" },
      { title: "Typography", href: "/docs/design-system/components/atoms/typography" },
    ],
  },
  {
    title: "Molecules",
    items: [
      { title: "Overview", href: "/docs/design-system/components/molecules" },
      { title: "Form", href: "/docs/design-system/components/molecules/form" },
      { title: "Navigation", href: "/docs/design-system/components/molecules/navigation" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-(--color-border-subtle) bg-(--color-surface) backdrop-blur-sm">
        <Container width="full" padding="lg">
          <Flex align="center" justify="between" className="h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-(--color-primary)">
                NuGraphix
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/docs" className="text-sm text-(--color-foreground-muted) hover:text-foreground transition-colors">
                  Documentation
                </Link>
                <Link href="/docs/design-system/components" className="text-sm text-(--color-foreground-muted) hover:text-foreground transition-colors">
                  Components
                </Link>
              </nav>
            </div>
          </Flex>
        </Container>
      </header>

      {/* Main Content */}
      <Container width="full" padding="lg">
        <Flex gap={8} className="py-8">
          {/* Sidebar */}
          <DocsSidebar sections={sidebarSections} />

          {/* Content */}
          <main className="flex-1 max-w-4xl">
            {children}
          </main>
        </Flex>
      </Container>
    </div>
  );
}
