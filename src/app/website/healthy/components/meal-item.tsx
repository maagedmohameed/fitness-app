import type { MealByCategory } from "@/lib/types/meal";
import { useSearchParams } from "react-router-dom";

type MealItemProps = {
  meal: MealByCategory;
};
export default function MealItem({
  meal: { strMeal, strMealThumb, idMeal, strCountry, strArea },
}: MealItemProps) {
  // Hooks
  const [, setSearchParams] = useSearchParams();

  // Functions
  const onClick = () =>
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set("mealId", idMeal);
      return params;
    });

  return (
    <li className="flex items-center gap-4 pt-1 pb-3 pl-4 border-border/14 dark:border-[#2D2D2D] border-b">
      {/* Meal Image  */}
      <img
        className="rounded-10xl w-20 h-22 cursor-pointer"
        src={strMealThumb}
        alt={strMeal}
        onClick={onClick}
      />
      {/* Content  */}
      <div className="flex-col cursor-pointer" onClick={onClick}>
        {/* Title  */}
        <p className="font-medium text-foreground text-lg capitalize">
          {strMeal}
        </p>

        {/* Description  */}
        <p className="flex flex-col font-normal text-sm capitalize">
          Area : {strArea}
          <span>Country : {strCountry}</span>
        </p>
      </div>
    </li>
  );
}
