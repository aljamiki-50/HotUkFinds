import Container from "@/components/Container/Container";
import React from "react";
import { IoHomeOutline, IoThermometerOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";
import { BsInfoSquare } from "react-icons/bs";
import { LuBadgePercent } from "react-icons/lu";

import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import Info from "@/components/ui/Info";

const PageNavBar = () => {
  return (
    <div className="  sm:0  bottom-0 sticky   sm:hidden    py-0  bg-white   ring-black rounded-s ">
      <div className=" grid grid-cols-4 gap-x-2  items-start text-center p-0 py-0  ">
        <div
          className=" text-center shadow-md   antialiased font-bold 
         flex flex-col   items-center  "
        >
          <Link href={"/"} className=" ">
            <IoHomeOutline size={40} />
            <h1>Home</h1>
          </Link>
        </div>
        <div
          className=" text-center shadow-md   antialiased font-bold
         flex flex-col items-center"
        >
          <TbCategoryPlus size={40} />
          <Link href={"/category"}>
            <h1>Categories</h1>
          </Link>
        </div>
        <div
          className=" text-center shadow-md   antialiased font-bold
         flex flex-col items-center"
        >
          <LuBadgePercent size={40} />
          <Link href={"/deals"}>
            <h1>Deals</h1>
          </Link>
        </div>
        <div
          className=" text-center shadow-md   antialiased font-bold
         flex flex-col items-center"
        >
          <div>
            {" "}
            <BsInfoSquare size={40} />
            <Info text={"info"} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PageNavBar;
