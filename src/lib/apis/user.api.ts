import { API } from "../constants/global.constant";
import type {
  ChangeUserPasswordFormFields,
  ForgotPasswordResponse,
} from "../types/auth";
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

export async function changeUserPassword(data: ChangeUserPasswordFormFields) {
  const token = getToken();

  if (!token) throw new Error("There is no token");

  const response = await fetch(`${API}/auth/change-password`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to change user password");
  }

  const payload: ApiResponse<ForgotPasswordResponse> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}
