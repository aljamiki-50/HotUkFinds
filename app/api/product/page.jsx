"use client";

import AllProducts from "@/components/AllProducts/AllProducts";
import ProductCard from "@/components/AllProducts/ProductCard";
import Container from "@/components/Container/Container";
import ImagesGallery from "@/components/api/product/ImagesScroller";
import { BsStar, BsTruck } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const ProudctPage = ({ params }) => {
  // const Product = await GetCertainProduct(params.slug);
  //   const Product = await GetCertainProduct(params.slug);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" opacity-40 hover:opacity-90 p-3
         bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex  
         justify-center absolute -left-10 top-[40%] hover:bg-white hover:text-black cursor-pointer "
      >
        <FaArrowLeft />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" 
        opacity-40 hover:opacity-90 p-3
         bg-slate-100 hover:text--orange-500 duration-200 rounded-full flex z-40  
         justify-center  absolute -right-10 top-[40%] hover:bg-white hover:text-black cursor-pointer"
      >
        <FaArrowRight />
      </div>
    );
  };

  //   Slider settings
  var settings = {
    dots: true,
    infinite: true,

    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    // waitForAnimate: false
    cssEase: "ease-in-out",
  };

  return (
    <div className="      min-h-screen ">
      <Container>
        <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
          <div className=" grid gap-8 md:grid-cols-2">
            <ImagesGallery images={"Product.images"} />
            <div className="md:py-8">
              <div className="  md:mb-3 mb-2">
                <span className=" mb-0.5  inline-block text-gray-500">
                  {/* {Product.categoryName}  */} The Nike 420
                </span>
                <h2 className=" text-2xl font-bold text-gray-800 lg:text-3xl">
                  {/* {Product.name} */} The Nike 420
                </h2>
              </div>
              <div className=" mb-6 flex items-center gap-3 md:mb-10">
                <button className=" flex rounded-full gap-x-2">
                  <span className=" text-sm">4.2</span>
                  <BsStar className=" h-5 w-5" />
                </button>
                <span className=" text-sm text-gray-500 transition duration-100">
                  56 Ratings
                </span>
              </div>
              <div className=" mb-4">
                <div className=" flex items-end  gap-2">
                  <span className="  text-xl font-bold text-gray-800 md:text-2xl">
                    ${"Product.price"}
                  </span>
                  <span className="   mb-0.5 text-red-500   line-through">
                    ${"Product.price"}
                  </span>
                </div>
                <span className=" text-sm text-gray-500">
                  Incl Vats Plus Shipping{" "}
                </span>
              </div>
              <div className=" mb-6 flex items-center gap-2 text-gray-500">
                <BsTruck className=" w-6 h-6" />
                <span className=" text-sm"> 2-4 days shipping</span>
              </div>
              <div className=" flex gap-2.5">
                {/* <AddToBag
                currency={"USD"}
                image={Product.images[0]}
                description={Product.description}
                name={Product.name}
                price={Product.price}
                key={Product._id}
                price_id={Product.price_id}
              /> */}
                {/* <CheckOutNow
                currency={"USD"}
                image={Product.images[0]}
                description={Product.description}
                name={Product.name}
                price={Product.price}
                key={Product._id}
                price_id={Product.price_id}
                className="bg-yellow-100"
                variant={"secondary"}
              /> */}

                <button className=" w-full bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100   hover:bg-orange-800 hover:text-white duration-200">
                  Check out now
                </button>
              </div>
              <p className=" mt-5 text-base text-gray-500 tracking-wide line-clamp-6">
                {"Product.description"} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam suscipit quam blanditiis harum sunt esse ipsa ea sequi, quo similique. Architecto natus quisquam pariatur sed fugit aperiam cumque unde doloremque!
              </p>
            </div>
          </div>
        </div>
        {/* The Trending Products Parts Here  */}
        <div className=" flex flex-col gap-y-2">
          <h1 className=" text-6xl py-2 font-bold antialiased"> sm:flex-col 
            Trending Products
          </h1>
          <Slider className="  flex  flex-col sm:flex-row   gap-x-10 justify-around  " {...settings}>
            <div className=" ">
              <div className="  ml-2 ">
                {" "}
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
          </Slider>
        </div>
        <div className="  flex flex-col gap-y-2 ">
          <h1 className=" text-6xl py-2 font-bold antialiased">
            Popular Products
          </h1>
          <Slider className=" flex    gap-x-10 justify-around  " {...settings}>
            <div className=" ">
              <div className="  ml-2 ">
                {" "}
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
            <div className="   ">
              <div className=" ml-2 ">
                <ProductCard />
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ProudctPage;
