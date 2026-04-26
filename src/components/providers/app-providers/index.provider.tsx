import { type ReactNode } from "react";
import { AppIntlProvider } from "./use-Intl.provider";
import { ReactQueryProvider } from "./react-query-provider";
import LanguageContext from "./language-provider";
import { ThemeProvider } from "./theme-provider";

import ErrorBoundaryWrapper from "./error-boundary";
import { AuthProvider } from "./auth-provider";
import { BrowserRouter, Routes } from "react-router-dom";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    // ThemeProvider
    <ThemeProvider defaultTheme="light" storageKey="theme">
      {/* ErrorBoundaryWrapper */}
      <ErrorBoundaryWrapper>
        {/* BrowserRouter */}
        <BrowserRouter>
          {/* LanguageContext */}
          <LanguageContext>
            {/* AppIntlProvider */}
            <AppIntlProvider>
              {/* ReactQueryProvider */}
              <ReactQueryProvider>
                {/* Auth provider */}
                <AuthProvider>
                  <Routes>{children}</Routes>
                </AuthProvider>
              </ReactQueryProvider>
            </AppIntlProvider>
          </LanguageContext>
        </BrowserRouter>
      </ErrorBoundaryWrapper>
    </ThemeProvider>
  );
}
