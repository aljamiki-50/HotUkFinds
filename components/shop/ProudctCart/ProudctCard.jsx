"use client";
import Image from "next/image";
import React, { useState } from "react";
import shoe1 from "@/assets/shoe1.jpg";
import { FaShippingFast } from "react-icons/fa";
import FormatedAmounts from "@/components/FormatedAmounts/FormatedAmounts";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import OneProduct from "@/components/api/product/OneProduct";

const ProudctCard = ({ product }) => {
  const [ishovered, setishovered] = useState(false);

  // console.log(product?.image1);
  return (
    <div className=" sm:grid sm:grid-cols-6  ring-1 ring-black rounded-lg   bg-white items-center align-center  p-3 gap-x-3 py-4">
      <div className=" col-span-7   sm:col-span-2  object-cover pt-5  w-full h-full">
        <Image
          src={ishovered ? product?.image1 : product?.image2}
          alt={product?.name}
          onMouseEnter={() => {
            setishovered(true);
          }}
          onMouseLeave={() => {
            setishovered(false);
          }}
          className=" text-center  object-cover transition-all  ease-in-out flex items-center w-full h-full rounded-lg"
          priority
          objectFit="fit"
          objectPosition="center"
          width={300}
          height={300}
        />
      </div>
      <div className=" col-span-4 flex flex-col gap-y-4">
        {/* first Div */}
        <div className=""></div>
        {/* sec div */}
        <div className="  flex flex-col gap-y-4">
          <h1 className=" text-3xl font-semibold"> <Link
              href={`/oneproduct/${product?.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product?.name}
            </Link></h1>
          <div className=" flex items-center gap-x-2">
            <span className="  text-xl font-bold">
              {" "}
              <FormatedAmounts amount={product?.price} />
            </span>{" "}
            <span className=" flex items-center border-r border-black   px-1 gap-x-2 font-semibold">
              <FaShippingFast /> £ 4.99
            </span>{" "}
            {/* <span>{product?.name}</span> */}
          </div>
          <p className="     line-clamp-2 font-medium antialiased">
            {product.description}
          </p>
          <button className=" w-full bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100   hover:bg-orange-800 hover:text-white duration-200">
            <Link
              href={product?.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </Link>
            
          </button>
          <button className=" w-full bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100   hover:bg-orange-800 hover:text-white duration-200">
            <Link
              href={`/oneproduct/${product?.slug}`}
              
            >
              Read more
            </Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProudctCard;
