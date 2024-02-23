import Image from "next/image";
import React from "react";
import shoe1 from "@/assets/shoe1.jpg";
import { FaShippingFast } from "react-icons/fa";
import FormatedAmounts from "@/components/FormatedAmounts/FormatedAmounts";
import { LuExternalLink } from "react-icons/lu";


const ProudctCard = () => {
  return (
    <div className="  ring-1 ring-black rounded-lg   bg-white items-center align-center flex p-3 gap-x-3 py-4">
      <div className="  object-cover pt-5  w-full h-full">
        <Image
          src={shoe1}
          className=" text-center flex items-center w-full rounded-lg"
          priority
          objectFit="fit"
          objectPosition="center"
          width={300}
          height={600}
        />
      </div>
      <div className=" flex flex-col gap-y-4">
        {/* first Div */}
        <div className=""></div>
        {/* sec div */}
        <div className="  flex flex-col gap-y-4">
          <h1 className=" text-3xl font-semibold">
            Men's Waterproof Nike Air blue colour
          </h1>
          <div className=" flex items-center gap-x-4">
            <span className="  text-xl font-bold">
              {" "}
              <FormatedAmounts amount={20} />
            </span>{" "}
            <span className=" flex items-center border-r border-black   px-1 gap-x-2 font-semibold">
              <FaShippingFast /> £ 4.99
            </span>{" "}
            <span>Nike.com</span>
          </div>
          <p className=" line-clamp-2  font-medium antialiased">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            doloremque eveniet quaerat consectetur vel ratione tempore
            voluptatibus consequatur, unde earum placeat reiciendis! Qui
            delectus in earum error assumenda dolores fugiat.
          </p>
          <button className=" flex items-center text-center mx-auto   text-xl justify-center gap-x-1 font-bold  w-full p-3 ring-1 bg-red-300">
            {" "}
            Buy now <LuExternalLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProudctCard;
