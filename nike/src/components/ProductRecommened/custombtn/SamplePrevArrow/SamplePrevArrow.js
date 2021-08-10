import React from "react";
import "./SamplePrevArrow.css";
import { FaAngleLeft } from "react-icons/fa";
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="SamplePrevArrow" onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
}

export default SamplePrevArrow;
