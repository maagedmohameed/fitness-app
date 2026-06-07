import OutlineButton from "@/components/shared/outline-button";
import SolidButton from "@/components/shared/solid-button";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="box-border relative flex items-end lg:items-stretch pt-16 lg:pt-20 w-full lg:h-dvh lg:max-h-dvh overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/images/fitness-hero-sec.webp"
        alt="hero-image"
        className="dark:hidden absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
      <img
        src="/assets/images/hero-dark-img.webp"
        alt="hero-image-dark"
        className="hidden dark:block absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Content */}
      <div className="z-10 relative flex lg:flex-row flex-col items-stretch gap-3 sm:gap-4 lg:gap-0 mx-auto px-4 sm:px-6 pb-6 lg:pb-8 w-full h-full min-h-0 container">
        {/* Image */}
        <div className="flex justify-center items-end order-2 lg:order-2 w-full lg:w-1/2 lg:h-full min-h-0 shrink-0">
          <img
            src="/assets/images/Theo.png"
            alt=""
            className="object-bottom object-contain"
          />
        </div>

        {/* Left Content */}
        <div className="flex flex-col justify-center gap-3 sm:gap-4 lg:gap-5 order-1 lg:order-1 pr-0 sm:pr-4 w-full lg:w-1/2 lg:h-full min-h-0 lg:overflow-visible overflow-y-auto">
          <h1 className="font-bold dark:text-[#F3F3F4] text-3xl sm:text-5xl lg:text-5xl xl:text-6xl uppercase leading-tight">
            {t.rich("title", {
              span: chunk => <span className="text-[#FF4100]">{chunk}</span>,
            })}
          </h1>

          <p className="ps-4 border-primary border-s-4 font-rubik font-normal text-foreground text-sm sm:text-base lg:text-lg">
            {t("description")}
          </p>

          <div className="flex sm:flex-row flex-col sm:justify-between gap-2">
            <div className="min-w-0 text-foreground">
              <h5 className="font-inter font-bold text-base sm:text-xl">
                {t("counters.members.value")}
              </h5>
              <p className="font-rubik font-normal text-xs sm:text-base lg:text-lg leading-snug">
                {t("counters.members.label")}
              </p>
            </div>
            <div className="min-w-0">
              <h5 className="font-inter font-bold text-base sm:text-xl">
                {t("counters.trainers.value")}
              </h5>
              <p className="font-rubik font-normal text-xs sm:text-base lg:text-lg leading-snug">
                {t("counters.trainers.label")}
              </p>
            </div>
            <div className="min-w-0">
              <h5 className="font-inter font-bold text-base sm:text-xl">
                {t("counters.experience.value")}
              </h5>
              <p className="font-rubik font-normal text-xs sm:text-base lg:text-lg leading-snug">
                {t("counters.experience.label")}
              </p>
            </div>
          </div>

          <div className="flex justify-between sm:gap-10 sm:w-fit">
            <Link to="/auth/register">
              <SolidButton className="justify-center px-6 md:px-10 w-full">
                {t("cta.get-started")}
              </SolidButton>
            </Link>
            <Link to="/about">
              <OutlineButton className="justify-center px-6 md:px-8 lg:px-10 w-full">
                {t("cta.explore-more")}
              </OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
