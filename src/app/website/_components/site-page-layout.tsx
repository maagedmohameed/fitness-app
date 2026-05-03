import type { ReactNode } from "react";

export function SitePageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-background text-foreground pt-24 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-10">{children}</div>
    </main>
  );
}
