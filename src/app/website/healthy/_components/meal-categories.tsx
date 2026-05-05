import { MusclesGroupsSkeleton } from "@/components/skeletons/muscles-groups.skeleton";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useLocale, useTranslations } from "use-intl";

type MealCategoriesProps = {
  isPending: boolean;
};

const MAIN_MEAL_CATEGORIES = [
  { key: "breakfast", value: "Breakfast" },
  { key: "lunch", value: "Lunch" },
  { key: "dinner", value: "Dinner" },
];

export default function MealCategories({
  isPending,
}: MealCategoriesProps) {
  // Hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const t = useTranslations("meal-card");
  const locale = useLocale();

  // Variables
  const activeCategory = searchParams.get("mealCategory") ?? "Breakfast";

  if (isPending) return <MusclesGroupsSkeleton length={8} />;

  return (
    <ul
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex justify-center gap-3 sm:gap-6 lg:gap-8 mx-auto w-full whitespace-nowrap pb-2"
    >
      {MAIN_MEAL_CATEGORIES.map(({ key, value }) => {
        const isActive = activeCategory === value;
        return (
          <li key={key}>
            <Button
              onClick={() =>
                setSearchParams({
                  mealCategory: value,
                })
              }
              variant={isActive ? "default" : "ghost"}
              className="cursor-pointer font-bold text-base sm:text-lg lg:text-xl capitalize"
            >
              {t(key)}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
