import React from "react";

const LoadingShopHeader = () => {
  return (
    <div className="relative animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 relative">
        <div className="relative flex justify-between gap-x-10 bg-darkText px-10 py-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="relative">
              <div className="flex justify-center items-center gap-x-2 uppercase bg-slate-700/95 ring-black text-bodyColor ring-2 rounded-lg p-2 w-[90%] text-center ml-2">
                <div className="bg-gray-300 rounded h-6 w-24"></div>
                <div className="bg-gray-300 rounded-full h-6 w-6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingShopHeader;
