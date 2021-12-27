import React from "react";
import "./ProductList.css";
function ProductList() {
  return (
    <div className="productList">
      {/* {products.map((item) => {
        return <Product key={item._id} item={item}></Product>;
      })} */}
      <div className="cart">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1639572600664-28a2a01ce860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="adidas nmd"
          />
        </div>
        <div className="content">
          <div className="top">
            <div className="name">Adidas NMD</div>
          </div>
          <div className="bottom">
            <div className="price">$699</div>
            <div className="btn-pay">Pay</div>
          </div>
        </div>
      </div>
      <div className="cart">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1639572600664-28a2a01ce860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="adidas nmd"
          />
        </div>
        <div className="content">
          <div className="top">
            <div className="name">Adidas NMD</div>
          </div>
          <div className="bottom">
            <div className="price">$699</div>
            <div className="btn-pay">Pay</div>
          </div>
        </div>
      </div>
      <div className="cart">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1639572600664-28a2a01ce860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="adidas nmd"
          />
        </div>
        <div className="content">
          <div className="top">
            <div className="name">Adidas NMD</div>
          </div>
          <div className="bottom">
            <div className="price">$699</div>
            <div className="btn-pay">Pay</div>
          </div>
        </div>
      </div>
      <div className="cart">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1639572600664-28a2a01ce860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="adidas nmd"
          />
        </div>
        <div className="content">
          <div className="top">
            <div className="name">Adidas NMD</div>
          </div>
          <div className="bottom">
            <div className="price">$699</div>
            <div className="btn-pay">Pay</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
