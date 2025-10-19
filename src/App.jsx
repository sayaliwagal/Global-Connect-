import React, { useEffect, useState } from 'react'
import CompanyCard from './Components/CompanyCard';
import useCallApi from './Hook/useCallApi';
import { RingLoader } from 'react-spinners';

const App = () => {
  const [companyData, setCompanyData] = useState([]);

 const api_key = import.meta.env.VITE_COMPANY_DATA_API_KEY;

 const {data, loading, error } = useCallApi(`https://api.mockaroo.com/api/12b5e230?count=100&key=${api_key}`);

 //useEffect for api fetching

 useEffect(() =>{
  setCompanyData(data);
console.log(data);
 },[data]);


    return (
    <div className='bg-gray-400 w-full min-h-screen p-2' >
      <h3 className='mb-4 text-2xl font-bold p-2'>List Of Companies </h3>
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
          {!loading && !error && companyData.map((item) => {
            return(
              <CompanyCard key={item.id} companies={item}/>
            ) 
            
        })}
        </div>
    </div>
  )
}

export default App
