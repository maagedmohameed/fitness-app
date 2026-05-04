import { Skeleton } from "@/components/ui/skeleton";

export function MusclesGroupsSkeleton({ length = 7 }) {
  return (
    <ul className="flex flex-wrap justify-between lg:gap-8 mx-auto w-fit overflow-x-hidden">
      {Array.from({ length }).map((_, idx) => (
        <li key={idx}>
          <Skeleton className="rounded-10xl w-24 h-10" />
        </li>
      ))}
    </ul>
  );
}
