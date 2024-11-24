// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Get authentication status from the hook

  // If the user is authenticated, render the element (protected page)
  // If not, redirect to the login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
