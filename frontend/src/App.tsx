import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginModal from "./components/LoginModal";
import SearchFilter from "./components/SearchFilter";
import AdminPanel from "./pages/AdminPanel";
import OwnerDashboard from "./pages/OwnerDashboard";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<"admin" | "owner" | "customer" | null>(null);

  const handleLoginSuccess = (userRole: "admin" | "owner" | "customer") => {
    setIsLoggedIn(true);
    setRole(userRole);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
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

      {/* Show content based on role */}
      {isLoggedIn && role === "customer" && <SearchFilter />}
      {isLoggedIn && role === "admin" && <AdminPanel />}
      {isLoggedIn && role === "owner" && <OwnerDashboard />}

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
