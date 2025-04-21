import React from "react";
import FilterSidebar from "./FilterSidebar";
import CarCard from "./CarCard";
import demoImage from "../assets/sample-item.jpg";
import SearchBar from "./SearchBar"; // ✅ new import

const SearchFilter = () => {
  const listings = [
    {
      title: "Intermediate SUV",
      price: "54.99",
      people: 5,
      duration: "4 days",
      image: demoImage,
    },
    {
      title: "Economy Car",
      price: "40.99",
      people: 4,
      duration: "3 days",
      image: demoImage,
    },
    {
      title: "Compact Car",
      price: "38.50",
      people: 4,
      duration: "3 days",
      image: demoImage,
    },
  ];

  return (
    <>
      <SearchBar /> {/* ✅ NEW top search bar */}
      <div className="flex text-black p-6 bg-gray-100 min-h-screen gap-6">
        <div className="w-1/4">
          <FilterSidebar />
        </div>

        <div className="w-3/4">
          <h2 className="text-2xl text-black font-bold mb-4">Search Results</h2>
          {listings.map((item, index) => (
            <CarCard
              key={index}
              title={item.title}
              price={item.price}
              people={item.people}
              duration={item.duration}
              image={item.image}
              onSelect={() => alert(`Selected: ${item.title}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
