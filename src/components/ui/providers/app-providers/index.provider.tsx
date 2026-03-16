import { type ReactNode } from "react";
import { AppIntlProvider } from "./use-Intl.provider";
import { ReactQueryProvider } from "./react-query-provider";
import LanguageContext from "./language-context";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext>
      <AppIntlProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </AppIntlProvider>
    </LanguageContext>
  );
}
