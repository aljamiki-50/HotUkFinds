"use client";
import AllProducts from "@/components/AllProducts/AllProducts";
import ProductCard from "@/components/AllProducts/ProductCard";
import Container from "@/components/Container/Container";
import ImagesGallery from "@/components/api/product/ImagesScroller";
import { BsStar, BsTruck } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TrendOnes } from "@/Helpers/oneSlugPage/trendPage";
import { GetCertainProduct } from "@/Helpers/oneSlugPage/GetCertainProduct";
import { popularTrend } from "@/Helpers/oneSlugPage/popularPage";
import { LuExternalLink } from "react-icons/lu";
import React, { Suspense } from "react";


// ../components/HeavyComponent

export const dynamic = "force-dynamic";
// export const cache = "force-cache";

const OneProudctPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [trendingproducts, setTrendingproducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  // const Product = await GetCertainProduct(params.slug);
  //   const Product = await GetCertainProduct(params.slug);
  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await GetCertainProduct(params.slug);
      setProduct(fetchedProduct);
    };

    // Fetching the product within the trendingProduct here

    const fetchtrending = async () => {
      const fetchedtrends = await TrendOnes();
      setTrendingproducts(fetchedtrends);
    };
    // Fetching the popular Data here
    const fetchPopTrending = async () => {
      const fetchPopTrending = await popularTrend();
      setPopularProducts(fetchPopTrending);
    };

    fetchProduct();
    fetchtrending();
    fetchPopTrending();
  }, [params.slug]);

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

  return (
    <div className="      min-h-screen ">
      <Container>
        <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
          <div className=" grid gap-8  sm:grid-cols-2">
            <ImagesGallery images={product?.images} />
            <div className="md:py-8">
              <div className="  md:mb-3 mb-2">
                <span className=" p-3 bg-black hover:bg-black/80    rounded-md uppercase font-semibold tracking-wide mb-0.5  inline-block text-gray-100">
                  <Link href={`/category/${product?.categoryName}`}>
                    {product?.categoryName}
                  </Link>
                </span>
                <h2 className=" text-2xl font-bold text-gray-800 lg:text-3xl">
                  {product?.slug}
                </h2>
              </div>
              <div className=" mb-6 flex items-center gap-3 md:mb-10">
                <button className=" flex rounded-full gap-x-2">
                  <span className=" text-sm">4.2</span>
                  <BsStar className=" h-5 w-5" />
                </button>
                <span className=" text-sm text-gray-500 transition duration-100">
                  {product?.ratings} Ratings
                </span>
              </div>
              <div className=" mb-4">
                <div className=" flex items-end  gap-2">
                  <span className="  text-xl font-bold text-gray-800 md:text-2xl">
                    ${product?.price}
                  </span>
                  <span className="   mb-0.5 text-red-500   line-through">
                    ${product?.oldprice}
                  </span>
                </div>
                <span className=" text-sm text-gray-500">
                  Incl Vats Plus Shipping{" "}
                </span>
              </div>
              <div className=" mb-6 flex items-center gap-2 text-gray-500">
                <BsTruck className=" w-6 h-6" />
                <span className=" text-sm"> 2-4 days shipping</span>
              </div>
              <div className=" flex gap-2.5">
                {product && product.affiliateLink && (
                  // <Link
                  //   href={product.affiliateLink}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  //   className="w-full text-center bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200"
                  // >
                  //   Buy Now
                  // </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={product.affiliateLink}
                    className="w-full text-center flex  justify-center bg-orange-600 px-4 py-3 items-center gap-x-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200"
                  >
                    Buy now <LuExternalLink />
                  </Link>
                )}
              </div>
              <p className=" mt-5 text-base text-gray-500 tracking-wide line-clamp-6">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
        {/* The Trending Products Parts Here  */}
        <div className=" hidden   sm:flex  flex-col gap-y-2">
          <h1 className=" text-6xl py-2 font-bold antialiased">
            Trending Products :
          </h1>
          <Slider
            className="    sm:flex  flex-col sm:flex-row   gap-x-10 justify-around  "
            {...settings}
          >
            {trendingproducts &&
              trendingproducts?.map((items) => (
                <div className=" ">
                  <div className="  ml-2 ">
                    <ProductCard items={items} />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <div className=" hidden   sm:flex flex-col gap-y-2 ">
          <h1 className=" text-6xl py-2 font-bold antialiased">
            Popular Products
          </h1>
          <Slider
            className="    sm:flex  sm:flow-row   gap-x-10 justify-around  "
            {...settings}
          >
            {popularProducts &&
              popularProducts?.map((items) => (
                <div className=" ">
                  <div className=" my-2  ml-2 ">
                    <ProductCard items={items} />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default OneProudctPage;
