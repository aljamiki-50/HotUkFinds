import { client } from "@/sanity/lib/client";

export async function GetCategories() {
  const query = `
    *[_type=="category"]
{
  name,
  "image":images[0].asset->url,
}
  
  `;

  const data = await client.fetch(query);
  return data;
}
