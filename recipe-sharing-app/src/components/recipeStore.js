import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Action to update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Action to filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) || 
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  
  // Initialize or set recipes in the store
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
