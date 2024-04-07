import React from "react";

const LoadingHottest = () => {
  return (
    <div className="mt-3 flex flex-col gap-y-3 animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-7 gap-y-3 border-b-2 border-black border-spacing-4 gap-x-2"
        >
          <div className="rounded-lg w-full object-cover col-span-2 bg-gray-300 h-24"></div>
          <div className="col-span-5 flex flex-col gap-y-2">
            <div className="bg-gray-300 rounded h-6 w-full"></div>
            <div className="flex items-center gap-x-2">
              <div className="bg-gray-300 rounded h-6 w-24"></div>
              <div className="flex items-center text-center mx-auto text-xl justify-center gap-x-1 font-bold w-fit p-2 rounded-lg ring-1 bg-orange-500 hover:bg-white hover:ring-1 hover:ring-orange-400">
                <div className="flex gap-x-2 items-center bg-gray-300 rounded h-6 w-24"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingHottest;
