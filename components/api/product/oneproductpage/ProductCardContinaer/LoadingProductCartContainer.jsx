"use client";

import { popularTrend } from "@/Helpers/oneSlugPage/popularPage";
import ProductCard from "@/components/AllProducts/ProductCard";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TrendOnes } from "@/Helpers/oneSlugPage/trendPage";

const ProductCartContainer = ({ oneslug }) => {
  const [trendingproducts, setTrendingproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" opacity-40 hover:opacity-90 p-3 ring-10 ring-red-500
               bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex  
               justify-center absolute -left-10 top-[40%] hover:bg-white hover:text-black cursor-pointer "
      >
        <FaArrowLeft />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" 
              opacity-40 hover:opacity-90 p-3
               bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex z-40  
               justify-center  absolute -right-10 top-[40%] hover:bg-white hover:text-black cursor-pointer"
      >
        <FaArrowRight />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  useEffect(() => {
    const fetchtrending = async () => {
      try {
        const fetchedtrends = await TrendOnes();
        setTrendingproducts(fetchedtrends);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchtrending();
  }, [oneslug]);

  return (
    <Slider
      className="    sm:flex  sm:flow-row   gap-x-10 justify-around  "
      {...settings}
    >
      {isLoading
        ? // Render loading skeleton
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-md h-64 w-full"></div>
              <div className="bg-gray-200 rounded-md h-8 w-full mt-2"></div>
            </div>
          ))
        : // Render actual product cards
          trendingproducts?.map((items) => (
            <div key={items.id} className=" ">
              <div className=" my-2  ml-2 ">
                <ProductCard items={items} />
              </div>
            </div>
          ))}
    </Slider>
  );
};

export default ProductCartContainer;
