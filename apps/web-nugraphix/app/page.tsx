import { NgBadge } from "@nugraphix/ui";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <NgBadge />

      <h1 className="text-3xl font-bold tracking-tight">
        NuGraphix Monorepo
      </h1>

      <p className="text-muted-foreground max-w-md text-center">
        Shared UI, shared logic, multiple platforms. This is the foundation for
        NuGraphix and all client domains.
      </p>
      </main>
    </div>
  );
}
