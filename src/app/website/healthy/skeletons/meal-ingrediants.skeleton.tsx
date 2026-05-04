import { Skeleton } from "@/components/ui/skeleton";

type MealIngredientsSkeletonProps = {
  length?: number;
};

export function MealIngredientsSkeleton({
  length = 6,
}: MealIngredientsSkeletonProps) {
  return (
    <ul className="justify-between gap-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(2,15.43rem)] xl:grid-cols-[repeat(2,20.43rem)] bg-background/80 backdrop-blur-lg px-2 py-4 rounded-10xl">
      {Array.from({ length }).map((_, idx) => (
        <li
          key={idx}
          className="flex justify-between pb-1 border-border/14 dark:border-[#2D2D2D] border-b w-full md:max-w-[327px] font-semibold capitalize"
        >
          {/* ingredient */}
          <Skeleton className="w-24 h-4" />

          {/* measure */}
          <Skeleton className="w-12 h-4" />
        </li>
      ))}
    </ul>
  );
}
