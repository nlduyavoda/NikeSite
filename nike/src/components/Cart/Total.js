import React from "react";
import "./Total.css";
function Total(props) {
  return (
    <div>
      <div class="totals">
        <div class="totals-item">
          <head className="Sumary">Sumary</head>
          <div class="totals-value" id="cart-subtotal">
            71.97
          </div>
        </div>
        <div class="totals-item">
          <label>Tax (5%)</label>
          <div class="totals-value" id="cart-tax">
            3.60
          </div>
        </div>
        <div class="totals-item">
          <label>Shipping</label>
          <div class="totals-value" id="cart-shipping">
            15.00
          </div>
        </div>
        <div class="totals-item totals-item-total">
          <label>Grand Total</label>
          <div class="totals-value" id="cart-total">
            90.57
          </div>
        </div>
      </div>

      <button class="checkout">Checkout</button>
    </div>
  );
}

export default Total;
