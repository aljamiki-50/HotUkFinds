"use client";
import React from "react";
import Showproduct from "./showproduct/showproduct";
import TrendingproductSlider from "./Trendingproduct/TrendingproductSlider";
import PopularProductSlider from "./popularitems/PopularProductSlider";
import Container from "@/components/Container/Container";

const OneProduct = ({ newslug }) => {
  return (
    <div>
      <Container>
        <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
          <Showproduct oneslug={newslug} />
        </div>
        {/* The Trending Products Parts Here  */}
        <div className=" hidden   sm:flex flex-col gap-y-2 ">
          <h1 className=" text-6xl py-2 font-bold antialiased">
            Trending Products
          </h1>
          <div>
            <TrendingproductSlider oneslug={newslug} />
          </div>
        </div>
        {/* the end of trending product here  */}
        <div className=" hidden   sm:flex flex-col gap-y-2 ">
          <h1 className=" text-6xl py-2 font-bold antialiased">
            Popular Products
          </h1>
          <div>
            <PopularProductSlider oneslug={newslug} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OneProduct;
