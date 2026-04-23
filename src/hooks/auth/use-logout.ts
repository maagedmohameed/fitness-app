import { logout } from "@/lib/apis/auth.api";
import { useQuery } from "@tanstack/react-query";

export function useLogout() {
  const { isPending, data, error } = useQuery({
    queryKey: ["logout"],
    queryFn: logout,
    enabled: false,
  });

  return { isPending, data, error, logout };
}
