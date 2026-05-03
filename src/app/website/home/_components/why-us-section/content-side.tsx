import { SectionSubTitle, SectionTitle } from "@/components/ui/section-head";
import { useFormatter, useLocale, useTranslations } from "use-intl";

export default function ContentSide() {
  // Translations
  const t = useTranslations("why-us-section");
  const format = useFormatter();
  const locale = useLocale();

  return (
    <div className="text-[#242424] dark:text-[#F3F3F4]">
      {/* Section Head */}
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubTitle>{t("title")}</SectionSubTitle>

      {/* Section Description */}
      <h2 className="mt-6 w-full max-w-146 font-bold text-3xl sm:text-4xl lg:text-[2.5rem] uppercase leading-tight lg:leading-12">
        {t.rich("desc-1", {
          span: (chunck) => <span className="text-[#FF4100]">{chunck}</span>,
        })}
      </h2>
      <p className="mt-6 mb-10 sm:mb-16 w-full max-w-146 text-base sm:text-lg">{t("desc-2")}</p>

      {/* Section List */}
      <ul className="space-y-6 sm:space-y-8 w-full max-w-[38.9rem]">
        <li className="flex items-center gap-4 sm:gap-10">
          <div className="shrink-0">
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-12 h-12 sm:w-14 sm:h-14">
              {locale === "en"
                ? "01"
                : format.number(1, {
                    numberingSystem: locale === "ar" ? "arab" : "latn",
                  })}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold capitalize">{t("li-1-title")}</h3>
            <p className="leading-relaxed text-sm sm:text-base">{t("li-1-desc")}</p>
          </div>
        </li>
        <li className="flex items-center gap-4 sm:gap-10">
          <div className="shrink-0">
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-12 h-12 sm:w-14 sm:h-14">
              {locale === "en"
                ? "02"
                : format.number(2, {
                    numberingSystem: locale === "ar" ? "arab" : "latn",
                  })}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold capitalize">{t("li-2-title")}</h3>
            <p className="leading-relaxed text-sm sm:text-base">{t("li-2-desc")}</p>
          </div>
        </li>
        <li className="flex items-center gap-4 sm:gap-10">
          <div className="shrink-0">
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-12 h-12 sm:w-14 sm:h-14">
              {locale === "en"
                ? "03"
                : format.number(3, {
                    numberingSystem: locale === "ar" ? "arab" : "latn",
                  })}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold capitalize">{t("li-3-title")}</h3>
            <p className="leading-relaxed text-sm sm:text-base">{t("li-3-desc")}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
