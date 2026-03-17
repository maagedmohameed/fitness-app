import type { TLanguageContextValue } from "@/lib/types/language";
import { createContext, useContext } from "react";

// LanguageContext
export const LanguageContext = createContext<TLanguageContextValue | undefined>(
  undefined,
);

// useLanguage
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within AppIntlProvider");
  }
  return context;
}
