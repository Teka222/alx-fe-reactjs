import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Hook for navigation

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Navigate back to the home page (recipe list) after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
