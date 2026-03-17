import { ErrorPage } from "@/app/error-page";
import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function ErrorBoundaryWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
