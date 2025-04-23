// DMSfrontend-main/src/Components/LoginPage.jsx

import React, { useState } from "react";
import "../Styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { login } from "../api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword()) return;

    try {
      const token = await login(email, password);
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      localStorage.setItem("userEmail", decoded.sub);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password <span className="required">*</span>
              </label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>

            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <div className="form-group">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
            <div className="form-group">
              <a href="#forgot-password" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>
            <div className="form-group">
              <button type="button" className="google-btn">
                Continue with Google
              </button>
            </div>
            <div className="form-group">
              <p>
                Don't have an account?{" "}
                <a href="/register" className="sign-up-link">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;
