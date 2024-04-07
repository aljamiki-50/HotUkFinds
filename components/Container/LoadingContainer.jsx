import React from "react";

const LoadingContainer = ({ classname }) => {
  return (
    <div
      className={`${classname} max-w-screen-xl mx-auto px-4 xl:px-0 py-10 animate-pulse`}
    >
      <div className="bg-gray-300 rounded h-8 w-full mb-4"></div>
      <div className="bg-gray-300 rounded h-4 w-full mb-4"></div>
      <div className="bg-gray-300 rounded h-4 w-full mb-4"></div>
      <div className="bg-gray-300 rounded h-4 w-full mb-4"></div>
      <div className="bg-gray-300 rounded h-4 w-full mb-4"></div>
    </div>
  );
};

export default LoadingContainer;
