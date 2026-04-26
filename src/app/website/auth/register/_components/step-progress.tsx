import { cn } from "@/lib/utils/tailwind-merge";

type StepProgressProps = {
  current: number;
  max: number;
  className?: string;
};

export default function StepProgress({
  current,
  max,
  className,
}: StepProgressProps) {
  const safeMax = Math.max(max, 1);
  const safeCurrent = Math.min(Math.max(current, 0), safeMax);
  const progress = safeCurrent / safeMax;

  const radius = 28;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <div
      className={cn(
        "inline-flex aspect-square w-28 items-center justify-center rounded-sm ",
        className,
      )}
      aria-label={`Step ${safeCurrent} of ${safeMax}`}
      role="img"
    >
      <div className="relative flex items-center justify-center">
        {/* Circular step progress. */}
        <svg
          className="-rotate-90"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          aria-hidden="true"
        >
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="#ff5a0a"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {/* Current step label. */}
        <span className="absolute text-2xl  text-white">
          {safeCurrent}/{safeMax}
        </span>
      </div>
    </div>
  );
}
