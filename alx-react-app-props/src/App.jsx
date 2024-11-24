// src/App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import the UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Provide context value */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
