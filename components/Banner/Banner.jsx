"use client";
import sale1 from "@/assets/sale1.jpg";
import sale2 from "@/assets/sale2.jpg";
import sale3 from "@/assets/sale3.jpg";
import kitchen1 from "@/assets/kitchen1.jpg";
import kitchen2 from "@/assets/kitchen2.jpg";
import kitchen3 from "@/assets/kitchen3.jpg";
import gadget2 from "@/assets/gadget/gadget2.jpg";
import home1 from "@/assets/home/home1.jpg";
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
            // layout="fill"
            src={home1}
            alt=" sale1"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <div className="absolute inset-0 bg-black/70 z-20 opacity-50" />
          <BannerText
            title={"Picks for good home"}
            desc={
              "🏠 Spruce up your space with our mid-season sale on home items!Don't miss out on these fantastic deals! Click the link in our bio to shop now. 🌼"
            }
          />
        </div>
        {/* desc={"Stock up on sport wear and limted Edition collection on our  awesome mid-season sale"} */}
        <div className=" relative w-full h-full object-cover">
          <Image
            // layout="fill"
            src={gadget2}
            alt=" sale1"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <div className="absolute inset-0  bg-black/70 z-20  opacity-50" />

          <BannerText
            title={"Picks for good winter"}
            desc={
              "Hey Tech Enthusiasts! 🚀 Get ready for some incredible deals on the latest gadgets! From smartphones to smartwatches, we've scoured the web to bring you the best prices on all things tech. Don't miss out on these amazing offers - shop now and upgrade your tech game without breaking the bank!   💻📱🔌"
            }
            style={" text-white/90 font-bold"}
          />
        </div>
        {/*  it  s the main banner tho */}
        <div className="relative w-full h-full object-cover">
          <Image
            // layout="fill"
            src={kitchen3}
            alt=" sale1"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <div className="absolute inset-0  bg-black/70 z-20  opacity-50" />

          <BannerText
            title={"Picks for good Meals"}
            desc={
              "🍳 Looking for kitchen deals? We've got you covered! Check out our selection of amazing offers on kitchen essentials today!  🛒"
            }
            style={"text-white font-bold"}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
