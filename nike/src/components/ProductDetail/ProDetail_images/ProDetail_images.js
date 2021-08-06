import React from "react";
import "./ProDetail_images.css";
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
  return item.map((i) => (
    <img className="_image" src={i.image} alt={i.name} />
  ));
}

export default ProDetail_images;
