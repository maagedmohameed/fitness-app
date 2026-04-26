import { type ReactNode } from "react";
import { AppIntlProvider } from "./use-Intl.provider";
import { ReactQueryProvider } from "./react-query-provider";
import LanguageContext from "./language-context";
import { ThemeProvider } from "./theme-provider";

import ErrorBoundaryWrapper from "./error-boundary";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    // ThemeProvider
    <ThemeProvider defaultTheme="light" storageKey="theme">
      {/* ErrorBoundaryWrapper */}
      <ErrorBoundaryWrapper>
          {/* LanguageContext */}
          <LanguageContext>
            {/* AppIntlProvider */}
            <AppIntlProvider>
              {/* ReactQueryProvider */}
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </AppIntlProvider>
          </LanguageContext>
      </ErrorBoundaryWrapper>
    </ThemeProvider>
  );
}
