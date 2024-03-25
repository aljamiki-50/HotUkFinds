import { GetShopData } from "@/Helpers/ShopProudcts/ShopProducts";
import ShopComponent from "@/components/shop/shop";
import { CiShoppingCart } from "react-icons/ci";

import React, { cache } from "react";

const getpost = cache;

// export async function generateMetadata({ searchParams }) {
//   // const { slug } = params;

//   const products = await GetShopData();

//   // checking first
//   if (!products || products.length === 0) {
//     // If products array is empty, return default metadata
//     return {
//       robots: { index: true, follow: true },
//       title: "shop",
//       description: "Description of uksaverz.com",
//       twitter: {
//         card: "summary_large_image",
//       },
//       openGraph: {
//         type: "website",
//         url: `https://uksaverz.com/shop/`,
//         title: "uksaverz.com",
//         description: "Description of uksaverz.com",
//         images: [
//           {
//             url: "default-image-url.jpg",
//             alt: "Default image alt text",
//           },
//         ],
//       },
//     };
//   }
//   // then if there is a product
//   const metadata = products.map((product) => {
//     const imageUrl = product.image1;

//     return {
//       robots: { index: true, follow: true },
//       title: "Shop ",
//       description: product.description,
//       twitter: {
//         card: "summary_large_image",
//       },
//       openGraph: {
//         type: "website",
//         url: `https://uksaverz.com/shop/`,
//         title: product.name || "uksaverz.com",
//         description: product.description,
//         images: imageUrl,
//         // images: [
//         //   {
//         //     url: imageUrl,
//         //     alt: product.name || "Product Image",
//         //   },
//         // ],
//       },
//     };
//   });

//   return metadata;
// }

// const imageRef = product?.image1;
// const imageUrl = imageRef;
// const imageUkl = imageRef;
// return {
//   robots: { index: true, follow: true },
//   title: product.name || "uksaverz.com",
//   description: product.description,
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     type: "website",
//     url: `https://uksaverz.com/oneproduct/${""}`,
//     title: product.name || "uksaverz.com",
//     description: product.description,
//     images: imageUrl,
//   },
// };
export const metadata = {
  robots: { index: true, follow: true },
  title: "  🛍️ shop",
  description:
    "Hey there! You made it here, and that's awesome! 🎉 Welcome to our shop section where you can find what you're looking for. We hope you'll discover something that satisfies your needs. Happy shopping! 🛍️",
  ogImage: "/opengraph-image.jpg",
};
const page = ({ searchParams }) => {
  // console.log("here is the ", searchParams);
  return (
    <div>
      <ShopComponent searchParams={searchParams} />
    </div>
  );
};

export default page;
