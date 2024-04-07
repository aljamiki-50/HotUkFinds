import LoadingShopComponent from "@/components/shop/LoadingShop";

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

const Loading = ({ searchParams }) => {
  return (
    <div>
      <LoadingShopComponent />
    </div>
  );
};

export default Loading;
