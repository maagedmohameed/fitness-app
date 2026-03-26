import { MusclesGroupsSkeleton } from "@/components/skeletons/muscles-groups.skeleton";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

type MealCategoriesProps = {
  isPending: boolean;
};

const MAIN_MEAL_CATEGORIES = [
  "Breakfast",
  "Lunch",
  "Dinner",
];

export default function MealCategories({
  isPending,
}: MealCategoriesProps) {
  // Hooks
  const [searchParams, setSearchParams] = useSearchParams();

  // Variables
  const activeCategory = searchParams.get("mealCategory") ?? "Breakfast";

  if (isPending) return <MusclesGroupsSkeleton length={8} />;

  return (
    <ul className="flex gap-8 mx-auto w-fit overflow-x-hidden">
      {MAIN_MEAL_CATEGORIES.map(categoryName => {
        const isActive = activeCategory === categoryName;
        return (
          <li key={categoryName}>
            <Button
              onClick={() =>
                setSearchParams({
                  mealCategory: categoryName,
                })
              }
              variant={isActive ? "default" : "ghost"}
              className="cursor-pointer font-bold text-xl capitalize"
            >
              {categoryName}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
