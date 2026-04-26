import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";
import type { T_ErrorMessageProps } from "@/lib/types/error-message";

/**
 * A premium-styled error message component with glassmorphism and subtle animations.
 * Used to display global or field-level errors in a consistent manner.
 */
export function ErrorMessage({ message, className }: T_ErrorMessageProps) {
  if (!message) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-3 w-full  rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-2 text-sm text-destructive backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300",
        className,
      )}
      role="alert"
      aria-live="polite"
    >
      {/* Visual indicator icon */}
      <AlertCircle className="size-5 shrink-0" />

      {/* Error text content */}
      <p className="font-semibold tracking-tight leading-tight">{message}</p>
    </div>
  );
}
