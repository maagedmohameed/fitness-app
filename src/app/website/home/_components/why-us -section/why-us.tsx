import ContentSide from "./content-side";
import ImagesSide from "./images-side";

export default function WhyUs() {
  return (
    <section className="md:gap-14 grid md:grid-cols-2 bg-[#F3F3F4] dark:bg-[#232424] px-20 py-10">
      <ContentSide />

      <ImagesSide />
    </section>
  );
}
