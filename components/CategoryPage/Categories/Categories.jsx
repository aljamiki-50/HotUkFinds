"use client";
import Container from "@/components/Container/Container";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard.jsx/CategoriesCard";
import { GetCategories } from "@/Helpers/categoryPage/Categories/Categories";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // const router = useRouter();
  // const pathname = usePathname();
  // const { category } = params;

  // console.log("the new cat  ",category);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCategories();
      setCategories(data);
    };

    fetchData();
  }, []);
  return (
    <Container classname={" min-h-screen"}>
      {/* it s that hard thing actually  */}
      <div
        className="
       grid
        sm:grid-cols-4 gap-4
       "
      >
        {categories?.map((category) => (
          <CategoriesCard category={category} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
