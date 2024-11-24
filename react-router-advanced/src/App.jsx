// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Wrap the Profile route with ProtectedRoute */}
        <Route 
          path="/profile" 
          element={<ProtectedRoute element={<Profile />} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
