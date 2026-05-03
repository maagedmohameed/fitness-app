import OutlineButton from "@/components/shared/outline-button";
import SolidButton from "@/components/shared/solid-button";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function HeroSection() {

  // Translations
  const t = useTranslations("hero");

  return (
    <div className="relative flex min-h-dvh w-full items-end sm:items-stretch pt-16 sm:pt-20">
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
      <div className="relative z-10 container mx-auto flex flex-wrap min-h-0 w-full flex-col lg:flex-row items-stretch gap-6 lg:gap-0 px-4 sm:px-6 pb-8 sm:pb-10">
        {/* Image */}
        <div className="image order-1 sm:flex mt-6 lg:order-2 lg:mt-0 h-full min-h-0 lg:w-1/2 w-full items-end justify-center">
          <img
            src="/assets/images/Theo.png"
            alt=""
            className="max-h-[50vh] sm:max-h-[60vh] lg:max-h-full w-full object-contain object-bottom"
          />
        </div>

        {/* Left Content */}
        <div className="flex h-full min-h-0 lg:w-1/2 w-full flex-col justify-center gap-6 pr-2 sm:pr-4">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase dark:text-[#F3F3F4] leading-tight">
            {t.rich("title", {
              span: (chunk) => <span className="text-[#FF4100]">{chunk}</span>,
            })}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg font-normal text-black dark:text-white border-s-4 border-primary ps-4">
            {t("description")}
          </p>

          {/* Counters */}
          <div className="counter mt-7 flex justify-between gap-4">
            <div className="flex-col">
              <h5 className="text-xl font-bold">
                {t("counters.members.value")}
              </h5>
              <p className="text-sm sm:text-base lg:text-lg font-normal text-black dark:text-white">
                {t("counters.members.label")}
              </p>
            </div>
            <div className="counter-item flex-col">
              <h5 className="text-lg sm:text-xl font-bold">
                {t("counters.trainers.value")}
              </h5>
              <p className="text-sm sm:text-base lg:text-lg font-normal text-black dark:text-white">
                {t("counters.trainers.label")}
              </p>
            </div>
            <div className="counter-item flex-col">
              <h5 className="text-lg sm:text-xl font-bold">
                {t("counters.experience.value")}
              </h5>
              <p className="text-sm sm:text-base lg:text-lg font-normal text-black dark:text-white">
                {t("counters.experience.label")}
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-3 sm:gap-8">
            <div className="flex w-full sm:w-auto">
            <SolidButton className="px-10">
              <Link to="/auth/register">{t("cta.get-started")}</Link>
            </SolidButton>
            </div>
            <div className="flex w-full sm:w-auto">
            <OutlineButton className="px-8 sm:px-10">
              <Link to="/about">{t("cta.explore-more")}</Link>
            </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
