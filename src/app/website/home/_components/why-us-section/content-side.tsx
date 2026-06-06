import { SectionSubTitle, SectionTitle } from "@/components/ui/section-head";
import { useFormatter, useLocale, useTranslations } from "use-intl";

export default function ContentSide() {
  const t = useTranslations("why-us-section");
  const format = useFormatter();
  const locale = useLocale();

  return (
    <div className="text-[#242424] dark:text-[#F3F3F4]">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubTitle>{t("title")}</SectionSubTitle>

      <h2 className="mt-6 w-full max-w-146 font-bold lg:text-[2.5rem] text-3xl sm:text-4xl uppercase leading-tight lg:leading-12">
        {t.rich("desc-1", {
          span: chunck => <span className="text-[#FF4100]">{chunck}</span>,
        })}
      </h2>
      <p className="mt-6 mb-10 sm:mb-16 w-full max-w-146 text-base sm:text-lg">
        {t("desc-2")}
      </p>

      <ul className="space-y-6 sm:space-y-8 w-full max-w-[38.9rem]">
        {([1, 2, 3] as const).map(n => (
          <li key={n} className="flex items-center gap-4 sm:gap-10">
            <div className="shrink-0">
              <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-12 sm:w-14 h-12 sm:h-14 font-bold text-sm sm:text-base">
                {locale === "en"
                  ? `0${n}`
                  : format.number(n, {
                      numberingSystem: locale === "ar" ? "arab" : "latn",
                    })}
              </span>
            </div>
            <div className="space-y-2 min-w-0">
              <h3 className="font-bold capitalize">{t(`li-${n}-title`)}</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                {t(`li-${n}-desc`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
