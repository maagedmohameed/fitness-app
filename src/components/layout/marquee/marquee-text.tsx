import { Sparkle } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useTranslations } from "use-intl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarqueeComponent = (Marquee as any).default || Marquee;

const SERVICES = [
  { id: "live-classes" },
  { id: "outdoor-trainers" },
  { id: "personal-training" },
  { id: "personal-trainers" },
];

export default function MarqueeText() {
  // Translations
  const t = useTranslations("marquee");

  return (
    <MarqueeComponent autoFill speed={50} gradient={false}>
      <div className="flex items-center gap-3 bg-primary pe-6 h-20 font-bold text-white text-2xl uppercase">
        {SERVICES.map((item, index) => (
          <span
            className="flex justify-center items-center gap-3 font-inter"
            key={index}
          >
            <Sparkle fill="white" size={24} /> {t(item.id)}
          </span>
        ))}
      </div>
    </MarqueeComponent>
  );
}
