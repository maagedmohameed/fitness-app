import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslations } from "use-intl";
import { cn } from "@/lib/utils/tailwind-merge";
import { useLanguage } from "@/hooks/language.context";
import type { TLocale } from "@/lib/types/language";

export default function LanguageSwitcher() {
  const t = useTranslations("header.language");
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("pointerdown", handlePointerDown);
    }
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const pick = (next: TLocale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={cn(
          "flex justify-center items-center rounded-full border border-black/10 dark:border-white/15 size-10 sm:size-11",
          "text-black dark:text-white bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors"
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("aria")}
      >
        <Globe className="size-5 sm:size-[1.35rem]" strokeWidth={1.75} />
      </button>

      {open ? (
        <div
          className="absolute inset-e-0 z-60 mt-2 min-w-42 overflow-hidden rounded-xl border border-black/10 bg-white py-1 shadow-lg dark:border-white/15 dark:bg-zinc-900"
          role="listbox"
          aria-label={t("aria")}
        >
          <button
            type="button"
            role="option"
            aria-selected={locale === "en"}
            onClick={() => pick("en")}
            className={cn(
              "flex w-full items-center px-4 py-2.5 text-start text-sm font-semibold transition-colors",
              locale === "en"
                ? "bg-primary/10 text-primary"
                : "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
            )}
          >
            {t("en")}
          </button>
          <button
            type="button"
            role="option"
            aria-selected={locale === "ar"}
            onClick={() => pick("ar")}
            className={cn(
              "flex w-full items-center px-4 py-2.5 text-start text-sm font-semibold transition-colors",
              locale === "ar"
                ? "bg-primary/10 text-primary"
                : "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
            )}
          >
            {t("ar")}
          </button>
        </div>
      ) : null}
    </div>
  );
}
