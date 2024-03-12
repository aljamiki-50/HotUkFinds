import Subscribe from "@/components/aboutuspage/newsletter/newsletter";
import React from "react";

export const metadata = {
  robots: { index: true, follow: true },
  title: " ✅ NewsLetter",
  // in case for absoulte Declaration at the tab it self
  // title:{
  //   absoulte: " ✅ AboutUs",
  // },

  ogImage: "/opengraph-image.jpg",
};

const page = () => {
  return (
    <div>
      <Subscribe />
    </div>
  );
};

export default page;
