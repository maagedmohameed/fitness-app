import { useTranslations } from "use-intl";
import { Link } from "react-router-dom";
import { SectionSubTitle, SectionTitle } from "../ui/section-head";
import SolidButton from "./solid-button";

export default function AboutUsSection() {
  // Translations
  const t = useTranslations("about-us-section");

  return (
    <section className="flex flex-col gap-8 md:flex-row md:gap-10 lg:gap-14 bg-[#F3F3F4] dark:bg-[#232424] px-4 sm:px-6 lg:px-20 py-16 sm:py-24 lg:py-36">
      {/* Images  */}
      <div className="w-full md:w-1/2">
        <div className="relative mx-auto h-110 sm:h-140 lg:h-176 w-full max-w-132">
          <img
            src="/assets/images/about-1.png"
            alt="image1"
            className="absolute left-0 top-0 h-72 sm:h-96 lg:h-120 w-[58%] rounded-3xl object-cover"
          />
          <img
            src="/assets/images/about-2.png"
            alt="image2"
            className="absolute right-0 top-6 sm:top-8 h-32 sm:h-40 lg:h-48 w-[40%] rounded-3xl object-cover"
          />
          <img
            src="/assets/images/about-3.png"
            alt="image3"
            className="absolute right-0 top-44 sm:top-56 lg:top-64 h-66 sm:h-88 lg:h-112 w-[58%] rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* ContentSide */}
      <div className="w-full md:w-1/2 text-[#242424] dark:text-[#F3F3F4]">
        {/* Section Head */}
        <SectionTitle>{t("title")}</SectionTitle>
        <SectionSubTitle>{t("subtitle")}</SectionSubTitle>

        {/* Section Description */}
        <h2 className="mt-6 w-full max-w-146 font-bold text-2xl sm:text-3xl lg:text-[2.5rem] uppercase leading-9 sm:leading-11 lg:leading-12">
          {t.rich("heading", {
            span: (chunck) => <span className="text-[#FF4100]">{chunck}</span>,
          })}
        </h2>
        <p className="mt-6 mb-10 sm:mb-16 w-full max-w-146 text-base sm:text-lg">{t("desc")}</p>

        {/* Section List */}
        <ul className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 border-b border-[#24242424] pb-8">
          <li className="flex flex-col gap-4 w-full sm:w-1/2 p-2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/orange-arrow.svg" alt="arrow" />
              <h3 className="font-bold capitalize">{t("li-1-title")}</h3>
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">{t("li-1-desc")}</p>
            </div>
          </li>
          <li className="flex flex-col gap-4 w-full sm:w-1/2 p-2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/orange-arrow.svg" alt="arrow" />
              <h3 className="font-bold capitalize">{t("li-2-title")}</h3>
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">{t("li-2-desc")}</p>
            </div>
          </li>
        </ul>

        <ul className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 pt-8">
          <li className="flex flex-col gap-4 w-full sm:w-1/2 p-2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/orange-arrow.svg" alt="arrow" />
              <h3 className="font-bold capitalize">{t("li-3-title")}</h3>
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">{t("li-3-desc")}</p>
            </div>
          </li>
          <li className="flex flex-col gap-4 w-full sm:w-1/2 p-2">
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
          <SolidButton className="w-full sm:w-auto justify-center px-10">
            <Link to="/auth/register">{t("button")}</Link>
          </SolidButton>
        </div>
      </div>
    </section>
  );
}
