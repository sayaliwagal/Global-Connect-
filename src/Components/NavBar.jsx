import React from "react";
import Search from "./Search";
import LocationFilters from "./LocationFilters";
import IndustryFilters from "./IndustryFilters";
import Sort from "./Sort";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 text-white rounded-2xl shadow-lg py-4  flex flex-col md:flex-row item-center justify-between  gap-6 flex-wrap sticky top-0 z-50 ">
      <div className="flex item-center gap-2 ">
        <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text ">
            Global Connect 
        </span>
      </div>
      <div className=" min-w-100">
        <Search />
      </div>
       {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-300">Location</label>
          <LocationFilters />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-300">Industry</label>
          <IndustryFilters />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-300">Sort</label>
          <Sort />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
