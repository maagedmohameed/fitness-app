import {
  Globe,
  LifeBuoy,
  LogOut,
  RefreshCcw,
  Shield,
  ShieldAlert,
  SunMoon,
} from "lucide-react";
import UserSettingCard from "./user-setting-card";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/theme.context";
import { useTranslations } from "use-intl";
import { useLanguage } from "@/hooks/language.context";
import { useAuth } from "@/hooks/auth-context";
import { OpenChangePasswordModalButton } from "./open-change-password-modal-button";

export default function UserSettings() {
  // Translations
  const t = useTranslations("profile.user-settings");

  // Hooks
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLanguage();
  const { signOut } = useAuth();

  // Variables
  const settings = [
    {
      children: <OpenChangePasswordModalButton />,
      icon: RefreshCcw,
    },
    {
      children: (
        <button type="button" className="capitalize" onClick={toggleLocale}>
          {t("select-language.title")} (
          <span className="text-primary">
            {t(`select-language.languages.${locale}`)}
          </span>
          )
        </button>
      ),
      icon: Globe,
    },
    {
      children: (
        <>
          <span className="capitalize">
            {t("select-mood.title")} (
            <label htmlFor="theme-mode" className="text-primary">
              {t(`select-mood.moods.${theme}`)}
            </label>
            )
          </span>
          <Switch
            dir="ltr"
            checked={theme === "dark"}
            onCheckedChange={checked => setTheme(checked ? "dark" : "light")}
            id="theme-mode"
          />
        </>
      ),
      icon: SunMoon,
    },
    { children: <Link to={"/security"}>{t("security")}</Link>, icon: Shield },
    {
      children: <Link to={"/privacy-policy"}>{t("privacy-policy")}</Link>,
      icon: ShieldAlert,
    },
    { children: <Link to={"/help"}>{t("help")}</Link>, icon: LifeBuoy },
    {
      children: (
        <button
          type="button"
          className="text-primary capitalize"
          onClick={signOut}
        >
          {t("logout.title")}
        </button>
      ),
      icon: LogOut,
    },
  ];

  return (
    <section className="gap-10 grid grid-cols-2 md:grid-cols-3 mx-auto w-fit">
      {settings.map(({ children, icon }, idx) => (
        <UserSettingCard key={idx} Icon={icon}>
          {children}
        </UserSettingCard>
      ))}
    </section>
  );
}
