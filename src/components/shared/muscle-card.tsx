import { MoveUpLeft, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale, useTranslations } from "use-intl";

type MuscleCardProps = {
  muscle: Muscle;
};

export default function MuscleCard({
  muscle: { _id, name, image },
}: MuscleCardProps) {
  // Translations
  const t = useTranslations("workouts");
  const locale = useLocale();

  // Variables
  const imagePlaceholder =
    "https://gemsen.com/pub/media/wysiwyg/Untitled-5.png";

  const MoveUp = locale === "ar" ? MoveUpLeft : MoveUpRight;

  return (
    <div className="relative mx-auto border border-[#24242424]/14 rounded-[1.125rem] w-full max-w-100 h-100 overflow-hidden">
      {/* Muscle card image  */}
      <img
        src={image || imagePlaceholder}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      {/* Content  */}
      <div className="bottom-0 absolute space-y-2 bg-white/50 dark:bg-[#24242480]/50 backdrop-blur-[3.63rem] p-4 w-full">
        {/* Card name  */}
        <h3 className="font-bold dark:text-[#F3F3F4] text-xl uppercase tracking-[0.14rem]">
          {name}
        </h3>

        {/* Card link  */}
        <Link
          to={`/classes/${_id}`}
          className="flex items-center gap-2 font-medium text-[#FF4100] text-xl capitalize"
        >
          {t("explore-button")}
          <span className="flex justify-center items-center bg-[#FF4100] rounded-full size-6">
            <MoveUp color="#242424" size={10} />
          </span>
        </Link>
      </div>
    </div>
  );
}
