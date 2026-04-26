import { useMutation } from "@tanstack/react-query";
import type { RegisterResponse, T_RegisterFormValues } from "@/lib/types/auth";

import { setToken, setItem } from "@/lib/utils/cookie";

import { useNavigate } from "react-router-dom";

import { signup } from "@/lib/apis/auth.api";

/**
 * Custom hook for handling user registration.
 * It uses React Query's useMutation to send a POST request to the signup endpoint.
 */
export function useRegister() {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, Error, T_RegisterFormValues>({
    mutationFn: signup,
    onSuccess: (data) => {
      // Store token in cookies for 7 days using the utility
      setToken(data.token);

      // Store user info in cookies for 7 days using the generic utility
      setItem("user", data.user);

      navigate("/");
    },
  });
}
