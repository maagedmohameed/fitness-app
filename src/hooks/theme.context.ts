import type { TThemeProviderState } from "@/lib/types/them";
import { createContext, useContext } from "react";

// initialState
const initialState: TThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

// ThemeProviderContext
export const ThemeProviderContext =
  createContext<TThemeProviderState>(initialState);

// useTheme
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
