import { useTranslations } from "use-intl";

type ErrorBoundaryFallbackProps = {
  error?: Error;
  onRetry?: () => void;
};

export default function ErrorBoundaryFallback({
  error,
}: ErrorBoundaryFallbackProps) {
  // Translations
  const t = useTranslations("errorPage");

  return (
    <main className="w-full flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-black/50 dark:from-white to-gray-500 bg-clip-text text-transparent text-center">
          {t("title")}
        </h1>

        <div className="h-px w-80 rounded bg-linear-to-r from-gray-400 to-gray-800 my-5 md:my-7" />

        <p className="md:text-xl text-gray-400 max-w-lg text-center">
          {error?.message || t("message")}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-transform duration-200"
        >
          {t("retry")}
        </button>
      </div>
    </main>
  );
}
