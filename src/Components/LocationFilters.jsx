import React, {useContext} from 'react'
import CompanyContext from '../Context/CompanyContext';
const LocationFilters = () => {
      const { selectedLocation, setSelectedLocation, uniqueLocations,} = useContext(CompanyContext);
  return (
    <div>  
      <select 
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="px-3 py-2 rounded-md bg-slate-700 text-white">
        {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  )
}

export default LocationFilters;
