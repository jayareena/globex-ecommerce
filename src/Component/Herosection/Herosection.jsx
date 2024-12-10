// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PaginationDots from "../PaginationDots/PaginationDots";
import LandingSection from "../LandingSection/LandingSection";
import Banner from "../Banner/Banner";

const Herosection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    <LandingSection />,
    <Banner />,
    <LandingSection />,
     <Banner />,
      <LandingSection />,
  ];

  const handleDotClick = (index) => {
    setCurrentPage(index);
    console.log(`Navigated to page: ${index + 1}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-8 w-full">
        {pages[currentPage]}
      </div>
      <PaginationDots
        totalPages={pages.length}
        currentPage={currentPage}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default Herosection;
