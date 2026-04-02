import type { UserProfileDetail } from "@/lib/types/user";
import UserDetailCard from "./user-detail-card";
import UserDetailCardSkeleton from "../_skeletons/user-detail-card.skeleton";

type UserDetailsProps = {
  isPending: boolean;
  userDetails: UserProfileDetail[];
};

export default function UserDetails({
  userDetails,
  isPending,
}: UserDetailsProps) {
  return (
    <section className="flex items-center gap-20">
      {/* User details skeletons  */}
      {isPending &&
        Array.from({ length: 3 }).map((_, idx) => (
          <UserDetailCardSkeleton key={idx} />
        ))}

      {/* Content  */}
      {userDetails?.map((userDetail, idx) => (
        <UserDetailCard key={idx} UserDetail={userDetail} />
      ))}
    </section>
  );
}
