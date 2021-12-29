import React from "react";
import "./ProductList.css";
function ProductList() {
  return (
    <>
      <div className="Productlist2">
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1639572600664-28a2a01ce860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="adidas nmd"
          />
          <div className="information">
            <div className="product-name">Nike Air Max Plus</div>
            <div className="cate">Men's Shoes</div>
            <div className="price">$180</div>
            <div className="btn-pay">
              <div className="button">ADD TO CART</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
