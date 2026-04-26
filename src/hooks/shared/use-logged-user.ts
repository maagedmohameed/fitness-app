import { getLoggedUser } from "@/lib/apis/user.api";
import { useQuery } from "@tanstack/react-query";

export function useLoggedUser() {
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: getLoggedUser,
  });

  return { isPending, data, error, refetch };
}
