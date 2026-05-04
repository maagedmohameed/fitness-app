import { SectionTitle } from "@/components/ui/section-head";
import { useTranslations } from "use-intl";
import HealthySection from "./components/healthy-section";

export default function HealthyPage() {
  // Translations
  const t = useTranslations("h-meal-section");

  return (
    <main className="bg-[url(/assets/images/workout-section-cover.webp)] h-full">
      {/* Section Head */}
      <div className="bg-[#ffffff]/60 dark:bg-[#24242499]/60 backdrop-blur-[5.375rem] pt-24 pb-36">
        <SectionTitle
          variant={"center"}
          className="from-[#FFFFFF]/20 via-[#FFFFFF]/10 -mb-6"
        >
          {t("title")}
        </SectionTitle>

        {/* Container  */}
        <div className="mx-auto px-4 container">
          <HealthySection />
        </div>
      </div>
    </main>
  );
}
