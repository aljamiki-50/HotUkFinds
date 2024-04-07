"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import React from "react";

const Info = ({ text, className }) => {
  const handleCloseClick = () => {
    // Call the passed callback to close the sheet
    closeSheet();
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger>{text}</SheetTrigger>
        <SheetContent
          side="left"
          className={`some-default-styles ${className}`}
        >
          <SheetHeader className={" mt-10 grid    grid-cols-1 "}>
            <SheetTitle className="p-10 shadow-xl  font-bold text-black rounded-sm ring-1 ring-black active:shadow-xl transition-all delay-150 ease-in-out  " >
              <Link href={"/aboutus"} onClick={handleCloseClick}>
                Aboutus{" "}
              </Link>
            </SheetTitle>
            <SheetTitle className="p-10 shadow-xl  font-bold text-black rounded-sm ring-1 ring-black active:shadow-xl transition-all delay-150 ease-in-out  " >
              <Link href={"/Contact"} onClick={handleCloseClick}>
              Contact{" "}
              </Link>
            </SheetTitle>
            <SheetTitle className="p-10 shadow-xl  font-bold text-black rounded-sm ring-1 ring-black active:shadow-xl transition-all delay-150 ease-in-out  " >
              <Link href={"/NewsLetter"} onClick={handleCloseClick}>
              NewsLetter{" "}
              </Link>
            </SheetTitle>
            <SheetTitle className="p-10 shadow-xl  font-bold text-black rounded-sm ring-1 ring-black active:shadow-xl transition-all delay-150 ease-in-out  " >
              <Link href={"/wishlist"} onClick={handleCloseClick}>
              wishlist{" "}
              </Link>
            </SheetTitle>
           
            {/* <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Info;
