export type MEAL_CATEGORIES = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type MEAL_CATEGORIES_RESPONSE = {
  categories: MEAL_CATEGORIES[];
};

export type MEAL_BY_CATEGORY = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type MEAL_BY_CATEGORY_RESPONSE = {
  meals: MEAL_BY_CATEGORY[];
};


export type MEAL_BY_ID = {
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

export type MEAL_BY_ID_RESPONSE = {
  meals: MEAL_BY_ID[];
};