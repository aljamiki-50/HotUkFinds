import { client } from "@/sanity/lib/client";

export async function GetCategroies() {
  const query = `
    *[_type=="product"  ]{
        
          "category":category->name,
          
        }
  `;

  const data = await client.fetch(query);
  return data;
}


