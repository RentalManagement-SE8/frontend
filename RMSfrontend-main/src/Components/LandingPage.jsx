import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/pay", {
      state: {
        serviceName: "Toyota supra",
        totalPrice: 25.0,
        customerEmail: "youremail@example.com",
      },
    });
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={handleButton}>Go to Payment</button>
    </div>
  );
};

export default LandingPage;
