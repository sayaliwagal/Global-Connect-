import React, {useContext} from 'react'
import CompanyContext from '../Context/CompanyContext';

const IndustryFilters = () => {
      const { selectedIndustry, setSelectedIndustry, uniqueIndustrys,} = useContext(CompanyContext);
  return (
    <div>  
      <select 
      value={selectedIndustry}
      onChange={(e) => setSelectedIndustry(e.target.value)}
      className="px-3 py-2 rounded-md bg-slate-700 text-white">
        {uniqueIndustrys.map((ind, i) => (
            <option key={i} value={ind}>{ind}</option>
        ))}
      </select>
    </div>
  )
}

export default IndustryFilters;
