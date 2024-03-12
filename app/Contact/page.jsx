import Contact from "@/components/contactpage/Contatcs/contact";
import MainContact from "@/components/contactpage/Contatcs/mainContact";
import Head from "next/head";

export const metadata = {
  robots: { index: true, follow: true },
  title: " ✅ Contact",
  // in case for absoulte Declaration at the tab it self
  // title:{
  //   absoulte: " ✅ AboutUs",
  // },

  ogImage: "/opengraph-image.jpg",
};

const page = () => {
  return (
    <>
      <div>
        <MainContact />
      </div>
    </>
  );
};

export default page;
