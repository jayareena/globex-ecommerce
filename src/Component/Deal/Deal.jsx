// eslint-disable-next-line no-unused-vars
import React from "react";
import levis from "../assets/levis.png"
const Deal = ({ image, underrupees }) => {
  return (
    <div className="border rounded-lg text-center shadow-md hover:shadow-lg transition ">
      <img src={image} alt="Deal Image" className="w-full h-56 object-cover mb-4" />
      <div className="flex flex-col items-center justify-center">
      <img src={levis} alt="Deal Image" className="w-23 h-10  mb-4" />
      <p className="text-xl font-semibold text-gray-800 mb-3">Best of Styles</p>
<p className="text-md text-gray-800 mb-3">Under Rs. {underrupees}</p>

      </div>
    </div>
  );
};

export default Deal;
