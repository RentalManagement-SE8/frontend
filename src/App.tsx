import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginModal from "./components/LoginModal";
import SearchFilter from "./components/SearchFilter";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={handleLogout}
        isLoggedIn={isLoggedIn}
      />

      {/* Show Hero only before login */}
      {!isLoggedIn && <Hero />}

      {/* Show search only after login */}
      {isLoggedIn && <SearchFilter />}

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
};

export default App;
