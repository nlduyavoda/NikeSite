import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

import "./index.css";
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
  ];
  const [current, setCurrent] = useState(0);
  const lenght = imageSlide.length;
  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(imageSlide) || imageSlide.lenght <= 0) return null;
  return (
    <>
      <div className="imageSlide">
        <div className="bsLeft">
          <BsFillCaretLeftFill onClick={() => prevSlide()} />
        </div>
        <div className="bsRight" onClick={() => nextSlide()}>
          <BsFillCaretRightFill />
        </div>
        {imageSlide.map((item, index) => {
          {
            return (
              <div
                className={index === current ? "show_property" : "off_property"}
                key={index}
              >
                {index === current && <img src={item.path} className="image_slide" alt="" />}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default ProductRecommened;
