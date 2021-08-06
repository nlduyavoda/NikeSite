import React from "react";
import "./ProDetail_infor.css";
import Size_infor from "./Size_infor.js";
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
    </div>
  );
}

export default ProDetail_infor;
