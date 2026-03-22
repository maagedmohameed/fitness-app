import { ErrorBoundary } from "react-error-boundary";
import WorkoutSection from "./_components/workout-section";
import ErrorBoundaryFallback from "@/components/shared/error-boundary-fallback";

export default function HomePage() {
  return (
    <main>
      {/* Workout section */}
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <WorkoutSection />
      </ErrorBoundary>
    </main>
  );
}
