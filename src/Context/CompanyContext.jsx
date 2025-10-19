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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
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
    setCurrentPage(1);
  };

  //Filter by selectedLocation
  useEffect(() => {
    if (selectedLocation === "All") return; //do nothing
    const res = companyData.filter((c) => c.location === selectedLocation);
    setFilterCompanyData(res);
    setCurrentPage(1);
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
    setCurrentPage(1);
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
  useEffect(() => {

    const sortedCompany = [...filterCompanyData].sort((a, b) => {
      if(sortOrder === "A-Z"){
        return a.companyName.localeCompare(b.companyName);
      }else{
        return b.companyName.localeCompare(a.companyName);
      }
    });
    setFilterCompanyData(sortedCompany)
  }, [sortOrder]);

//Pagination Caalculation 
const totalPages = Math.ceil(filterCompanyData.length / itemsPerPage);
const currentCompanies = filterCompanyData.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

const goToNextPage = () =>
  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) =>
  Math.max(prev - 1, 1)); 


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
        // sortedCompany,
        sortOrder,
        setSortOrder,
        currentCompanies,
        currentPage,
        totalPages,
        goToNextPage,
        goToPrevPage,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
