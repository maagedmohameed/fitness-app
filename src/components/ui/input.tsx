import * as React from "react";

import { cn } from "@/lib/utils/tailwind-merge";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:inline-flex bg-transparent disabled:bg-input/50 dark:bg-input/30 dark:disabled:bg-input/80 file:bg-transparent disabled:opacity-50 px-4 py-2 border border-input aria-invalid:border-destructive focus-visible:border-ring dark:aria-invalid:border-destructive/50 file:border-0 rounded-[1.25rem] outline-none aria-invalid:ring-3 aria-invalid:ring-destructive/20 focus-visible:ring-3 focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 w-full min-w-0 h-12 file:h-6 file:font-medium placeholder:text-muted-foreground file:text-foreground md:text-sm file:text-sm text-base placeholder:capitalize transition-colors disabled:cursor-not-allowed disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
