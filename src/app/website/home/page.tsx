import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "@/components/shared/error-boundary-fallback";
import Footer from "@/components/layout/footer/footer";
import MarqueeText from "@/components/layout/marquee/marquee-text";
import WorkoutSection from "@/app/website/home/_components/workout-section";

export default function HomePage() {
  return (
    <main className="bg-background">
      {/* Workout section */}
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <WorkoutSection />
      </ErrorBoundary>

      <MarqueeText />
      <Footer />
    </main>
  );
}
