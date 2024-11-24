import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';  // Import the SearchBar component

function App() {
  return (
    <Router>
      <div>
        {/* Display the SearchBar at the top of the page */}
        <SearchBar />
        
        {/* Display the AddRecipeForm for adding new recipes */}
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


export default App;


