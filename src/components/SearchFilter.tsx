import React, { useState } from "react";

const SearchFilter = () => {
  const [category, setCategory] = useState("ALL");
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("Bloomington, Indiana");

  return (
    <div className="bg-white text-black px-6 py-6 shadow">
      <div className="flex flex-wrap justify-center items-center gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option>ALL</option>
          <option>Events</option>
          <option>Roommates</option>
          <option>Rentals</option>
          <option>Property</option>
          <option>IT Training</option>
          <option>Jobs</option>
          <option>Cars</option>
          <option>Buy/Sell</option>
          <option>Day Care</option>
        </select>

        <input
          type="text"
          placeholder="Enter the keyword to search"
          className="p-2 border rounded w-72"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <span>In</span>

        <input
          type="text"
          className="p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="bg-red-500 text-white px-4 py-2 rounded">
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
