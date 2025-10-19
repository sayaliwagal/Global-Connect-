import { createContext, useEffect, useState } from "react";
import useCallApi from "../Hook/useCallApi";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState([]);
  const [filterCompanyData, setFilterCompanyData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [sortOrder, setSortOrder] = useState("A-Z");

  const api_key = import.meta.env.VITE_COMPANY_DATA_API_KEY;
  const { data, loading, error } = useCallApi(
    `https://api.mockaroo.com/api/12b5e230?count=100&key=${api_key}`
  );

  //Load data from API
  useEffect(() => {
    if (Array.isArray(data)) {
      setCompanyData(data);
      setFilterCompanyData(data);
    }
  }, [data]);

  //Update filtered data whenever filter change
  const filterValues = (companyData, searchText) => {
    const filterConpanies = companyData.filter((Value, i) => {
      return Value.companyName.toLowerCase().includes(searchText.toLowerCase());
    });
    return filterConpanies;
  };

  const handleSearchClick = () => {
    setFilterCompanyData(filterValues(companyData, searchText));
  };

  //Filter by selectedLocation
  useEffect(() => {
    if (selectedLocation === "All") return; //do nothing
    const res = companyData.filter((c) => c.location === selectedLocation);
    setFilterCompanyData(res);
  }, [selectedLocation, companyData]);

  //Unique location for dropdown

  const uniqueLocations = [
    "All",
    ...new Set(
      companyData.map((c) => {
        return c.location;
      })
    ),
  ];

   //Filter by selectedIndustry
  useEffect(() => {
    if (selectedIndustry === "All") return; //do nothing
    const res = companyData.filter((c) => c.industry === selectedIndustry);
    setFilterCompanyData(res);
  }, [selectedIndustry, companyData]);

  //Unique location for dropdown

  const uniqueIndustrys = [
    "All",
    ...new Set(
      companyData.map((c) => {
        return c.industry;
      })
    ),
  ];

  const sortedCompany = companyData.sort((a, b) => {
    if(sortOrder === "A-Z"){
        return a.companyName.localeCompare(b.companyName);
    }else{
        return b.companyName.localeCompare(a.companyName);
    }
  });

  return (
    <CompanyContext.Provider
      value={{
        companyData,
        filterCompanyData,
        searchText,
        setSearchText,
        selectedLocation,
        setSelectedLocation,
        uniqueLocations,
        loading,
        error,
        handleSearchClick,
        selectedIndustry,
        setSelectedIndustry,
        uniqueIndustrys,
        sortedCompany,
        sortOrder,
        setSortOrder
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
