import type { Muscle } from "@/lib/types/muscle";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

type MuscleCardProps = {
  muscle: Muscle;
};

export default function MuscleCard({
  muscle: { _id, name, image },
}: MuscleCardProps) {
  // Translations
  const t = useTranslations("workouts");
  const imagePlaceholder =
    "https://gemsen.com/pub/media/wysiwyg/Untitled-5.png";
  return (
    <div className="relative h-100 rounded-[1.125rem] border border-[#24242424]/14 max-w-100 w-full overflow-hidden">
      {/* Muscle card image  */}
      <img
        src={image || imagePlaceholder}
        alt={name}
        loading="lazy"
        className="object-cover h-full w-full"
      />

      {/* Content  */}
      <div className="absolute bottom-0  w-full p-4 bg-white/50 dark:bg-[#24242480]/50 backdrop-blur-[3.63rem] space-y-2">
        {/* Card name  */}
        <h3 className="font-bold text-xl uppercase tracking-[0.14rem] dark:text-[#F3F3F4]">
          {name}
        </h3>

        {/* Card link  */}
        <Link
          to={`/classes/${_id}`}
          className="font-medium text-xl capitalize text-[#FF4100] flex  items-center gap-2"
        >
          {t("explore-button")}
          <span className="bg-[#FF4100] size-6 rounded-full flex items-center justify-center">
            <MoveUpRight color="#242424" size={10} />
          </span>
        </Link>
      </div>
    </div>
  );
}
