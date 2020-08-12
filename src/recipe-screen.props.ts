import { IngredientCategoryProps, IngredientRowProps } from "~recipe-screen";

export interface RecipeScreenProps {
  name: string;
  description?: string;
  portions?: string;
  ingredients: IngredientRowProps[];
  ingredientsCategories?: IngredientCategoryProps[];
  steps?: string[];
  category?: number;
  tags?: string[];
}
