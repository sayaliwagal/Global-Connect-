import React, { useContext, useState } from "react";
import CompanyContext from "../Context/CompanyContext";
import Search from "./Search";
import LocationFilters from "./LocationFilters";
import IndustryFilters from "./IndustryFilters";

const NavBar = () => {
    const { selectedLocation, setSelectedLocation, uniqueLocations,  selectedIndustry, setSelectedIndustry,
        uniqueIndustrys,} = useContext(CompanyContext);
  return (
    <div className="flex items-center">
        <Search />
        <h1> filters</h1>
      <h3>Location :</h3>
      <LocationFilters />
      <h3>Industry :</h3>
       <IndustryFilters />
    </div>
  );
};

export default NavBar;
