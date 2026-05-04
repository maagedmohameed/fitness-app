import type { MealDetail } from "@/lib/types/meal";
import MealIngredientsList from "./meal-ingredients-list";
import MealDetailOverview from "./meal-detail-overview";

type MealDetailsProps = {
  isPending: boolean;
  mealDetails?: {
    meals: [MealDetail];
  };
};

export default function MealDetails({
  isPending,
  mealDetails,
}: MealDetailsProps) {
  // Variables
  const meal = mealDetails?.meals[0];

  // Functions
  const extractIngredients = (meal: MealDetail) => {
    return Object.keys(meal)
      .filter(key => key.startsWith("strIngredient"))
      .map(key => {
        const index = key.replace("strIngredient", "");
        const ingredientKey = key as keyof MealDetail;
        const measureKey = `strMeasure${index}` as keyof MealDetail;
        return {
          ingredient: meal[ingredientKey] as string,
          measure: meal[measureKey] as string,
        };
      })
      .filter(item => item.ingredient);
  };
  const mealIngredients = meal && extractIngredients(meal);

  return (
    <>
      {/* Meal Details  */}
      <MealDetailOverview isPending={isPending} meal={meal} />

      {/* Meal Ingredients   */}
      <section className="space-y-4">
        {/* Title  */}
        <p className="font-medium text-3xl capitalize">ingredients</p>

        {/* Content  */}
        <MealIngredientsList
          isPending={isPending}
          mealIngredients={mealIngredients}
        />
      </section>
    </>
  );
}
