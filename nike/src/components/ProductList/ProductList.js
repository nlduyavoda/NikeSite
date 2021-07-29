import React, { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Product from "./Product/Product";
import "./ProductList.css";
function ProductList(props) {
  const { Products } = useContext(ProductContext);
  return (
    <div className="productList">
      <div className="row">
        {Products.map((item) => {
          return (
            <>
              <div key={item.id} className="col-4 product">
                <Product item={item}></Product>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
