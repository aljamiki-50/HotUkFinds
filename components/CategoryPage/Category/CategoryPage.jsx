"use client";
import { GetCategoryProduct } from "@/Helpers/categoryPage/categoryPage";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Shopheader from "@/components/shop/Shopheader";
import Container from "@/components/Container/Container";
import ProductCard from "@/components/AllProducts/ProductCard";

const CategoryPage = ({ params }) => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const { category } = params;

  // console.log("the new cat  ",category);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCategoryProduct(params?.category);
      setProducts(data);
    };

    fetchData();
  }, [params?.category]);

  // console.log(products);

  return (
    <Container
      classname={
        "sm:grid sm:grid-cols-7 flex flex-col md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10  min-h-screen"
      }
    >
      {/* <CategoryPage /> */}

      {products && products?.map((items) => <ProductCard items={items} />)}
    </Container>
  );
};

export default CategoryPage;
