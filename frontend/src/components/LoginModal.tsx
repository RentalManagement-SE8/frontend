import React, { useState } from "react";

interface Props {
  onClose: () => void;
  onLoginSuccess: (role: "admin" | "owner" | "customer") => void;
}

const LoginModal: React.FC<Props> = ({ onClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [forgot, setForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const users = [
    { email: "admin@test.com", password: "12345", role: "admin" },
    { email: "owner@test.com", password: "12345", role: "owner" },
    { email: "user@test.com", password: "12345", role: "customer" },
  ];

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert(`Login successful as ${user.role}`);
      onLoginSuccess(user.role as any); // triggers view change
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

  const handleForgotPassword = () => {
    if (resetEmail) {
      alert(`OTP sent to ${resetEmail} (simulated)`);
      setForgot(false);
    } else {
      alert("Enter your email to receive OTP");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg relative">
        <button
          className="absolute text-black top-3 right-4 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex justify-center border-b mt-2">
          <button
            className={`pb-2 px-4 font-semibold ${
              activeTab === "login"
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveTab("login");
              setForgot(false);
            }}
          >
            LOGIN
          </button>
          <button
            className={`pb-2 px-4 font-semibold ${
              activeTab === "signup"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveTab("signup");
              setForgot(false);
            }}
          >
            SIGN UP
          </button>
        </div>

        <div className="p-6">
          {activeTab === "signup" && (
            <input
              className="w-full border text-black border-gray-300 p-2 mb-4"
              placeholder="FULL NAME"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}

          {(activeTab === "signup" || !forgot) && (
            <>
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
            </>
          )}

          {forgot && (
            <>
              <input
                className="w-full border text-black border-gray-300 p-2 mb-4"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button
                className="w-full bg-green-600 text-white py-2 rounded mb-2"
                onClick={handleForgotPassword}
              >
                Send OTP
              </button>
            </>
          )}

          {activeTab === "login" && !forgot && (
            <>
              <div className="flex items-center justify-between text-sm mb-4">
                <label className="text-black">
                  <input type="checkbox" className="mr-1" /> Remember Me
                </label>
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setForgot(true)}
                >
                  Forgot password?
                </span>
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

          <div className="flex items-center justify-center my-4">
            <span className="text-xs text-gray-500">OR</span>
          </div>

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
