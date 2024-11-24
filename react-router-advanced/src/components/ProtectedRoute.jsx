// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  // Simulate authentication status (replace with your real authentication logic)
  const isAuthenticated = false; // Change this to actual auth check

  // If the user is authenticated, return the element (protected page)
  // If not, redirect to the login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
