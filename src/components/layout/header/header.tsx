import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Link } from "react-router-dom";
import SolidButton from "@/components/shared/solid-button";
import OutlineButton from "@/components/shared/outline-button";

const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Classes",
    href: "/classes",
  },
  {
    label: "Healthy",
    href: "/healthy",
  }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "bg-white dark:bg-black" : "bg-transparent",
      )}
    >
    <div className="flex items-center justify-between container mx-auto">

        {/* logo */}
        <div className="logo">
            <img src="/assets/images/fit 1.svg" alt="logo" className="w-24" />
        </div>

        {/* navigations */}
        <nav>
            <ul className="flex items-center gap-4">
                {HEADER_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link to={link.href} className="text-black dark:text-white font-semibold text-lg">{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>

        {/* buttons */}
        <div className="flex items-center gap-1">
            <SolidButton>
                <Link to="/register">LOGIN</Link>
            </SolidButton>
            <OutlineButton>
                <Link to="/register">SIGN UP</Link>
            </OutlineButton>
        </div>
    </div>
  </header>
  );
}