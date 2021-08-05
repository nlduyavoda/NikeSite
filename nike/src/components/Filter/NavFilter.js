import React from "react";
import "./NavFilter.css";
import { BsChevronCompactDown } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";

function NavFilter() {
  var size = [27.5, 28, 29, 30, 32];
  const shortByFunction = (event) => {
    document.getElementById("myDropdown").classList.toggle("show");
    if (!event.target.matches(".dropbtn")) {
      var i;
      for (i = 0; i < size.length; i++) {
        var openDropdown = size[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <div>
      <div className="NavFilter">
        <div className="hidden__filter">
          Hide Filters
          <div className="icon_filter">
            <BiSliderAlt />
          </div>
        </div>
        <div class="short_by">
          <button onClick={(event) => shortByFunction(event)} class="dropbtn">
            Sort By
            <div className="icon_filter">
              <BsChevronCompactDown />
            </div>
          </button>

          <div id="myDropdown" class="dropdown-content">
            {size.map((item) => {
              return <a href="#home">{item}</a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavFilter;
