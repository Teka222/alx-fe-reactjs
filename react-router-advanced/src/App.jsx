// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import BlogPost from './components/BlogPost';  // Import BlogPost component
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Add dynamic route for blog posts */}
      </Routes>
    </Router>
  );
};

export default App;
