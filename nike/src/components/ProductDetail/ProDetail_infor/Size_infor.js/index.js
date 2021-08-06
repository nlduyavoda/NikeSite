import React from "react";
import "./index.css";
import { BsHeart } from "react-icons/bs";

function Size_infor(props) {
  const { size } = props;
  return (
    <>
      <div className="Size_infor_title">
        <div>Select Size</div>
        <div>Size Guide</div>
      </div>
      <div className="Size_infor">
        {size.map((item) => (
          <div className="Size_infor_item">EU {item}</div>
        ))}
      </div>
      <div className="Size_infor_btnGroup">
        <button className="Size_infor_checkout">Checkout</button>
        <button className="Size_infor_Favourite">
          <div className="_Favourite_text">Favourite</div>
          <div className="_Favourite_icon">
            <BsHeart />
          </div>
        </button>
      </div>
    </>
  );
}

export default Size_infor;
