import React, { useState } from "react";
import PendingItemCard from "./PendingItemCard";
import placeholderImage from "../assets/pending-placeholder.jpg";

interface RentalItem {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const AdminApprovalPanel = () => {
  const [pendingItems, setPendingItems] = useState<RentalItem[]>([
    {
      id: 1,
      title: "Power Drill",
      price: "20",
      category: "Tools",
      image: placeholderImage,
    },
    {
      id: 2,
      title: "SUV for Weekend Trip",
      price: "75",
      category: "Cars",
      image: placeholderImage,
    },
  ]);

  const handleApprove = (id: number) => {
    alert(`Approved item ID: ${id}`);
    setPendingItems((prev) => prev.filter((item) => item.id !== id));
    // 🔧 backend.post(`/approve/${id}`)
  };

  const handleReject = (id: number) => {
    alert(`Rejected item ID: ${id}`);
    setPendingItems((prev) => prev.filter((item) => item.id !== id));
    // 🔧 backend.post(`/reject/${id}`)
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl text-black font-bold mb-6">Pending Rental Approvals</h2>
      {pendingItems.length === 0 ? (
        <p className="text-center text-gray-500">No items pending approval.</p>
      ) : (
        pendingItems.map((item) => (
          <PendingItemCard
            key={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            image={item.image}
            onApprove={() => handleApprove(item.id)}
            onReject={() => handleReject(item.id)}
          />
        ))
      )}
    </div>
  );
};

export default AdminApprovalPanel;
