import { API } from "../constants/global.constant";
import type { LogoutResponse } from "../types/auth";
import { getToken } from "../utils/get-token";

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
