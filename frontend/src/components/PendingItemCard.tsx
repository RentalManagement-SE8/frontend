import React from "react";

interface Props {
  title: string;
  price: string;
  category: string;
  image: string;
  onApprove: () => void;
  onReject: () => void;
}

const PendingItemCard: React.FC<Props> = ({ title, price, category, image, onApprove, onReject }) => {
  return (
    <div className="bg-white shadow p-4 rounded flex items-center gap-4 mb-4">
      <img src={image} alt={title} className="w-32 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-green-700 font-semibold">${price}/day</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          onClick={onApprove}
        >
          Approve
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={onReject}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default PendingItemCard;
