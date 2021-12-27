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
      <div className=" Home">
        <ProductList></ProductList>
      </div>
    </div>
  );
}

export default Home;
