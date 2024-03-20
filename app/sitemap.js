import { GetData } from "@/Helpers/allProductInMainPage/GetData";

export default async function sitemap() {
  const products = await GetData();

  const uniqueCategories = new Set(
    products.map((product) => product?.categoryName)
  );

  // Generate URLs for unique categories
  const categoryEntries = Array.from(uniqueCategories).map((categoryName) => ({
    url: `${process.env.NEXTAUTH_URL}category/${encodeURIComponent(
      categoryName
    )}`,
    lastmod: "2022-01-01", // Set last modification date accordingly
    changefreq: "daily",
    priority: 0.7,
  }));

  // const postentries = products.map((product) => {
  //   return {
  //     // url: `${process.env.NEXTAUTH_URL}category/${encodeURIComponent(product?.categoryName)}`,
  //     url: `${process.env.NEXTAUTH_URL}category/${product?.categoryName}`,
  //     url2: `${process.env.NEXTAUTH_URL}category/${product?.slug}`,
  //     lastmod: product?.lastmod,
  //     changefreq: "daily",
  //     priority: 0.7,
  //   };
  // });

  const another = products.map((oneproduct) => {
    return {
      url: `${process.env.NEXTAUTH_URL}oneproduct/${oneproduct?.slug}`,
      lastmod: oneproduct?.lastmod,
      changefreq: "daily",
      priority: 0.8,
    };
  });

  const sitemap = [
    {
      url: `${process.env.NEXTAUTH_URL}aboutus`,
      lastmod: "2022-01-01",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXTAUTH_URL}shop`,
      lastmod: "2022-01-01",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXTAUTH_URL}NewsLetter`,
      lastmod: "2022-01-01",
      changefreq: "monthly",
      priority: 0.8,
    },
    // ...postentries,
    ...categoryEntries,
    ...another,
   
  ];

  return sitemap;
}
