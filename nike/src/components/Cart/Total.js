import React from "react";
import "./Total.css";
function Total(props) {
  return (
    <div>
      <div className="totals">
        <div className="totals-item">
          <head className="Sumary">Sumary</head>
          <div className="totals-value" id="cart-subtotal">
            71.97
          </div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax">
            3.60
          </div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">
            15.00
          </div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">
            90.57
          </div>
        </div>
      </div>

      <button className="checkout">Checkout</button>
    </div>
  );
}

export default Total;
