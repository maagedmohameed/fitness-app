import type { TLocale } from "@/lib/types/language";
import { useState, type ReactNode } from "react";
import Cookies from "js-cookie";
import { LanguageContext } from "@/hooks/language.context";

export default function LanguageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocale] = useState<TLocale>(
    (Cookies.get("locale") as TLocale) || "en",
  );

  // toggleLocale
  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    setLocale(nextLocale);
    Cookies.set("locale", nextLocale, { expires: 365 });
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
