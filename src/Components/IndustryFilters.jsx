import React, {useContext} from 'react'
import CompanyContext from '../Context/CompanyContext';

const IndustryFilters = () => {
      const { selectedIndustry, setSelectedIndustry, uniqueIndustrys,} = useContext(CompanyContext);
  return (
    <div>  
      <select 
      value={selectedIndustry}
      onChange={(e) => setSelectedIndustry(e.target.value)}
      className="px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer">
        {uniqueIndustrys.map((ind, i) => (
            <option key={i} value={ind}>{ind}</option>
        ))}
      </select>
    </div>
  )
}

export default IndustryFilters;
