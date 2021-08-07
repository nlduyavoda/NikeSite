import React from "react";
import "./ProDetail_infor.css";
import Size_infor from "./Size_infor.js";
import { BsChevronCompactDown, BsFillStarFill } from "react-icons/bs";
import Rating from "./Rating/Rating";
function ProDetail_infor(props) {
  const { name, price, size, image } = props.data;
  return (
    <div className="ProDetail_infor">
      <div className="infor_title">
        <div className="_title">Men's Shoe</div>
        <div className="_price">${price}</div>
      </div>
      <div className="infor_name">{name}</div>
      <div className="infor_picture">
        <img
          className="_picture"
          src="/img/Black_air/Black_air_1.jpeg"
          alt={name}
        />
        <img
          className="_picture"
          src="/img/Black_air/air-force-1-07-shoe-WrLlWX.jpeg"
          alt={name}
        />
        <img
          className="_picture"
          src="/img/Black_air/design_your_own.png"
          alt={name}
        />
      </div>
      <div className="">
        <Size_infor size={size} />
      </div>
      <div className="ProductDetail_notification">
        This product is excluded from site promotions and discounts.
      </div>
      <div className="ProductDetail_description">
        The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that
        puts a fresh spin on what you know best: durably stitched overlays,
        clean finishes and the perfect amount of flash to make you shine.
      </div>
      <div className="viewDetail_underline" rel="stylesheet" href="">
        View Product Details
      </div>
      <div className="Free_Delivery">
        <div className="Free_Delivery_text">Free Delivery and Returns</div>
        <div className="Free_Delivery_icon">
          <div className="_iconStar"></div>
          <div className="_icondown">
            <BsChevronCompactDown />
          </div>
        </div>
      </div>
      <div className="Free_Delivery">
        <div className="Free_Delivery_text">Reviews (198)</div>
        <div className="Free_Delivery_icon">
          <div className="_iconStar">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <div className="_icondown">
            <BsChevronCompactDown />
          </div>
        </div>
      </div>
      <Rating />
    </div>
  );
}

export default ProDetail_infor;
