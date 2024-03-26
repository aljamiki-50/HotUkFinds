"use client";
import { client } from "@/sanity/lib/client";
import Container from "../Container/Container";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { GetData } from "@/Helpers/allProductInMainPage/GetData";

// Fetching all products

export const dynamic = "force-dynamic";
// export const cache = "force-cache";
// cache: 'force-cache'

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData();

      setProducts(data);
    };

    fetchData();
  }, [products]);


  return (
    <Container
      classname={
        " grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10 "
      }
    >
      {products?.map((items) => (
        <ProductCard items={items} />
      ))}
    </Container>
  );
};

export default AllProducts;
