import React from "react";
import "./SampleNextArrow.css";
import { FaAngleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="SampleNextArrow" onClick={onClick}>
      <FaAngleRight />
    </div>
  );
}

export default SampleNextArrow;
