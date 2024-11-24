import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Stores all recipes
  favorites: [], // Stores favorite recipe IDs
  recommendations: [], // Stores recommended recipes
  searchTerm: '', // Stores the current search term
  filteredRecipes: [], // Stores filtered recipes based on the search term

  // Action to add a recipe to the state
  addRecipe: (newRecipe) => set((stat
