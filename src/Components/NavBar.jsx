import React, { useContext, useState } from "react";
import CompanyContext from "../Context/CompanyContext";

const NavBar = () => {
    const { searchText, setSearchText, selectedLocation, setSelectedLocation, uniqueLocations,  selectedIndustry, setSelectedIndustry,
        uniqueIndustrys, handleSearchClick,} = useContext(CompanyContext);
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <input
          type="search"
          className="px-4 py-2 w-full bg-slate-800 placeholder-slate-50 text-slate-50 border-2 border-gray-700 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-purple-300"
          placeholder="Enter Company Name...."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          id="search"
        />
        <button
          className="bg-slate-900 px-4 py-2 rounded-r-3xl text-slate-50 border-2 border-gray-700 font-bold font-stretch-50% cursor-pointer"
          onClick={() => {handleSearchClick()}}
        >
          Search
        </button>
      </div>
      <h1> filters</h1>
      <h3>Location :</h3>
      <select 
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="px-3 py-2 rounded-md bg-slate-700 text-white">
        {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
        ))}
      </select>
      <h3>Industry :</h3>
      <select 
      value={selectedIndustry}
      onChange={(e) => setSelectedIndustry(e.target.value)}
      className="px-3 py-2 rounded-md bg-slate-700 text-white">
        {uniqueIndustrys.map((ind, i) => (
            <option key={i} value={ind}>{ind}</option>
        ))}
      </select>
    </div>
  );
};

export default NavBar;
