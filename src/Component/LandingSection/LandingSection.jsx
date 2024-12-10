// eslint-disable-next-line no-unused-vars
import React from "react";
import landingImage from '../assets/landing-section-left-img.jpg';
import landingImageright from '../assets/landing-section-right-img.png';
import prada from '../assets/prada.png';

const LandingSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-screen">
              <div className="w-full md:w-1/2 h-auto md:h-full">
        <img 
          src={landingImage} 
          alt="Fashion Model"
          className="w-full h-full object-cover"
        />
      </div>

<div className="relative w-full md:w-1/2 h-auto md:h-full ">
  <img 
    src={landingImageright} 
    alt="Fashion Model" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center text-center">
    <div className="relative z-10 flex flex-col items-center">
      <img 
        src={prada} 
        alt="Prada Logo" 
        className="mt-3 mb-8 w-auto h-5 md:h-10"
      />
      <p className="text-2xl sm:text-4xl md:text-5xl  font-bold text-custom-gray mb-6">
        Big Fashion Festival<br /><br />50% - 80% Off
      </p>
      <button className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg border border-black text-gray-800  rounded-lg hover:bg-gray-800 hover:text-white transition-all">
      Explore
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default LandingSection;
