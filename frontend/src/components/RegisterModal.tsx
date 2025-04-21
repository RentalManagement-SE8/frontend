// src/components/RegisterModal.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  onClose: () => void;
  onSignupSuccess: () => void;
}

const RegisterModal: React.FC<Props> = ({ onClose, onSignupSuccess }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"customer" | "owner" | "admin">("customer");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSignup = () => {
    if (fullName && email && password) {
      login({ email, fullName, role });
      alert(`Account created for ${fullName}`);
      onSignupSuccess();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 relative">
        <button className="absolute top-3 right-4 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 mb-3 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as any)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="customer">Customer</option>
          <option value="owner">Owner</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
