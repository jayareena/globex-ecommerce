// eslint-disable-next-line no-unused-vars
import React from "react";
import data_product from "../assets/data"; 
import Item from "../Item/Item"; 

const Trending = () => {
  return (
    <div className="px-8 py-10">
      <h2 className="text-2xl md:text-4xl text-left font-bold mb-8 gap-4">Trending Now</h2>
      <div className="flex flex-wrap">
        {data_product.map((product) => (
          <div 
            key={product.id} 
            className="flex-shrink-0 w-full md:w-6/12 lg:w-3/12 xl:w-3/12 px-2 mb-4"
          >
            <Item
              image={product.image}
              name={product.name}
              brandname={product.brandname}
              star={product.star}
              new_price={product.new_price}
              old_price={product.old_price}
              offer={product.offer}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
