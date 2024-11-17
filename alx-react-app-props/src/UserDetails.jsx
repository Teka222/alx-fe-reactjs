import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import the UserContext

function UserDetails() {
  // Get the user data from context
  const userData = useContext(UserContext); // This will get the value from UserContext.Provider

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
