export type MealCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type MealCategoriesResponse = {
  categories: MealCategory[];
};

export type MealByCategory = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type MealByCategoryResponse = {
  meals: MealByCategory[];
};


export type MealById = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMealThumb: string;
};

export type MealByIdResponse = {
  meals: MealById[];
};