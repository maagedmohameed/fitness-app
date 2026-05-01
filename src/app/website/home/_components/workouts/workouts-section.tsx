import { cn } from "@/lib/utils/tailwind-merge";
import MusclesSection from "@/components/shared/muscles/muscles-section";
import { SectionTitle } from "@/components/ui/section-head";
import { useTranslations } from "use-intl";

export default function WorkoutsSection() {
  // Translations
  const t = useTranslations("workouts");

  return (
    <section className="bg-[url(/assets/images/workout-section-cover.webp)] bg-cover xl:h-192.5">
      {/* Section content  */}
      <div
        className={cn(
          "relative",
          "z-20 px-4 py-7",
          "before:absolute before:-z-10 before:top-14 before:left-0 before:w-full before:h-103.5 before:bg-white/60 dark:before:bg-[#24242499]/60 before:backdrop-blur-[5.375rem]"
        )}
      >
        {/* Section Head */}
        <SectionTitle
          variant={"center"}
          className="hidden md:block from-[#FFFFFF]/20 via-[#FFFFFF]/10 -mb-6"
        >
          {t("heading.section")}
        </SectionTitle>

        {/* Container  */}
        <div className="mx-auto container">
          <MusclesSection />
        </div>
      </div>
    </section>
  );
}
