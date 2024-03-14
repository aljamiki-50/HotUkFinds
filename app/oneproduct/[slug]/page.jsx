// "use client";

import { GetCertainProduct } from "@/Helpers/oneSlugPage/GetCertainProduct";
import OneProduct from "@/components/api/product/oneproductpage/OneProduct";
import { cache } from "react";

// export const dynamic = "force-dynamic";
// very important to let this cache around 
const getpost = cache

// export const metadata = {
//   robots: { index: true, follow: true },
//   title: {
//     // the default to be view
//     default: "Uksaverz.com",
//     // %s refers to the child s page title will be add there if it had a meta data
//     template: "%s - Uksaverz.com ",
//   },
//   description:
//     "Welcome to the treasure trove of the UK! 🇬🇧 Explore the best finds across all categories - gadgets, fashion, home decor, and more at UKBestFinds. 🛍️ Your one-stop shop for quality items at unbeatable prices. 🌟 Join our community of savvy shoppers today and discover your next favorite thing! 💼💄🎮 #UKSaverz 💰",
//   twitter: {
//     card: "summary_large_image",
//   },
//   other: {
//     // name: "google-site-verification",
//     "google-site-verification": "coKkiJhG8EmTc2KhZf2O3vBpvGdtoEm40jJgGJihVaA",
//   },
//   ogImage: "/opengraph-image.jpg",
// };

export async function generateMetadata({ params }) {
  const {slug} = params;

  const product = await GetCertainProduct(slug);

  return {
    title: product.name || "here",
    description: product.description,
  };
}

// generateMetadata()

const OneProudctPage = ({ params }) => {
  const { slug } = params;

  return (
    <div className="      min-h-screen ">
      <OneProduct newslug={slug} />
    </div>
  );
};

export default OneProudctPage;

{
  /* <Slider
            className="    sm:flex  sm:flow-row   gap-x-10 justify-around  "
            {...settings}
          >
            {popularProducts &&
              popularProducts?.map((items) => (
                <div className=" ">
                  <div className=" my-2  ml-2 ">
                    <ProductCard items={items} />
                  </div>
                </div>
              ))}
          </Slider> */
}
