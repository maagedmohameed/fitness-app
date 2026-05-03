import { useTranslations } from "use-intl";
import { SitePageLayout } from "../_components/site-page-layout";

export default function PrivacyPolicyPage() {
  const t = useTranslations("site-pages.privacy");

  return (
    <SitePageLayout>
      <header className="space-y-3">
        <h1 className="font-bold text-4xl sm:text-5xl tracking-tight">
          {t("title")}
        </h1>
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          {t("last-updated")}
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">{t("intro")}</p>
      </header>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("collect.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("collect.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("collect.p2")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("collect.p3")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("use.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("use.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("use.p2")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("use.p3")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("sharing.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("sharing.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("sharing.p2")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("sharing.p3")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("rights.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("rights.p1")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("rights.p2")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("rights.p3")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">{t("contact.title")}</h2>
        <p className="text-muted-foreground leading-relaxed">{t("contact.p1")}</p>
      </section>
    </SitePageLayout>
  );
}
