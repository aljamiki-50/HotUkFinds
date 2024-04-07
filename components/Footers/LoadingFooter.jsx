import React from "react";
import { usePathname } from "next/navigation";

const LoadingFooters = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname.startsWith("/studio/structure") ? "hidden" : "block"
      } w-full hidden sm:block bg-black/90 text-slate-100 animate-pulse`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          <div className="bg-gray-300 rounded h-16 w-full"></div>
          <div className="hidden items-center gap-x-4">
            <div className="bg-gray-300 rounded-full h-8 w-8"></div>
            <div className="hidden bg-gray-300 rounded-full h-8 w-8"></div>
            <div className="bg-gray-300 rounded-full h-8 w-8"></div>
            <div className="bg-gray-300 rounded-full h-8 w-8"></div>
            <div className="bg-gray-300 rounded-full h-8 w-8"></div>
          </div>
        </div>
        <div className="hidden">
          <div className="bg-gray-300 rounded h-6 w-32"></div>
          <div className="mt-2 flex flex-col gap-y-2">
            <div className="bg-gray-300 rounded h-4 w-full"></div>
            <div className="bg-gray-300 rounded h-4 w-full"></div>
            <div className="bg-gray-300 rounded h-4 w-full"></div>
            <div className="bg-gray-300 rounded h-4 w-full"></div>
          </div>
        </div>
        <div>
          <div className="bg-gray-300 rounded h-8 w-48"></div>
          <div className="mt-6 flex flex-col gap-y-5">
            <div className="bg-gray-300 rounded h-6 w-24"></div>
            <div className="bg-gray-300 rounded h-6 w-24"></div>
            <div className="bg-gray-300 rounded h-6 w-24"></div>
            <div className="bg-gray-300 rounded h-6 w-24"></div>
            <div className="bg-gray-300 rounded h-6 w-24"></div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="bg-gray-300 rounded h-6 w-48"></div>
          <div className="flex scale-120 text-left justify-around">
            <div className="bg-gray-300 rounded-full h-6 w-6"></div>
            <div className="bg-gray-300 rounded-full h-6 w-6"></div>
            <div className="bg-gray-300 rounded-full h-6 w-6"></div>
            <div className="bg-gray-300 rounded-full h-6 w-6"></div>
            <div className="bg-gray-300 rounded-full h-6 w-6"></div>
          </div>
          <div className="ml-3 flex flex-col gap-y-3">
            <div className="bg-gray-300 rounded h-6 w-48"></div>
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-300 rounded-full h-6 w-6"></div>
              <div className="bg-gray-300 rounded-full h-6 w-6"></div>
              <div className="bg-gray-300 rounded-full h-6 w-6"></div>
              <div className="bg-gray-300 rounded-full h-6 w-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingFooters;
