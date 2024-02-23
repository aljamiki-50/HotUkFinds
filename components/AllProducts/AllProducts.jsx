// import { GetPoducts } from "@/Helpers/GetAllProudcts";
// import { useDispatch } from "react-redux";

import Container from "../Container/Container";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  //   const products = await GetPoducts()
  return (
    <Container
      classname={
        " grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10 "
      }
    >
      {/* {products?.map((items)=>( */}

      <ProductCard />

      {/* ))} */}
    </Container>
  );
};

export default AllProducts;
