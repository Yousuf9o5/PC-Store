import { useSwiper } from "swiper/react";
import LightLeftArrow from "../../assets/icons/LightArrowLeft.svg";
import LightRightArrow from "../../assets/icons/LightArrowRight.svg";

function NavigationButtons() {
  const swiper = useSwiper();
  return (
    <div className="swiper-buttons d-flex align-items-center justify-content-between">
      <button onClick={() => swiper.slidePrev()}>
        <img src={LightLeftArrow} alt="left" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={LightRightArrow} alt="right" />
      </button>
    </div>
  );
}

export default NavigationButtons;
