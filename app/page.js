import AllProducts from "@/components/AllProducts/AllProducts";
import Banner from "@/components/Banner/Banner";
import Image from "next/image";

export const metadata = {
  robots: { index: true, follow: true },
  title: " ✅ Home",
  // in case for absoulte Declaration at the tab it self
  // title:{
  //   absoulte: " ✅ AboutUs",
  // },

  ogImage: "/opengraph-image.jpg",
};

export default function Home() {
  return (
    <main className=" h-[10%] items-center justify-between overflow-hidden ">
      <Banner />
      <AllProducts />
    </main>
  );
}
