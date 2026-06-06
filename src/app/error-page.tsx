import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCw } from "lucide-react";
import type { FallbackProps } from "react-error-boundary";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export function ErrorPage({ error, resetErrorBoundary }: FallbackProps) {
  const t = useTranslations("errorPage");
  const message = error instanceof Error ? error.message : t("message");

  return (
    <main className="flex flex-col justify-center items-center m-auto w-full h-dvh">
      {/* Content wrapper  */}
      <div className="flex flex-col justify-center items-center max-md:px-4 py-20 text-sm">
        {/* Heading error  */}
        <h1 className="bg-clip-text bg-linear-to-r from-black/50 dark:from-white to-gray-500 font-bold text-transparent text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <div className="bg-linear-to-r from-gray-400 to-gray-800 my-5 md:my-7 rounded w-80 h-px"></div>

        {/* Error message  */}
        <p className="max-w-lg text-gray-400 md:text-xl text-center">
          {message}
        </p>

        {/* Retry button  */}
        <Button
          onClick={resetErrorBoundary}
          className="group flex items-center gap-1 bg-white hover:bg-gray-200 mt-10 px-7 py-2.5 rounded-full font-medium text-gray-800 active:scale-95 transition-all"
        >
          {t("retry")}
          <RotateCw className="size-5 group-hover:rotate-180 transition" />
        </Button>

        {/* Back to home page button  */}
        <Link
          to="/"
          className="group flex items-center gap-1 bg-white hover:bg-gray-200 mt-10 px-7 py-2.5 rounded-full font-medium text-gray-800 active:scale-95 transition-all"
        >
          {t("back")}
          <ArrowRight
            className="size-[22px] transition group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </main>
  );
}
