import React from "react";
import blogImg from '../assets/blog-img.png';

const BlogCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-3/4">
        <img
          src={blogImg}
          alt="Blog"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between text-left">
        <div>
          <p className="text-sm text-gray-500 mb-2">Blog</p>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Discover new <br />
            way to <br />
            decorate <br />
            your home .
          </h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...
          </p>
        </div>
        <hr className="border-t border-black mb-2 w-10" />
        <div className="flex items-center justify-between">
          <span className="text-sm">By Souha . H</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
