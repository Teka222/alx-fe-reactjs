// src/UserContext.js
import React, { createContext, useContext } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Export the UserContext provider
export const UserProvider = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
