import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; // Ensure this is imported
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />        {/* Header component */}
      <MainContent />   {/* MainContent component */}
      <Footer />        {/* Footer component */}
      <WelcomeMessage /> {/* Ensure WelcomeMessage is included here */}
    </div>
  );
}

export default App;
