import React from "react";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import Link from "next/link";

const BannerText = ({ title,desc,style}) => {
  return (
    <div className=" hidden lg:inline-block mt-28 absolute top-0 left-0 h-full w-full">
      <Container classname=" flex flex-col  gap-y-8 justify-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-7xl  font-bold text-indigo-500"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className=" text-xl  text-bodyColor  flex flex-col"
        >
                {/* <p dangerouslySetInnerHTML={{ __html: desc }} /> */}
          
          <div className={`${style}  flex flex-col w-1/2 gap-y-3 `}>{desc}</div>

           
         
        </motion.p>
        <motion.div
          className=" flex  gap-x-4 mt-3 cursor-pointer"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            className="  font-black font-bold z-30 py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase"
            href={"/category"}
          >
            Find out More
          </Link>

          <Link
            className=" font-bold z-30 py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase"
            href={"/shop"}
          >
            Shop Now
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;
