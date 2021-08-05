import React from "react";
import NavFilter from "../components/Filter/NavFilter";
import ProductList from "../components/ProductList/ProductList";
import SideBar from "../components/SideBar/SideBar";
function home() {
  return (
    <div>
      <NavFilter></NavFilter>
      <div className="row">
        <div className="col-3">
          <SideBar></SideBar>
        </div>
        <div className="col-9">
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
}

export default home;
