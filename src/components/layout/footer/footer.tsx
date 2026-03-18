import { Mail, Phone } from "lucide-react";
import { useTranslations } from "use-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="gap-20 grid lg:grid-cols-4 bg-accent dark:bg-background mx-auto md:p-20 md:pt-10 w-full text-foreground dark:text-foreground text-lg">
      {/* Brand / Tagline */}
      <div className="space-y-2">
        <img src="/assets/images/fit 1.svg" alt="logo" className="w-24 h-14" />
        <p className="leading-10">{t("logo-text")}</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-8">
        <h2 className="font-bold uppercase tracking-wide">{t("contact-info.title")}</h2>
        <ul className="space-y-2">
          <li>
            <a href="tel:+91123656789" className="flex items-center gap-5 hover:underline">
              <div className="flex justify-center items-center border border-border dark:border-[#3F4553] rounded-full w-10 h-10">
                <Phone fill="#242424" size={16} />
              </div>
              +91 123 656 789
            </a>
          </li>
          <li>
            <a href="mailto:info@gmail.com" className="flex items-center gap-5 hover:underline">
              <div className="flex justify-center items-center border border-border dark:border-[#3F4553] rounded-full w-10 h-10">
                <Mail size={16} />
              </div>
              info@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Hours */}
      <div className="space-y-8">
        <h2 className="font-bold uppercase tracking-wide">{t("time.title")}</h2>
        <ul className="space-y-2">
          <li>
            <span className="font-medium">Mon - Fri:</span> 08:00 AM - 10:00 PM
          </li>
          <li>
            <span className="font-medium">Sat - Sun:</span> 08:00 AM - 09:00 PM
          </li>
        </ul>
      </div>

      {/* Location */}
      <div className="space-y-8">
        <h2 className="font-bold uppercase tracking-wide">{t("location.title")}</h2>
        <address className="not-italic leading-relaxed">2715 Ash Dr. San Jose, South Dakota 83475</address>
      </div>
    </footer>
  );
}
