import Image from "next/image";
import React from "react";
import shoe1 from "@/assets/shoe1.jpg";
import shoe2 from "@/assets/shoe2.jpg";
import shoe3 from "@/assets/shoe3.jpg";
import shoe4 from "@/assets/shoe4.jpg";
import FormatedAmounts from "@/components/FormatedAmounts/FormatedAmounts";
import { LuExternalLink } from "react-icons/lu";
import { FaGripfire } from "react-icons/fa";

const Hottest = () => {
  return (
    <div className=" mt-3 flex flex-col gap-y-3 ">
      <div className=" grid grid-cols-7 gap-x-2">
        <div className=" rounded-lg w-full object-cover col-span-2 bg-red-300">
          <Image
            className=" rounded-lg w-full h-full"
            src={shoe4}
            width={"90%"}
            height={"90%"}
            objectFit="cover"
          />
        </div>
        <div className=" col-span-5 flex flex-col gap-y-2">
          <h1 className="text-3xl font-semibold">Nike Air max 200</h1>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl font-bold">
              <FormatedAmounts amount={20} />
            </p>
            <button className=" flex items-center text-center mx-auto   text-xl justify-center gap-x-1 font-bold  w-fit p-2 rounded-lg ring-1 bg-red-300">
              Buy now <LuExternalLink />
            </button>
          </div>
        </div>
      </div>
      {/* another one  */}
      <div className=" grid grid-cols-7 gap-x-2">
        <div className=" rounded-lg w-full object-cover col-span-2 bg-red-300">
          <Image
            className=" rounded-lg w-full h-full"
            src={shoe2}
            width={"90%"}
            height={"90%"}
            objectFit="cover"
          />
        </div>
        <div className=" col-span-5 flex flex-col gap-y-2">
          <h1 className="text-3xl font-semibold">Nike Air max 200</h1>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl font-bold">
              <FormatedAmounts amount={20} />
            </p>
            <button className=" flex items-center text-center mx-auto   text-xl justify-center gap-x-1 font-bold  w-fit p-2 rounded-lg ring-1 bg-red-300">
              Buy now <LuExternalLink />
            </button>
          </div>
        </div>
      </div>
      {/* Anotherone */}
      <div className=" grid grid-cols-7 gap-x-2">
        <div className=" rounded-lg w-full object-cover col-span-2 bg-red-300">
          <Image
            className=" rounded-lg w-full h-full"
            src={shoe1}
            width={"90%"}
            height={"90%"}
            objectFit="cover"
          />
        </div>
        <div className=" col-span-5 flex flex-col gap-y-2">
          <h1 className="text-3xl font-semibold">Nike Air max 200</h1>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl font-bold">
              <FormatedAmounts amount={20} />
            </p>
            <button className=" flex items-center text-center mx-auto   text-xl justify-center gap-x-1 font-bold  w-fit p-2 rounded-lg ring-1 bg-red-300">
              Buy now <LuExternalLink />
            </button>
          </div>
        </div>
      </div>
       {/* Anotherone */}
       <div className=" grid grid-cols-7 gap-x-2">
        <div className=" rounded-lg w-full object-contain col-span-2 bg-red-300">
          <Image
            className=" rounded-lg w-full h-full"
            src={shoe3}
            width={"90%"}
            height={"90%"}
            objectFit="fit"
            objectPosition="center left"
          />
        </div>
        <div className=" col-span-5 flex flex-col gap-y-2">
          <h1 className="text-3xl font-semibold">Nike Air max 200</h1>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl font-bold">
              <FormatedAmounts amount={20} />
            </p>
            <button className=" flex items-center text-center mx-auto   text-xl justify-center gap-x-1 font-bold  w-fit p-2 rounded-lg ring-1 bg-red-300">
              Buy now <LuExternalLink />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hottest;
