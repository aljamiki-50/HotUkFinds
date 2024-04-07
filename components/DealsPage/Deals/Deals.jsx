import Image from "next/image";
import React from "react";

const Deals = () => {
  return (
    <div class=" grid justify-center    bg-gray-100  py-[300px] sm:py-40">
      <h1 className=" text-xl font-bold "> we Still Looking For The best Deals Yet  </h1>
      <div class="  hidden bg-gray-100 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="px-6 py-8">
              <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold text-gray-800">Today's Deal</h2>
                <span class="bg-red-500 text-white px-3 py-1 rounded-full">
                  Limited Time
                </span>
              </div>
              <div class="mt-6">
                <Image
                  src=""
                  alt="Product Image"
                  class="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div class="mt-6">
                <h3 class="text-xl font-bold text-gray-800">Product Name</h3>
                <p class="mt-2 text-gray-600">
                  Product description goes here...
                </p>
                <div class="mt-4 flex items-center">
                  <span class="text-2xl font-bold text-gray-800">$49.99</span>
                  <span class="ml-2 text-sm text-gray-500 line-through">
                    $99.99
                  </span>
                  <span class="ml-2 bg-green-500 text-white px-2 py-1 rounded-full">
                    50% Off
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 px-6 py-4">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-sm text-gray-500">Expires in:</span>
                  <span class="text-lg font-bold text-gray-800 ml-2">
                    12h 34m
                  </span>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
