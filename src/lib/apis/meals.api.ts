import type { MEAL_CATEGORIES_RESPONSE, MEAL_BY_CATEGORY_RESPONSE, MEAL_BY_ID_RESPONSE } from "../types/meals";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function getMealCategories(locale: string) {
  const response = await fetch(`${BASE_URL}/categories.php`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meal categories");
  }

  const payload: ApiResponse<MEAL_CATEGORIES_RESPONSE> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}

export async function getMealByCategory(category: string, locale: string) {
  const response = await fetch(`${BASE_URL}/filter.php?c=${category}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meal by category");
  }

  const payload: ApiResponse<MEAL_BY_CATEGORY_RESPONSE> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}

export async function getMealById(id: string, locale: string) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meal");
  }

  const payload: ApiResponse<MEAL_BY_ID_RESPONSE> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}