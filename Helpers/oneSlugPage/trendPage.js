import { client } from "@/sanity/lib/client";

export async function TrendOnes() {
  const query = `
    *[_type=="product" && trendingProduct->name == "trending" ]{
      name,
      "image1":images[0].asset->url,
      "image2":images[1].asset->url,
          price,
      oldprice,
      description,
      "slug":slug.current,
      "categoryName":category->name,
      price_id,
      ratings,
      affiliateLink,
       "Trending":trendingProduct->name,
        
    }
    `;

  const data = await client.fetch(query);
  return data;
}
