// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage'; // Import ProfilePage component
import UserContext from './UserContext'; // Import the UserContext

function App() {
  // This is the data we want to share across components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap ProfilePage with the Provider to share userData
    <UserContext.Provider value={userData}>
      <ProfilePage />  {/* Now ProfilePage and its children can access userData */}
    </UserContext.Provider>
  );
}

export default App;

