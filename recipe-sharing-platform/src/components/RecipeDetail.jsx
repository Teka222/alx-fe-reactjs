import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe details based on ID
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline">
        &larr; Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded"
        />
        <h1 className="text-3xl font-bold my-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
