import React from "react";
import NavFilter from "../../components/Filter/NavFilter";
import ProductList from "../../components/ProductList/ProductList";
import SideBar from "../../components/SideBar/SideBar";
import "./index.css";
function Home() {
  return (
    <div>
      <NavFilter></NavFilter>
      <div className="row">
        <div className="col-3">
          <SideBar></SideBar>
        </div>
        <div className="home_products col-9">
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
}

export default Home;
