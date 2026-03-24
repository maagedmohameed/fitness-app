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
      <h2 className="mt-6 w-146 font-bold text-[2.5rem] uppercase leading-12">
        {t.rich("desc-1", {
          span: (chunck) => <span className="text-[#FF4100]">{chunck}</span>,
        })}
      </h2>
      <p className="mt-6 mb-16 w-146 text-lg">{t("desc-2")}</p>

      {/* Section List */}
      <ul className="space-y-8 w-full max-w-[38.9rem]">
        <li className="flex items-center gap-10">
          <div>
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-14 h-14">
              {locale === "en"
                ? "01"
                : format.number(1, {
                    numberingSystem: locale === "ar" ? "arab" : "latn",
                  })}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold capitalize">{t("li-1-title")}</h3>
            <p className="leading-relaxed">{t("li-1-desc")}</p>
          </div>
        </li>
        <li className="flex items-center gap-10">
          <div>
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-14 h-14">
              {locale === "en"
                ? "02"
                : format.number(2, {
                    numberingSystem: locale === "ar" ? "arab" : "latn",
                  })}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold capitalize">{t("li-2-title")}</h3>
            <p className="leading-relaxed">{t("li-2-desc")}</p>
          </div>
        </li>
        <li className="flex items-center gap-10">
          <div>
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-14 h-14">
              {locale === "en"
                ? "03"
                : format.number(3, {
                    numberingSystem: locale === "ar" ? "arab" : "latn",
                  })}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold capitalize">{t("li-3-title")}</h3>
            <p className="leading-relaxed">{t("li-3-desc")}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
