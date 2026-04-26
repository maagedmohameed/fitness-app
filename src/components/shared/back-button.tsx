import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";

type BackButtonProps = {
  /**
   * Function to call when the button is clicked.
   */
  onClick: () => void;
  /**
   * Additional CSS classes for custom positioning or styling.
   */
  className?: string;
};

/**
 * A reusable Back Button component with a consistent glassmorphism style.
 * Used across the multi-step registration form.
 */
export default function BackButton({ onClick, className }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "absolute left-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 sm:left-6 sm:top-6 z-10",
        className,
      )}
      aria-label="Go back to the previous step"
    >
      <ChevronLeft className="size-6" />
    </button>
  );
}
