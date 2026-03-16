import { useTranslations } from "use-intl";

export default function HomePage() {
  const t = useTranslations("App");

  return (
    <div>
      <h1 >{t("hello", { name: "Ali" })}</h1>
      <p className="font-inter">{t("welcome")}</p>
    </div>
  );
}
