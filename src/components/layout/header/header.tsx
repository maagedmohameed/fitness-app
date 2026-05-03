import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Link } from "react-router-dom";
import SolidButton from "@/components/shared/solid-button";
import OutlineButton from "@/components/shared/outline-button";
import { Menu, X } from "lucide-react";
import { useTranslations } from "use-intl";
import { isLoggedIn } from "@/lib/utils/cookie";
import LanguageSwitcher from "./language-switcher";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("header");
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
        "fixed top-0 right-0 left-0 z-50 py-2 transition-colors duration-300",
        scrolled ? "bg-white dark:bg-black" : "bg-transparent"
      )}
    >
      <div className="flex w-full items-center gap-3 px-4 sm:px-6 container mx-auto">
        {/* logo */}
        <div className="logo shrink-0">
          <Link to="/" aria-label="Go to home page">
            <img
              src="/assets/images/fit 1.svg"
              alt="logo"
              className="w-20 sm:w-24"
            />
          </Link>
        </div>

        {/* navigations (desktop) */}
        <nav className="hidden min-w-0 flex-1 justify-center md:flex">
          <ul className="flex items-center gap-4 lg:gap-6">
            {HEADER_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-black dark:text-white font-semibold text-base lg:text-lg"
                >
                  {t(`links.${link.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-2 sm:gap-3 md:ml-0">
          <LanguageSwitcher />

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
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-1.5 text-black dark:text-white -me-1"
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
      </div>

      {/* Mobile menu backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile off-canvas menu */}
      <aside
        className={cn(
          "md:hidden fixed top-0 left-0 z-50 h-dvh w-[82%] max-w-xs bg-white dark:bg-black border-r border-black/10 dark:border-white/10 p-5 transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <img
            src="/assets/images/fit 1.svg"
            alt="logo"
            className="w-20"
          />
          <button
            type="button"
            className="p-2 text-black dark:text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="size-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-3">
          {HEADER_LINKS.map(link => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="block text-black dark:text-white font-semibold text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`links.${link.label}`)}
              </Link>
            </li>
          ))}
        </ul>

        {!loggedIn && (
          <div className="mt-6 flex flex-col gap-2">
            <SolidButton className="w-[90%] justify-center px-4 py-3 text-sm">
              <Link
                to="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("buttons.login")}
              </Link>
            </SolidButton>
            <OutlineButton className="w-[90%] justify-center px-4 py-3 text-sm">
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
