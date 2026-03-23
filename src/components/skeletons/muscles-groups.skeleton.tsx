import { Skeleton } from "@/components/ui/skeleton";

export function MusclesGroupsSkeleton({ length = 6 }) {
  return (
    <ul className="flex items-center gap-8">
      {Array.from({ length }).map((_, idx) => (
        <li key={idx}>
          <Skeleton className="rounded-lg w-28 h-10" />
        </li>
      ))}
    </ul>
  );
}
