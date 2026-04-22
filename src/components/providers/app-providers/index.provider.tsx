import { type ReactNode } from "react";
import { AppIntlProvider } from "./use-Intl.provider";
import { ReactQueryProvider } from "./react-query-provider";
import { ThemeProvider } from "./theme-provider";
import ErrorBoundaryWrapper from "./error-boundary";
import LanguageContext from "./language-provider";
import { AuthProvider } from "./auth-provider";
import { Toaster } from "sonner";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    // ThemeProvider
    <ThemeProvider defaultTheme="light" storageKey="theme">
      {/* LanguageContext */}
      <LanguageContext>
        {/* AppIntlProvider */}
        <AppIntlProvider>
          {/* ErrorBoundaryWrapper (must be inside intl so ErrorPage can use translations) */}
          <ErrorBoundaryWrapper>
            {/* ReactQueryProvider */}
            <ReactQueryProvider>
              <Toaster richColors />
              {/* Auth provider */}
              <AuthProvider>{children}</AuthProvider>
            </ReactQueryProvider>
          </ErrorBoundaryWrapper>
        </AppIntlProvider>
      </LanguageContext>
    </ThemeProvider>
  );
}
