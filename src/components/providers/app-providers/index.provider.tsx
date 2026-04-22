import { type ReactNode } from "react";
import { AppIntlProvider } from "./use-Intl.provider";
import { ReactQueryProvider } from "./react-query-provider";
import LanguageContext from "./language-context";
import { ThemeProvider } from "./theme-provider";
import { BrowserRouter, Routes } from "react-router-dom";
import ErrorBoundaryWrapper from "./error-boundary";
import { Toaster } from "sonner";

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
                <Toaster richColors />
                <Routes>{children}</Routes>
              </ReactQueryProvider>
            </AppIntlProvider>
          </LanguageContext>
        </BrowserRouter>
      </ErrorBoundaryWrapper>
    </ThemeProvider>
  );
}
