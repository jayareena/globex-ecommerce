// eslint-disable-next-line no-unused-vars
import React from "react";
import c1_img from "../assets/category1.png";
import c2_img from "../assets/category2.png";
import c3_img from "../assets/category3.png";
import c4_img from "../assets/category4.png";
import c5_img from "../assets/category5.png";
import c6_img from "../assets/category6.png";

const ShopByCategories = () => {
  const categories = [
    { id: 1, image: c1_img },
    { id: 2, image: c2_img },
    { id: 3, image: c3_img },
    { id: 4, image: c4_img },
    { id: 5, image: c5_img },
    { id: 6, image: c6_img },
  ];

  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl md:text-4xl text-left font-bold mb-8">Shop by Categories</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {/* Category 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={categories[0].image}
              alt="category1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Categories 2 and 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={categories[1].image}
              alt="category2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={categories[2].image}
              alt="category3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Categories 4, 5, and 6 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
          <div className="relative rounded-lg overflow-hidden mb-4">
            <img
              src={categories[3].image}
              alt="category4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative rounded-lg overflow-hidden flex-1">
              <img
                src={categories[4].image}
                alt="category5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden flex-1">
              <img
                src={categories[5].image}
                alt="category6"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
