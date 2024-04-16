"use client";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import shoe2 from "@/assets/shoe2.jpg";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { GetCategoryProduct } from "@/Helpers/categoryPage/categoryPage";

const SportPromoShowcase = () => {
  const [products, setProducts] = useState([]);
  //   const router = useRouter();
  const pathname = usePathname();
  //   const { category } = params;

  // console.log("the new cat  ",category);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCategoryProduct("sport");
      setProducts(data);
    };

    fetchData();
  }, []);

  console.log(products);

  const productts = [
    {
      id: 1,
      name: "Nike Air Max 270",
      description: "Comfortable and stylish running shoes",
      price: "$120",
      imageSrc: "/nike-air-max-270.jpg",
      imageAlt: "Nike Air Max 270 running shoes",
      href: "#",
    },
    {
      id: 2,
      name: "Adidas Ultraboost 21",
      description: "High-performance running shoes with superior cushioning",
      price: "$180",
      imageSrc: "/adidas-ultraboost-21.jpg",
      imageAlt: "Adidas Ultraboost 21 running shoes",
      href: "#",
    },
    {
      id: 3,
      name: "Under Armour HOVR Phantom 2",
      description: "Lightweight and responsive running shoes",
      price: "$130",
      imageSrc: "/under-armour-hovr-phantom-2.jpg",
      imageAlt: "Under Armour HOVR Phantom 2 running shoes",
      href: "#",
    },
    {
      id: 4,
      name: "Asics Gel-Kayano 27",
      description: "Stability running shoes with superior cushioning",
      price: "$160",
      imageSrc: "/asics-gel-kayano-27.jpg",
      imageAlt: "Asics Gel-Kayano 27 running shoes",
      href: "#",
    },
    {
      id: 5,
      name: "Brooks Ghost 13",
      description: "Neutral cushioned running shoes for everyday use",
      price: "$140",
      imageSrc: "/brooks-ghost-13.jpg",
      imageAlt: "Brooks Ghost 13 running shoes",
      href: "#",
    },
    {
      id: 6,
      name: "New Balance Fresh Foam 1080v11",
      description: "Plush and responsive running shoes",
      price: "$150",
      imageSrc: "/new-balance-fresh-foam-1080v11.jpg",
      imageAlt: "New Balance Fresh Foam 1080v11 running shoes",
      href: "#",
    },
    {
      id: 7,
      name: "Saucony Ride ISO 2",
      description: "Versatile running shoes with a smooth ride",
      price: "$120",
      imageSrc: "/saucony-ride-iso-2.jpg",
      imageAlt: "Saucony Ride ISO 2 running shoes",
      href: "#",
    },
    {
      id: 8,
      name: "Mizuno Wave Rider 24",
      description: "Durable and responsive running shoes",
      price: "$130",
      imageSrc: "/mizuno-wave-rider-24.jpg",
      imageAlt: "Mizuno Wave Rider 24 running shoes",
      href: "#",
    },
    {
      id: 9,
      name: "Hoka One One Clifton 7",
      description: "Cushioned and lightweight running shoes",
      price: "$130",
      imageSrc: "/hoka-one-one-clifton-7.jpg",
      imageAlt: "Hoka One One Clifton 7 running shoes",
      href: "#",
    },
    {
      id: 10,
      name: "Reebok Nano X1",
      description: "Versatile training shoes for CrossFit and gym workouts",
      price: "$130",
      imageSrc: "/reebok-nano-x1.jpg",
      imageAlt: "Reebok Nano X1 training shoes",
      href: "#",
    },
  ];
  return (
    <div className="bg-gray-100 py-12">
      <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {products?.categoryName} Promo Showcase
          </h2>
          <p className=" text-left mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Check out our latest sport products and accessories.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products?.slice(0, 50).map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-80 lg:aspect-none">
                <Image
                  src={product.image1}
                  alt={product.imageAlt}
                  layout="fill"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 antialiased flex justify-between   ">
                <div>
                  <h3 className="text-xl font-bold text-white-900   ">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product?.name.slice(0, 20)}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-red-500">
                    {/* {product?.description} */}
                  </p>
                </div>
                <p className="text-2xl   font-extrabold text-red-950">
                  £ {product?.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportPromoShowcase;

// components/SportPromoShowcase.js
