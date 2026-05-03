import ContentSide from "./content-side";
import ImagesSide from "./images-side";

export default function WhyUs() {
  return (
    <section className="grid md:grid-cols-2 gap-10 md:gap-14 bg-[#F3F3F4] dark:bg-[#232424] px-4 sm:px-6 lg:px-20 py-10 sm:py-16">
      <ContentSide />

      <ImagesSide />
    </section>
  );
}
