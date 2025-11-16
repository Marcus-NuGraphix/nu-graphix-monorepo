/**
 * Layout Components Examples
 * 
 * Showcases all features and variations of Container, Flex, and Stack components
 */

import { Container, Flex, Stack } from "@nugraphix/ui";

export default function LayoutExamples() {
  return (
    <div className="space-y-16 p-8 bg-background">
      {/* Container Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Container</h2>
        
        {/* Width Variants */}
        <div className="space-y-4 mb-12">
          <h3 className="text-lg font-semibold mb-4">Width Variants</h3>
          <Container width="sm" className="bg-(--color-surface-subtle) p-4">
            Small container
          </Container>
          <Container width="md" className="bg-(--color-surface-subtle) p-4">
            Medium container
          </Container>
          <Container width="lg" className="bg-(--color-surface-subtle) p-4">
            Large container (default)
          </Container>
          <Container width="xl" className="bg-(--color-surface-subtle) p-4">
            Extra large container
          </Container>
          <Container width="2xl" className="bg-(--color-surface-subtle) p-4">
            2XL container
          </Container>
          <Container width="full" className="bg-(--color-surface-subtle) p-4">
            Full width container
          </Container>
        </div>

        {/* Padding Options */}
        <div className="space-y-4 mb-12">
          <h3 className="text-lg font-semibold mb-4">Padding Options</h3>
          <Container 
            padding="none" 
            className="bg-(--color-surface-subtle) border border-(--color-border-subtle)"
          >
            No padding
          </Container>
          <Container 
            padding="sm" 
            className="bg-(--color-surface-subtle)"
          >
            Small padding
          </Container>
          <Container 
            padding="md" 
            className="bg-(--color-surface-subtle)"
          >
            Medium padding (responsive)
          </Container>
          <Container 
            padding="lg" 
            className="bg-(--color-surface-subtle)"
          >
            Large padding (responsive)
          </Container>
        </div>

        {/* Section Spacing */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Section Spacing</h3>
          <Container 
            section 
            className="bg-(--color-surface-subtle)"
          >
            Container with section spacing (vertical padding)
          </Container>
        </div>

        {/* Polymorphic */}
        <div className="space-y-4 mb-12">
          <h3 className="text-lg font-semibold mb-4">Polymorphic Elements</h3>
          <Container as="section" className="bg-(--color-surface-subtle) p-4">
            Rendered as &lt;section&gt;
          </Container>
          <Container as="article" className="bg-(--color-surface-subtle) p-4">
            Rendered as &lt;article&gt;
          </Container>
          <Container as="main" className="bg-(--color-surface-subtle) p-4">
            Rendered as &lt;main&gt;
          </Container>
        </div>
      </section>

      {/* Flex Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Flex</h2>

        {/* Direction */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Direction</h3>
          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Row (default)</p>
            <Flex direction="row" gap={2} className="bg-(--color-surface-subtle) p-4">
              <div className="bg-(--color-primary) text-(--color-primary-foreground) px-4 py-2 rounded">1</div>
              <div className="bg-(--color-primary) text-(--color-primary-foreground) px-4 py-2 rounded">2</div>
              <div className="bg-(--color-primary) text-(--color-primary-foreground) px-4 py-2 rounded">3</div>
            </Flex>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Column</p>
            <Flex direction="column" gap={2} className="bg-(--color-surface-subtle) p-4">
              <div className="bg-(--color-secondary) text-(--color-secondary-foreground) px-4 py-2 rounded">1</div>
              <div className="bg-(--color-secondary) text-(--color-secondary-foreground) px-4 py-2 rounded">2</div>
              <div className="bg-(--color-secondary) text-(--color-secondary-foreground) px-4 py-2 rounded">3</div>
            </Flex>
          </div>
        </div>

        {/* Alignment */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Alignment</h3>
          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Align Start</p>
            <Flex align="start" gap={2} className="bg-(--color-surface-subtle) p-4 h-32">
              <div className="bg-(--color-success) px-4 py-2 rounded">Item 1</div>
              <div className="bg-(--color-success) px-4 py-6 rounded">Item 2</div>
              <div className="bg-(--color-success) px-4 py-4 rounded">Item 3</div>
            </Flex>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Align Center</p>
            <Flex align="center" gap={2} className="bg-(--color-surface-subtle) p-4 h-32">
              <div className="bg-(--color-warning) px-4 py-2 rounded">Item 1</div>
              <div className="bg-(--color-warning) px-4 py-6 rounded">Item 2</div>
              <div className="bg-(--color-warning) px-4 py-4 rounded">Item 3</div>
            </Flex>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Align End</p>
            <Flex align="end" gap={2} className="bg-(--color-surface-subtle) p-4 h-32">
              <div className="bg-(--color-danger) px-4 py-2 rounded">Item 1</div>
              <div className="bg-(--color-danger) px-4 py-6 rounded">Item 2</div>
              <div className="bg-(--color-danger) px-4 py-4 rounded">Item 3</div>
            </Flex>
          </div>
        </div>

        {/* Justification */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Justification</h3>
          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Justify Between</p>
            <Flex justify="between" gap={2} className="bg-(--color-surface-subtle) p-4">
              <div className="bg-(--color-primary) text-(--color-primary-foreground) px-4 py-2 rounded">Left</div>
              <div className="bg-(--color-primary) text-(--color-primary-foreground) px-4 py-2 rounded">Middle</div>
              <div className="bg-(--color-primary) text-(--color-primary-foreground) px-4 py-2 rounded">Right</div>
            </Flex>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Justify Center</p>
            <Flex justify="center" gap={2} className="bg-(--color-surface-subtle) p-4">
              <div className="bg-(--color-info) px-4 py-2 rounded">1</div>
              <div className="bg-(--color-info) px-4 py-2 rounded">2</div>
              <div className="bg-(--color-info) px-4 py-2 rounded">3</div>
            </Flex>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Justify Evenly</p>
            <Flex justify="evenly" gap={2} className="bg-(--color-surface-subtle) p-4">
              <div className="bg-(--color-success) px-4 py-2 rounded">1</div>
              <div className="bg-(--color-success) px-4 py-2 rounded">2</div>
              <div className="bg-(--color-success) px-4 py-2 rounded">3</div>
            </Flex>
          </div>
        </div>

        {/* Wrap */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Wrap</h3>
          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Flex Wrap</p>
            <Flex wrap="wrap" gap={2} className="bg-(--color-surface-subtle) p-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="bg-(--color-primary) text-(--color-primary-foreground) px-4 py-2 rounded">
                  Item {i + 1}
                </div>
              ))}
            </Flex>
          </div>
        </div>

        {/* Responsive */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Responsive</h3>
          <div className="space-y-2">
            <p className="text-sm text-(--color-foreground-muted)">Column on mobile, row on desktop</p>
            <Flex responsive gap={4} className="bg-(--color-surface-subtle) p-4">
              <div className="bg-(--color-secondary) text-(--color-secondary-foreground) px-6 py-4 rounded flex-1">
                Sidebar
              </div>
              <div className="bg-(--color-surface) border border-(--color-border-subtle) px-6 py-4 rounded flex-1">
                Main Content
              </div>
            </Flex>
          </div>
        </div>
      </section>

      {/* Stack Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Stack</h2>

        {/* Basic Stack */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Basic Stack</h3>
          <Stack gap={4} className="bg-(--color-surface-subtle) p-4">
            <div className="bg-(--color-surface) border border-(--color-border-subtle) p-4 rounded">Item 1</div>
            <div className="bg-(--color-surface) border border-(--color-border-subtle) p-4 rounded">Item 2</div>
            <div className="bg-(--color-surface) border border-(--color-border-subtle) p-4 rounded">Item 3</div>
          </Stack>
        </div>

        {/* Gap Variations */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Gap Variations</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-(--color-foreground-muted) mb-2">Gap 2 (small)</p>
              <Stack gap={2} className="bg-(--color-surface-subtle) p-4">
                <div className="bg-(--color-primary) text-(--color-primary-foreground) p-2 rounded">Item 1</div>
                <div className="bg-(--color-primary) text-(--color-primary-foreground) p-2 rounded">Item 2</div>
                <div className="bg-(--color-primary) text-(--color-primary-foreground) p-2 rounded">Item 3</div>
              </Stack>
            </div>
            
            <div>
              <p className="text-sm text-(--color-foreground-muted) mb-2">Gap 6 (large)</p>
              <Stack gap={6} className="bg-(--color-surface-subtle) p-4">
                <div className="bg-(--color-success) p-2 rounded">Item 1</div>
                <div className="bg-(--color-success) p-2 rounded">Item 2</div>
                <div className="bg-(--color-success) p-2 rounded">Item 3</div>
              </Stack>
            </div>
          </div>
        </div>

        {/* Alignment */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Horizontal Alignment</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-(--color-foreground-muted) mb-2">Align Start</p>
              <Stack align="start" gap={2} className="bg-(--color-surface-subtle) p-4">
                <div className="bg-(--color-warning) px-4 py-2 rounded">Left</div>
                <div className="bg-(--color-warning) px-8 py-2 rounded">Left wider</div>
                <div className="bg-(--color-warning) px-6 py-2 rounded">Left wide</div>
              </Stack>
            </div>

            <div>
              <p className="text-sm text-(--color-foreground-muted) mb-2">Align Center</p>
              <Stack align="center" gap={2} className="bg-(--color-surface-subtle) p-4">
                <div className="bg-(--color-info) px-4 py-2 rounded">Center</div>
                <div className="bg-(--color-info) px-8 py-2 rounded">Center wider</div>
                <div className="bg-(--color-info) px-6 py-2 rounded">Center wide</div>
              </Stack>
            </div>

            <div>
              <p className="text-sm text-(--color-foreground-muted) mb-2">Align End</p>
              <Stack align="end" gap={2} className="bg-(--color-surface-subtle) p-4">
                <div className="bg-(--color-danger) px-4 py-2 rounded">Right</div>
                <div className="bg-(--color-danger) px-8 py-2 rounded">Right wider</div>
                <div className="bg-(--color-danger) px-6 py-2 rounded">Right wide</div>
              </Stack>
            </div>
          </div>
        </div>

        {/* Dividers */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">With Dividers</h3>
          <Stack dividers gap={4} className="bg-(--color-surface-subtle) p-4">
            <div className="p-2">Section 1</div>
            <div className="p-2">Section 2</div>
            <div className="p-2">Section 3</div>
          </Stack>
        </div>

        {/* Reverse */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Reverse Order</h3>
          <Stack reverse gap={2} className="bg-(--color-surface-subtle) p-4">
            <div className="bg-(--color-secondary) text-(--color-secondary-foreground) p-4 rounded">First (appears last)</div>
            <div className="bg-(--color-secondary) text-(--color-secondary-foreground) p-4 rounded">Second (appears middle)</div>
            <div className="bg-(--color-secondary) text-(--color-secondary-foreground) p-4 rounded">Third (appears first)</div>
          </Stack>
        </div>
      </section>

      {/* Combined Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Combined Patterns</h2>

        {/* Card Layout */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Card Layout</h3>
          <Container>
            <Stack gap={4}>
              <div className="bg-(--color-surface) border border-(--color-border-subtle) rounded-lg p-6">
                <Stack gap={3}>
                  <h4 className="font-semibold">Card Title</h4>
                  <p className="text-(--color-foreground-muted)">Card content goes here</p>
                  <Flex justify="end" gap={2}>
                    <button className="px-4 py-2 rounded bg-(--color-surface-subtle)">Cancel</button>
                    <button className="px-4 py-2 rounded bg-(--color-primary) text-(--color-primary-foreground)">Submit</button>
                  </Flex>
                </Stack>
              </div>
            </Stack>
          </Container>
        </div>

        {/* Dashboard Layout */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">Dashboard Layout</h3>
          <Container width="full" padding="lg">
            <Stack gap={6}>
              <h2 className="text-xl font-bold">Dashboard</h2>
              <Flex wrap="wrap" gap={4}>
                <div className="bg-(--color-primary-soft) p-6 rounded-md flex-1 min-w-[200px]">
                  <Stack gap={2}>
                    <span className="text-sm text-(--color-foreground-muted)">Total Users</span>
                    <span className="text-2xl font-bold">1,234</span>
                  </Stack>
                </div>
                <div className="bg-(--color-success-soft) p-6 rounded-md flex-1 min-w-[200px]">
                  <Stack gap={2}>
                    <span className="text-sm text-(--color-foreground-muted)">Revenue</span>
                    <span className="text-2xl font-bold">$12,345</span>
                  </Stack>
                </div>
                <div className="bg-(--color-warning-soft) p-6 rounded-md flex-1 min-w-[200px]">
                  <Stack gap={2}>
                    <span className="text-sm text-(--color-foreground-muted)">Pending</span>
                    <span className="text-2xl font-bold">42</span>
                  </Stack>
                </div>
              </Flex>
            </Stack>
          </Container>
        </div>
      </section>
    </div>
  );
}
