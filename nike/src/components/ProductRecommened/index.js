import React from "react";
import "./index.css";

function ProductRecommened(props) {
  return (
    <div className="ProductRecommened">
      <a className="imageSlide" href="#">
        <img className="image_slide" src={item.path} alt="aaa" />
      </a>
    </div>
  );
}

export default ProductRecommened;
