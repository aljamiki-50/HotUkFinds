"use client";

// import { CalPricePersentage } from "@/Helpers/GetAllProudcts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import FormatedAmounts from "../FormatedAmounts/FormatedAmounts";
import { CalPricePersentage } from "@/Helpers/CallPrice";

const ProductCard = ({ items }) => {
  const [ishovered, setishovered] = useState(false);
  const [initialImage, setInitialImage] = useState(items?.image1);

  useEffect(() => {
    setInitialImage(ishovered ? items?.image2 : items?.image1);
  }, [ishovered, items?.image1, items?.image2]);

  //
  const startArray = Array.from({ length: items?.rating }, (_, index) => (
    <span key={index} className=" text-yellow-500">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="  w-full h-full rounded-lg overflow-hidden">
      <Link
        // suppressHydrationWarning
        href={`/oneproduct/${items?.slug}`}
      >
        <div className="">
          <div
            suppressHydrationWarning
            onMouseEnter={() => {
              setishovered(true);
            }}
            onMouseLeave={() => {
              setishovered(false);
            }}
            className=" relative  object-contain  w-full h-96 group overflow-hidden hover:"
          >
            <Image
              src={initialImage}
              loading="lazy"
              width={500}
              height={500}
              alt=" picture for"
              className={`
                           w-full h-full object-fit group-hover:scale-110  rounded-t-lg group-hover:duration-500 group-hover:ease-in-out

              `}
            />
            {items?.isNew && (
              <span className=" absolute top-2 right-2 font-medium   text-xs px-3 py-1 bg-white duration-200  group-hover:text-white   group-hover:bg-orange-600 rounded-full ">
                New Arrival
              </span>
            )}
          </div>
          <div className="  border-[1px] border-slate-300  border-t-0  w-full h-full     px-2 py-4 flex  flex-col gap-y-6 bg-white b rounded-b-lg">
            <h1 className="  font-semibold text-lg  text-center my-2 text-wrap line-clamp-1  p-5 w-[100%] h-[70%] ">
              {" "}
              {items?.name}
            </h1>
            {/* Price div */}
            <div className=" flex items-center justify-between">
              <div className=" border-[1px] py-1 px-4 rounded-full text-sm border-orange-700">
                <p>{CalPricePersentage(items?.price, items?.oldprice)}% Off</p>
              </div>
              <div className=" flex items-center gap-x-2">
                <p className=" line-through  text-red-400">
                  {/* {items?.oldPrice} */}
                  <FormatedAmounts amount={items?.oldprice} />
                </p>
                <p className="  font-semibold   text-green-500 text-xl ">
                  {/* {items?.oldPrice} */}
                  <FormatedAmounts amount={items?.price} />
                </p>
              </div>
            </div>
            {/* add to cart  div */}
            <div className=" flex items-center justify-between">
              <Link
                className=" w-full text-center  bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100   hover:bg-orange-800 hover:text-white duration-200
          "
                // href="https://www.amazon.com/dp/B00KCIZ5SM?linkCode=ssc&tag=onamzvivirose-20&creativeASIN=B00KCIZ5SM&asc_item-id=amzn1.ideas.3R2OGRKAUHVS1&ref_=aip_sf_list_spv_ofs_mixed_d_asin&th=1"
                href={items?.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </Link>
              {/* Start icon */}
              <div className=" flex items-center gap-x-1">{startArray}</div>
            </div>{" "}
          </div>
        </div>
      </Link>
      {/* <Toaster /> */}
    </div>
  );
};

export default ProductCard;
