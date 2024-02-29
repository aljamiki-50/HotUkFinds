import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header/Header";
import Footers from "@/components/Footers/Footers";
import Session from "@/components/sessionProviders/SessionProvider";


const Urbanistt = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title:{
    template:"Shopping Mart",
    default:"Shopping Mart A Place For All"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Urbanistt.className} bg-main-bg w-full bg-slate-100   text-darkText `}
      >
        <Session>
          <Header />
          {children}
          <Footers />
        </Session>
      </body>
    </html>
  );
}