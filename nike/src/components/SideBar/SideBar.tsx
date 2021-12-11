import React, { useState } from "react";
import "./SideBar.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Ichonveron from "./IconChevron/index";

function SideBar() {
  const arrSize = [];
  const [GenderBtn, setGenderBtn] = useState(true);
  const [SizeBtn, setSizeBtn] = useState(true);
  const [ColourBtn, setColourBtn] = useState(true);
  const handleGenderBtn = () => {
    setGenderBtn(!GenderBtn);
  };
  const handleSizeBtn = () => {
    setSizeBtn(!SizeBtn);
  };
  const handleColourBtn = () => {
    setColourBtn(!ColourBtn);
  };
  const Colour = [
    { id: 1, color: "red" },
    { id: 2, color: "black" },
    { id: 3, color: "white" },
    { id: 4, color: "green" },
    { id: 5, color: "pink" },
    { id: 6, color: "blue" },
    { id: 7, color: "orange" },
    { id: 8, color: "purple" },
    { id: 9, color: "Brown" },
  ];

  for (let item = 38; item < 50; item++) {
    arrSize.push(item);
  }
  const size = arrSize.map((item) => {
    return <div className="sizebox">{item}</div>;
  });

  return (
    <div className="SideBar_">
      <div className="SideBar_container">
        <div className="category">
          <div className="category_item">Lifestyle</div>
          <div className="category_item">Running</div>
          <div className="category_item">Basketball</div>
          <div className="category_item">Football</div>
          <div className="category_item">Trainning & Gym</div>
          <div className="category_item">Jordan</div>
          <div className="category_item">Skateboarding</div>
          <div className="category_item">Golf</div>
          <div className="category_item">Tennis</div>
          <div className="category_item">Athletics</div>
          <div className="category_item">Walking</div>
        </div>
        <div className="gender">
          <div className="gender_title">
            <div className="gender_title_">Gender (1)</div>
            <div onClick={handleGenderBtn}>
              <Ichonveron />
            </div>
          </div>
          <div
            className={
              GenderBtn === true ? "group_checkbox" : "group_checkbox active"
            }
          >
            <div
              className={
                GenderBtn === true
                  ? "gender_checkbox"
                  : "gender_checkbox active"
              }
            >
              <input type="checkbox" id="myCheck"></input> Men
            </div>
            <div
              className={
                GenderBtn === true
                  ? "gender_checkbox"
                  : "gender_checkbox active"
              }
            >
              <input type="checkbox" id="myCheck"></input> Women
            </div>
            <div
              className={
                GenderBtn === true
                  ? "gender_checkbox"
                  : "gender_checkbox active"
              }
            >
              <input type="checkbox" id="myCheck"></input> Boys
            </div>
            <div
              className={
                GenderBtn === true
                  ? "gender_checkbox"
                  : "gender_checkbox active"
              }
            >
              <input type="checkbox" id="myCheck"></input> Girls
            </div>
            <div
              className={
                GenderBtn === true
                  ? "gender_checkbox"
                  : "gender_checkbox active"
              }
            >
              + More
            </div>
          </div>
        </div>
        <div className="Size">
          <div className="gender_title">
            <div className="gender_title_">Size</div>
            <div className="gender_title_icon" onClick={handleSizeBtn}>
              <Ichonveron />
            </div>
          </div>
          <div
            className={SizeBtn === true ? "group_size" : "group_size active"}
          >
            <div className={SizeBtn === true ? "sizeRow" : "sizeRow active"}>
              {size}
            </div>
          </div>
        </div>
        <div className="Size">
          <div className="gender_title">
            <div className="gender_title_">Colour</div>
            <div className="gender_title_icon" onClick={handleColourBtn}>
              <Ichonveron />
            </div>
          </div>
          <div
            className={
              ColourBtn === true ? "group_colour" : "group_colour active"
            }
          >
            <div className={ColourBtn === true ? "_colour" : "_colour active"}>
              {Colour.map((item) => {
                return (
                  <>
                    <div className="container_box">
                      <div id={item.color} className="colourBox"></div>
                      <div className="colourText">{item.color}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
