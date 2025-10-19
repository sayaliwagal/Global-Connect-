import React, {useContext} from 'react'
import CompanyContext from '../Context/CompanyContext';
const LocationFilters = () => {
      const { selectedLocation, setSelectedLocation, uniqueLocations,} = useContext(CompanyContext);
  return (
    <div>  
      <select 
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer">
        {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  )
}

export default LocationFilters;
