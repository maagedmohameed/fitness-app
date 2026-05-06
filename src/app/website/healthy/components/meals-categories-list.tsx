import { Button } from "@/components/ui/button";
import type { MealCategory } from "@/lib/types/meal";
import { useSearchParams } from "react-router-dom";
import {
  DEFAULT_MEALS_CATEGORY,
  DEFAULT_MEALS_GROUPS,
} from "../constants/meals.const";
import { MealsGroupsSkeleton } from "../skeletons/meals-groups.skeleton";

type MealsCategoriesProps = {
  mealsCategories?: MealCategory[];
  isPending: boolean;
};

export default function MealsCategories({
  mealsCategories,
  isPending,
}: MealsCategoriesProps) {
  // Hooks
  const [searchParams, setSearchParams] = useSearchParams();

  // Variables
  const activeMealCategory =
    searchParams.get("mealsCategory") ||
    DEFAULT_MEALS_GROUPS[DEFAULT_MEALS_GROUPS.indexOf(DEFAULT_MEALS_CATEGORY)];

  if (isPending) return <MealsGroupsSkeleton />;

  return (
    <ul className="flex flex-wrap justify-evenly mx-auto w-full overflow-x-hidden">
      {mealsCategories
        ?.filter(apiGroup =>
          DEFAULT_MEALS_GROUPS?.some(
            mainGroup => apiGroup.strCategory === mainGroup
          )
        )
        .map(({ strCategory }) => {
          const isActive = activeMealCategory === strCategory;

          return (
            <li key={strCategory}>
              <Button
                onClick={() =>
                  setSearchParams(prev => {
                    const params = new URLSearchParams(prev);
                    params.set("mealsCategory", strCategory);
                    return params;
                  })
                }
                variant={isActive ? "default" : "ghost"}
                className="px-2 h-10 font-bold text-xl capitalize"
              >
                {strCategory}
              </Button>
            </li>
          );
        })}
    </ul>
  );
}
