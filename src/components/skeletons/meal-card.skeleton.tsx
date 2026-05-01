import { Skeleton } from "@/components/ui/skeleton";

export function MealCardSkeleton() {
  return (
    <Skeleton className="bg-zinc-200 rounded-[1.125rem] w-full max-w-100 h-100 animate-pulse" />
  );
}
