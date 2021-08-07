import React from "react";
import "./comment.css";
import { BsFillStarFill } from "react-icons/bs";

function Comment(props) {
  return (
    <div className="comment">
      <div className="comment_title">Nothing more to say!</div>
      <div className="comment_stars">
        <div className="_iconStar">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <div className="_date_name">wayne r. - 30 Jul 2021</div>
      </div>
      <div className="comment_description">
        Great you love the quality good for every day use comes clean
        comfortable Air Force ones are number one
      </div>
    </div>
  );
}

export default Comment;
