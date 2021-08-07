import React from "react";
import "./Rating.css";
import { BsFillStarFill } from "react-icons/bs";
import Comment from "./comment/comment";

function Rating(props) {
  return (
    <div className="rating_are">
      <div className="reating_title">
        <div className="_iconStar">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <div className="_iconStar_total">4.8 Stars</div>
      </div>
      <div className="WriteReview_underline" rel="stylesheet" href="">
        Write a Review
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <div className="WriteReview_underline" rel="stylesheet" href="">
        More Review
      </div>
    </div>
  );
}

export default Rating;
