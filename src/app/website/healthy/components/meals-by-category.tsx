import type { MealByCategory } from "@/lib/types/meal";
import MealItem from "./meal-item";
import { DEFAULT_MEALS_COUNT } from "../constants/meals.const";
import { MealsItemsSkeleton } from "../skeletons/meal-item.skeleton";

type MealsByCategoriesProps = {
  mealsByCategory?: MealByCategory[];
  isPending: boolean;
};

export default function MealsByCategoryList({
  mealsByCategory,
  isPending,
}: MealsByCategoriesProps) {
  if (isPending) return <MealsItemsSkeleton />;

  return (
    <div className="flex flex-col gap-4 pl-4">
      {mealsByCategory?.slice(0, DEFAULT_MEALS_COUNT)?.map(meal => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
