import React from "react";
import { useSelector } from "react-redux";
import NavFilter from "../../components/Filter/NavFilter";
import ProductList from "../../components/ProductList/ProductList";
import SideBar from "../../components/SideBar/SideBar";
import "./index.scss";
function Home() {
  const hiddenSideBar = useSelector((state) => state.product.Size);
  return (
    <div className="home_products">
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
