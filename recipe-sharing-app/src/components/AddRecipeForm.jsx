import { useState } from 'react';
import { useRecipeStore } from './recipeStore'; // Importing the Zustand store

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe); // Accessing addRecipe from Zustand store
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    addRecipe({ id: Date.now(), title, description }); // Adds a new recipe to the store
    setTitle(''); // Resets the title field
    setDescription(''); // Resets the description field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
