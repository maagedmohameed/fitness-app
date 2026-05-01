import MusclesSection from "@/components/shared/muscles/muscles-section";
import { SectionTitle } from "@/components/ui/section-head";
import { useTranslations } from "use-intl";

export default function ClassesPage() {
  // Translations
  const t = useTranslations("workouts");

  return (
    <main className="bg-[url(/assets/images/workout-section-cover.webp)] bg-cover">
      {/* Section Head */}
      <div className="bg-[#ffffff]/60 dark:bg-[#24242499] backdrop-blur-[5.375rem] py-12 sm:py-36">
        <SectionTitle
          variant={"center"}
          className="from-[#FFFFFF]/20 via-[#FFFFFF]/10 -mb-6"
        >
          {t("heading.section")}
        </SectionTitle>

        {/* Container  */}
        <div className="mx-auto container">
          <MusclesSection />
        </div>
      </div>
    </main>
  );
}
