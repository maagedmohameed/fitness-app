import { cn } from "@/lib/utils/tailwind-merge";
import MusclesGroups from "./muscles-groups";
import MuscleCardCarousel from "./muscle-card-carousel";
import { useMusclesGroups } from "@/hooks/workouts/use-muscles-groups";
import { useMusclesCarousel } from "@/hooks/workouts/use-muscles-carousel";
import { useSearchParams } from "react-router-dom";
import { useLocale, useTranslations } from "use-intl";

export default function WorkoutSection() {
  // Translations
  const t = useTranslations("workouts");
  const locale = useLocale();

  // Hooks
  const [searchParams] = useSearchParams();
  const { isPending, data } = useMusclesGroups(locale);
  const { isPending: isMusclesPending, data: payload } = useMusclesCarousel(
    locale,
    searchParams.get("musclesGroupId")
  );

  return (
    <section
      className={cn(
        "bg-[url(/assets/images/workout-section-cover.webp)] bg-cover xl:h-192.5"
      )}
    >
      {/* Section content  */}
      <div
        className={cn(
          "relative",
          "z-20",
          "before:absolute before:-z-10 before:top-14 before:left-0 before:w-full before:h-103.5 before:bg-white/60 dark:before:bg-[#24242499]/60 before:backdrop-blur-[5.375rem]"
        )}
      >
        {/* Container  */}
        <div className="flex flex-col items-center gap-8 mx-auto container">
          {/* Remaining reusable component   */}
          <div className="bg-black w-80 h-20"></div>

          {/* Heading  */}
          <div className="max-w-159.25 font-bold dark:text-[#F3F3F4] text-4xl sm:text-center uppercase">
            {t.rich("title", {
              span: chunk => <span className="text-[#FF4100]">{chunk}</span>,
            })}
          </div>

          {/* Muscles Groups  */}
          <MusclesGroups
            musclesGroup={data?.musclesGroup}
            isPending={isPending}
          />

          {/* Muscles carousel  */}
          <MuscleCardCarousel
            isPending={isMusclesPending}
            muscles={payload?.muscles}
          />
        </div>
      </div>
    </section>
  );
}
