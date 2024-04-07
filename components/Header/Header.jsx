"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Shopheader from "../shop/Shopheader";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Header = () => {
  const { data: session, status, ClientSafeProvider } = useSession();
  const sessionEmail = session?.user?.email;

  const pathname = usePathname();
  const [text, setText] = useState("");
  const router = useRouter();

  //  we usuing the debounce here we installed through npm i use-debounce --save so we not crushing or backEnd and make sure in our useeffect changed

  const [query] = useDebounce(text, 500);

  // console.log(text);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const res = await fetch("/api/mailchimp", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email: sessionEmail }),
        });

        const data = await res.json();

        if (data.error) {
          // Handle error (e.g., display error message to user)
          console.error(data.error);
        } else {
          // Email submitted successfully
          // console.log("User Logged successfully");
        }
      } catch (error) {
        // Handle network errors or other unexpected errors
        console.error("Error submitting email:", error);
      }
    };

    if (sessionEmail) {
      handleSubmit();
    }

    if (text || text === " ") {
      router.push(`/shop?search=${query}`);
    } else if (process.env.NODE_ENV === "development") {
    } else {
      setTimeout(() => {
        router.push("/");
      }, 1200000);
    }
  }, [query, router, sessionEmail]);

  return (
    <div>
      <div className="  bg-bodyColor h-20">
        {/* we create a contain to hold up our containg files  */}
        <Container
          classname={
            " h-full flex items-center md:gap-x-3 justify-between md:justify-start"
          }
        >
          <div className="   hidden sm:flex ">
            <Logo />
          </div>
          {/* Search field  */}
          <div
            className={`
            group:bg-white  sm:flex items-center gap-x-1 border-[1px]
            border-lightText/50 rounded-full px-4 py-1.5
             focus-within:border-orange-600 group
              flex justify-center transi  delay-150 ease-in-out
              ${text ? "w-full" : "w-[70%]"}
            `}
          >
            <FaSearch className="  group-focus-within:text-darkText duration-200 text-gray-500" />
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              type="text"
              placeholder="I'm shopping for . .  .  . "
              className=" placeholder:font-bold placeholder:text focus:w-full active:w-full  placeholder:text-xl flex-1 outline-none "
            />
          </div>
          {/* Login and register  */}
          {!session && (
            <div
              onClick={() => {
                signIn();
              }}
              className="
              sm:flex
              headerDiv  cursor-pointer"
            >
              <AiOutlineUser size={40} className="text-2xl" />
              <p className=" text-sm font-semibold hidden sm:block   ">
                Login/Register
              </p>
            </div>
          )}
          {/* user image  */}
          {session && (
            <Image
              className=" 
              sm:flex
              rounded-full object-cover"
              width={60}
              height={60}
              src={session?.user?.image}
              alt="my profile image"
            />
          )}
          {session && (
            <div
              onClick={() => {
                signOut();
              }}
              className="headerDiv "
            >
              <FiLogOut className="  text-2xl" />
              <p className="text-sm font-semibold hidden sm:block ">Logout</p>
            </div>
          )}
        </Container>
      </div>
      {pathname.startsWith("/category/") && (
        <Shopheader dynamicValue={pathname.substr("/category/".length)} />
      )}

      {/* {pathname.startsWith("/category") && <Shopheader />} */}
    </div>
  );
};

export default Header;
