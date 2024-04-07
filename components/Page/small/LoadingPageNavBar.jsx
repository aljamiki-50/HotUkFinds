import React from "react";

const LoadingPageNavBar = () => {
  return (
    <div className="animate-pulse sm:hidden sticky bottom-0 bg-white ring-1 ring-black rounded-s">
      <div className="grid grid-cols-4 gap-x-2 items-start text-center p-0 py-0">
        <div className="text-center shadow-md antialiased font-bold flex flex-col items-center">
          <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          <div className="bg-gray-300 rounded h-4 w-12 mt-2"></div>
        </div>
        <div className="text-center shadow-md antialiased font-bold flex flex-col items-center">
          <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          <div className="bg-gray-300 rounded h-4 w-20 mt-2"></div>
        </div>
        <div className="text-center shadow-md antialiased font-bold flex flex-col items-center">
          <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          <div className="bg-gray-300 rounded h-4 w-12 mt-2"></div>
        </div>
        <div className="text-center shadow-md antialiased font-bold flex flex-col items-center">
          <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          <div className="bg-gray-300 rounded h-4 w-12 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPageNavBar;
