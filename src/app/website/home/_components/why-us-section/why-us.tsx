import ContentSide from "./content-side";
import ImagesSide from "./images-side";

export default function WhyUs() {
  return (
    <section className="gap-10 md:gap-14 grid md:grid-cols-2 bg-background px-4 sm:px-6 lg:px-20 py-10 sm:py-16">
      <ContentSide />

      <ImagesSide />
    </section>
  );
}
