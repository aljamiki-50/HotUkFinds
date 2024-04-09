import LoadingContainer from "@/components/Container/LoadingContainer";
import React from "react";
import LoadingCategoriesCard from "./CategoriesCard.jsx/LoadingCategoriesCard";

const LoadingCategories = () => {
  rreturn(
    <LoadingContainer classname={" min-h-screen"}>
      {/* it s that hard thing actually  */}
      <div
        className="
       grid
        sm:grid-cols-4 gap-4
       "
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <LoadingCategoriesCard category={category} />
          </div>
        ))}
      </div>
    </LoadingContainer>
  );
};

export default LoadingCategories;
