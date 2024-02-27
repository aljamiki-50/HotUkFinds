"use client";
import Container from "../Container/Container";
import sale1 from "@/assets/sale1.jpg";
import sale2 from "@/assets/sale2.jpg";
import sale3 from "@/assets/sale3.jpg";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BannerText from "../Banner/BannerText";

const Shopheader = () => {
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
         justify-center absolute right-0 top-4 hover:bg-white hover:text-black cursor-pointer"
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
      <Container classname="py-0 relative ">
        <Slider className=" relative flex  justify-between gap-x-10  bg-darkText px-10 py-4" {...settings}>
          <div className=" relative">
            <h1 className="    bg-slate-700/95 ring-black text-bodyColor ring-2 rounded-lg p-2  w-[90%]   text-center  ml-2  ">
              Shop
            </h1>
          </div>
          <div className=" relative">
            <h1 className="    bg-slate-700/95 ring-black text-bodyColor ring-2 rounded-lg p-2  w-[90%]  text-center  ml-2  ">
              Electronics
            </h1>
          </div>
          <div className=" relative">
            <h1 className="    bg-slate-700/95 ring-black text-bodyColor ring-2 rounded-lg p-2  w-[90%]  text-center  ml-2  ">
              Kitchen
            </h1>
          </div>
          <div className=" relative">
            <h1 className="    bg-slate-700/95 ring-black text-bodyColor ring-2 rounded-lg p-2  w-[90%]  text-center  ml-2  ">
              Home
            </h1>
          </div>
          <div className=" relative">
            <h1 className="    bg-slate-700/95 ring-black text-bodyColor font-bold cursor-pointer ring-2 rounded-lg p-2  w-[90%]  text-center  ml-2  ">
              Backyard
            </h1>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Shopheader;
