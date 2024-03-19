import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header/Header";
import Footers from "@/components/Footers/Footers";
import Session from "@/components/sessionProviders/SessionProvider";
import Shopheader from "@/components/shop/Shopheader";
import SmoothScroll from "@/components/SmothScroll/smoothscroller";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
// import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";

const Urbanistt = Urbanist({ subsets: ["latin"] });

export const metadata = {
  robots: { index: true, follow: true },
  metadataBase: new URL("https://uksaverz.com"),

  title: {
    // the default to be view
    default: "Uksaverz.com",
    // %s refers to the child s page title will be add there if it had a meta data
    template: "%s - Uksaverz.com ",
  },
  description:
    "Welcome to the treasure trove of the UK! 🇬🇧 Explore the best finds across all categories - gadgets, fashion, home decor, and more at UKBestFinds. 🛍️ Your one-stop shop for quality items at unbeatable prices. 🌟 Join our community of savvy shoppers today and discover your next favorite thing! 💼💄🎮 #UKSaverz 💰",
  twitter: {
    card: "summary_large_image",
  },
  other: {
    // name: "google-site-verification",
    "google-site-verification": "coKkiJhG8EmTc2KhZf2O3vBpvGdtoEm40jJgGJihVaA",

    // Add the impact-site-verification meta tag
    "impact-site-verification": "f06b4a53-79a5-4d56-863f-1ce864237a45",
  },
  ogImage: "/opengraph-image.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="og:image" content={metadata.ogImage} />
        <title>
          {metadata.title.template.replace("%s", metadata.title.default)}
        </title>
        <meta
          name="google-site-verification"
          content="coKkiJhG8EmTc2KhZf2O3vBpvGdtoEm40jJgGJihVaA"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://v7efadu7v5rwvdo4syg7han2mu.srv.us/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Uksaverz.com" />
        <meta
          property="og:description"
          content="Welcome to the treasure trove of the UK! 🇬🇧 Explore the best finds across all categories - gadgets, fashion, home decor, and more at UKBestFinds. 🛍️ Your one-stop shop for quality items at unbeatable prices. 🌟 Join our community of savvy shoppers today and discover your next favorite thing! 💼💄🎮 #UKSaverz 💰"
        />
        <meta
          property="og:image"
          content="http://localhost:3001/opengraph-image.jpg?03a59d269aa26c63"
        />
        {/* Add the data layer  */}

        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JJWN3Q9XZ1"
          strategy="lazyOnload"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JJWN3Q9XZ1');
        `}
        </Script> */}
        <h1>My Page</h1>
      </Head>
      <body
        className={`${Urbanistt.className} bg-main-bg w-full bg-slate-100   text-darkText `}
      >
        <Session>
          <Header />
          {children}
          <Footers />
          {/* {process.env.NODE_ENV== "development"? " " :   <Footers />} */}
        </Session>
        <GoogleAnalytics gaId="G-JJWN3Q9XZ1" />

        {/* {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? ( */}
        {/* <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} /> */}
        {/* ) : null} */}
      </body>
    </html>
  );
}
