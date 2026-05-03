import type { UserProfileDetail, UserProfileDetails } from "@/lib/types/user";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useTranslations } from "use-intl";
import { OpenUserDetailsModalButton } from "./open-user-details-modal-button";
import { normalizeProfileGoal } from "../_constants/profile.constant";

type UserDetailCardProps = {
  UserDetail: UserProfileDetail;
};

export default function UserDetailCard({ UserDetail }: UserDetailCardProps) {
  // Translations
  const t = useTranslations("profile.user-details");

  // Variables
  const {
    name,
    value,
  }: {
    name: keyof UserProfileDetails;
    value: UserProfileDetails[keyof UserProfileDetails];
  } = {
    name: Object.keys(UserDetail)[0] as keyof UserProfileDetails,
    value: Object.values(
      UserDetail
    )[0] as UserProfileDetails[keyof UserProfileDetails],
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 mx-auto w-60">
      <div className="text-center">
        <p className="font-extrabold text-3xl capitalize">
          {t(`${name}.title`)}
        </p>

        <OpenUserDetailsModalButton detailName={name} />
      </div>

      <Button className="flex justify-between backdrop-blur-2xl dark:backdrop-blur-xs py-3 border border-[#242424] dark:border-[#D9D9D9] rounded-[3.125rem] w-full font-bold">
        {name === "activityLevel"
          ? t(`activityLevel.${value}`)
          : name === "weight"
          ? `${value}  ${t(`${name}.symbol`)}`
          : t(`goal.${normalizeProfileGoal(String(value))}`)}
        <RefreshCcw className="size-6" />
      </Button>
    </div>
  );
}
