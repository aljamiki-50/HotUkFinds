// GetCertainProduct.js

import { client } from "@/sanity/lib/client";

export async function GetCertainProduct(slug) {
  const query = `
    *[_type=="product" && slug.current == "${slug}"][0]{
      name,
      images,
      price,
      oldprice,
      description,
      "slug":slug.current,
      "categoryName":category->name,
      price_id,
      ratings,
      affiliateLink,
      "Trending":trendingProduct->name,
      "image1":images[0].asset->url,


    }
  `;

  const data = await client.fetch(query);
  return data;
}


