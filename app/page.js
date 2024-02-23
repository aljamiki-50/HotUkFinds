import AllProducts from "@/components/AllProducts/AllProducts";
import Banner from "@/components/Banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" h-[10%] items-center justify-between overflow-hidden ">
      <Banner />
      <AllProducts />
    </main>
  );
}
