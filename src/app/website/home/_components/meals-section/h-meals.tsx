import MealCard from "@/components/shared/meal-card";
import { SectionSubTitle, SectionTitle } from "@/components/ui/section-head";
import { useTranslations } from "use-intl";

const MEALS = [
  {
    title: "breakfast",
    mealImage: "/assets/images/meal2.webp",
  },
  {
    title: "lunch",
    mealImage: "/assets/images/meal1.webp",
  },
  {
    title: "dinner",
    mealImage: "/assets/images/meal3.webp",
  },
];

export default function Meals() {
  // Translations
  const t = useTranslations("h-meal-section");

  return (
    <section className="bg-[url(/assets/images/healthy-bg.webp)] bg-cover bg-center px-1 py-8">
      {/* Section Head */}
      <SectionTitle variant={"center"} className="from-[#FFFFFF]/20 via-[#FFFFFF]/10 -mb-6">
        {t("title")}
      </SectionTitle>

      {/* Section Content */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 bg-white/60 dark:bg-[#242424]/60 backdrop-blur-xl px-4 sm:px-6 py-8 sm:py-10">
        {/* SubTitle */}
        <SectionSubTitle variant={"center"}>{t("subTitle")}</SectionSubTitle>
        {/* Description */}
        <p className="w-full max-w-[39.8rem] font-bold text-[#242424] dark:text-[#F3F3F4] text-2xl sm:text-3xl lg:text-4xl text-center uppercase leading-snug lg:leading-12">
          {t.rich("desc", {
            span: (chunk) => <span className="text-[#FF4100]">{chunk}</span>,
          })}
        </p>

        {/* Section Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2.5 w-full max-w-7xl">
          {MEALS.map((meal, idx) => (
            <MealCard key={idx} title={meal.title} mealImage={meal.mealImage} />
          ))}
        </div>
      </div>
    </section>
  );
}
