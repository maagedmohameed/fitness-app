export type TTheme = "dark" | "light" | "system";

export type TThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type TThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
