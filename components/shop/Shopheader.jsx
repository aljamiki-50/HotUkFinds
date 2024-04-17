"use client";
import Container from "../Container/Container";
import sale1 from "@/assets/sale1.jpg";
import sale2 from "@/assets/sale2.jpg";
import sale3 from "@/assets/sale3.jpg";
import Image from "next/legacy/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

import BannerText from "../Banner/BannerText";
import { useEffect, useState } from "react";
import { GetCategroies } from "@/Helpers/Headers/HeadersCategories";
import Link from "next/link";

const Shopheader = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const FetchingCategory = async function () {
      const Fetching = await GetCategroies();
      setCategory(Fetching);
    };

    FetchingCategory();
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" opacity-40 hover:opacity-90 p-3
         bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex  
         justify-center absolute left-0 top-4 hover:bg-white hover:text-black cursor-pointer "
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
         bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex  
         justify-center absolute right-0 top-4  hover:bg-white hover:text-black cursor-pointer"
      >
        <FaArrowRight />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,

    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    // waitForAnimate: false
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 640, // Screens smaller than 768px
        settings: {
          slidesToShow: 4, // Show 3 slides on small screens
        },
      },
      {
        breakpoint: 430, // Screens smaller than 768px
        settings: {
          slidesToShow: 2, // Show 3 slides on small screens
        },
      },
      // {
      //   breakpoint: 9999, // Screens larger than 768px
      //   settings: "unslick", // Disable the slider on larger screens
      // },
    ],
  };

  return (
    <div className=" relative">
      <Container classname="py-0 relative">
        <Slider
          className=" relative flex  justify-between gap-x-10  bg-darkText px-10 py-4"
          {...settings}
        >
          {category &&
            category?.map((item) => {
              return (
                <div className=" relative">
                  <Link href={`/category/${item?.category}`}>
                    <h1
                      className="  flex justify-center items-center gap-x-2 uppercase
                      bg-gray-800 text-white font-bold ring-black text-bodyColor ring-2 rounded-lg p-2  w-[90%]   text-center  ml-2  "
                    >
                      {item?.category}
                      <span className=" hidden">
                        <IoHomeOutline />
                      </span>
                    </h1>
                  </Link>
                </div>
              );
            })}
        </Slider>
      </Container>
    </div>
  );
};

export default Shopheader;
