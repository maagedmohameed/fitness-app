import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "@/components/shared/error-boundary-fallback";
import Footer from "@/components/layout/footer/footer";
import MarqueeText from "@/components/layout/marquee/marquee-text";
import WhyUs from "./_components/why-us-section/why-us";
import Meals from "./_components/meals-section/h-meals";
import Header from "@/components/layout/header/header";
import HeroSection from "./_components/hero-section";
import AboutUsSection from "@/components/shared/about-us-section";
import WorkoutsSection from "./_components/workouts/workouts-section";

export default function HomePage() {
  return (
    <main className="bg-background">
      {/* header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Workout section */}
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <WorkoutsSection />
      </ErrorBoundary>

      {/* Why Us Section */}
      <WhyUs />

      {/* Meals Section */}
      <Meals />

      {/* Marquee */}
      <MarqueeText />

      {/* Footer */}
      <Footer />
    </main>
  );
}
