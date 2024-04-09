"use client";
import { CalPricePersentage } from "@/Helpers/CallPrice";
import FormatedAmounts from "@/components/FormatedAmounts/FormatedAmounts";
import Link from "next/link";
import shoe2 from "@/assets/shoe2.jpg";
import { useEffect, useState } from "react";
import { GetCategories } from "@/Helpers/categoryPage/Categories/Categories";
import Image from "next/legacy/image";
const CategoriesCard = (category) => {
  const [products, setProducts] = useState([]);

  return (
    <div className=" ring-1  w-full h-full rounded-lg overflow-hidden">
      <Link href={`/category/${category?.category?.name}`}>
        <div className="">
          <div
            // suppressHydrationWarning
            // onMouseEnter={() => {
            //   // setishovered(true);
            // }}
            // onMouseLeave={() => {
            //   // setishovered(false);
            // }}
            className=" relative  object-contain   w-full h-96 group overflow-hidden hover:"
          >
            <Image
              src={category?.category?.image}
              loading="lazy"
              width={700}
              height={700}
              layout="fill"
              alt=" picture for"
              className={`
                  w-full h-full object-cover group-hover:scale-110  rounded-t-lg group-hover:duration-500 group-hover:ease-in-out
 
               `}
            />
            {"items?.isNew " && (
              <span
                className="  uppercase   grid items-center ring-4  ring-yellow-600  text-center   mx-auto  absolute  top-2  right-2  
                text-xl font-bold px-3 py-1 bg-white duration-200  group-hover:text-white   group-hover:bg-orange-600 rounded-full "
              >
                {category?.category?.name}
              </span>
            )}
          </div>
          <div className="  hidden  border-[1px] border-slate-300  border-t-0  w-full h-full     px-2 py-4   flex-col gap-y-6 bg-white b rounded-b-lg">
            <h1 className="  font-semibold text-lg  text-center my-2 text-wrap line-clamp-1  p-5 w-[100%] h-[70%] ">
              {" "}
              {"items?.name"}
            </h1>
            {/* Price div */}
            <div className=" flex items-center justify-between">
              <div className=" border-[1px] py-1 px-4 rounded-full text-sm border-orange-700">
                <p>
                  {CalPricePersentage("items"?.price, "items"?.oldprice)}% Off
                </p>
              </div>
              <div className=" flex items-center gap-x-2">
                <p className=" line-through  text-red-400">
                  {/* {items?.oldPrice} */}
                  <FormatedAmounts amount={"items"?.oldprice} />
                </p>
                <p className="  font-semibold   text-green-500 text-xl ">
                  {/* {items?.oldPrice} */}
                  <FormatedAmounts amount={"items"?.price} />
                </p>
              </div>
            </div>
            {/* add to cart  div */}
            <div className=" flex items-center justify-between">
              <Link
                className=" w-full text-center  bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100   hover:bg-orange-800 hover:text-white duration-200
           "
                href={"/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </Link>
              {/* Start icon */}
              <div className=" flex items-center gap-x-1">{"startArray"}</div>
            </div>{" "}
          </div>
        </div>
      </Link>

      {/* <Toaster /> */}
    </div>
  );
};

export default CategoriesCard;
