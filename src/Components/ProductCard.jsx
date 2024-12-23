import React from 'react';
import ReactRating from 'react-rating-stars-component';
import productImg_1 from '../assets/Product1.png';

const product = {
  id: 1,
  name: 'Womens Denim Jacket',
  brandname: 'BrandName',
  offer: '30% off',
  image: productImg_1,
  new_price: 700,
  old_price: 1000,
  star: 4.4,
};

const Projectcard = () => {
  return (
    <div className="max-w-sm mx-auto px-4 py-8">
      <div className="border rounded-lg text-left shadow-md hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-tl-lg rounded-tr-lg"
        />
        <p className="text-lg font-semibold p-2">{product.name}</p>

        <div className="flex items-center p-2 gap-3">
          <p className="text-md text-gray-500">{product.brandname}</p>

          <div className="text-gray-500 flex items-center">
            <ReactRating
              count={1}
              value={product.star}
              activeColor="#848484"
            />
          </div>
        </div>

        <p className="text-base font-semibold flex justify-start p-2 gap-3">
          Rs. {product.new_price}
          <span className="text-gray-500 line-through">
            Rs. {product.old_price}
          </span>
          <span className="text-green-600">({product.offer})</span>
        </p>
      </div>
    </div>
  );
};

export default Projectcard;
