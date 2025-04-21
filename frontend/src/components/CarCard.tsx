import React from "react";

interface Props {
  title: string;
  price: string;
  people: number;
  duration: string;
  image: string;
  onSelect: () => void;
}

const CarCard: React.FC<Props> = ({ title, price, people, duration, image, onSelect }) => {
  return (
    <div className="bg-white text-black rounded shadow mb-4 p-4 flex gap-4 items-center">
      <img src={image} alt={title} className="w-32 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="text-lg text-black font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">👥 {people} People • ⏱ {duration}</p>
        <p className="text-green-600 font-bold mt-1 text-lg">${price}/day</p>
      </div>
      <button
        onClick={onSelect}
        className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
      >
        Select
      </button>
    </div>
  );
};

export default CarCard;
