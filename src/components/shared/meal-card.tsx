import { cn } from "@/lib/utils/tailwind-merge";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

type MealCardProps = {
  title: string;
  mealImage: string;
};

export default function MealCard({ title, mealImage }: MealCardProps) {
  // Translations
  const t = useTranslations("meal-card");

  return (
    <div
      className={cn(
        "flex items-end bg-cover bg-no-repeat bg-center mx-auto border border-[#24242424]/14 rounded-[1.125rem] w-full max-w-100 sm:h-100 aspect-square sm:aspect-auto overflow-hidden",
      )}
      style={{ backgroundImage: `url(${mealImage})` }}
    >
      <div className="space-y-2 bg-white/50 dark:bg-[#24242480]/50 backdrop-blur-[3.63rem] p-4 w-full">
        {/* Card name */}
        <h3 className="font-bold dark:text-[#F3F3F4] text-lg sm:text-xl uppercase tracking-[0.14rem]">
          {title}
        </h3>

        {/* Card link */}
        <Link
          onClick={() =>
            scrollTo({
              top: 0,
              left: 0,
              // behavior: "smooth",
            })
          }
          to={`/healthy?mealsCategory=${title}`}
          className="flex items-center gap-2 font-medium text-[#FF4100] text-base sm:text-xl"
        >
          {t("button")}
          <span className="flex justify-center items-center bg-[#FF4100] rounded-full size-6">
            <MoveUpRight color="#242424" size={10} />
          </span>
        </Link>
      </div>
    </div>
  );
}
