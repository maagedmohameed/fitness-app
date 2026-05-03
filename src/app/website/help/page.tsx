import { useTranslations } from "use-intl";
import { SitePageLayout } from "../_components/site-page-layout";

export default function HelpPage() {
  const t = useTranslations("site-pages.help");

  return (
    <SitePageLayout>
      <header className="space-y-3">
        <h1 className="font-bold text-4xl sm:text-5xl tracking-tight">
          {t("title")}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{t("lead")}</p>
      </header>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("getting-started.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("getting-started.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("getting-started.p2")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("account.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("account.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("account.p2")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("classes.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("classes.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("classes.p2")}</p>
      </section>

    </SitePageLayout>
  );
}
