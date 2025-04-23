import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import "../Styles/PaymentPage.css";

// Stripe key
const stripePromise = loadStripe(
  "pk_test_51REn9g4F19d3jQ1bvt9vYtgb2JyHAqJ9oDu2ltCpVKucGFRL3lFVHhywllXP007aTxRMOUhYEKSNtjRc1rCYJtlD00MqBcTNhq"
);

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  if (!order) {
    return (
      <div className="payment-container">
        <h2>Error: No order found. Please go back and try again.</h2>
      </div>
    );
  }

  const handlePayment = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:8080/api/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(order),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Payment error:", errorText);
        alert("Payment failed: " + errorText);
        return;
      }

      const data = await response.json();
      const stripe = await stripePromise;
      window.location.href = data.url; // ✅ perfect for full Stripe URL
    } catch (err) {
      console.error("Network error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h1>Complete Your Payment</h1>
      <p>Please fill in your details below to complete payment process.</p>

      <div className="payment-box">
        <h2>Order Summary</h2>
        <p>
          <strong>Delivery:</strong> {order.serviceName}
        </p>
        <p>
          <strong>Price:</strong> ${order.totalPrice.toFixed(2)}
        </p>
        <p>
          <strong>Email:</strong> {order.customerEmail}
        </p>
      </div>

      <button onClick={handlePayment} className="pay-btn">
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentPage;
