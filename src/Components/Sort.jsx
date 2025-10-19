import React, { useContext } from 'react'
import CompanyContext from '../Context/CompanyContext'

const Sort = () => {
    const {sortedCompany, sortOrder, setSortOrder} = useContext(CompanyContext);
  return (
    <div>
        <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className='px-3 py-2 rounded-md bg-slate-700 text-white'>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
      
    </div>
  )
}

export default Sort
