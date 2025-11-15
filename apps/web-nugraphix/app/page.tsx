import { Button, Input } from "@nugraphix/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">NuGraphix UI Playground</h1>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link button</Button>
        <Button size="sm">Small</Button>
        <Button size="lg" fullWidth>
          Large full width
        </Button>
        <Button isLoading>Loading...</Button>
        <Button size="icon" aria-label="Icon button">
          ⚙️
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-[320px]">
        <Input placeholder="Default input" />
        <Input size="sm" placeholder="Small input" />
        <Input size="lg" placeholder="Large input" />
        <Input isInvalid placeholder="Invalid input" />
        <Input variant="ghost" placeholder="Ghost input" />
        <Input variant="unstyled" placeholder="Unstyled input" />
      </div>
    </main>
  );
}
