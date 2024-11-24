// src/hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  // Simulate user authentication (you can replace this with real logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);  // Simulate login
  const logout = () => setIsAuthenticated(false);  // Simulate logout

  return { isAuthenticated, login, logout };
};

export default useAuth;
