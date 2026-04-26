import { type ReactNode } from "react";
import { AppIntlProvider } from "./use-Intl.provider";
import { ReactQueryProvider } from "./react-query-provider";
import { ThemeProvider } from "./theme-provider";
import ErrorBoundaryWrapper from "./error-boundary";
import LanguageContext from "./language-provider";
import { AuthProvider } from "./auth-provider";

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
            <ReactQueryProvider>
              {/* Auth provider */}
              <AuthProvider>{children}</AuthProvider>;
            </ReactQueryProvider>
          </AppIntlProvider>
        </LanguageContext>
      </ErrorBoundaryWrapper>
    </ThemeProvider>
  );
}
