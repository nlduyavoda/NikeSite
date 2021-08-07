import React from "react";
import "./ProDetail_images.css";
import { BsChevronCompactDown, BsFillStarFill } from "react-icons/bs";

function ProDetail_images(props) {
  const item = [
    {
      id: 1,
      name: "one",
      image: "/img/Black_air/Black_air_1.jpeg",
    },
    {
      id: 2,
      name: "two",
      image: "/img/Black_air/Black_air_2.png",
    },
    {
      id: 3,
      name: "three",
      image: "/img/Black_air/Black_air_3.png",
    },
    {
      id: 4,
      name: "four",
      image: "/img/Black_air/Black_air_4.png",
    },
    ,
    {
      id: 5,
      name: "four",
      image: "/img/Black_air/Black_air_4.png",
    },
    ,
    {
      id: 6,
      name: "four",
      image: "/img/Black_air/Black_air_4.png",
    },
  ];
  const ortherImage = [
    {
      id: 1,
      name: "one",
      image: "/img/orther/Screen Shot 2021-08-07 at 21.46.14.png",
    },
    {
      id: 2,
      name: "two",
      image: "/img/orther/Screen Shot 2021-08-07 at 21.46.31.png",
    },
    {
      id: 3,
      name: "three",
      image: "/img/orther/Screen Shot 2021-08-07 at 21.46.21.png",
    },
    {
      id: 4,
      name: "four",
      image: "/img/orther/Screen Shot 2021-08-07 at 21.46.40.png",
    },
  ];
  return (
    <div className="ProDetail_images">
      <div className="productImage">
        {item.map((i) => (
          <img className="_image" src={i.image} alt={i.name} />
        ))}
      </div>
      <div className="ortherImage_title">
        <div className="_title">HOW OTHERS ARE WEARING IT</div>
        <div className="_title_des">
          Mention @Nike on Instagram for a chance to have your look featured.
        </div>
      </div>
      <div className="productImage">
        {ortherImage.map((i) => (
          <div>
            <img className="_image" src={i.image} alt={i.name} />
            <div className="name_like">
              <div>@trelltheplug</div>
              <div>93 like</div>
            </div>
          </div>
        ))}
      </div>
      <div className="loadMore_underline" rel="stylesheet" href="">
        <div className="loadMore_text">Load more (8)</div>
        <div className="loadMore_icon">
          <BsChevronCompactDown />
        </div>
      </div>
    </div>
  );
}

export default ProDetail_images;
