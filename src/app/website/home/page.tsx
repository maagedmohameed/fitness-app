import Footer from "@/components/layout/footer/footer";
import MarqueeText from "@/components/layout/marquee/marquee-text";
import { SectionTitle } from "@/components/ui/section-head";
import { useTranslations } from "use-intl";
import WhyUs from "./_components/why-us -section/why-us";

export default function HomePage() {
  const t = useTranslations("App");

  return (
    <main className="bg-background">
      <h1>{t("hello", { name: "Ali" })}</h1>
      <p className="font-inter">{t("welcome")}</p>
      <SectionTitle variant={"center"}>{t("welcome")}</SectionTitle>
      <WhyUs />
      <MarqueeText />
      <Footer />
    </main>
  );
}
