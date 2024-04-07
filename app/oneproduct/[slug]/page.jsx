// "use client";

import { GetCertainProduct } from "@/Helpers/oneSlugPage/GetCertainProduct";
import OneProduct from "@/components/api/product/oneproductpage/OneProduct";
import { cache } from "react";

// export const dynamic = "force-dynamic";
// very important to let this cache around
const getpost = cache;



export async function generateMetadata({ params }) {
  const { slug } = params;

  const product = await GetCertainProduct(slug);

  const imageRef = product?.image1;

  const imageUrl = imageRef;
  const imageUkl = imageRef;

  return {
    robots: { index: true, follow: true },
    title: product.name || "uksaverz.com",
    description: product.description,
    twitter: {
      card: "summary_large_image",
    },
    openGraph: {
      type: "website",
      url: `https://uksaverz.com/oneproduct/${slug}`,
      title: product.name || "uksaverz.com",
      description: product.description,
      images: imageUrl,
    },
  };
}


const OneProudctPage = ({ params }) => {
  const { slug } = params;

  return (
    <div className="      min-h-screen ">
      <OneProduct newslug={slug} />
    </div>
  );
};

export default OneProudctPage;


