export type TLocale = "en" | "ar";

export type TLanguageContextValue = {
  locale: TLocale;
  toggleLocale: () => void;
};
