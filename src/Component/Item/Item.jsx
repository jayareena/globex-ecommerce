// eslint-disable-next-line no-unused-vars
import React from "react";
import starIcon from '../assets/star_icon.png';

const Item = ({ image, name, brandname, star, new_price, old_price, offer }) => {
  return (
    <div className="border rounded-lg text-left shadow-md hover:shadow-lg transition ">
      {/* Image without padding */}
      <img
        src={image}
        alt={name}
        className="w-full h-56  " // No padding on image
      />
      
      {/* Product name */}
      <p className="text-lg  p-2">{name}</p>

      {/* Brand name and star aligned in a row with margin between them */}
      <div className="flex items-center p-2 gap-3">
        <p className="text-md text-gray-500 ">{brandname}</p> {/* Brand name */}
        
        <p className="text-gray-500 flex items-center">
          {star} {/* Star rating */}
          <img src={starIcon} alt="star" className="inline-block w-5 h-5" />
        </p>
      </div>

      {/* Price section with consistent spacing between elements */}
      <p className="text-base font-semibold flex justify-start  p-4 gap-3">
        Rs. {new_price}
        <span className="text-gray-500 line-through">Rs. {old_price}</span>
        <span className="text-green-600">({offer})</span>
      </p>
    </div>
  );
};

export default Item;
