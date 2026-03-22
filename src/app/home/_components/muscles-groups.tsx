import { MusclesGroupsSkeleton } from "@/components/skeletons/muscles-groups.skeleton";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useTranslations } from "use-intl";

type MusclesGroupsProps = {
  musclesGroup?: MuscleGroup[];
  isPending: boolean;
};

export default function MusclesGroups({
  musclesGroup,
  isPending,
}: MusclesGroupsProps) {
  // Translations
  const t = useTranslations("workouts");

  // Hooks
  const [, setSearchParams] = useSearchParams();
  if (isPending) return <MusclesGroupsSkeleton />;

  return (
    <ul className="flex gap-8 mx-auto w-fit overflow-x-hidden">
      <li>
        <Button
          variant={"ghost"}
          className="font-bold text-xl capitalize"
          onClick={() => setSearchParams()}
        >
          {t("all-muscles-groups")}
        </Button>
      </li>
      {musclesGroup?.slice(0, 5).map(({ _id, name }) => (
        <li key={_id}>
          <Button
            onClick={() =>
              setSearchParams({
                musclesGroupId: _id,
              })
            }
            variant={"ghost"}
            className="font-bold text-xl capitalize"
          >
            {name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
