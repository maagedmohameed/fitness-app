import type { TLocale } from "@/lib/types/language";
import { useEffect, useState, type ReactNode } from "react";
import Cookies from "js-cookie";
import { LanguageContext } from "@/hooks/language.context";

export default function LanguageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<TLocale>(
    (Cookies.get("locale") as TLocale) || "en"
  );
  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  const setLocale = (next: TLocale) => {
    setLocaleState(next);
    Cookies.set("locale", next, { expires: 365 });
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, setLocale, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}
