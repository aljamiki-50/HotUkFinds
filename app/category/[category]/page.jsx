import { GetCategoryProduct } from "@/Helpers/categoryPage/categoryPage";
import ProductCard from "@/components/AllProducts/ProductCard";
import CategoryPage from "@/components/CategoryPage/Category/CategoryPage";
import Container from "@/components/Container/Container";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

import React, { cache } from "react";

//importing the cache to enhance our crawl around 
const getpost = cache;

export async function generateMetadata({ params }) {
  const { category } = params;

  const product = await GetCategoryProduct(category);

  // console.log("here",product[0]?.image2)

  const imageRef = product[0]?.image2;

  const imageUrl = imageRef;

  return {
    robots: { index: true, follow: true },
    title: product.name || "uksaverz.com",
    description: product.description,
    twitter: {
      card: "summary_large_image",
    },
    openGraph: {
      type: "website",
      url: `https://uksaverz.com/oneproduct/${category}`,
      title: product.name || "uksaverz.com",
      description:
        "Welcome to UKSaverz! 🎉 Discover cozy home kits and essentials that will elevate your space. From stylish decor to functional assets, we've got everything you need to create your dream home. Come explore our collection and find inspiration for your next project! ✨",
      images: imageUrl,
    },
  };
}

const page = ({ params }) => {
  return (
    <Container
      classname={
        "bg-white"
        // "sm:grid sm:grid-cols-7 flex flex-col md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10  min-h-screen"
      }
    >
      <CategoryPage params={params} />
    </Container>
  );
};

export default page;
