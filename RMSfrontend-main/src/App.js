import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TrackingPage from "./Components/TrackingPage";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import VerifyEmailPage from "./Components/VerifyEmailPage";
import CustomerDashboard from "./Components/CustomerDashboard";
import ServicesPage from "./Components/ServicesPage";
import PaymentPage from "./Components/PaymentPage";

function AppContent() {
  const location = useLocation();
  const hideLayout = ["/login", "/register","/verifyemail"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verifyemail" element={<VerifyEmailPage />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/pay" element={<PaymentPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
