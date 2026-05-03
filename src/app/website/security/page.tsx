import { useTranslations } from "use-intl";
import { SitePageLayout } from "../_components/site-page-layout";

export default function SecurityPage() {
  const t = useTranslations("site-pages.security");

  return (
    <SitePageLayout>
      <header className="space-y-3">
        <h1 className="font-bold text-4xl sm:text-5xl tracking-tight">
          {t("title")}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{t("lead")}</p>
      </header>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("passwords.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("passwords.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("passwords.p2")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("passwords.p3")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("sessions.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("sessions.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("sessions.p2")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("transport.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("transport.p1")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("report.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("report.p1")}</p>
      </section>
    </SitePageLayout>
  );
}
