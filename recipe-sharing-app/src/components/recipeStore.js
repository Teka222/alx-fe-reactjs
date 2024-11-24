import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Array to store favorite recipe IDs
  recommendations: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate personalized recommendations based on favorite recipes
  generateRecommendations: () => set((state) => {
    // For simplicity, recommendations are based on randomly selected favorites
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Set all recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };

