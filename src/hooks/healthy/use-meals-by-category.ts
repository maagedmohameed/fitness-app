import { getMealsByCategoryName } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export function useMealsByCategory(name: string, locale: string) {
  const { isPending, data } = useQuery({
    queryKey: ["meals-by-category", locale, name],
    queryFn: () => getMealsByCategoryName(name, locale),
    enabled: !!locale && !!name,
  });

  return { isPending, data };
}
