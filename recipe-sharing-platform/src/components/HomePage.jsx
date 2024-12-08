import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'; // Adjust path if necessary

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a file
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-700 mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
