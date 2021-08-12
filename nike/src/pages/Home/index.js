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
  return (
    <div>
      <NavFilter></NavFilter>
      <div className="row Home">
        <div className={hiddenSideBar === true ? "SideBar" : "SideBar active"}>
          <SideBar></SideBar>
        </div>
        <div
          className={
            hiddenSideBar === true ? "home_products" : "home_products active"
          }
        >
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
}

export default Home;
