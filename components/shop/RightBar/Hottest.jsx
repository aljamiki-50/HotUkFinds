"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FormatedAmounts from "@/components/FormatedAmounts/FormatedAmounts";
import { LuExternalLink } from "react-icons/lu";
import { FaGripfire } from "react-icons/fa";
import Link from "next/link";
import { GetShopData } from "@/Helpers/ShopProudcts/ShopProducts";
import { TrendOnes } from "@/Helpers/oneSlugPage/trendPage";

const Hottest = ({ items }) => {
  const [trendingproducts, setTrendingproducts] = useState([]);

  useEffect(() => {
    // const fetchProductsAll = async () => {
    //   const Fetchalldata = await GetShopData();

    //   setShopProducts(Fetchalldata);
    // };
    // Fetching the product within the trendingProduct here

    const fetchtrending = async () => {
      const fetchedtrends = await TrendOnes();
      setTrendingproducts(fetchedtrends);
    };

    // fetchProductsAll();
    fetchtrending();
  }, []);

  // console.log(trendingproducts);

  //  if you want  to integrate
  // console.log("here is  ", items);
  return (
    <div className=" mt-3 flex flex-col gap-y-3 ">
      {trendingproducts &&
        trendingproducts?.map((trendingone, index) => (
          <div className=" grid grid-cols-7 gap-y-3 border-b-2 border-black  border-spacing-4   gap-x-2">
            <div className=" rounded-lg w-full object-cover col-span-2 bg-red-300">
              <Link href={`/oneproduct/${trendingone?.slug}`}>
                <Image
                  className=" object-contain rounded-lg w-full h-full"
                  src={trendingone?.image1}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </Link>
            </div>
            <div className=" col-span-5 flex flex-col gap-y-2">
              <h1 className="text-lg line-clamp-1 text-left text-wrap font-semibold">
                {trendingone?.name}
              </h1>
              <div className=" flex items-center gap-x-2 trendingone-center">
                <p className=" text-xl font-bold">
                  <FormatedAmounts amount={trendingone?.price} />
                </p>
                {/* {trendingone &&
              trendingone.affiliateLink( */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={trendingone?.affiliateLink || "#"} // use '#' as a fallback URL if affiliateLink is undefined
                  className=" flex items-center text-center mx-auto   text-xl justify-center gap-x-1 font-bold  w-fit p-2 rounded-lg 
                  ring-1 bg-orange-500 hover:bg-white hover:ring-1 hover:ring-orange-400
                  "
                >
                  Buy now <LuExternalLink />
                </Link>
                {/* )} */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hottest;
