import React from "react";
import RatingsSection from "../components/RatingsSection";

const CustomerHome = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Item Details</h1>
      <RatingsSection />
    </div>
  );
};

export default CustomerHome;
