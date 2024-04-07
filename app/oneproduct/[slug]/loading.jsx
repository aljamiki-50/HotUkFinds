import React from "react";

const LoadingOneProductPage = () => {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-gray-300 rounded-lg h-96"></div>
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <div className="bg-gray-300 rounded-md h-6 w-32 mb-2"></div>
              <div className="bg-gray-300 rounded h-8 w-64"></div>
            </div>
            <div className="mb-6 md:mb-10 flex items-center gap-3">
              <div className="flex rounded-full gap-x-2 bg-gray-300 h-6 w-20"></div>
              <div className="bg-gray-300 rounded h-4 w-24"></div>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <div className="bg-gray-300 rounded h-8 w-24"></div>
                <div className="bg-gray-300 rounded h-6 w-16 mb-1"></div>
              </div>
              <div className="bg-gray-300 rounded h-4 w-32"></div>
            </div>
            <div className="mb-6 flex items-center gap-2">
              <div className="bg-gray-300 rounded-full h-6 w-6"></div>
              <div className="bg-gray-300 rounded h-4 w-32"></div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-full bg-gray-300 rounded-full h-12"></div>
            </div>
            <div className="mt-5 bg-gray-300 rounded h-16 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOneProductPage;
