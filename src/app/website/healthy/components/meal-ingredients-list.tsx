import type { MealIngredient } from "@/lib/types/meal";
import { MealIngredientsSkeleton } from "../skeletons/meal-ingrediants.skeleton";

type MealIngredientsListProps = {
  isPending: boolean;
  mealIngredients?: MealIngredient[];
};

export default function MealIngredientsList({
  mealIngredients,
  isPending,
}: MealIngredientsListProps) {
  if (isPending) return <MealIngredientsSkeleton />;

  return (
    <ul className="justify-between gap-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(2,15.43rem)] xl:grid-cols-[repeat(2,20.43rem)] bg-background/80 backdrop-blur-lg px-2 py-4 rounded-10xl">
      {mealIngredients?.map(({ ingredient, measure }, idx) => (
        <li
          key={idx}
          className="flex justify-between pb-1 border-border/14 dark:border-[#2D2D2D] border-b w-full md:max-w-[327px] font-semibold capitalize"
        >
          {/* Ingredient Name */}
          {ingredient}
          {/* Ingredient Measure */}
          <span className="font-bold text-primary">{measure}</span>
        </li>
      ))}
    </ul>
  );
}
