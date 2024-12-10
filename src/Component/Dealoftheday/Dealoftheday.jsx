// eslint-disable-next-line no-unused-vars
import React from "react";
import deal_product from "../assets/dealimage"; 
import Deal from "../Deal/Deal"; 

const DealsOfTheDay = () => {
  return (
    <div className="px-8 py-10">
      <h2 className="text-2xl md:text-4xl text-left font-bold mb-8">Deals of the Day</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deal_product.map((deal) => (
          <Deal
            key={deal.id} 
            image={deal.image} 
            underrupees={deal.underrupees} 
          />
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
