import React from 'react'
import productImage from '../assets/Product1.png';
import levisLogo from '../assets/levis.png';

const DealOfTheDayCard = () => {
  return (
<div className="max-w-sm mx-auto h-96  rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-60 object-cover"
        src={productImage}
        alt="Levi's Product"
      />
      <div className="p-4 text-center">
        <img
          src={levisLogo}
          alt="Levi's Logo"
          className="mx-auto w-16 mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Best of Styles</h2>
        <p className="text-sm font-semibold text-gray-700">Under Rs.799</p>
      </div>
    </div>
  )
}

export default DealOfTheDayCard