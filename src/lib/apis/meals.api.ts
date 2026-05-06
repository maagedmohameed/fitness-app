import { MEALS_API } from "../constants/global.constant";
import type { MealByCategory, MealCategory, MealDetail } from "../types/meal";

export async function getMealsGroups(locale: string) {
  const response = await fetch(`${MEALS_API}/categories.php?`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meals groups");
  }

  const payload: ApiResponse<{ categories: MealCategory[] }> =
    await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}

export async function getMealsByCategoryName(name: string, locale: string) {
  const response = await fetch(`${MEALS_API}/filter.php?c=${name}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch meals with category name => ${name}`);
  }

  const payload: ApiResponse<{
    meals: MealByCategory[];
  }> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}

export async function getMealDetailsById(id: string, locale: string) {
  const response = await fetch(`${MEALS_API}/lookup.php?i=${id}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch meal details with id => ${id}`);
  }

  const payload: ApiResponse<{
    meals: [MealDetail];
  }> = await response.json();

  if ("error" in payload || !payload.meals || !payload.meals.length) {
    throw new Error("Failed to fetch meal details");
  }
  if (!payload.meals || !payload.meals.length) {
    throw new Error("Failed to fetch meal details with id => ${id}");
  }
  return payload;
}
