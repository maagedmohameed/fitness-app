import { useTranslations } from "use-intl";
import { Link } from "react-router-dom";
import { SectionSubTitle, SectionTitle } from "../ui/section-head";
import SolidButton from "./solid-button";

export default function AboutUsSection() {
  // Translations
  const t = useTranslations("about-us-section");

  return (
    <section className="flex md:flex-row flex-col gap-8 md:gap-10 lg:gap-14 bg-[#F3F3F4] dark:bg-[#232424] px-4 sm:px-6 lg:px-20 py-16 sm:py-24 lg:py-36">
      {/* Images  */}
      <div className="w-full md:w-1/2">
        <div className="relative mx-auto w-full max-w-132 h-110 sm:h-140 lg:h-176">
          <img
            src="/assets/images/about-1.png"
            alt="image1"
            className="top-0 left-0 absolute rounded-3xl w-[58%] h-72 sm:h-96 lg:h-120 object-cover"
          />
          <img
            src="/assets/images/about-2.png"
            alt="image2"
            className="top-6 sm:top-8 right-0 absolute rounded-3xl w-[40%] h-32 sm:h-40 lg:h-48 object-cover"
          />
          <img
            src="/assets/images/about-3.png"
            alt="image3"
            className="top-44 sm:top-56 lg:top-64 right-0 absolute rounded-3xl w-[58%] h-66 sm:h-88 lg:h-112 object-cover"
          />
        </div>
      </div>

      {/* ContentSide */}
      <div className="w-full md:w-1/2 text-foreground">
        {/* Section Head */}
        <SectionTitle>{t("title")}</SectionTitle>
        <SectionSubTitle>{t("subtitle")}</SectionSubTitle>

        {/* Section Description */}
        <h2 className="mt-6 w-full max-w-146 font-bold lg:text-[2.5rem] text-2xl sm:text-3xl uppercase leading-9 sm:leading-11 lg:leading-12">
          {t.rich("heading", {
            span: chunck => <span className="text-[#FF4100]">{chunck}</span>,
          })}
        </h2>
        <p className="mt-6 mb-10 sm:mb-16 w-full max-w-146 font-rubik font-normal text-foreground text-base text-lg sm:text-lg">
          {t("desc")}
        </p>

        {/* Section List */}
        <ul className="flex sm:flex-row flex-col justify-between gap-4 sm:gap-0 pb-8 border-[#24242424] border-b w-full">
          <li className="flex flex-col gap-4 p-2 w-full sm:w-1/2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/orange-arrow.svg" alt="arrow" />
              <h3 className="font-bold capitalize">{t("li-1-title")}</h3>
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">{t("li-1-desc")}</p>
            </div>
          </li>
          <li className="flex flex-col gap-4 p-2 w-full sm:w-1/2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/orange-arrow.svg" alt="arrow" />
              <h3 className="font-bold capitalize">{t("li-2-title")}</h3>
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">{t("li-2-desc")}</p>
            </div>
          </li>
        </ul>

        <ul className="flex sm:flex-row flex-col justify-between gap-4 sm:gap-0 pt-8 w-full">
          <li className="flex flex-col gap-4 p-2 w-full sm:w-1/2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/orange-arrow.svg" alt="arrow" />
              <h3 className="font-bold capitalize">{t("li-3-title")}</h3>
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">{t("li-3-desc")}</p>
            </div>
          </li>
          <li className="flex flex-col gap-4 p-2 w-full sm:w-1/2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/orange-arrow.svg" alt="arrow" />
              <h3 className="font-bold capitalize">{t("li-4-title")}</h3>
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">{t("li-4-desc")}</p>
            </div>
          </li>
        </ul>

        {/* Section Button */}
        <div className="flex justify-start mt-8">
          <Link to="/auth/register">
            <SolidButton className="justify-center px-10 w-full sm:w-auto">
              {t("button")}
            </SolidButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
