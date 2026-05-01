import type {
  MealByCategoryResponse,
  MealByIdResponse,
  MealCategoriesResponse,
} from "../types/meals";

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

  const payload: ApiResponse<MealCategoriesResponse> = await response.json();

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

  const payload: ApiResponse<MealByCategoryResponse> = await response.json();

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

  const payload: ApiResponse<MealByIdResponse> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}