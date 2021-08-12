import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavFilter from "../../components/Filter/NavFilter";
import ProductList from "../../components/ProductList/ProductList";
import SideBar from "../../components/SideBar/SideBar";
import "./index.css";
import { BsChevronCompactDown } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";
import { SetSizeee } from "../../redux/actions/product_action";
function Home() {
  const hiddenSideBar = useSelector((state) => state.product.Size);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(SetSizeee(!hiddenSideBar));
    if (hiddenSideBar === true) {
      var test = document.getElementById("SideBar");
      test.classList.add("active");
    } else {
      var test = document.getElementById("SideBar");
      test.classList.remove("active");
    }
  };

  return (
    <div>
      <div id="open" className="hidden__" onClick={handleOpen}>
        Hide Filters
        <div className="icon_filter">
          <BiSliderAlt />
        </div>
      </div>

      <NavFilter></NavFilter>
      <div className="row Home">
        <div id="SideBar" className="SideBar">
          <SideBar></SideBar>
        </div>
        <div className="home_products">
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
}

export default Home;
