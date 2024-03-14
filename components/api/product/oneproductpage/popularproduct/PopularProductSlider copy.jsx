import Slider from "react-slick";
import ProductCartContainer from "../ProductCardContinaer/ProductCartContainer";

const PopularProductSlider = ({ oneslug }) => {
  const Certain = oneslug;

//   console.log("the new one  ", Certain);

  return (
    <div>
      <div className=" flex  flex-col ">
        <ProductCartContainer oneslug={Certain} />
      </div>
    </div>
  );
};

export default PopularProductSlider;
