import React, { useState } from "react";

interface Props {
    onClose: () => void;
    onLoginSuccess: () => void;
  }

const LoginModal: React.FC<Props> = ({ onClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const validEmail = "test@test.com";
  const validPassword = "123456";

  const handleLogin = () => {
    if (email === validEmail && password === validPassword) {
        alert("Login successful!");
        onLoginSuccess();
      } else {
        alert("Invalid credentials.");
      }
  };

  const handleSignup = () => {
    if (fullName && email && password) {
      alert(`Account created for ${fullName}`);
      onClose();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-50">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg relative">
        {/* Close Button */}
        <button className="absolute text-black top-3 right-4 text-xl font-bold" onClick={onClose}>
          &times;
        </button>

        {/* Tabs */}
        <div className="flex justify-center border-b mt-2">
          <button
            className={`pb-2 px-4 font-semibold ${
              activeTab === "login"
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("login")}
          >
            LOGIN
          </button>
          <button
            className={`pb-2 px-4 font-semibold ${
              activeTab === "signup"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            SIGN UP
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {activeTab === "signup" && (
            <input
              className="w-full border text-black border-gray-300 p-2 mb-4"
              placeholder="FULL NAME"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <input
            className="w-full border text-black border-gray-300 p-2 mb-4"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border text-black border-gray-300 p-2 mb-4"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {activeTab === "login" && (
            <>
              <div className="flex items-center justify-between text-sm mb-4">
                <label className="text-black">
                  <input type="checkbox" className="mr-1" /> Remember Me
                </label>
                <a className="text-blue-600 cursor-pointer">Forgot password?</a>
              </div>
              <button
                className="w-full bg-red-500 text-white py-2 font-semibold rounded"
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          )}

          {activeTab === "signup" && (
            <button
              className="w-full bg-blue-500 text-white py-2 font-semibold rounded"
              onClick={handleSignup}
            >
              Create Account
            </button>
          )}

          {/* OR separator */}
          <div className="flex items-center justify-center my-4">
            <span className="text-xs text-gray-500">OR</span>
          </div>

          {/* Social Login */}
          <div className="flex gap-3 justify-center">
            <button className="bg-blue-700 text-white px-4 py-2">f</button>
            <button className="bg-red-600 text-white px-4 py-2">G+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
