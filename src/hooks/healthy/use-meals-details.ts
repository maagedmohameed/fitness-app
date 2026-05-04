import { getMealDetailsById } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export function useMealDetails(id: string, locale: string) {
  const { isPending, data } = useQuery({
    queryKey: ["meal-by-id", id, locale],
    queryFn: () => getMealDetailsById(id, locale),
    enabled: !!locale && !!id,
  });

  return { isPending, data };
}
