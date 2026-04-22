const API = import.meta.env.VITE_API as string;

type ApiErrorShape = {
  error?: string;
  message?: string;
};

type VerifyResetCodeResponse = {
  token?: string;
  message?: string;
  status?: string;
};

async function parseApiResponse<T>(response: Response): Promise<T> {
  const data = (await response.json().catch(() => ({}))) as T & ApiErrorShape;

  if (!response.ok) {
    throw new Error(
      data.error || data.message || "Something went wrong. Please try again."
    );
  }

  return data as T;
}

export async function postForgotPassword(email: string) {
  const response = await fetch(`${API}/auth/forgotPassword`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return parseApiResponse<{ message?: string }>(response);
}

export async function postVerifyResetCode(email: string, resetCode: string) {
  const response = await fetch(`${API}/auth/verifyResetCode`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, resetCode }),
  });

  return parseApiResponse<VerifyResetCodeResponse>(response);
}

export async function putResetPassword(
  email: string,
  newPassword: string,
  token?: string
) {
  const payload = token
    ? { email, token, newPassword }
    : { email, newPassword };

  const response = await fetch(`${API}/auth/resetPassword`, {
    method: "PUT",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseApiResponse<{ message?: string }>(response);
}
