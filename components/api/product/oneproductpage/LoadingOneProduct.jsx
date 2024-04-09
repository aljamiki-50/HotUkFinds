"use client";
import React from "react";
import Showproduct from "./showproduct/showproduct";
import TrendingproductSlider from "./Trendingproduct/TrendingproductSlider";
import PopularProductSlider from "./popularitems/PopularProductSlider";
import Container from "@/components/Container/Container";
import LoadingContainer from "@/components/Container/LoadingContainer";
import LoadingShowproduct from "./showproduct/Loadingshowproduct";
import LoadingTrendingproductSlider from "./Trendingproduct/LoadingTrendingproductSlider";
import LoadingPopularProductSlider from "./popularitems/LoadingPopularProductSlider";

const LoadingOneProduct = ({ newslug }) => {
  return (
    <div>
      <LoadingContainer>
        <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
          <LoadingShowproduct oneslug={newslug} />
        </div>
        {/* The Trending Products Parts Here  */}
        <div className=" hidden   sm:flex flex-col gap-y-2 ">
          <h1 className=" text-6xl py-2 font-bold antialiased">
            Trending Products
          </h1>
          <div>
            <LoadingTrendingproductSlider  />
          </div>
        </div>
        {/* the end of trending product here  */}
        <div className=" hidden   sm:flex flex-col gap-y-2 ">
          <h1 className=" text-6xl py-2 font-bold antialiased">
            Popular Products
          </h1>
          <div>
            <LoadingPopularProductSlider oneslug={newslug} />
          </div>
        </div>
      </LoadingContainer>
    </div>
  );
};

export default LoadingOneProduct;
