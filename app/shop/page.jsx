"use client";
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import ProudctCard from "@/components/shop/ProudctCart/ProudctCard";
import Hottest from "@/components/shop/RightBar/Hottest";
import Shopheader from "@/components/shop/Shopheader";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaGripfire } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "@/sanity/lib/client";
import { GetShopData } from "@/Helpers/ShopProudcts/ShopProducts";

const page = async () => {
  const shopProducts = await GetShopData();
  // console.log(shopProducts);
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" opacity-40 hover:opacity-90 p-3
         bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex  
         justify-center absolute left-3  -bottom-9 hover:bg-white hover:text-black cursor-pointer "
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
         justify-center  absolute right-3  -bottom-9 hover:bg-white hover:text-black cursor-pointer"
      >
        <FaArrowRight />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,

    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    // waitForAnimate: false
    cssEase: "ease-in-out",
  };
  return (
    <div className=" min-h-screen">
      <Shopheader />
      <Container classname={" bg-slate-100/40"}>
        <div className=" grid grid-cols-7 gap-x-3  ">
          {/* The left side where you have all the product  */}
          <div className="   col-span-5 gap-y-2   rounded-lg flex flex-col">
            {shopProducts?.map((product, index) => (
              <div key={index} className="">
                 <ProudctCard product={product} />
              </div>
            ))}
            {/* <ProudctCard />
            <ProudctCard />
            <ProudctCard />
            <ProudctCard />
            <ProudctCard />
            <ProudctCard />
            <ProudctCard /> */}
          </div>
          {/* The right side where you have all the product  */}
          {/* The right side where you have all the product  */}
          <div className=" col-span-2 ring-1 ring-black rounded-lg  px-1 flex flex-col ">
            {/* Section of the hottest */}
            {/* Section of the hottest */}
            <div className=" ">
              {/* The Titile of the Section */}
              <div className="">
                <div className=" flex justify-between font-bold items-center  mt-9 mx-1">
                  <h1 className=" flex items-center text-2xl">
                    <span className=" animate-pulse  fill-red-800 text-red-700 ">
                      <FaGripfire fill=" red" />
                    </span>
                    Hottest
                  </h1>
                  <h1 className=" text-2xl">Today</h1>
                </div>
              </div>
              {/* The Begingin of the hottest  */}
              {/* <Hottest /> */}
              <Slider
                className=" relative   w-auto  pb-16  py-3 text-center mt-4"
                {...settings}
              >
                <div className=" relative">
                  <Hottest />
                </div>
                <div className=" relative">
                  <Hottest />
                </div>
                <div className=" relative">
                  <Hottest />
                </div>
                <div className=" relative">
                  <Hottest />
                </div>
              </Slider>
            </div>
            {/* Section of the Popular Categories */}
            {/* Section of the Popular Categories */}
            <div className=" ">
              {/* The Titile of the Section */}
              <div className="">
                <div className=" flex  gap-x-2 font-bold items-center  mt-9 mx-1">
                  <h1 className=" flex items-center text-2xl">
                    <span className=" animate-pulse  fill-red-800 text-red-700 ">
                      <FaGripfire fill=" red" />
                    </span>
                    Popular
                  </h1>
                  <h1 className=" text-2xl">Categories</h1>
                </div>
              </div>
              {/* The Begingin of the hottest  */}
              {/* <Hottest /> */}
              <Slider
                className=" relative   w-auto  pb-16  py-3 text-center mt-4"
                {...settings}
              >
                <div className=" relative">
                  <Hottest />
                </div>
                <div className=" relative">
                  <Hottest />
                </div>
                <div className=" relative">
                  <Hottest />
                </div>
                <div className=" relative">
                  <Hottest />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
