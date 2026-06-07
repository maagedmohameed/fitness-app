import { ErrorPage } from "@/app/error-page";
import { DEFAULT_MEALS_GROUPS } from "@/app/website/healthy/constants/meals.const";
import MealCard from "@/components/shared/meal-card";
import { MealCardSkeleton } from "@/components/skeletons/meal-card.skeleton";
import { SectionSubTitle, SectionTitle } from "@/components/ui/section-head";
import { useMealsGroups } from "@/hooks/healthy/use-meals-groups";
import { useLocale, useTranslations } from "use-intl";

export default function Meals() {
  const t = useTranslations("h-meal-section");
  const locale = useLocale();
  // Hooks
  const {
    isPending,
    data: mealsCategories,
    error,
    refetch,
  } = useMealsGroups(locale);
  return (
    <section className="bg-[url(/assets/images/healthy-bg.webp)] bg-cover bg-center px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        variant={"center"}
        className="from-[#FFFFFF]/20 via-[#FFFFFF]/10 -mb-6"
      >
        {t("title")}
      </SectionTitle>

      <div className="flex flex-col items-center gap-6 sm:gap-8 bg-white/60 dark:bg-[#242424]/60 backdrop-blur-xl px-4 sm:px-6 py-8 sm:py-10 min-h-0">
        <SectionSubTitle variant={"center"}>{t("subTitle")}</SectionSubTitle>
        <p className="w-full max-w-[39.8rem] font-bold text-[#242424] dark:text-[#F3F3F4] text-2xl sm:text-3xl lg:text-4xl text-center uppercase leading-snug lg:leading-12">
          {t.rich("desc", {
            span: chunk => <span className="text-[#FF4100]">{chunk}</span>,
          })}
        </p>

        <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-0 sm:px-2.5 w-full max-w-7xl">
          {/* Pending state */}
          {isPending &&
            Array.from({ length: 3 }).map((_i, idx) => (
              <MealCardSkeleton key={idx} />
            ))}
          {/* Fullfiled state */}
          {!mealsCategories?.categories.length || error ? (
            <ErrorPage error={error} resetErrorBoundary={() => refetch()} />
          ) : (
            mealsCategories?.categories
              .filter(apiGroup =>
                DEFAULT_MEALS_GROUPS?.some(
                  mainGroup => apiGroup.strCategory === mainGroup,
                ),
              )
              .map(({ idCategory, strCategory, strCategoryThumb }) => (
                <MealCard
                  key={idCategory}
                  title={strCategory}
                  mealImage={strCategoryThumb}
                />
              ))
          )}
        </div>
      </div>
    </section>
  );
}
