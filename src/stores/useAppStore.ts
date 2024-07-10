import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";


// global State
export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a)
})))