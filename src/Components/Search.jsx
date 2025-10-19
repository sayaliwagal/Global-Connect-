import React, { useContext } from "react";
import CompanyContext from "../Context/CompanyContext";

const Search = () => {
  const { searchText, setSearchText, handleSearchClick } =
    useContext(CompanyContext);
  return (
      <div className="flex w-full items-center">
        <input
          type="search"
          className="flex-1 px-4 py-2 rounded-l-full bg-slate-700 text-white placeholder-gray-300 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter Company Name...."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          id="search"
        />
        <button
          className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-r-full flex items-center gap-2 font-semibold text-slate-900 transition-all duration-300"
          onClick={() => {
            handleSearchClick();
          }}
        >
          Search
        </button>
      </div>
  );
};

export default Search;
