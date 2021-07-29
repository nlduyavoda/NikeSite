import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import "./List.css";
function Item({ name, price, amount, product }) {
  const { increaseAmount, reduceAmount } = useContext(ProductContext);
  return (
    <tr>
      <td>
        <div class="product-img">
          <div class="img-prdct">
            <img src="https://image.flaticon.com/icons/png/512/3144/3144467.png" />
          </div>
        </div>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <div class="button-container">
          <button
            class="cart-qty-plus"
            onClick={() => increaseAmount(product)}
            type="button"
            value="+"
          >
            +
          </button>
          <div className="amount">{amount}</div>
          <button
            class="cart-qty-minus"
            onClick={() => reduceAmount(product)}
            type="button"
            value="-"
          >
            -
          </button>
        </div>
      </td>
      <td>
        <input type="text" value={price} class="price form-control" disabled />
      </td>
      <td align="right">
        ${" "}
        <span id="amount" class="amount">
          0
        </span>
      </td>
    </tr>
  );
}

export default Item;
