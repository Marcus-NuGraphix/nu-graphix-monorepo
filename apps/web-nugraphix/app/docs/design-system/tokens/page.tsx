"use client";

import * as React from "react";
import { Stack, Flex } from "@nugraphix/ui/web/src/atoms/layout";
import {
  DocsHeader,
  DocsSection,
  DocsToc,
  type TocItem,
} from "../../../../components/docs";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "colors", title: "Colors", level: 2 },
  { id: "typography", title: "Typography", level: 2 },
  { id: "spacing", title: "Spacing", level: 2 },
  { id: "radius", title: "Border Radius", level: 2 },
  { id: "shadows", title: "Shadows", level: 2 },
  { id: "motion", title: "Motion", level: 2 },
  { id: "usage", title: "Usage", level: 2 },
];

// Token display components
function TokenCard({ name, value, preview }: { name: string; value: string; preview?: React.ReactNode }) {
  return (
    <div className="border border-(--color-border-subtle) rounded-lg p-4 bg-(--color-surface)">
      <Flex align="start" justify="between" gap={4}>
        <div className="flex-1">
          <code className="text-sm font-mono text-(--color-primary) bg-(--color-primary-soft) px-2 py-1 rounded">
            {name}
          </code>
          <p className="text-sm text-(--color-foreground-muted) mt-2">{value}</p>
        </div>
        {preview && <div className="shrink-0">{preview}</div>}
      </Flex>
    </div>
  );
}

function ColorSwatch({ color, label }: { color: string; label?: string }) {
  return (
    <Flex direction="column" gap={2} align="center">
      <div
        className="w-16 h-16 rounded-lg border border-(--color-border-subtle) shadow-sm"
        style={{ background: `var(${color})` }}
      />
      {label && <span className="text-xs text-(--color-foreground-muted)">{label}</span>}
    </Flex>
  );
}

