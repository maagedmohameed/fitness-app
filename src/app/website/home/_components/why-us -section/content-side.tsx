import { SectionSubTitle, SectionTitle } from "@/components/ui/section-head";

export default function ContentSide() {
  return (
    <div className="text-[#242424] dark:text-[#F3F3F4]">
      <SectionTitle>why us</SectionTitle>
      <SectionSubTitle>Why Us</SectionSubTitle>

      <h2 className="mt-6 w-146 font-bold text-[2.5rem] uppercase leading-12">
        Elevate fitness with the <span className="text-[#FF4100]">best way</span> possible
      </h2>
      <p className="mt-6 mb-16 w-146 text-lg">
        We offer a fitness journey that's tailored to your goals, supported by professional trainers and a welcoming
        community. Whether it's weight loss, strength building, or overall wellness, our proven methods.
      </p>
      <ul className="space-y-8 w-full max-w-[38.9rem]">
        <li className="flex items-center gap-10">
          <div>
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-14 h-14">
              01
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">personalized fitness plans</h3>
            <p className="leading-relaxed">
              We tailor every workout to fit your unique goals and fitness level ensuring that you make the most
              progress.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-10">
          <div>
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-14 h-14">
              02
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">personalized fitness plans</h3>
            <p className="leading-relaxed">
              We tailor every workout to fit your unique goals and fitness level ensuring that you make the most
              progress.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-10">
          <div>
            <span className="flex justify-center items-center bg-[#FF4100] border border-[#24242424] rounded-full w-14 h-14">
              03
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">personalized fitness plans</h3>
            <p className="leading-relaxed">
              We tailor every workout to fit your unique goals and fitness level ensuring that you make the most
              progress.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
