import { useTranslations } from "use-intl";

export default function NoDataFound() {
  // Translations
  const t = useTranslations("");

  return (
    <div className="w-full flex justify-center py-10">
      <h2 className="text-2xl font-bold text-gray-700">{t("no-data-found")}</h2>
    </div>
  );
}
