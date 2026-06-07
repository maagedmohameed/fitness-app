import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Link } from "react-router-dom";
import SolidButton from "@/components/shared/solid-button";
import OutlineButton from "@/components/shared/outline-button";
import { Menu, X } from "lucide-react";
import { useTranslations } from "use-intl";
import { isLoggedIn } from "@/lib/utils/cookie";
import { useLanguage } from "@/hooks/language.context";
import { Button } from "@/components/ui/button";

const HEADER_LINKS = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "classes",
    href: "/classes",
  },
  {
    label: "healthy",
    href: "/healthy",
  },
];

export default function Header() {
  // Transilations
  const t = useTranslations("header");

  // States
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hooks
  const { locale, toggleLocale } = useLanguage();

  // Functions
  const loggedIn = isLoggedIn();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "top-0 right-0 left-0 z-50 fixed py-2 transition-colors duration-300",
        scrolled ? "bg-white dark:bg-black" : "bg-transparent",
      )}
    >
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 container">
        {/* logo */}
        <div className="logo">
          <Link to="/" aria-label="Go to home page">
            <img
              src="/assets/images/fit 1.svg"
              alt="logo"
              className="w-20 sm:w-24"
            />
          </Link>
        </div>

        {/* navigations (desktop) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-6">
            {HEADER_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="font-semibold text-foreground text-base lg:text-lg"
                >
                  {t(`links.${link.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* buttons (desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {!loggedIn && (
            <>
              <SolidButton>
                <Link to="/auth/login">{t("buttons.login")}</Link>
              </SolidButton>
              <OutlineButton>
                <Link to="/auth/register">{t("buttons.signup")}</Link>
              </OutlineButton>
            </>
          )}

          <Button
            className="font-semibold text-[#f3f3f4] text-base lg:text-lg capitalize"
            onClick={toggleLocale}
          >
            {t(`buttons.language.${locale}`)}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-black dark:text-white"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile menu backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "md:hidden z-40 fixed inset-0 bg-black/50 transition-opacity duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* Mobile off-canvas menu */}
      <aside
        className={cn(
          "md:hidden top-0 left-0 z-50 fixed bg-white dark:bg-black p-5 border-black/10 dark:border-white/10 border-r w-[82%] max-w-xs h-dvh transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <img src="/assets/images/fit 1.svg" alt="logo" className="w-20" />
          <button
            type="button"
            className="p-2 text-black dark:text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="size-6" />
          </button>

          <Button
            className="font-semibold text-[#f3f3f4] text-base lg:text-lg capitalize"
            onClick={toggleLocale}
          >
            {t(`buttons.language.${locale}`)}
          </Button>
        </div>

        <ul className="flex flex-col gap-3">
          {HEADER_LINKS.map(link => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="block font-semibold text-black dark:text-white text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`links.${link.label}`)}
              </Link>
            </li>
          ))}
        </ul>

        {!loggedIn && (
          <div className="flex flex-col gap-2 mt-6">
            <SolidButton className="justify-center px-4 py-3 w-[90%] text-sm">
              <Link to="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                {t("buttons.login")}
              </Link>
            </SolidButton>
            <OutlineButton className="justify-center px-4 py-3 w-[90%] text-sm">
              <Link
                to="/auth/register"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("buttons.signup")}
              </Link>
            </OutlineButton>
          </div>
        )}
      </aside>
    </header>
  );
}
