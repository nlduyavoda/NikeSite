import React from "react";
import "./index.css";
import Slider from "react-slick";
import SamplePrevArrow from "./custombtn/SamplePrevArrow/SamplePrevArrow";
import SampleNextArrow from "./custombtn/SampleNextArrow/SampleNextArrow";
import Slide_Indicators from "./custombtn/Slide Indicators/Slide_Indicators";

function ProductRecommened() {
  const imageSlide = [
    {
      id: 1,
      path: "/img/slide/jordan-air-wordmark-t-shirt-L3JGVF.jpeg",
      property: "show_property",
    },
    {
      id: 2,
      path: "/img/slide/jordan-jumpman-t-shirt-dLJLlq.jpeg",
      property: "off_property",
    },
    {
      id: 3,
      path: "/img/slide/jordan-sport-dna-t-shirt-1fsHXm.jpeg",
      property: "off_property",
    },
    {
      id: 4,
      path: "/img/slide/jordan-air-wordmark-t-shirt-L3JGVF.jpeg",
      property: "off_property",
    },
    {
      id: 5,
      path: "/img/slide/jordan-jumpman-t-shirt-dLJLlq.jpeg",
      property: "off_property",
    },
    {
      id: 6,
      path: "/img/slide/jordan-sport-dna-t-shirt-1fsHXm.jpeg",
      property: "off_property",
    },
    {
      id: 6,
      path: "/img/slide/jordan-sport-dna-t-shirt-1fsHXm.jpeg",
      property: "off_property",
    },
  ];
  const Paggging = () => {
    <div className="customPaging">
      <meter
        class="css-1vg9gbh carousel-tracker animating carousel-tracker-below"
        min="0"
        max="12"
        value="3"
        aria-labelledby="recommendations__title"
        position="0"
      >
        <div
          class="css-jgmdmo carousel-tracker-bar css-1yhxqc6"
          aria-hidden="true"
          progress="0.25"
          width="0.25"
        ></div>
      </meter>
    </div>;
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
        <div className="slick-dots">
          <Slide_Indicators item={i} />
        </div>
    ),
  };

  return (
    <div className="ProductRecommened">
      <h3>YOU MIGHT ALSO LIKE</h3>

      <Slider {...settings}>
        {imageSlide.map((item) => {
          return (
            <a className="imageSlide" href="#">
              <img className="image_slide" src={item.path} alt="aaa" />
            </a>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductRecommened;
