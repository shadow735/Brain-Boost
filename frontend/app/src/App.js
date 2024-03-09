import React, { useState } from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <NavBar onLoginClick={handleLoginClick} /> 
      {showLogin && <Login />}
      <Footer />
    </div>
  );
}

export default App;
