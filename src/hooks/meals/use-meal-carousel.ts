import { getMealsByCategoryName } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export function useMealCarousel(locale: string, mealCategory?: string | null) {
  const { isPending, data } = useQuery({
    queryKey: ["meal-carousel", mealCategory, locale],
    queryFn: () => getMealsByCategoryName(mealCategory ?? "Breakfast", locale),
    enabled: !!locale,
    retry: false,
  });

  return { isPending, data };
}
