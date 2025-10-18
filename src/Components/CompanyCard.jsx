import React from "react";
import StarRating from "./StarRating";

const CompanyCard = (props) => {
  const { companies } = props;
  const {
    companyName,
    country,
    employees,
    foundedYear,
    industry,
    location,
    rating,
    description,
    website,
  } = companies;
  return (
    <div className="w-85 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
      <div className="p-2">
        <div className="flex justify-between mb-1">
          <h2 className="font-bold text-2xl mb-2">{companyName}</h2>
          <div className="text-center text-lg">
          <h5>{rating}</h5>
            <StarRating rating={rating} />
          </div>
        </div>
        <div className=" flex justify-between px-2">
          <h6 className="text-sm font-light text-gray-500 opacity-75 italic">
            {industry}
          </h6>
          <div className="flex item-center gap-2">
            <span className="text-sm font-light text-gray-500 opacity-75 italic">
              {location},
            </span>
            <span className="text-sm font-light text-gray-500 opacity-75 italic">
              {country}
            </span>
          </div>
        </div>
        <div className="flex item-center justify-between px-2">
          <span className="text-sm font-light text-gray-500 opacity-75 italic">
            from {foundedYear}
          </span>
          <span className="text-sm font-light text-gray-500 opacity-75 italic">
            {employees} employees
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2 mb-2">{description}</p>
        <a
  href={website}
  target="_blank"
  rel="noopener noreferrer"
    className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
>
  Visit Website
</a>
      </div>
    </div>
  );
};

export default CompanyCard;
