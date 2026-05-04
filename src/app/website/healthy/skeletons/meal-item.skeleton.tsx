import { Skeleton } from "@/components/ui/skeleton";

type MealItemSkeletonProps = {
  length?: number;
};

export function MealsItemsSkeleton({ length = 5 }: MealItemSkeletonProps) {
  return (
    <ul className="flex flex-col gap-4 pl-4">
      {Array.from({ length }).map((_, idx) => (
        <li
          key={idx}
          className="flex items-center gap-4 pt-1 pb-3 pl-4 border-border/14 dark:border-[#2D2D2D] border-b"
        >
          {/* image */}
          <Skeleton className="rounded-10xl w-20 h-22" />

          {/* content */}
          <div className="flex flex-col gap-2">
            <Skeleton className="w-40 h-5" />
            <Skeleton className="w-32 h-4" />
          </div>
        </li>
      ))}
    </ul>
  );
}
