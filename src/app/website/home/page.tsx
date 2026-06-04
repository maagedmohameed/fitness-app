import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "@/components/shared/error-boundary-fallback";
import MarqueeText from "@/components/layout/marquee/marquee-text";
import WhyUs from "./_components/why-us-section/why-us";
import WorkoutsSection from "@/app/website/home/_components/workouts/workouts-section";
import Meals from "./_components/meals-section/h-meals";
import HeroSection from "./_components/hero-section";
import AboutUsSection from "@/components/shared/about-us-section";

export default function HomePage() {
  return (
    <main className="bg-background overflow-x-hidden">
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
    </main>
  );
}
