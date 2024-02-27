

import { client } from "@/sanity/lib/client";
import Container from "../Container/Container";
import ProductCard from "./ProductCard";

// Fetching all products
async function GetData() {
  // in this query here the array of 0 to 4 denote to we need to fetch 4 items and
  // the Category->name/asset->url we refering to ref type here
  // and we used the cheatSheet to from sanity to approch the recent one  by time create at
  const query = `
  *[_type =="product"] {
    _id,
      name,
      price,
      oldprice,
      Ratings,
      affiliateLink,
      description,
      "slug":slug.current,
      "categoryName":category->name,
   "image1":images[0].asset->url,
   "image2":images[1].asset->url
  
      
  }
    `;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";
// export const cache = "force-cache";
// cache: 'force-cache'

const AllProducts = async () => {
  const RecentProducts = await GetData();

  console.log("here", RecentProducts);
  return (
    <Container
      classname={
        " grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10 "
      }
    >
      {RecentProducts?.map((items) => (
        <ProductCard items={items} />
      ))}
    </Container>
  );
};

export default AllProducts;
