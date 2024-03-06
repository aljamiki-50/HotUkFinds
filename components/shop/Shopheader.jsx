"use client";
import Container from "../Container/Container";
import sale1 from "@/assets/sale1.jpg";
import sale2 from "@/assets/sale2.jpg";
import sale3 from "@/assets/sale3.jpg";
import Image from "next/image";
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
                     bg-slate-700/95 ring-black text-bodyColor ring-2 rounded-lg p-2  w-[90%]   text-center  ml-2  "
                    >
                      {item?.category}
                      <span>
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
