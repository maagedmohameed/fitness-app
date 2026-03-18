import type { FallbackProps } from "react-error-boundary";
import { useTranslations } from "use-intl";

export function ErrorPage({ error, resetErrorBoundary }: FallbackProps) {
  const t = useTranslations("notfound");
  const message = error instanceof Error ? error.message : t("message");

  return (
    <div className="rounded-md border border-red-500 bg-red-50 p-6 text-red-600">
      <h1 className="mb-2 text-xl font-bold"> {t("title")}</h1>

      <p>{message}</p>

      <button
        onClick={resetErrorBoundary}
        className="mt-4 rounded-md border px-4 py-2"
      >
        {t("retry")}
      </button>
    </div>
  );
}
