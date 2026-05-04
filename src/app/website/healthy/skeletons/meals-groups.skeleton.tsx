import { Skeleton } from "@/components/ui/skeleton";

export function MealsGroupsSkeleton({ length = 3 }) {
  return (
    <ul className="flex flex-wrap justify-evenly mx-auto w-full overflow-x-hidden">
      {Array.from({ length }).map((_, idx) => (
        <li key={idx}>
          <Skeleton className="rounded-10xl w-24 h-10" />
        </li>
      ))}
    </ul>
  );
}
