import React, { useContext, useEffect, useState } from 'react'
import CompanyCard from './Components/CompanyCard';
import useCallApi from './Hook/useCallApi';
import { RingLoader } from 'react-spinners';
import NavBar from './Components/NavBar';
import CompanyContext from './Context/CompanyContext';

const App = () => {
const {filterCompanyData, loading, error} = useContext(CompanyContext);

    return (
    <div className='bg-gray-400 w-full min-h-screen ' >
      <NavBar/>
      <h3 className='m-5 p-6 text-center text-3xl font-extrabold text-slate-800 shadow-lg'>List Of Companies </h3>
      <div className='flex flex-wrap justify-center item-center gap-6 '>
        {loading && (
          <div className="flex justify-center">
            <RingLoader color="#092d98" size={200} speedMultiplier={1} />
          </div>
        )}
        {error && (
          <div className="p-4 text-red-500 bg-red-800 bg-opacity-90 text-3xl text-center border-red-700 rounded-lg">
            {error}
          </div>
        )}
          {!loading && !error && filterCompanyData.length > 0 && 
          filterCompanyData?.map((item) => {
            return(
              <CompanyCard key={item.id} companies={item}/>
            ) 
            
        })}
        {/* {!loading && !error && filterCompanyData.length === 0 && (
          <p className='text-gray-600 text-lg mt-10'>
            No Companies found matching `{searchText}`.
          </p>
        )} */}
        </div>
    </div>
  )
}

export default App
