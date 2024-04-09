import React from "react";

const LoadingCategoryPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-16 h-16 rounded-full animate-spin border-4 border-gray-300 border-t-gray-600"></div>
      <div className="mt-4">
        <div className="h-4 w-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse mt-2"></div>
      </div>
    </div>
  );
};

export default LoadingCategoryPage;
