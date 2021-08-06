import React from "react";
import "./SideBar.css";
import { BsChevronCompactDown } from "react-icons/bs";

function SideBar() {
  const arrSize = [];
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
  const colourMap = Colour.map((item) => {
    <div className="colourBox">{item.color}</div>;
  });

  return (
    <div className="SideBar">
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
          <div className="gender_title_">Gender(1)</div>
          <div className="gender_title_icon">
            <BsChevronCompactDown />
          </div>
        </div>

        <div>
          <input type="checkbox" id="myCheck"></input> Men
        </div>
        <div>
          <input type="checkbox" id="myCheck"></input> Women
        </div>
        <div>
          <input type="checkbox" id="myCheck"></input> Boys
        </div>
        <div>
          <input type="checkbox" id="myCheck"></input> Girls
        </div>
        <div>+ More</div>
      </div>
      <div className="Size">
        <div className="gender_title">
          <div className="gender_title_">SIZE</div>
          <div className="gender_title_icon">
            <BsChevronCompactDown />
          </div>
        </div>
        <div className="sizeRow">{size}</div>
      </div>
      {/* //colour */}
      <div className="Size">
        <div className="gender_title">
          <div className="gender_title_">Colour</div>
          <div className="gender_title_icon">
            <BsChevronCompactDown />
          </div>
        </div>
        <div className="sizeRow">
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
  );
}

export default SideBar;
