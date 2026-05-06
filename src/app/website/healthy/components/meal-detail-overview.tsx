import type { MealDetail } from "@/lib/types/meal";
import { cn } from "@/lib/utils/tailwind-merge";
import { MealDetailOverviewSkeleton } from "../skeletons/meal-detail-overview.skeleton";
import { useState } from "react";

type MealDetailOverviewProps = {
  isPending: boolean;
  meal?: MealDetail;
};

export default function MealDetailOverview({
  isPending,
  meal,
}: MealDetailOverviewProps) {
  const [open, setOpen] = useState(false);

  if (isPending) return <MealDetailOverviewSkeleton />;

  const mealEnergyDetails = {
    energy: "120 kcal",
    protein: "30 g",
    carbs: "50 g",
    fat: "10 g",
  } as const;

  return (
    <div
      className={cn(
        `bg-[url(${meal?.strMealThumb})] bg-cover`,
        "relative rounded-tl-10xl rounded-tr-10xl h-134"
      )}
    >
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMealAlternate || meal?.strMeal || ""}
        className="rounded-tl-10xl rounded-tr-10xl w-full h-full object-cover"
      />

      <div
        className={cn(
          "from-gray-200 to-white/60",
          "bg-linear-to-t  dark:from-[#242424]  dark:to-black/10",
          "rounded-tl-10xl rounded-tr-10xl bottom-0 left-0 absolute flex flex-col justify-end gap-4 px-8 pb-8 w-full h-full text-foreground"
        )}
      >
        {meal?.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <div className="relative flex justify-center items-center mx-auto w-20 h-20">
              {/* Circles */}
              <span className="absolute bg-orange-500 opacity-30 rounded-full w-full h-full animate-ping"></span>
              <span className="absolute bg-orange-500 opacity-50 rounded-full w-16 h-16"></span>
              <span className="absolute flex justify-center items-center bg-orange-600 shadow-lg rounded-full w-12 h-12">
                {/* Play Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </a>
        )}

        {meal?.strSource ? (
          <a
            href={meal.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground"
          >
            <p className="font-medium text-5xl text-center capitalize">
              {meal?.strMeal}
            </p>
          </a>
        ) : (
          <p className="font-medium text-foreground text-5xl text-center capitalize">
            {meal?.strMeal}
          </p>
        )}

        <p
          onClick={() => setOpen(!open)}
          className={`text-foreground w-4/5 overflow-hidden transition-all duration-500  ${
            open ? "max-h-3/4" : "max-h-[76px]"
          }`}
        >
          {meal?.strInstructions}
        </p>

        <ul className="flex justify-between items-center">
          {(
            Object.keys(mealEnergyDetails) as Array<
              keyof typeof mealEnergyDetails
            >
          ).map(key => (
            <li
              key={key}
              className="flex flex-col bg-background backdrop-blur-sm p-2 border-[0.5px] border-border rounded-10xl text-foreground text-center capitalize"
            >
              {mealEnergyDetails[key]}
              <span className="font-bold text-primary">{key}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
