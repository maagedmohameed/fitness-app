import MarqueeText from "@/components/layout/marquee/marquee-text";
import AboutUsSection from "@/components/shared/about-us-section";

export default function About() {
    return <main className="bg-background">
        <AboutUsSection />
        {/* Marquee */}
      <MarqueeText />
    </main>
}