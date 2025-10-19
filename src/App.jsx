import React, { useEffect, useState } from 'react'
import CompanyCard from './Components/CompanyCard';
import useCallApi from './Hook/useCallApi';
import { RingLoader } from 'react-spinners';
import NavBar from './Components/NavBar';

const App = () => {
  const [companyData, setCompanyData] = useState([]);
  const [filterCompanyData, setFilterCompanyData] = useState([]);
  const [searchText, setSearchText] = useState("");

 const api_key = import.meta.env.VITE_COMPANY_DATA_API_KEY;

 const {data, loading, error } = useCallApi(`https://api.mockaroo.com/api/12b5e230?count=100&key=${api_key}`);

 //useEffect for api fetching

 useEffect(() =>{
  if(Array.isArray(data)){
    setCompanyData(data);
    setFilterCompanyData(data);
  }
 },[data]);

 const filterValues = (companyData, searchText) => {
  const filterConpanies = companyData.filter((Value, i) => {
      return Value.companyName.toLowerCase().includes(searchText.toLowerCase());
  });
  return filterConpanies;
 };

 const handleSearchClick = () => {
  setFilterCompanyData(filterValues(companyData, searchText));
 };


    return (
    <div className='bg-gray-400 w-full min-h-screen p-2' >
      <NavBar searchText={searchText} setSearchText={setSearchText} onSearchClick = {handleSearchClick}/>
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
          {!loading && !error && filterCompanyData.length > 0 && 
          filterCompanyData?.map((item) => {
            return(
              <CompanyCard key={item.id} companies={item}/>
            ) 
            
        })}
        {!loading && !error && filterCompanyData.length === 0 && (
          <p className='text-gray-600 text-lg mt-10'>
            No Companies found matching `{searchText}`.
          </p>
        )}
        </div>
    </div>
  )
}

export default App
