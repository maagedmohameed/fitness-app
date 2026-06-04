import OutlineButton from "@/components/shared/outline-button";
import SolidButton from "@/components/shared/solid-button";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="relative box-border flex w-full overflow-hidden pt-16 lg:pt-20 lg:h-dvh lg:max-h-dvh items-end lg:items-stretch">
      {/* Background Image */}
      <img
        src="/assets/images/fitness-hero-sec.webp"
        alt="hero-image"
        className="absolute inset-0 h-full w-full object-cover dark:hidden"
        loading="eager"
        decoding="async"
      />
      <img
        src="/assets/images/hero-dark-img.webp"
        alt="hero-image-dark"
        className="absolute inset-0 hidden h-full w-full object-cover dark:block"
        loading="eager"
        decoding="async"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex h-full min-h-0 w-full flex-col lg:flex-row items-stretch gap-3 sm:gap-4 lg:gap-0 px-4 sm:px-6 pb-6 lg:pb-8">
        {/* Image */}
        <div className="image order-2 lg:order-2 flex min-h-0 w-full shrink-0 lg:w-1/2 lg:h-full items-end justify-center">
          <img
            src="/assets/images/Theo.png"
            alt=""
            className="max-h-[28vh] sm:max-h-[34vh] lg:max-h-full lg:h-full w-full max-w-sm lg:max-w-none object-contain object-bottom"
          />
        </div>

        {/* Left Content */}
        <div className="order-1 lg:order-1 flex min-h-0 w-full lg:w-1/2 lg:h-full flex-col justify-center gap-3 sm:gap-4 lg:gap-5 pr-0 sm:pr-4 overflow-y-auto lg:overflow-visible">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold uppercase dark:text-[#F3F3F4] leading-tight">
            {t.rich("title", {
              span: (chunk) => <span className="text-[#FF4100]">{chunk}</span>,
            })}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-normal text-black dark:text-white border-s-4 border-primary ps-4">
            {t("description")}
          </p>

          <div className="counter grid grid-cols-3 gap-2 sm:gap-4 max-w-md lg:max-w-none">
            <div className="min-w-0">
              <h5 className="text-base sm:text-xl font-bold">
                {t("counters.members.value")}
              </h5>
              <p className="text-xs sm:text-base lg:text-lg font-normal text-black dark:text-white leading-snug">
                {t("counters.members.label")}
              </p>
            </div>
            <div className="min-w-0">
              <h5 className="text-base sm:text-xl font-bold">
                {t("counters.trainers.value")}
              </h5>
              <p className="text-xs sm:text-base lg:text-lg font-normal text-black dark:text-white leading-snug">
                {t("counters.trainers.label")}
              </p>
            </div>
            <div className="min-w-0">
              <h5 className="text-base sm:text-xl font-bold">
                {t("counters.experience.value")}
              </h5>
              <p className="text-xs sm:text-base lg:text-lg font-normal text-black dark:text-white leading-snug">
                {t("counters.experience.label")}
              </p>
            </div>
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 shrink-0">
            <SolidButton className="w-full justify-center px-6 md:px-10">
              <Link to="/auth/register">{t("cta.get-started")}</Link>
            </SolidButton>
            <OutlineButton className="w-full justify-center px-6 md:px-8 lg:px-10">
              <Link to="/about">{t("cta.explore-more")}</Link>
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
}
