import React, {useContext} from 'react';
import CompanyContext from '../Context/CompanyContext';


const Search = () => {
  const { searchText, setSearchText, handleSearchClick,} = useContext(CompanyContext);
  return (
    <div>
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
    </div>
  )
}

export default Search


