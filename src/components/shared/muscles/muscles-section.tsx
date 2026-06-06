import MusclesGroups from "./muscles-groups";
import { useMusclesGroups } from "@/hooks/workouts/use-muscles-groups";
import { useMusclesCarousel } from "@/hooks/workouts/use-muscles-carousel";
import { useLocation, useSearchParams } from "react-router-dom";
import { useLocale, useTranslations } from "use-intl";
import { SectionSubTitle } from "@/components/ui/section-head";
import MusclesCarousel from "./muscles-carousel";
import ClassesCarousel from "../classes/classes-carousel";
import { ErrorPage } from "@/app/error-page";

export default function MusclesSection() {
  // Translations
  const t = useTranslations("workouts");
  const locale = useLocale();

  // Hooks
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { isPending, data, error, refetch } = useMusclesGroups(locale);
  const { isPending: isMusclesPending, data: payload } = useMusclesCarousel(
    locale,
    searchParams.get("musclesGroupId"),
  );

  if (error)
    return <ErrorPage error={error} resetErrorBoundary={() => refetch()} />;

  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8 px-1 sm:px-0 w-full">
      {/* SubTitle */}
      <SectionSubTitle className="md:justify-center">
        {t("heading.class")}
      </SectionSubTitle>

      {/* Heading  */}
      <div className="px-2 w-full max-w-159.25 font-bold dark:text-[#F3F3F4] text-2xl sm:text-3xl lg:text-4xl text-center uppercase leading-tight">
        {t.rich("title", {
          span: chunk => <span className="text-[#FF4100]">{chunk}</span>,
        })}
      </div>

      {/* Muscles Groups  */}
      <MusclesGroups musclesGroup={data?.musclesGroup} isPending={isPending} />

      {/* Muscles carousel  */}
      {location.pathname !== "/" ? (
        <ClassesCarousel
          isPending={isMusclesPending}
          muscles={payload?.muscles}
        />
      ) : (
        <MusclesCarousel
          isPending={isMusclesPending}
          muscles={payload?.muscles}
        />
      )}
    </section>
  );
}
