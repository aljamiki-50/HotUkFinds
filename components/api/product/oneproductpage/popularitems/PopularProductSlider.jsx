import Slider from "react-slick";
import LoadingProductCartContainer from "../ProductCardContinaer/LoadingProductCartContainer";

const PopularProductSlider = ({ oneslug }) => {
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

export default PopularProductSlider;
