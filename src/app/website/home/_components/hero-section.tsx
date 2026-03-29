import OutlineButton from "@/components/shared/outline-button";
import SolidButton from "@/components/shared/solid-button";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function HeroSection() {

  // Translations
  const t = useTranslations("hero");

  return (
    <div className="relative flex h-dvh w-full items-end">
      {/* Background Image */}
      <img
        src="/assets/images/fitness-hero-sec.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-wrap h-[80%] min-h-0 w-full flex-row items-stretch">
        {/* Left Content */}
        <div className="content flex h-full min-h-0 lg:w-1/2 w-full flex-col justify-center gap-6 pr-2 sm:pr-4">
          {/* Heading */}
          <h1 className="text-6xl font-bold uppercase dark:text-[#F3F3F4]">
            {t.rich("title", {
              span: (chunk) => <span className="text-[#FF4100]">{chunk}</span>,
            })}
          </h1>

          {/* Description */}
          <p className="text-lg font-normal text-black dark:text-white border-s-4 border-primary ps-4">
            {t("description")}
          </p>

          {/* Counters */}
          <div className="counter mt-7 flex justify-between gap-4">
            <div className="counter-item flex-col">
              <h5 className="text-xl font-bold">
                {t("counters.members.value")}
              </h5>
              <p className="text-lg font-normal text-black dark:text-white">
                {t("counters.members.label")}
              </p>
            </div>
            <div className="counter-item flex-col">
              <h5 className="text-xl font-bold">
                {t("counters.trainers.value")}
              </h5>
              <p className="text-lg font-normal text-black dark:text-white">
                {t("counters.trainers.label")}
              </p>
            </div>
            <div className="counter-item flex-col">
              <h5 className="text-xl font-bold">
                {t("counters.experience.value")}
              </h5>
              <p className="text-lg font-normal text-black dark:text-white">
                {t("counters.experience.label")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <SolidButton className="px-10">
              <Link to="/register">{t("cta.get-started")}</Link>
            </SolidButton>
            <OutlineButton className="px-10">
              <Link to="/about">{t("cta.explore-more")}</Link>
            </OutlineButton>
          </div>
        </div>

        {/* Image */}
        <div className="image flex h-full min-h-0 lg:w-1/2 w-full items-end justify-center">
          <img
            src="/assets/images/Theo.png"
            alt=""
            className="max-h-full w-full object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
