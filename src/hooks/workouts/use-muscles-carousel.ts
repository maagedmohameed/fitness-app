import { getRandomMuscles, getMusclesGroupsById } from "@/lib/apis/muscles.api";
import { useQuery } from "@tanstack/react-query";

export function useMusclesCarousel(
  locale: string,
  musclesGroupId?: string | null
) {
  const { isPending, data } = useQuery({
    queryKey: ["muscles-groups", musclesGroupId, locale],
    queryFn: async () =>
      musclesGroupId
        ? getMusclesGroupsById(musclesGroupId, locale)
        : getRandomMuscles(locale),
    enabled: !!locale,
    retry: false,
  });

  return { isPending, data };
}
