import { cn } from "@/lib/utils/tailwind-merge";
import MusclesSection from "@/components/shared/muscles/muscles-section";
import { SectionTitle } from "@/components/ui/section-head";
import { useTranslations } from "use-intl";

export default function WorkoutsSection() {
  const t = useTranslations("workouts");

  return (
    <section className="bg-[url(/assets/images/workout-section-cover.webp)] bg-cover bg-center">
      <div
        className={cn(
          "relative z-20 px-4 sm:px-6 py-8 sm:py-12 pt-20 sm:pt-24 pb-10",
          "before:absolute before:-z-10 before:top-12 sm:before:top-14 before:left-0 before:right-0 before:bottom-0 before:bg-white/60 dark:before:bg-[#24242499]/60 before:backdrop-blur-[5.375rem]"
        )}
      >
        <SectionTitle
          variant={"center"}
          className="from-[#FFFFFF]/20 via-[#FFFFFF]/10 -mb-4 sm:-mb-6"
        >
          {t("heading.section")}
        </SectionTitle>

        <div className="mx-auto w-full max-w-full overflow-x-hidden container">
          <MusclesSection />
        </div>
      </div>
    </section>
  );
}
