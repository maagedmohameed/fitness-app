import type { T_RegisterFormValues } from "@/lib/types/auth";
import type { RegisterResponse } from "@/lib/types/auth";
import type { LogoutResponse } from "../types/auth";
import { getToken } from "../utils/get-token";

const API = import.meta.env.VITE_API;

/**
 * Sends a registration request to the server.
 * Handles both API-level errors and HTTP errors.
 */
export async function signup(data: T_RegisterFormValues) {
  const { ...payload } = data;

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

export async function logout() {
  const token = getToken();

  if (!token) throw new Error("There is no token");

  const response = await fetch(`${API}/auth/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to logout");
  }

  const payload: ApiResponse<LogoutResponse> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}
