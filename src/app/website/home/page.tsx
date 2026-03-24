import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "@/components/shared/error-boundary-fallback";
import Footer from "@/components/layout/footer/footer";
import MarqueeText from "@/components/layout/marquee/marquee-text";
import { useTranslations } from "use-intl";
import WhyUs from "./_components/why-us -section/why-us";
import WorkoutSection from "@/app/website/home/_components/workout-section";
import Meals from "./_components/meals-section/h-meals";

export default function HomePage() {
  return (
    <main className="bg-background">
      {/* Workout section */}
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <WorkoutSection />
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
