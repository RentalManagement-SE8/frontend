import React from "react";

const categories = [
  "ALL", "Events", "Roommates", "Rentals", "Property",
  "IT Training", "Jobs", "Cars", "Buy/Sell", "Day Care",
  "Local Biz", "Services", "Classifieds", "Travel", "Lawyers",
];

const SearchBar = () => {
  return (
    <div className="bg-white text-black px-6 py-4 shadow-md flex flex-wrap gap-4 justify-center items-center">
      <select className="border px-3 py-2 rounded-md text-sm text-black">
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Enter the keyword to search"
        className="border px-3 py-2 rounded-md w-72 text-black"
      />

      <span className="text-sm">In</span>

      <input
        type="text"
        defaultValue="Bloomington, Indiana"
        className="border px-3 py-2 rounded-md text-black"
      />

      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1">
        🔍 Search
      </button>
    </div>
  );
};

export default SearchBar;
