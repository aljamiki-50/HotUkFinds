"use client";
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import ProudctCard from "@/components/shop/ProudctCart/ProudctCard";
import Hottest from "@/components/shop/RightBar/Hottest";
import Shopheader from "@/components/shop/Shopheader";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGripfire } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "@/sanity/lib/client";
import { GetShopData } from "@/Helpers/ShopProudcts/ShopProducts";
import { TrendOnes } from "@/Helpers/oneSlugPage/trendPage";
import { popularTrend } from "@/Helpers/oneSlugPage/popularPage";

const Page = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [trendingproducts, setTrendingproducts] = useState([]);

  useEffect(() => {
    const fetchProductsAll = async () => {
      const Fetchalldata = await GetShopData();
      setShopProducts(Fetchalldata);
    };

    const fetchtrending = async () => {
      const fetchedtrends = await TrendOnes();
      setTrendingproducts(fetchedtrends);
    };

    // is the  lst one ever you
    const fetchPopTrending = async () => {
      const fetchPopTrending = await popularTrend();
      setPopularProducts(fetchPopTrending);
    };
    // console.log(popularProducts);

    fetchPopTrending(), fetchProductsAll();
    fetchtrending();
  }, []); // Removed extra empty array here

  // console.log(popularProducts);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="sm:absolute  z-30 opacity-40 hover:opacity-90 p-3
           hover:text--orange-500 duration-200 rounded-full sm:flex  
           justify-center left-3 bottom-0  hover:bg-white hover:text-black cursor-pointer"
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
        className="sm:absolute  opacity-40 hover:opacity-90 p-3 z-30
           bg-slate-100 hover:text--orange-500 duration-200 rounded-full sm:flex 
           justify-center right-3 bottom-0  hover:bg-white hover:text-black cursor-pointer"
      >
        <FaArrowRight />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="min-h-screen">
     <div className="">
       <Shopheader />
     </div>
      <Container classname={"bg-slate-100/40"}>
        <div className="grid grid-cols-7 gap-x-3">
          <div className="col-span-7 sm:col-span-5 gap-y-2 rounded-lg flex flex-col">
            {shopProducts?.map((product, index) => (
              <div key={index} className="">
                <ProudctCard product={product} />
              </div>
            ))}
          </div>
          <div className="  hidden  relative sm:col-span-2 ring-1 ring-black rounded-sm px-1 lg:flex flex-col">
            <div className="">
              <div className="flex justify-between font-bold items-center mt-9 mx-1">
                <h1 className="flex items-center text-2xl">
                  <span className="animate-pulse fill-red-800 text-red-700">
                    <FaGripfire fill="red" />
                  </span>
                  Hottest
                </h1>
                <h1 className="text-2xl">Today</h1>
              </div>
            </div>
            <Slider className=" " {...settings}>
              {trendingproducts &&
                trendingproducts?.map((trending, index) => (
                  <div key={index} className="flex flex-col ">
                    <Hottest items={trending} />
                  </div>
                ))}
            </Slider>
            {/*  The Popular section */}
            <div className="">
              <div className="flex justify-between font-bold items-center mt-9 mx-1">
                <h1 className="flex items-center text-2xl">
                  <span className="animate-pulse fill-red-800 text-red-700">
                    <FaGripfire fill="red" />
                  </span>
                  Popular
                </h1>
                <h1 className="text-2xl">Today</h1>
              </div>
            </div>
            <div>
              <Slider className=" " {...settings}>
                {popularProducts &&
                  popularProducts?.map((trending, index) => (
                    <div key={index} className="flex flex-col ">
                      <Hottest items={trending} />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          {/* The  End Popular Section  */}
        </div>
      </Container>
    </div>
  );
};

export default Page;
