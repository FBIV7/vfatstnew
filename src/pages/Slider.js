import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = () => {
  return (
    <div className="Slider">
      <AliceCarousel
        autoPlayInterval={2000}
        autoPlay={true}
        mouseTrackingEnabled={false}
        disableAutoPlayOnAction={false}
      >
        <img src="/assets/background check.jpg" className="sliderimg" alt="" />
        <img
          src="/assets/background verification.jpg"
          className="sliderimg"
          alt=""
        />
        <img
          src="/assets/tenant verification.jpg"
          className="sliderimg"
          alt=""
        />
        <img
          src="/assets/vehicle verification.jpg"
          className="sliderimg"
          alt=""
        />
      </AliceCarousel>
    </div>
  );
};
export default Slider;
