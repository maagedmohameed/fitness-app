import { type ReactNode } from "react";
import { IntlProvider } from "use-intl";
import en from "@/i18n/messages/en.json";
import ar from "@/i18n/messages/ar.json";
import { useLanguage } from "@/hooks/language.context";
import { Button } from "../../ui/button";

const messages = { en, ar };

export function AppIntlProvider({ children }: { children: ReactNode }) {
  const { locale, toggleLocale } = useLanguage();
  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      {children}
      <Button onClick={toggleLocale}>
        {locale === "en" ? "عربي" : "English"}
      </Button>
    </IntlProvider>
  );
}
