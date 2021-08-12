import React from "react";
import { useSelector } from "react-redux";
import NavFilter from "../../components/Filter/NavFilter";
import ProductList from "../../components/ProductList/ProductList";
import SideBar from "../../components/SideBar/SideBar";
import "./index.css";
function Home() {
  const hiddenSideBar = useSelector((state) => state.product.Size);

  return (
    <div>
      <NavFilter></NavFilter>
      {hiddenSideBar === true ? (
        <div className="row">
          <div className="col-3 SideBar">
            <SideBar></SideBar>
          </div>
          <div className="home_products col-8">
            <ProductList></ProductList>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="home_products active col-12">
            <ProductList></ProductList>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
