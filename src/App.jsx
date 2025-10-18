import React, { useEffect, useState } from 'react'
import CompanyCard from './Components/CompanyCard';

const App = () => {
  const [companyData, setCompanyData] = useState([]);

 const api_key = import.meta.env.VITE_COMPANY_DATA_API_KEY;
 const data = async () => {
  try{
      const responce = await fetch(`https://api.mockaroo.com/api/12b5e230?count=100&key=${api_key}`);
      const data = await responce.json();
      setCompanyData(data);
    }catch(e){
    console.error("Error White Fetching data", e);
  }
}
  useEffect(() => {
    data();
  }, []);


    return (
    <div className='bg-gray-400 w-full min-h-screen p-2' >
      <h3 className='mb-4 text-2xl font-bold p-2'>List Of Companies </h3>
      <div className='flex flex-wrap justify-center item-center gap-6 '>

        {companyData.map((item) => {
          return(
            <CompanyCard key={item.id} companies={item}/>
          ) 
          
        })}
        </div>
    </div>
  )
}

export default App
