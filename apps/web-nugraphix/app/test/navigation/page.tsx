'use client'

/**
 * Navigation Components Examples
 * 
 * Comprehensive examples showcasing all navigation components and their variants
 */

import * as React from "react";
import { Navigation, NavBar, Breadcrumb, Tabs } from "@nugraphix/ui/web/src/molecules/navigation";
import { Link } from "@nugraphix/ui/web/src/atoms/link";
import { Button } from "@nugraphix/ui/web/src/atoms/button";
import { Avatar } from "@nugraphix/ui/web/src/atoms/avatar";
import { Badge } from "@nugraphix/ui/web/src/atoms/badge";
import { Container, Stack, Flex } from "@nugraphix/ui/web/src/atoms/layout";

// Example icons (replace with your icon system)
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const Logo = () => (
  <div className="font-bold text-xl text-(--color-primary)">
    Brand
  </div>
);

export default function NavigationExamples() {
  const [activeTab, setActiveTab] = React.useState("overview");

  // Sample navigation items
  const navigationItems = [
    { 
      label: "Home", 
      href: "/", 
      active: true,
      icon: <HomeIcon />
    },
    { label: "About", href: "/about" },
    { 
      label: "Products", 
      items: [
        { label: "Software", href: "/products/software" },
        { label: "Hardware", href: "/products/hardware" },
        { label: "Services", href: "/products/services" },
      ]
    },
    { 
      label: "Resources",
      items: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api", external: true },
        { label: "Community", href: "/community", badge: <Badge variant="primary">New</Badge> },
      ]
    },
    { label: "Contact", href: "/contact" },
  ];

  const userConfig = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    items: [
      { label: "Profile", href: "/profile", icon: <UserIcon /> },
      { label: "Settings", href: "/settings", icon: <SettingsIcon /> },
      { label: "Billing", href: "/billing" },
      { label: "Sign Out", onClick: () => console.log("Sign out") },
    ]
  };

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "Website Redesign", href: "/projects/website" },
    { label: "Settings", current: true },
  ];

  const tabItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <HomeIcon />,
      content: (
        <div className="p-6 bg-(--color-surface) rounded-lg border border-(--color-border-subtle)">
          <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
          <p className="text-(--color-foreground-muted)">
            This is the overview content panel. It contains general information about the project.
          </p>
        </div>
      )
    },
    {
      id: "details",
      label: "Details",
      count: 5,
      content: (
        <div className="p-6 bg-(--color-surface) rounded-lg border border-(--color-border-subtle)">
          <h3 className="text-lg font-semibold mb-2">Project Details</h3>
          <p className="text-(--color-foreground-muted)">
            Detailed information and specifications for this project.
          </p>
        </div>
      )
    },
    {
      id: "settings",
      label: "Settings",
      icon: <SettingsIcon />,
      content: (
        <div className="p-6 bg-(--color-surface) rounded-lg border border-(--color-border-subtle)">
          <h3 className="text-lg font-semibold mb-2">Project Settings</h3>
          <p className="text-(--color-foreground-muted)">
            Configure project settings and preferences here.
          </p>
        </div>
      )
    },
    {
      id: "disabled",
      label: "Disabled",
      disabled: true,
      content: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Full Navigation Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 px-8 pt-8">Full Navigation</h2>
        <Navigation
          brand={<Logo />}
          variant="default"
          items={navigationItems}
          actions={
            <Flex gap={2}>
              <Button variant="ghost" size="sm">Login</Button>
              <Button variant="primary" size="sm">Sign Up</Button>
            </Flex>
          }
          user={userConfig}
        />
      </section>

      {/* Navigation Variants */}
      <Container className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Navigation Variants</h2>
          <Stack gap={8}>
            {/* Sticky Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sticky Navigation</h3>
              <Navigation
                brand={<Logo />}
                variant="sticky"
                size="sm"
                items={navigationItems.slice(0, 3)}
                actions={<Button variant="primary" size="sm">Get Started</Button>}
              />
            </div>

            {/* Transparent Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Transparent Navigation</h3>
              <div className="bg-linear-to-r from-primary to-secondary p-8 rounded-lg">
                <Navigation
                  brand={<div className="text-white font-bold text-xl">Brand</div>}
                  variant="transparent"
                  items={navigationItems.slice(0, 4).map(item => ({
                    ...item,
                    className: "text-white hover:text-white/80"
                  }))}
                />
              </div>
            </div>

            {/* Minimal Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Minimal Navigation</h3>
              <Navigation
                brand={<Logo />}
                variant="minimal"
                size="lg"
                items={navigationItems.slice(0, 3)}
                showMobileToggle={false}
              />
            </div>
          </Stack>
        </section>

        {/* NavBar Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-6">NavBar (Simplified)</h2>
          <Stack gap={6}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Default NavBar</h3>
              <NavBar brand={<Logo />}>
                <Flex align="center" justify="end" gap={6}>
                  <Link href="/docs" variant="muted">Documentation</Link>
                  <Link href="/support" variant="muted">Support</Link>
                  <Link href="/blog" variant="muted">Blog</Link>
                  <Button variant="primary">Contact Sales</Button>
                </Flex>
              </NavBar>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Transparent NavBar with Border</h3>
              <NavBar 
                brand={<Logo />}
                background="transparent"
                border="around"
                className="rounded-lg"
              >
                <Flex align="center" justify="center" gap={8}>
                  <Link href="/features">Features</Link>
                  <Link href="/pricing">Pricing</Link>
                  <Link href="/about">About</Link>
                </Flex>
              </NavBar>
            </div>
          </Stack>
        </section>

        {/* Breadcrumb Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Breadcrumbs</h2>
          <Stack gap={6}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Default Breadcrumb</h3>
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">With Home Icon</h3>
              <Breadcrumb items={breadcrumbItems} showHomeIcon />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Custom Separator</h3>
              <Breadcrumb 
                items={breadcrumbItems} 
                separator={<span className="text-(--color-foreground-muted)">•</span>}
              />
            </div>
          </Stack>
        </section>

        {/* Tabs Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tabs</h2>
          <Stack gap={8}>
            {/* Default Tabs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Default Tabs</h3>
              <Tabs
                items={tabItems}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>

            {/* Pills Tabs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Pills Tabs</h3>
              <Tabs
                variant="pills"
                items={tabItems}
                size="sm"
              />
            </div>

            {/* Underline Tabs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Underline Tabs</h3>
              <Tabs
                variant="underline"
                items={tabItems}
                fullWidth
              />
            </div>

            {/* Cards Tabs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Cards Tabs</h3>
              <Tabs
                variant="cards"
                items={tabItems.slice(0, 3)}
                size="lg"
              />
            </div>

            {/* Tabs without Content */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation Only (No Content)</h3>
              <Tabs
                variant="underline"
                items={tabItems.map(item => ({ ...item, content: undefined }))}
                showContent={false}
                onTabChange={(id) => console.log('Navigate to:', id)}
              />
              <p className="mt-4 text-sm text-(--color-foreground-muted)">
                Use showContent=false for navigation-only tabs
              </p>
            </div>
          </Stack>
        </section>

        {/* Link Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Link Variants</h3>
              <Stack gap={3}>
                <Link href="#" variant="default">Default Link</Link>
                <Link href="#" variant="primary">Primary Link</Link>
                <Link href="#" variant="secondary">Secondary Link</Link>
                <Link href="#" variant="muted">Muted Link</Link>
                <Link href="#" variant="danger">Danger Link</Link>
                <Link href="#" disabled>Disabled Link</Link>
              </Stack>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Link Features</h3>
              <Stack gap={3}>
                <Link href="https://external.com" external>
                  External Link with Icon
                </Link>
                <Link href="#" noUnderline>
                  Link without Underline
                </Link>
                <Link href="#" size="sm">Small Link</Link>
                <Link href="#" size="lg">Large Link</Link>
              </Stack>
            </div>
          </div>
        </section>

        {/* Combined Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Combined Navigation Pattern</h2>
          <div className="space-y-4">
            <NavBar
              brand={<Logo />}
              background="muted"
              border="bottom"
            >
              <Flex align="center" justify="end" gap={4}>
                <Avatar src="https://i.pravatar.cc/150?img=2" name="John Doe" size="sm" />
                <span className="text-sm font-medium">John Doe</span>
              </Flex>
            </NavBar>

            <Container>
              <Stack gap={6}>
                <Breadcrumb
                  items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Analytics", current: true },
                  ]}
                  showHomeIcon
                />

                <Tabs
                  variant="underline"
                  items={[
                    {
                      id: "traffic",
                      label: "Traffic",
                      count: 1200,
                      content: (
                        <div className="p-8 bg-(--color-surface) rounded-lg border">
                          <h4 className="font-semibold">Traffic Analytics</h4>
                          <p className="text-(--color-foreground-muted) mt-2">
                            Website traffic data and insights.
                          </p>
                        </div>
                      )
                    },
                    {
                      id: "conversion",
                      label: "Conversion",
                      count: 45,
                      content: (
                        <div className="p-8 bg-(--color-surface) rounded-lg border">
                          <h4 className="font-semibold">Conversion Rates</h4>
                          <p className="text-(--color-foreground-muted) mt-2">
                            Conversion tracking and optimization data.
                          </p>
                        </div>
                      )
                    }
                  ]}
                />
              </Stack>
            </Container>
          </div>
        </section>
      </Container>
    </div>
  );
}