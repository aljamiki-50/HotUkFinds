import shoe1 from "@/assets/shoe1.jpg";
import shoe2 from "@/assets/shoe2.jpg";
import shoe3 from "@/assets/shoe3.jpg";
import shoe4 from "@/assets/shoe1.jpg";
import Image from "next/image";
import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";

const ImagesGallery = ({ images }) => {
  const [bigImage, setBigImage] = useState(images[1]);

  const handleBigImage = function (image) {
    // alert("it s a hectic")
    setBigImage(image);
  };

  try {
    return (
      <div className=" grid grid-cols-4 gap-4 lg:grid-cols-5 items-center">
        <div className=" order-last flex gap-4 lg:order-none lg:flex-col">
          {images.slice(0, 4)?.map((image, index) => (
            <div key={index} className=" overflow-hidden rounded-lg bg-green-100">
              <Image
                onClick={() => handleBigImage(image)}
                src={urlForImage(image)}
                width={300}
                height={500}
                className="  object-cover  object-center cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className=" relative overflow-hidden   ansition duration-100 rounded-lg w-full lg:h-[90%]  bg-green-100 lg:col-span-4">
          <Image
            src={urlForImage(bigImage)}
            alt="The here image "
            width={600}
            height={600}
            className=" w-full h-full object-cover"
          />
          <span className=" absolute left-0 top-0  rounded-br-lg   bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            {"sale"}
          </span>
        </div>
      </div>
    );
  } catch (error) {
    // Handle the error here
    console.error("An error occurred:", error);
    return <div>Error occurred while rendering images gallery</div>;
  }
};

export default ImagesGallery;
