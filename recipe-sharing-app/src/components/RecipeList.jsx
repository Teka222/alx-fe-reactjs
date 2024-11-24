import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';  // Import Link for navigation
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
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;

