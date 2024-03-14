"use client";
import { popularTrend } from "@/Helpers/oneSlugPage/popularPage";
import ProductCard from "@/components/AllProducts/ProductCard";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TrendOnes } from "@/Helpers/oneSlugPage/trendPage";

const ProductCartContainer = ({ oneslug }) => {
//   console.log("hereis   the slug", oneslug);

  const [trendingproducts, setTrendingproducts] = useState([]);

  // const [popularProducts, setPopularProducts] = useState([]);

  //

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

  //   Slider settings
  var settings = {
    dots: false,
    infinite: true,

    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    // waitForAnimate: false
    cssEase: "ease-in-out",
  };

  useEffect(() => {
    // const fetchProduct = async () => {
    //   const fetchedProduct = await GetCertainProduct(params.slug);
    //   setProduct(fetchedProduct);
    // };

    // Fetching the product within the trendingProduct here

    const fetchtrending = async () => {
      const fetchedtrends = await TrendOnes();
      setTrendingproducts(fetchedtrends);
    };
    // Fetching the popular Data here
    // const fetchPopTrending = async () => {
    //   const fetchPopTrending = await popularTrend();
    //   setPopularProducts(fetchPopTrending);
    // };

    // fetchProduct();
    fetchtrending();
    // fetchPopTrending();
  }, [oneslug]);
  return (
    <Slider
      className="    sm:flex  sm:flow-row   gap-x-10 justify-around  "
      {...settings}
    >
      {trendingproducts &&
        trendingproducts?.map((items) => (
          <div className=" ">
            <div className=" my-2  ml-2 ">
              <ProductCard items={items} />
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default ProductCartContainer;
