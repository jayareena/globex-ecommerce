// eslint-disable-next-line no-unused-vars
import React from "react";
import banner from '../assets/banner.png';
import banner_logo from '../assets/banner_logo.png';

const Banner = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center p-4 sm:p-6 md:p-8 text-center text-center relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <img 
          src={banner_logo} 
          alt="forever" 
          className="mb-4 w-32 sm:w-40 md:w-48 lg:w-56"
        />
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-white mb-6">
          Big Fashion Festival<br /><br />50% - 80% off
        </p>
        <button className="px-6 py-3 border border-white text-white text-lg sm:text-xl md:text-2xl font-libre-baskerville rounded-lg hover:bg-white hover:text-gray-800 transition text-center">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
