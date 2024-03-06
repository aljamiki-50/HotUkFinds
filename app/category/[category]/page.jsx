"use client";
import { GetCategoryProduct } from "@/Helpers/categoryPage/categoryPage";
import ProductCard from "@/components/AllProducts/ProductCard";
import Container from "@/components/Container/Container";
import Shopheader from "@/components/shop/Shopheader";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  // console.log(params?.category)

  const [products, setProducts] = useState([]);
  const router = useRouter();
  const pathname = usePathname()

  console.log(pathname);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCategoryProduct(params?.category);
      setProducts(data);
    };

    fetchData();
  }, []);
  //   console.log(products);
  return (
    <Container
      classname={
        "sm:grid sm:grid-cols-7 flex flex-col md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10  min-h-screen"
      }
    >
      {/* <div className="  grid   col-span-4">
        <Shopheader />
      </div> */}

      {products && products?.map((items) => <ProductCard items={items} />)}
    </Container>
  );
};

export default page;
