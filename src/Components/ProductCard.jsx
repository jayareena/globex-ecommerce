// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactRating from 'react-rating-stars-component';
import productImg_1 from './assets/Product1.png';
import productImg_2 from './assets/Product2.png';
import productImg_3 from './assets/Product3.png';
import productImg_4 from './assets/Product4.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data_product = [
  {
    id: 1,
    name: 'Womens Denim Jacket',
    brandname: 'BrandName',
    offer: '30% off',
    image: productImg_1,
    new_price: 700,
    old_price: 1000,
    star: 4.4,
  },
  {
    id: 2,
    name: 'Womens Denim Jacket',
    brandname: 'BrandName',
    offer: '30% off',
    image: productImg_2,
    new_price: 700,
    old_price: 1000,
    star: 4.4,
  },
  {
    id: 3,
    name: 'Womens Denim Jacket',
    brandname: 'BrandName',
    offer: '30% off',
    image: productImg_3,
    new_price: 700,
    old_price: 1000,
    star: 4.4,
  },
  {
    id: 4,
    name: 'Womens Denim Jacket',
    brandname: 'BrandName',
    offer: '30% off',
    image: productImg_4,
    new_price: 700,
    old_price: 1000,
    star: 4.4,
  },
];
const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProductCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <Slider {...settings} className="carousel-container">
        {data_product.map((product) => (
          <div key={product.id} className="px-2">
            <div className="border rounded-lg text-left shadow-md hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-tl-lg rounded-tr-lg"
              />
              <p className="text-lg font-semibold p-2">{product.name}</p>

              <div className="flex items-center p-2 gap-3">
                <p className="text-md text-gray-500">{product.brandname}</p>

                <p className="text-gray-500 flex items-center">
                  <ReactRating
                    count={1}
                    value={product.star}
                    activeColor="#848484"
                  />
                </p>
              </div>

              <p className="text-base font-semibold flex justify-start p-4 gap-3">
                Rs. {product.new_price}
                <span className="text-gray-500 line-through">
                  Rs. {product.old_price}
                </span>
                <span className="text-green-600">({product.offer})</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCard;
