import { Skeleton } from "@/components/ui/skeleton";

type MealDetailOverviewSkeletonProps = {
  length?: number;
};

export function MealDetailOverviewSkeleton({
  length = 4,
}: MealDetailOverviewSkeletonProps) {
  return (
    <div className="relative flex flex-col justify-end gap-4 bg-zinc-200 px-8 pb-8 rounded-tl-10xl rounded-tr-10xl h-134 animate-pulse">
      {/* title */}
      <Skeleton className="mx-auto w-2/3 h-10" />

      {/* description */}
      <Skeleton className="mx-auto w-4/5 h-5" />
      <Skeleton className="mx-auto w-3/5 h-5" />

      {/* stats */}
      <ul className="flex justify-between items-center">
        {Array.from({ length }).map((_, idx) => (
          <li key={idx} className="flex flex-col items-center p-2 rounded-10xl">
            <Skeleton className="mb-1 w-10 h-4" />
            <Skeleton className="w-12 h-4" />
          </li>
        ))}
      </ul>
    </div>
  );
}
