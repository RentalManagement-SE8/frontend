// src/components/ForgotPasswordModal.tsx
import React, { useState } from "react";

interface Props {
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<Props> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const simulateOtp = "123456";

  const sendOtp = () => {
    if (email) {
      setOtpSent(true);
      alert(`OTP sent to ${email}. Use code: ${simulateOtp}`);
    }
  };

  const verifyAndReset = () => {
    if (otp === simulateOtp && newPassword) {
      alert("Password reset successfully!");
      onClose();
    } else {
      alert("Invalid OTP or password.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 relative">
        <button className="absolute top-3 right-4 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        {!otpSent ? (
          <>
            <input
              className="w-full  text-black p-2 mb-4 border rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={sendOtp}
              className="w-full bg-blue-600 text-black py-2 rounded"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              className="w-full text-black p-2 mb-3 border rounded"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <input
              type="password"
              className="w-full  text-black p-2 mb-3 border rounded"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              onClick={verifyAndReset}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
