import AllProducts from "@/components/AllProducts/AllProducts";
import Banner from "@/components/Banner/Banner";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  robots: { index: true, follow: true },
  title: " ✅ Home",
  other: {
    "facebook-domain-verification": "yhf39g8x4oyoq2ezv7iso01ekljlq3",
  },

  ogImage: "/opengraph-image.jpg",
};

export default function Home() {
  return (
    <>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PWWYMR6PMZ"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWWYMR6PMZ');
  `}
        </Script>
      </Head>
      <main className=" h-[10%] items-center justify-between overflow-hidden ">
        <div className=" ">
          <Banner />
        </div>
        <AllProducts />
      </main>
    </>
  );
}
