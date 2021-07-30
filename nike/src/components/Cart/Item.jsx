import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import "./List.css";
function Item({ name, price, amount, product }) {
  const { increaseAmount, reduceAmount } = useContext(ProductContext);
  return (
    <tr>
      <td>
        <div className="product-img">
          <div className="img-prdct">
            <img src="https://image.flaticon.com/icons/png/512/3144/3144467.png" />
          </div>
        </div>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <div className="button-container">
          <button
            className="cart-qty-plus"
            onClick={() => increaseAmount(product)}
            type="button"
            value="+"
          >
            +
          </button>
          <div classNameName="amount">{amount}</div>
          <button
            className="cart-qty-minus"
            onClick={() => reduceAmount(product)}
            type="button"
            value="-"
          >
            -
          </button>
        </div>
      </td>
      <td>
        <input
          type="text"
          value={price}
          className="price form-control"
          disabled
        />
      </td>
      <td align="right">
        ${" "}
        <span id="amount" className="amount">
          0
        </span>
      </td>
    </tr>
  );
}

export default Item;
