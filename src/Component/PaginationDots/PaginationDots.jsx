import React from "react";

const PaginationDots = ({ totalPages, currentPage, onDotClick }) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
            currentPage === index
              ? "bg-[#002482] scale-110"
              : "bg-gray-300 hover:bg-[#002482]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default PaginationDots;
