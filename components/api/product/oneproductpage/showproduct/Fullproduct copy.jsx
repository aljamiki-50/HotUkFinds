"use client"
import React, { useEffect, useState } from "react";
import ImagesGallery from "../../ImagesScroller";
import Link from "next/link";
import { BsStar, BsTruck } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
import { GetCertainProduct } from "@/Helpers/oneSlugPage/GetCertainProduct";

const Fullproductcopy = ({ One }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await GetCertainProduct(One);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [One]);

  //   console.log("here the one  product is ", One);
  return (
    <div>
        <Fullproductcopy />
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
              <span className="  text-xl font-bold text-green-800 md:text-2xl">
                £ {""}
                {product?.price}
              </span>

              <span className="mb-0.5 text-red-500 line-through">
                {product?.oldprice && <>£{product?.oldprice}</>}
              </span>
            </div>
            <span className=" text-sm text-gray-500">
              Incl Vats Plus Shipping
            </span>
          </div>
          <div className=" mb-6 flex items-center gap-2 text-gray-500">
            <BsTruck className=" w-6 h-6" />
            <span className=" text-sm"> 2-4 days shipping</span>
          </div>
          <div className=" flex gap-2.5">
            {product && product.affiliateLink && (
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
  );
};

export default Fullproductcopy;
