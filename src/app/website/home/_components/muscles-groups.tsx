import { MusclesGroupsSkeleton } from "@/components/skeletons/muscles-groups.skeleton";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useTranslations } from "use-intl";

type MusclesGroupsProps = {
  musclesGroup?: MuscleGroup[];
  isPending: boolean;
};

const MAIN_MUSCLES_GROUPS = [
  { _id: "67c79f3526895f87ce0aa96d", name: "Chest" },
  { _id: "67c79f3526895f87ce0aa977", name: "Arm" },
  { _id: "67c79f3526895f87ce0aa96e", name: "Shoulder" },
  { _id: "67c79f3526895f87ce0aa96f", name: "Back" },
  { _id: "67c79f3526895f87ce0aa96c", name: "Glutes" },
  { _id: "67c79f3526895f87ce0aa971", name: "Biceps" },
];

export default function MusclesGroups({
  musclesGroup,
  isPending,
}: MusclesGroupsProps) {
  // Translations
  const t = useTranslations("workouts");

  // Hooks
  const [searchParams, setSearchParams] = useSearchParams();

  // Variables
  const activeMusclesGroupId = searchParams.get("musclesGroupId");

  if (isPending) return <MusclesGroupsSkeleton />;

  return (
    <ul className="flex gap-8 mx-auto w-fit overflow-x-hidden">
      <li>
        <Button
          variant={activeMusclesGroupId ? "ghost" : "default"}
          className="font-bold text-xl capitalize"
          onClick={() => setSearchParams()}
        >
          {t("all-muscles-groups")}
        </Button>
      </li>

      {musclesGroup
        ?.filter(apiGroup =>
          MAIN_MUSCLES_GROUPS?.some(mainGroup => apiGroup._id === mainGroup._id)
        )
        .map(({ _id, name }) => {
          const isActive = activeMusclesGroupId === _id;
          return (
            <li key={_id}>
              <Button
                onClick={() =>
                  setSearchParams({
                    musclesGroupId: _id,
                  })
                }
                variant={isActive ? "default" : "ghost"}
                className="font-bold text-xl capitalize"
              >
                {name}
              </Button>
            </li>
          );
        })}
    </ul>
  );
}
