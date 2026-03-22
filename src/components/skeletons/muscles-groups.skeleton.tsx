import { Skeleton } from "@/components/ui/skeleton";

export function MusclesGroupsSkeleton({ length = 6 }) {
  return (
    <ul className="flex items-center gap-8">
      {Array.from({ length }).map((_, idx) => (
        <li key={idx}>
          <Skeleton className="h-10 w-28 rounded-lg" />
        </li>
      ))}
    </ul>
  );
}
