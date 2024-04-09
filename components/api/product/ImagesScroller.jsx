"use client";

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const ImagesGallery = ({ images }) => {
  const [bigImage, setBigImage] = useState(null);

  useEffect(() => {
    if (images && images?.[0].asset?._ref) {
      setBigImage(images?.[0].asset?._ref);
    }
  }, [images]);

  const handleBigImage = function (image) {
    if (image && image.asset && image.asset._ref) {
      setBigImage(image.asset._ref);
    }
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className=" grid sm:grid-cols-4 gap-4 lg:grid-cols-5 items-center">
      <div className="order-last grid-cols-5 sm:flex gap-4 sm:order-none sm:flex-col">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            onClick={() => handleBigImage(image)}
            className="overflow-hidden rounded-lg ring-[.5px] ring-black bg-slate-100"
          >
            <Image
              src={urlForImage(image || image?.asset?._ref)}
              width={500}
              height={500}
              className="object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className=" relative      antialiased duration-100 rounded-lg w-full lg:h-[90%]  bg-slate-100 lg:col-span-4">
        <Image
          src={urlForImage(bigImage)}
          alt="The here image "
          width={600}
          height={600}
          layout="fill"
          className=" w-full h-full object-contain"
        />
        <span className=" absolute left-0 top-0  rounded-br-lg   bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          {"sale"}
        </span>
      </div>
    </div>
  );
};

export default ImagesGallery;
