import React from "react";

const LoadingCategoriesCard = () => {
  rreturn(
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-gray-300 border-t-gray-600"></div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="h-4 w-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingCategoriesCard;
