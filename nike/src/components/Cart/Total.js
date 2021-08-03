import React from "react";
import { useSelector } from "react-redux";
import "./Total.css";
function Total() {
  const Subtotal = useSelector((state) => state.cart.sumTotal);
  const Grand_Total = Subtotal + 15;
  return (
    <div className="subTotal col-12">
      <div className="row-3">
        <head className="Sumary">Sumary</head>
      </div>
      <div className=" row-3">
        <label>Subtotal</label>
        <div className="subTotal_price" id="cart-shipping">
          {Subtotal}
        </div>
      </div>
      <div className="subTotal_shippping row-3">
        <label>Estimated Delivery and Handling</label>
        <div className="subTotal_price" id="cart-shipping">
          15.00
        </div>
      </div>
      <div className="subTotal_total row-3">
        <label>Grand Total</label>
        <div className="subTotal_price" id="cart-total">
          {Grand_Total}
        </div>
      </div>
      <div className="checkout_container">
        <button className="checkout_btn">Checkout</button>
      </div>
    </div>
  );
}

export default Total;
