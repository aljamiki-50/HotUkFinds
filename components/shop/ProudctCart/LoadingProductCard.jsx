import React from 'react';

const LoadingProductCard = () => {
  return (
    <div className="sm:grid sm:grid-cols-6 ring-1 ring-black rounded-lg bg-white items-center align-center p-3 gap-x-3 py-4 animate-pulse">
      <div className="col-span-7 sm:col-span-2 object-cover pt-5 w-full h-full">
        <div className="bg-gray-300 rounded-lg w-full h-full"></div>
      </div>
      <div className="col-span-4 flex flex-col gap-y-4">
        <div className="bg-gray-300 rounded h-6 w-full"></div>
        <div className="flex flex-col gap-y-4">
          <div className="bg-gray-300 rounded h-8 w-full"></div>
          <div className="flex items-center gap-x-2">
            <div className="bg-gray-300 rounded h-6 w-24"></div>
            <div className="bg-gray-300 rounded h-6 w-20 flex items-center border-r border-black px-1 gap-x-2 font-semibold"></div>
          </div>
          <div className="bg-gray-300 rounded h-4 w-full"></div>
          <div className="w-full flex justify-center items-center mx-auto text-center font-semibold bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-white hover:ring-1 hover:ring-orange-400 hover:text-orange-500 duration-200">
            <div className="flex gap-x-2 items-center bg-gray-300 rounded h-6 w-24"></div>
          </div>
          <div className="w-full flex justify-center text-center font-semibold bg-green-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-white hover:ring-1 hover:ring-green-300 hover:text-green-500 duration-200">
            <div className="flex gap-x-2 items-center bg-gray-300 rounded h-6 w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductCard;
