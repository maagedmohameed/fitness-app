import { useTranslations } from "use-intl";

export type TSearchParams = Record<string, string | string[] | undefined>;

export type Translation = Awaited<ReturnType<typeof useTranslations>>;
