import { cn } from "@/lib/utils/tailwind-merge";
import { useRef } from "react";

/**
 * Type definition for HorizontalWheelPicker props.
 */
export type T_HorizontalWheelPickerProps = {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  visibleItemsCount?: number;
  disabled?: boolean;
  className?: string;
  ariaLabelPrefix?: string;
};

/**
 * A premium horizontal wheel picker component.
 * Supports mouse wheel scrolling and touch swipe gestures.
 */
export function HorizontalWheelPicker({
  value,
  onValueChange,
  min = 10,
  max = 100,
  visibleItemsCount = 5,
  disabled = false,
  className,
  ariaLabelPrefix = "Select",
}: T_HorizontalWheelPickerProps) {
  const halfVisible = Math.floor(visibleItemsCount / 2);

  // SECTION: Visible Items Generation
  // Build a centered numeric strip around the current value.
  const visibleItems = Array.from(
    { length: visibleItemsCount },
    (_, index) => value - halfVisible + index
  ).filter(item => item >= min && item <= max);

  // SECTION: State Tracking
  // Track touch start position for swipe detection.
  const touchStartX = useRef<number | null>(null);

  // SECTION: Value Update Logic
  // Clamps the new value within the min/max range and triggers the callback.
  const updateValue = (delta: number) => {
    const newValue = Math.min(max, Math.max(min, value + delta));
    if (newValue !== value) {
      onValueChange(newValue);
    }
  };

  // SECTION: Event Handlers (Mouse & Touch)
  // Logic for mouse wheel and touch swipe interactions.
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) < 5) return;
    updateValue(e.deltaY > 0 ? 1 : -1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.targetTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 30) {
      updateValue(diff > 0 ? 1 : -1);
      touchStartX.current = touchEndX;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <>
      <div
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "flex justify-center items-center gap-4 px-2 w-full h-25 overflow-x-hidden no-scrollbar",
          className
        )}
      >
        {/* Render visible numbers with scaling and opacity based on distance from center. */}
        {visibleItems.map(item => {
          const isSelected = item === value;
          const distance = Math.abs(item - value);

          return (
            <button
              key={item}
              type="button"
              className={cn(
                "bg-transparent font-black transition-all duration-300 shrink-0",
                isSelected &&
                  "scale-125 text-[clamp(2.5rem,8vw,4rem)] text-primary",
                distance === 1 && "text-[clamp(2rem,6vw,3rem)] text-white/90",
                distance === 2 &&
                  "text-[clamp(1.5rem,4vw,2.25rem)] text-white/70",
                distance >= 3 && "text-[clamp(1rem,3vw,1.5rem)] text-white/45",
                !isSelected && "hover:text-white"
              )}
              disabled={disabled}
              aria-pressed={isSelected}
              aria-label={`${ariaLabelPrefix} ${item}`}
              onClick={() => onValueChange(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Visual center marker (Triangle). */}
      <div
        className="m-auto sm:mt-2 border-x-[12px] border-x-transparent border-b-[14px] border-b-primary w-0 h-0"
        aria-hidden="true"
      />
    </>
  );
}
