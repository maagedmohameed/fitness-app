import { getMealsGroups } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export function useMealCategories(locale: string) {
  const { isPending, data } = useQuery({
    queryKey: ["meal-categories", locale],
    queryFn: () => getMealsGroups(locale),
    enabled: !!locale,
  });

  return { isPending, data };
}
