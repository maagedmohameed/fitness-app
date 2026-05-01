import Cookies from "js-cookie";

const TOKEN_KEY = "token";

/**
 * Sets a cookie. Automatically stringifies objects/arrays.
 */
export const setItem = (key: string, value: any, expires: number = 7): void => {
  const stringValue =
    typeof value === "object" ? JSON.stringify(value) : String(value);
  Cookies.set(key, stringValue, { expires });
};

/**
 * Retrieves a cookie. Automatically parses JSON strings if possible.
 */
export const getItem = <T = string>(key: string): T | undefined => {
  const value = Cookies.get(key);
  if (!value) return undefined;

  try {
    // Try to parse as JSON, if it fails, return as string
    return JSON.parse(value) as T;
  } catch (e) {
    void e;
    return value as T;
  }
};

/**
 * Removes a cookie by key.
 */
export const removeItem = (key: string): void => {
  Cookies.remove(key);
};

/**
 * Specific helper for setting the authentication token.
 */
export const setToken = (token: string, expires: number = 7): void => {
  setItem(TOKEN_KEY, token, expires);
};

/**
 * Specific helper for getting the authentication token.
 */
export const getToken = (): string | undefined => {
  return getItem<string>(TOKEN_KEY);
};

/**
 * Specific helper for removing the authentication token.
 */
export const removeToken = (): void => {
  removeItem(TOKEN_KEY);
};

/**
 * Checks if the user is currently logged in based on the presence of a token.
 */
export const isLoggedIn = (): boolean => {
  return !!getToken();
};
