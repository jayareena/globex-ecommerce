// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Searchicon from "../assets/search_icon.png";
import Likeicon from "../assets/like_icon.jpg";
import Addtocarticon from "../assets/add_to_cart_icon.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-8 bg-white shadow-md">
      <div className="flex items-center">
        <img src={Logo} alt="Company Logo" className="h-10 w-auto" />
      </div>
      <div className="md:hidden ml-auto">
        {!isMenuOpen ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        ) : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-gray-800 mb-1 transform rotate-45"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1 transform -rotate-45"></div>
          </button>
        )}
      </div>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 text-light-gray font-[400] text-[18px] leading-[22.32px] `}
      >
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Shop</li>
        <li>Contact us</li>
      </ul>
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center bg-[#f0f0f0] border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-2 focus:outline-none bg-transparent w-full  text-gray-800 text-[18px] leading-[22.32px] font-normal"
          />
          <img
            src={Searchicon}
            alt="Search Icon"
            className="h-6 w-6 object-cover cursor-pointer"
          />
        </div>
        <img
          src={Likeicon}
          alt="Like Icon"
          className="h-8 w-8 object-cover cursor-pointer"
        />
        <img
          src={Addtocarticon}
          alt="Add to Cart Icon"
          className="h-10 w-8 object-cover cursor-pointer"
        />
        <button
              className=" py-2 px-4 rounded-lg border border-gray-800 hover:bg-gray-800 hover:text-white font-[400] text-[18px] leading-[22.32px]"
            >
              Login
            </button>
      </div>
    </nav>
  );
};

export default Navbar;
