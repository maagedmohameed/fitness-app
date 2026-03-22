import type { FallbackProps } from "react-error-boundary";
import { useTranslations } from "use-intl";

export function ErrorPage({ error, resetErrorBoundary }: FallbackProps) {
  const t = useTranslations("notfound");
  const message = error instanceof Error ? error.message : t("message");

  return (
    <div className="bg-red-50 p-6 border border-red-500 rounded-md text-red-600">
      <h1 className="mb-2 font-bold text-xl"> {t("title")}</h1>

      <p>{message}</p>

      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 border rounded-md"
      >
        {t("retry")}
      </button>
    </div>
  );
}
