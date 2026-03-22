import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function NotFound() {
  const t = useTranslations("notfound");
  return (
    <main className="flex flex-col justify-center items-center m-auto w-full h-dvh">
      <div className="flex flex-col justify-center items-center max-md:px-4 py-20 text-sm">
        <h1 className="bg-clip-text bg-linear-to-r from-black/50 dark:from-white to-gray-500 font-bold text-transparent text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <div className="bg-linear-to-r from-gray-400 to-gray-800 my-5 md:my-7 rounded w-80 h-px"></div>
        <p className="max-w-lg text-gray-400 md:text-xl text-center">{t("desc")}</p>
        <Link
          to="/"
          className="group flex items-center gap-1 bg-white hover:bg-gray-200 mt-10 px-7 py-2.5 rounded-full font-medium text-gray-800 active:scale-95 transition-all">
          {t("back")}
          <svg
            className="transition group-hover:translate-x-0.5"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
              stroke="#1E1E1E"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
