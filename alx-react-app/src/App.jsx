import React from 'react';
import Header from './components/Header';           // Import Header component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer';           // Import Footer component
import WelcomeMessage from './components/WelcomeMessage'; // Import WelcomeMessage component
import UserProfile from './components/UserProfile';  // Import UserProfile component

function App() {
  return (
    <div>
      {/* Display the Header component */}
      <Header />
      
      {/* Display the WelcomeMessage component */}
      <WelcomeMessage />
      
      {/* Display the MainContent component */}
      <MainContent />
      
      {/* Display the UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      {/* Display the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
