import { useLocale } from "use-intl";
import MealsCategories from "./meals-categories-list";
import { useMealsGroups } from "@/hooks/healthy/use-meals-groups";
import { useMealsByCategory } from "@/hooks/healthy/use-meals-by-category";
import { DEFAULT_MEALS_CATEGORY } from "../constants/meals.const";
import { useSearchParams } from "react-router-dom";
import MealsByCategoryList from "./meals-by-category";
import MealDetails from "./meal-details";
import { useMealDetails } from "@/hooks/healthy/use-meals-details";

export default function HealthySection() {
  const locale = useLocale();

  // Hooks
  const [searchParams] = useSearchParams();
  const { isPending, data: mealsCategories } = useMealsGroups(locale);
  const { isPending: isMealsByCategoryPending, data: mealsByCategory } =
    useMealsByCategory(
      searchParams.get("mealsCategory") || DEFAULT_MEALS_CATEGORY,
      locale,
    );
  const { isPending: isMealDetailsPending, data: mealDetails } = useMealDetails(
    searchParams.get("mealId") || (mealsByCategory?.meals[0].idMeal as string),
    locale,
  );

  return (
    <section className="gap-8 grid grid-cols-1 lg:grid-cols-12">
      <aside className="hidden lg:block space-y-4 col-span-4 bg-background/50 backdrop-blur-xl py-4 border-2 border-border/14 dark:border-[#282828] rounded-10xl h-fit">
        <MealsCategories
          isPending={isPending}
          mealsCategories={mealsCategories?.categories}
        />

        <MealsByCategoryList
          isPending={isMealsByCategoryPending}
          mealsByCategory={mealsByCategory?.meals}
        />
      </aside>

      <div className="space-y-6 col-span-8">
        <MealDetails
          isPending={isMealDetailsPending}
          mealDetails={mealDetails}
        />
      </div>
    </section>
  );
}
