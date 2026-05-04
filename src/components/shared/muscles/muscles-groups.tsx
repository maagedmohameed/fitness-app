import { MusclesGroupsSkeleton } from "@/components/skeletons/muscles-groups.skeleton";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useTranslations } from "use-intl";

type MusclesGroupsProps = {
  musclesGroup?: MuscleGroup[];
  isPending: boolean;
};

const MAIN_MUSCLES_GROUPS = [
  { _id: "69d982ed85f6bfa972bf2220", name: "Chest" },
  { _id: "69d982ee85f6bfa972bf2238", name: "Arm" },
  { _id: "69d982ed85f6bfa972bf2224", name: "Shoulder" },
  { _id: "69d982ee85f6bfa972bf2226", name: "Back" },
  { _id: "69d982ed85f6bfa972bf221a", name: "Glutes" },
  { _id: "69d982ee85f6bfa972bf222c", name: "Biceps" },
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

  if (isPending) return <MusclesGroupsSkeleton length={7} />;

  return (
    <ul className="flex flex-wrap justify-between lg:gap-8 mx-auto w-fit overflow-x-hidden">
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
