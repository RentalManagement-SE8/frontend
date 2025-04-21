import React from "react";

const FilterSidebar = () => {
  return (
    <div className="bg-white text-black  rounded shadow p-4 w-full">
      <h3 className="text-lg text-black font-semibold mb-3">Filters</h3>
      <div className="mb-4">
        <p className="font-medium mb-2">Vehicle Type</p>
        {["Cars", "SUVs", "Trucks", "Vans"].map((type) => (
          <label key={type} className="block text-sm">
            <input type="checkbox" className="mr-2" /> {type}
          </label>
        ))}
      </div>
      <div>
        <p className="font-medium mb-2">Passengers</p>
        {[2, 4, 6, 8].map((n) => (
          <label key={n} className="block text-sm">
            <input type="checkbox" className="mr-2" /> {n}+
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
