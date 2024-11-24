import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard'; // Assuming you have a RecipeCard component for individual recipe display

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Re-filter recipes whenever the component is mounted or the list of recipes changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      )}
    </div>
  );
};

export default RecipeList;

