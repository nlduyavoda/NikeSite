import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NavFilter.css";
import { BsChevronCompactDown } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";
import { SetSizeee } from "../../redux/actions/product_action";
function NavFilter() {
  const hiddenSideBar = useSelector((state) => state.product.Size);
  const dispatch = useDispatch();

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
        <div className="Category_fiter">Men Shoes (365)</div>
        <div className="__filter">
          <div classNam="short_by">
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
    </div>
  );
}

export default NavFilter;
