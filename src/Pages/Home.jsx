// eslint-disable-next-line no-unused-vars
import React from "react";
import Herosection from '../Component/Herosection/Herosection';
import Invite from '../Component/Invite/Invite';
import Trending from '../Component/Trending/Trending';
import Dealoftheday from '../Component/Dealoftheday/Dealoftheday';
import Shopbycategories from '../Component/Shopbycategories/Shopbycategories';
import Banner from '../Component/Banner/Banner';
import Trendingoffers from '../Component/Trendingoffers/Trendingoffers'
import Testimonial from '../Component/Testimonial/Testimonial'
import Blogs from '../Component/Blogs/Blogs';
import Features from '../Component/Features/Features'
import Aboutus from '../Component/Aboutus/Aboutus'


const Home = () => {
  return (
    <>
    <Invite />
      <Herosection />
      <Trending />
      <Dealoftheday />
      <Banner />
      <Trendingoffers />
      <Shopbycategories />
      <Testimonial />
      <Blogs />
      <Features />
      <Aboutus />
      
      
    </>
  );
};

export default Home;
