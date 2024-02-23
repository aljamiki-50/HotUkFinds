"use client";
import sale1 from "@/assets/sale1.jpg";
import sale2 from "@/assets/sale2.jpg";
import sale3 from "@/assets/sale3.jpg";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BannerText from "./BannerText";

const Banner = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" opacity-40 hover:opacity-90 p-3 bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex  justify-center absolute left-2 top-1/2 hover:bg-white cursor-pointer "
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
        className=" opacity-40 hover:opacity-90 z-20 p-3 bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex  justify-center absolute right-2 top-1/2 hover:bg-white cursor-pointer "
      >
        <FaArrowRight />
      </div>
    );
  };

  var settings = {
    dots: false,
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
    <div className="relative outline-none">
      <Slider {...settings}>
        <div className=" relative w-full h-full object-center">
          <Image
            objectFit="cover"
            src={sale1}
            alt=" sale1"
            width={1920}
            height={1080}
            priority
          />
          <BannerText title={"Picks for good winter"} />
        </div>
        <div className=" relative w-full h-full object-center">
          <Image
            objectFit="cover"
            src={sale2}
            alt=" sale2"
            width={1920}
            height={1080}
            priority
          />
          <BannerText title={"Picks for good winter"} />
        </div>
        <div className="relative w-full h-full object-center">
          <Image
            objectFit="cover"
            src={sale3}
            alt=" sale3"
            width={1920}
            height={1080}
          />
          <BannerText title={"Picks for good winter"} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
