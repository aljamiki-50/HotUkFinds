import React from "react";
import Image from "next/image";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsReddit,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import {
  FaAmazon,
  FaApplePay,
  FaCcApplePay,
  FaGooglePay,
  FaHome,
  FaPaypal,
  FaRegNewspaper,
} from "react-icons/fa";
import { PiContactlessPaymentThin } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";

const Footers = () => {
  return (
    <div className="   w-full bg-darkText text-slate-100">
      <Container
        classname={
          "grid grid-cols-1   justify-center  md:grid-cols-2 lg:grid-cols-4 gap-10"
        }
      >
        <div className=" flex flex-col   gap-y-4">
          <Logo />
          <p>
            Hello everyone! 👋 We're ecstatic to welcome you to our second
            platform! We hope you have an amazing experience with us. 😊 Our
            passion lies in delivering the best value, clear pricing, and
            high-quality products to our site visitors. You can also find a
            variety of different items you're looking for. #QualityFirst
            #ClearPricing #GreatExperience 🛍️💻
          </p>
          <div className=" hidden  items-center gap-x-4">
            <span className="  socialSpan">
              <BsInstagram />
            </span>
            <span className=" hidden socialSpan">
              <BsGithub />
            </span>
            <span className="socialSpan">
              <BsLinkedin />
            </span>
            <span className="socialSpan">
              <BsFacebook />
            </span>
            <span className="socialSpan">
              <BsReddit />
            </span>
          </div>
        </div>
        {/* 2nd coulmn  Posts footer */}
        <div className=" hidden">
          <p className=" text-lg">Latest Posts</p>
          <ul className=" text-sm mt-2 flex flex-col gap-y-2 font-bold">
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
          </ul>
        </div>
        {/* 3rd coulmn which The Links */}
        <div className="">
          <p className="  font-semibold text-3xl   "> Talk To Us Via</p>
          <ul className=" font-medium mt-6 flex flex-col gap-y-5 text-base">
            <Link href={"/"}>
              {" "}
              <li className=" flex items-center gap-x-2 hover:text-orange-500 cursor-pointer duration-200">
                <span>
                  <FaHome />
                </span>{" "}
                Home
              </li>
            </Link>
            {/* <Link href={"/Cart"}>
              <li className=" hover:text-orange-500 cursor-pointer duration-200">
                CART
              </li>
            </Link> */}

            <Link href={"/aboutus"}>
              <li className=" flex items-center gap-x-2  hover:text-orange-500 cursor-pointer duration-200">
                <span>
                  <FcAbout />
                </span>
                ABOUT
              </li>
            </Link>
            <Link href={"/NewsLetter"}>
              <li className="  flex items-center gap-x-2 hover:text-orange-500 cursor-pointer duration-200">
                <span>
                  <FaRegNewspaper />
                </span>
                NEWS LETTER
              </li>
            </Link>

            <Link href={"/Contact"}>
              <li className="  flex items-center gap-x-2 hover:text-orange-500 cursor-pointer duration-200">
                <span>
                  <IoMdContacts />
                </span>
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
        {/* 4th coulmn which is paymern */}
        <div className=" flex flex-col gap-y-6">
          <p className=" font-semibold text-lg mb-2   lg:text-2xl   ">
            Pay Us With trusted Services
          </p>
          <div className=" flex  scale-120 text-left  justify-around">
            <span>
              {" "}
              <FaAmazon size={24} fill=" red" />
            </span>
            <span className=" fill-blue-500">
              {" "}
              <FaPaypal size={24} fill=" blue/.7" />
            </span>
            <span>
              {" "}
              <FaGooglePay size={24} className=" fill-indigo-400 scale-110" />
            </span>
            <span>
              {" "}
              <FaApplePay size={24} className=" fill-cyan-400 scale-110" />
            </span>
            <span>
              {" "}
              <PiContactlessPaymentThin
                size={24}
                className=" fill-violet-400"
              />
            </span>
          </div>
          {/* 5th coulmn which is paymern */}

          <div className="  ml-3 flex flex-col gap-y-3">
            <p className=" font-semibold text-lg mb-2">
              Find us In Social Media :{" "}
            </p>
            <div className=" flex items-center gap-x-4">
              <span className="socialSpan">
                <BsYoutube size={24} />
              </span>
              <span className="socialSpan">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.instagram.com/uksaverz?igsh=OHBxa2J5ZGQwb21t&utm_source=qr"
                  }
                >
                  <BsInstagram
                    fill="#000"
                    size={24}
                    className=" fill-[#000000] "
                  />
                </Link>
              </span>

              <span className="socialSpan">
                <BsFacebook size={24} />
              </span>
              <span className="socialSpan">
                <BsReddit size={24} />
              </span>
            </div>
            {/* <Image src={payment} className=" w-full h-10" objectFit="cover"  alt=" hey how you d" /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footers;
