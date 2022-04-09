import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide1.jpg";
import slide_two from "../../resources/images/slide2.jpg";
import slide_three from "../../resources/images/slide3.jpg";
import slide_four from "../../resources/images/slide4.jpg";
import slide_five from "../../resources/images/slide5.jpg";
import slide_six from "../../resources/images/slide6.jpg";
const Carousel = () => {
  const settings = {
    dots: false,
    // fade: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 500
    // vertical: true,
    // verticalSwiping: true
  };
  const height = {
    height: `${window.innerHeight}px`
  };
  return (
    <div  style={{ position: `relative` }}>
    <div
      className="carrousel_wrapper"
      style={{
        overflow: `hidden`,
        ...height
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              ...height
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              ...height
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              ...height
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_four})`,
              ...height
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_five})`,
              ...height
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_six})`,
              ...height
            }}
          ></div>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Carousel;
