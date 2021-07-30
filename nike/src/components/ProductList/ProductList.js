import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";

import "./ProductList.css";
function ProductList() {
  const Products = useSelector((state) => state.product.productList);
  return (
    <div className="productList">
      <div className="row">
        {Products.map((item) => {
          return <Product key={item.id} item={item}></Product>;
        })}
      </div>
    </div>
  );
}

export default ProductList;
