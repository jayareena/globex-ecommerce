import React from "react";
import customer from "../assets/customer.png";
import starIcon from '../assets/star_icon.png';

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 py-6 w-full h-auto md:w-[700px] md:h-[400px] mx-auto border border-gray-300 rounded-lg shadow-lg">
      <div className="mb-4 border-4 border-white rounded-full p-1">
        <img src={customer} alt="Customer" className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
      </div>

      {/* Rating Section */}
      <div className="flex items-center mb-4  pt-2 mt-4">
      <img src={starIcon} className="w-4 h-4 md:w-5 md:h-5"/>
                <img src={starIcon} className="w-4 h-4 md:w-5 md:h-5"/>
                <img src={starIcon} className="w-4 h-4 md:w-5 md:h-5"/>
                <img src={starIcon} className="w-4 h-4 md:w-5 md:h-5"/>
                <img src={starIcon} className="w-4 h-4 md:w-5 md:h-5"/>
                <img src={starIcon}  className="w-4 h-4 md:w-5 md:h-5" /> 
        <p className="ml-2 text-lg ">4.4</p>
      </div>

      {/* Testimonial Text */}
      <p className=" text-center text-sm md:text-base text-gray-700 mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper      </p>
    </div>
  );
};

export default Testimonial;
