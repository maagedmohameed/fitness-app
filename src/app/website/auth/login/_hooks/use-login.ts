import { signin } from "@/lib/apis/auth.api";
import { setItem, setToken } from "@/lib/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      // Assuming the token is in data.token (from RegisterResponse)

      setToken(data.token);
      setItem("user", data.user);

      navigate("/"); // Navigate to home or dashboard after login
    },
  });
}
