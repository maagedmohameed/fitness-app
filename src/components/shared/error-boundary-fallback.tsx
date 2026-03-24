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
    <main className="flex flex-col justify-center items-center m-auto w-full">
      <div className="flex flex-col justify-center items-center max-md:px-4 py-20 text-sm">
        <h1 className="bg-clip-text bg-linear-to-r from-black/50 dark:from-white to-gray-500 font-bold text-transparent text-4xl md:text-5xl text-center">
          {t("title")}
        </h1>

        <div className="bg-linear-to-r from-gray-400 to-gray-800 my-5 md:my-7 rounded w-80 h-px" />

        <p className="max-w-lg text-gray-400 md:text-xl text-center">
          {error?.message || t("message")}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="group flex items-center gap-1 bg-white hover:bg-gray-200 mt-10 px-7 py-2.5 rounded-full font-medium text-gray-800 active:scale-95 transition-transform duration-200"
        >
          {t("retry")}
        </button>
      </div>
    </main>
  );
}
