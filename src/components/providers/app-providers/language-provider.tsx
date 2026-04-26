import type { TLocale } from "@/lib/types/language";
import { useEffect, useState, type ReactNode } from "react";
import Cookies from "js-cookie";
import { LanguageContext } from "@/hooks/language.context";

export default function LanguageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocale] = useState<TLocale>(
    (Cookies.get("locale") as TLocale) || "en"
  );
  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  // toggleLocale
  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    setLocale(nextLocale);
    Cookies.set("locale", nextLocale, { expires: 365 });
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}
