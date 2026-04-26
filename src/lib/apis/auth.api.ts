import type { T_RegisterFormValues } from "@/lib/types/auth";
import type { RegisterResponse } from "@/lib/types/auth";

const API = import.meta.env.VITE_API;

/**
 * Sends a registration request to the server.
 * Handles both API-level errors and HTTP errors.
 */
export async function signup(data: T_RegisterFormValues) {
  const { fitnessLevel, ...payload } = data;

  const response = await fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...payload, rePassword: payload.password }),
  });

  // Handle HTTP errors.
  if (!response.ok) {
    throw new Error("Registration failed");
  }

  const result: ApiResponse<RegisterResponse> = await response.json();

  // Handle server-side errors returned in the response body.
  if ("error" in result) {
    throw new Error(result.error);
  }

  return result;
}
