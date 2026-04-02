import { Skeleton } from "@/components/ui/skeleton";

export default function UserDetailCardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 w-60">
      <Skeleton className="w-32 h-8" />
      <Skeleton className="w-24 h-4" />
      <Skeleton className="rounded-full w-full h-12" />
    </div>
  );
}
