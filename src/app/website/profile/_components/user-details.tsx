import {
  ACTIVITY_LEVELS_TRANSLATION_KEYS,
  GOALS_TRANSLATION_KEYS,
} from "../_constants/profile.constant";
import { useAuth } from "@/hooks/auth-context";
import UserDetailCard from "./user-detail-card";

export default function UserDetails() {
  // Hooks
  const { user } = useAuth();

  // Variables
  const userDetails = [
    { goal: user?.goal ?? GOALS_TRANSLATION_KEYS[0] },
    {
      activityLevel: user?.activityLevel ?? ACTIVITY_LEVELS_TRANSLATION_KEYS[0],
    },
    { weight: user?.weight ?? 60 },
  ];
  return (
    <section className="flex md:flex-row flex-col items-center gap-20">
      {/* Content  */}
      {userDetails?.map((userDetail, idx) => (
        <UserDetailCard key={idx} UserDetail={userDetail} />
      ))}
    </section>
  );
}
