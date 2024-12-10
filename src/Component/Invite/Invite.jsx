// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Invite = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="flex items-center justify-center px-8 py-4 bg-[#f9faff] rounded-lg shadow-md relative">
        <p className="text-lg text-center">
          Invite Friends and get  50% off  
          on your next purchase.
          <span 
            className="ml-2 font-semibold cursor-pointer text-[#00398F] hover:underline"
          >
            Invite Now
          </span>
        </p>
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>
      </div>
    )
  );
};

export default Invite;
