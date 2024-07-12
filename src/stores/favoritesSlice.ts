import { StateCreator } from "zustand";
import { Ingredients } from "../types";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
  favorites: Ingredients[]
  handleClickFavorite: (recipe: Ingredients) => void
  favoriteExists: (id: Ingredients['idDrink']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
  favorites: [], 
  handleClickFavorite: (recipe) => {

    // add/remove recipe from the favorites state
    if(get().favoriteExists(recipe.idDrink)){
      
      set((state) => ({
        favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
      }))

      // using notificationSlice to show a notification
      createNotificationSlice(set, get, api).showNotification({
        text: 'Removed from favorites', 
        error: false
      })
      
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe]
      }))

      // using notificationSlice to show a notification
      createNotificationSlice(set, get, api).showNotification({
        text: 'Added to favorites', 
        error: false
      })
    }

    localStorage.setItem('favorites', JSON.stringify(get().favorites))

    // Using the state from recipesSlice
    createRecipesSlice(set, get, api).closeModal()

  },
  favoriteExists: (id) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  }, 
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem('favorites')
    if(storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites)
      })
    }
  }
})