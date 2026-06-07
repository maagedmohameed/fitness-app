import { getMealsGroups } from "@/lib/apis/meals.api";
import { useQuery } from "@tanstack/react-query";

export function useMealsGroups(locale: string) {
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ["meals-groups", locale],
    queryFn: () => getMealsGroups(locale),
    enabled: !!locale,
  });

  return { isPending, data, error, refetch };
}
