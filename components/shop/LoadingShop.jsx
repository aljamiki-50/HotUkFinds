import React from "react";
import Shopheader from "@/components/shop/Shopheader";
import LoadingProductCard from "@/components/shop/ProudctCart/LoadingProductCard";
import LoadingHottest from "@/components/shop/RightBar/LoadingHottest";
import LoadingContainer from "../Container/LoadingContainer";

const LoadingShopComponent = () => {
  return (
    <div className="min-h-screen">
      <div className="hidden sm:block">
        <Shopheader />
      </div>
      <LoadingContainer classname={"bg-slate-100/40"}>
        <div className="grid grid-cols-7 gap-x-3">
          <div className="col-span-7 sm:col-span-5 gap-y-2 rounded-lg flex flex-col animate-pulse">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <LoadingProductCard />
              </div>
            ))}
          </div>
          <div className="hidden relative sm:col-span-2 ring-1 ring-black rounded-sm px-1 lg:flex flex-col">
            <div className="">
              <div className="flex justify-between font-bold items-center mt-9 mx-1">
                <div className="flex items-center text-2xl">
                  <div className="animate-pulse fill-red-800 text-red-700">
                    <div className="bg-gray-300 rounded-full h-6 w-6"></div>
                  </div>
                  <div className="bg-gray-300 rounded h-6 w-24 ml-2"></div>
                </div>
                <div className="bg-gray-300 rounded h-6 w-16"></div>
              </div>
            </div>
            <div className="animate-pulse">
              <LoadingHottest />
            </div>
            <div className="">
              <div className="flex justify-between font-bold items-center mt-9 mx-1">
                <div className="flex items-center text-2xl">
                  <div className="animate-pulse fill-red-800 text-red-700">
                    <div className="bg-gray-300 rounded-full h-6 w-6"></div>
                  </div>
                  <div className="bg-gray-300 rounded h-6 w-24 ml-2"></div>
                </div>
                <div className="bg-gray-300 rounded h-6 w-16"></div>
              </div>
            </div>
            <div className="animate-pulse">
              <LoadingHottest />
            </div>
          </div>
        </div>
      </LoadingContainer>
    </div>
  );
};

export default LoadingShopComponent;
