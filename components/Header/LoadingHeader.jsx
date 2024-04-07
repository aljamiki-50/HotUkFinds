import React from 'react';

const LoadingHeader = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-bodyColor h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center md:gap-x-3 justify-between md:justify-start">
          <div className="hidden sm:flex">
            <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          </div>
          <div className="group:bg-white sm:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group flex justify-center transi delay-150 ease-in-out w-[70%]">
            <div className="bg-gray-300 rounded-full h-5 w-5"></div>
            <div className="bg-gray-300 rounded h-5 w-full"></div>
          </div>
          <div className="sm:flex headerDiv cursor-pointer">
            <div className="bg-gray-300 rounded-full h-10 w-10"></div>
            <div className="bg-gray-300 rounded h-4 w-24 hidden sm:block"></div>
          </div>
          <div className="bg-gray-300 rounded-full h-12 w-12 sm:flex"></div>
          <div className="headerDiv">
            <div className="bg-gray-300 rounded-full h-6 w-6"></div>
            <div className="bg-gray-300 rounded h-4 w-16 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingHeader;
