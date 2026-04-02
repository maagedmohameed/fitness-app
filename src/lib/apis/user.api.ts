import { API } from "../constants/global.constant";
import type { User } from "../types/user";
import { getToken } from "../utils/get-token";

export async function getLoggedUser() {
  const token = getToken();

  if (!token) throw new Error("There is no token");

  const response = await fetch(`${API}/auth/profile-data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile data");
  }

  const payload: ApiResponse<{ user: User }> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}
