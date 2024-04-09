import Slider from "react-slick";
import ProductCartContainer from "../ProductCardContinaer/ProductCartContainer";
import LoadingProductCartContainer from "../ProductCardContinaer/LoadingProductCartContainer";

const TrendingproductSlider = ({ oneslug }) => {
  const Certain = oneslug;

//   console.log("the new one  ", Certain);

  return (
    <div>
      <div className=" flex  flex-col ">
        <LoadingProductCartContainer />
      </div>
    </div>
  );
};

export default TrendingproductSlider;
