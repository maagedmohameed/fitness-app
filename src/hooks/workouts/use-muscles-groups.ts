import { getMusclesGroups } from "@/lib/apis/muscles.api";
import { useQuery } from "@tanstack/react-query";

export function useMusclesGroups(locale: string) {
  const { isPending, data } = useQuery({
    queryKey: ["muscles-groups", locale],
    queryFn: () => getMusclesGroups(locale),
    enabled: !!locale,
  });

  return { isPending, data };
}
