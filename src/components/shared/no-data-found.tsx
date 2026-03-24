import { useTranslations } from "use-intl";

export default function NoDataFound() {
  // Translations
  const t = useTranslations("");

  return (
    <div className="flex justify-center py-10 w-full">
      <h2 className="font-bold text-gray-700 text-2xl">{t("no-data-found")}</h2>
    </div>
  );
}
