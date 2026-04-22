import MealCardCarousel from "./meal-card-carousel";
import MealCategories from "./meal-categories";
import { useMealCategories } from "@/hooks/meals/use-meal-categories";
import { useMealCarousel } from "@/hooks/meals/use-meal-carousel";
import { SectionSubTitle, SectionTitle } from "@/components/ui/section-head";
import { useSearchParams } from "react-router-dom";
import { useLocale, useTranslations } from "use-intl";

export default function MealsSection() {
  // Translations
  const t = useTranslations("h-meal-section");
  const locale = useLocale();

  // Hooks
  const [searchParams] = useSearchParams();
  const { isPending } = useMealCategories(locale);
  const { isPending: isMealsPending, data: payload } = useMealCarousel(
    locale,
    searchParams.get("mealCategory")
  );

  return (
    <section className="relative isolate bg-[url(/assets/images/healthy-bg-overlayed.webp)] bg-cover bg-center py-10 sm:py-12">
      {/* Theme overlay (same bg image for both modes) */}
      <div className="absolute inset-0 -z-10 bg-white/72 dark:bg-black/45 backdrop-blur-[1px]" />

      {/* Section content  */}
      <div className="relative z-20">
        {/* Container  */}
        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="flex flex-col items-center gap-6 sm:gap-8 mx-auto px-4 sm:px-6 text-black dark:text-white container"
        >
          {/* Section Head */}
          <SectionTitle className="text-center">{t("title")}</SectionTitle>
          <SectionSubTitle className="text-center justify-center">{t("subTitle")}</SectionSubTitle>

          {/* Section Description */}
          <h2 className="max-w-159.25 font-bold text-2xl sm:text-3xl lg:text-4xl text-center uppercase leading-8 sm:leading-10 lg:leading-12">
            {t.rich("desc", {
              span: chunk => <span className="text-[#FF4100]">{chunk}</span>,
            })}
          </h2>

          {/* Meal categories  */}
          <MealCategories isPending={isPending} />

          {/* Meals carousel  */}
          <MealCardCarousel
            isPending={isMealsPending}
            meals={payload?.meals}
          />
        </div>
      </div>
    </section>
  );
}