export default function TokensPage() {
  return (
    <Flex gap={8}>
      {/* Main Content */}
      <div className="flex-1">
        <DocsHeader
          title="Design Tokens"
          description="Global design tokens that define the visual language of the NuGraphix UI system. These tokens ensure consistency across all components and enable easy theming."
          badge="Foundation"
          badgeVariant="success"
        />

        <Stack gap={12}>
          {/* Overview */}
          <DocsSection
            id="overview"
            title="Overview"
            description="Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use tokens to maintain a scalable and consistent visual system."
          >
            <div className="p-6 rounded-lg bg-(--color-surface-subtle) border border-(--color-border-subtle)">
              <Stack gap={4}>
                <h4 className="font-semibold text-foreground">Key Benefits</h4>
                <ul className="space-y-2 text-sm text-(--color-foreground-muted)">
                  <li>• <strong>Consistency:</strong> Unified visual language across all components</li>
                  <li>• <strong>Maintainability:</strong> Update design decisions in one place</li>
                  <li>• <strong>Theming:</strong> Easy brand customization per application</li>
                  <li>• <strong>Scalability:</strong> Add new components using existing tokens</li>
                </ul>
              </Stack>
            </div>
          </DocsSection>

          {/* Colors */}
          <DocsSection
            id="colors"
            title="Color Tokens"
            description="Semantic color tokens organized by purpose and context."
          >
            <Stack gap={6}>
              {/* Base Colors */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Base Colors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TokenCard
                    name="--color-bg"
                    value="Main application background"
                    preview={<ColorSwatch color="--color-bg" />}
                  />
                  <TokenCard
                    name="--color-bg-muted"
                    value="Muted background variant"
                    preview={<ColorSwatch color="--color-bg-muted" />}
                  />
                  <TokenCard
                    name="--color-surface"
                    value="Default surface for cards"
                    preview={<ColorSwatch color="--color-surface" />}
                  />
                  <TokenCard
                    name="--color-surface-subtle"
                    value="Subtle elevated surface"
                    preview={<ColorSwatch color="--color-surface-subtle" />}
                  />
                </div>
              </div>

              {/* Text Colors */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Text Colors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TokenCard
                    name="--color-foreground"
                    value="Primary text color"
                    preview={<ColorSwatch color="--color-foreground" />}
                  />
                  <TokenCard
                    name="--color-foreground-muted"
                    value="Secondary/muted text"
                    preview={<ColorSwatch color="--color-foreground-muted" />}
                  />
                  <TokenCard
                    name="--color-foreground-inverted"
                    value="Text on dark backgrounds"
                    preview={<ColorSwatch color="--color-foreground-inverted" />}
                  />
                </div>
              </div>

              {/* Brand Colors */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Brand Colors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TokenCard
                    name="--color-primary"
                    value="Primary brand color"
                    preview={<ColorSwatch color="--color-primary" />}
                  />
                  <TokenCard
                    name="--color-primary-soft"
                    value="Soft primary background"
                    preview={<ColorSwatch color="--color-primary-soft" />}
                  />
                  <TokenCard
                    name="--color-secondary"
                    value="Secondary brand color"
                    preview={<ColorSwatch color="--color-secondary" />}
                  />
                  <TokenCard
                    name="--color-secondary-soft"
                    value="Soft secondary background"
                    preview={<ColorSwatch color="--color-secondary-soft" />}
                  />
                </div>
              </div>

              {/* Status Colors */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Status Colors</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TokenCard
                    name="--color-success"
                    value="Success states"
                    preview={<ColorSwatch color="--color-success" />}
                  />
                  <TokenCard
                    name="--color-warning"
                    value="Warning states"
                    preview={<ColorSwatch color="--color-warning" />}
                  />
                  <TokenCard
                    name="--color-danger"
                    value="Error/destructive states"
                    preview={<ColorSwatch color="--color-danger" />}
                  />
                </div>
              </div>

              {/* Border Colors */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Border Colors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TokenCard
                    name="--color-border-subtle"
                    value="Default subtle borders"
                    preview={<div className="w-16 h-4 border-2 rounded" style={{ borderColor: "var(--color-border-subtle)" }} />}
                  />
                  <TokenCard
                    name="--color-border-strong"
                    value="Emphasized borders"
                    preview={<div className="w-16 h-4 border-2 rounded" style={{ borderColor: "var(--color-border-strong)" }} />}
                  />
                </div>
              </div>
            </Stack>
          </DocsSection>

          {/* Typography */}
          <DocsSection
            id="typography"
            title="Typography Tokens"
            description="Font families, sizes, weights, and line heights for consistent typography."
          >
            <Stack gap={6}>
              {/* Font Families */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Font Families</h4>
                <div className="grid grid-cols-1 gap-4">
                  <TokenCard
                    name="--font-sans"
                    value="system-ui, -apple-system, sans-serif"
                    preview={<span style={{ fontFamily: "var(--font-sans)" }}>Aa</span>}
                  />
                  <TokenCard
                    name="--font-mono"
                    value="SF Mono, ui-monospace, monospace"
                    preview={<span style={{ fontFamily: "var(--font-mono)" }}>Aa</span>}
                  />
                </div>
              </div>

              {/* Font Sizes */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Font Sizes</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { token: "--font-size-xs", label: "Extra Small (12px)" },
                    { token: "--font-size-sm", label: "Small (14px)" },
                    { token: "--font-size-md", label: "Medium (16px)" },
                    { token: "--font-size-lg", label: "Large (18px)" },
                    { token: "--font-size-xl", label: "Extra Large (20px)" },
                    { token: "--font-size-2xl", label: "2XL (24px)" },
                    { token: "--font-size-3xl", label: "3XL (30px)" },
                  ].map((size) => (
                    <div key={size.token} className="flex items-center gap-4 p-4 border border-(--color-border-subtle) rounded-lg">
                      <code className="text-sm font-mono text-(--color-primary) bg-(--color-primary-soft) px-2 py-1 rounded min-w-[140px]">
                        {size.token}
                      </code>
                      <span className="text-(--color-foreground-muted) text-sm flex-1">{size.label}</span>
                      <span style={{ fontSize: `var(${size.token})` }}>Aa</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Font Weights */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Font Weights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TokenCard
                    name="--font-weight-regular"
                    value="400 - Body text"
                    preview={<span style={{ fontWeight: "var(--font-weight-regular)" }}>Regular</span>}
                  />
                  <TokenCard
                    name="--font-weight-medium"
                    value="500 - Emphasis"
                    preview={<span style={{ fontWeight: "var(--font-weight-medium)" }}>Medium</span>}
                  />
                  <TokenCard
                    name="--font-weight-semibold"
                    value="600 - Headings"
                    preview={<span style={{ fontWeight: "var(--font-weight-semibold)" }}>Semibold</span>}
                  />
                  <TokenCard
                    name="--font-weight-bold"
                    value="700 - Strong emphasis"
                    preview={<span style={{ fontWeight: "var(--font-weight-bold)" }}>Bold</span>}
                  />
                </div>
              </div>
            </Stack>
          </DocsSection>

          {/* Spacing */}
          <DocsSection
            id="spacing"
            title="Spacing Tokens"
            description="Consistent spacing scale for padding, margins, and gaps."
          >
            <div className="grid grid-cols-1 gap-3">
              {[
                { token: "--space-1", value: "4px", width: "w-4" },
                { token: "--space-2", value: "8px", width: "w-8" },
                { token: "--space-3", value: "12px", width: "w-12" },
                { token: "--space-4", value: "16px", width: "w-16" },
                { token: "--space-5", value: "20px", width: "w-20" },
                { token: "--space-6", value: "24px", width: "w-24" },
              ].map((space) => (
                <div key={space.token} className="flex items-center gap-4 p-4 border border-(--color-border-subtle) rounded-lg">
                  <code className="text-sm font-mono text-(--color-primary) bg-(--color-primary-soft) px-2 py-1 rounded min-w-[100px]">
                    {space.token}
                  </code>
                  <span className="text-(--color-foreground-muted) text-sm min-w-[60px]">{space.value}</span>
                  <div className={`h-8 ${space.width} bg-(--color-primary) rounded`} />
                </div>
              ))}
            </div>
          </DocsSection>

          {/* Border Radius */}
          <DocsSection
            id="radius"
            title="Border Radius"
            description="Consistent rounding for UI elements."
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { token: "--radius-xs", label: "Extra Small (2px)" },
                { token: "--radius-sm", label: "Small (4px)" },
                { token: "--radius-md", label: "Medium (6px)" },
                { token: "--radius-lg", label: "Large (12px)" },
                { token: "--radius-xl", label: "Extra Large (16px)" },
                { token: "--radius-full", label: "Full (999px)" },
              ].map((radius) => (
                <div key={radius.token} className="p-4 border border-(--color-border-subtle) rounded-lg text-center">
                  <div
                    className="w-20 h-20 bg-(--color-primary) mx-auto mb-3"
                    style={{ borderRadius: `var(${radius.token})` }}
                  />
                  <code className="text-xs font-mono text-(--color-primary) bg-(--color-primary-soft) px-2 py-1 rounded block mb-1">
                    {radius.token}
                  </code>
                  <span className="text-xs text-(--color-foreground-muted)">{radius.label}</span>
                </div>
              ))}
            </div>
          </DocsSection>

          {/* Shadows */}
          <DocsSection
            id="shadows"
            title="Shadow Tokens"
            description="Elevation and depth through consistent shadows."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { token: "--shadow-xs", label: "Extra Small" },
                { token: "--shadow-sm", label: "Small" },
                { token: "--shadow-md", label: "Medium" },
                { token: "--shadow-lg", label: "Large" },
                { token: "--shadow-focus", label: "Focus Ring" },
              ].map((shadow) => (
                <div key={shadow.token} className="text-center">
                  <div
                    className="w-full h-24 bg-(--color-surface) rounded-lg mb-3"
                    style={{ boxShadow: `var(${shadow.token})` }}
                  />
                  <code className="text-sm font-mono text-(--color-primary) bg-(--color-primary-soft) px-2 py-1 rounded">
                    {shadow.token}
                  </code>
                  <p className="text-sm text-(--color-foreground-muted) mt-1">{shadow.label}</p>
                </div>
              ))}
            </div>
          </DocsSection>

          {/* Motion */}
          <DocsSection
            id="motion"
            title="Motion Tokens"
            description="Animation durations and easing functions for consistent transitions."
          >
            <Stack gap={6}>
              <div>
                <h4 className="text-lg font-semibold mb-4">Durations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TokenCard name="--transition-fast" value="120ms - Quick feedback" />
                  <TokenCard name="--transition-normal" value="200ms - Standard UI" />
                  <TokenCard name="--transition-slow" value="300ms - Modals, pages" />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Easing</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TokenCard name="--easing-standard" value="cubic-bezier(0.2, 0, 0, 1)" />
                  <TokenCard name="--easing-emphasized" value="cubic-bezier(0.2, 0, 0, 1.2)" />
                </div>
              </div>
            </Stack>
          </DocsSection>

          {/* Usage */}
          <DocsSection
            id="usage"
            title="Usage Guidelines"
            description="How to use design tokens in your components."
          >
            <Stack gap={6}>
              <div className="p-6 rounded-lg bg-(--color-success-soft) border border-(--color-border-success)">
                <h4 className="font-semibold text-(--color-success) mb-3">✓ Do</h4>
                <Stack gap={3}>
                  <div>
                    <p className="text-sm font-medium mb-2">Use tokens in Tailwind classes:</p>
                    <code className="text-xs font-mono bg-(--color-surface) p-3 rounded block">
                      className=&quot;bg-(--color-primary) text-(--color-primary-foreground)&quot;
                    </code>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Use tokens in custom CSS:</p>
                    <code className="text-xs font-mono bg-(--color-surface) p-3 rounded block">
                      background: var(--color-primary);
                    </code>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Override tokens per app:</p>
                    <code className="text-xs font-mono bg-(--color-surface) p-3 rounded block">
                      {`:root {
  --color-primary: #16a34a;
}`}
                    </code>
                  </div>
                </Stack>
              </div>

              <div className="p-6 rounded-lg bg-(--color-danger-soft) border border-(--color-border-danger)">
                <h4 className="font-semibold text-(--color-danger) mb-3">✗ Don&apos;t</h4>
                <Stack gap={3}>
                  <div>
                    <p className="text-sm font-medium mb-2">Hard-code colors:</p>
                    <code className="text-xs font-mono bg-(--color-surface) p-3 rounded block line-through">
                      className=&quot;bg-blue-600 text-white&quot;
                    </code>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Use raw hex values:</p>
                    <code className="text-xs font-mono bg-(--color-surface) p-3 rounded block line-through">
                      background: #2563eb;
                    </code>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Mix tokens and hard-coded values:</p>
                    <code className="text-xs font-mono bg-(--color-surface) p-3 rounded block line-through">
                      className=&quot;bg-(--color-primary) text-white&quot;
                    </code>
                  </div>
                </Stack>
              </div>
            </Stack>
          </DocsSection>
        </Stack>
      </div>

      {/* Table of Contents */}
      <DocsToc items={tocItems} />
    </Flex>
  );
}
