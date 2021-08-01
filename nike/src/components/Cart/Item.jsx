import React from "react";
import { useDispatch } from "react-redux";
import { increase, reduce } from "../../redux/actions/cart_action";
import "./List.css";
function Item({ price, amount, product }) {
  const dispatch = useDispatch();
  const increaseAmount = (productId) => {
    dispatch(increase(productId));
  };

  const reduceAmount = (productId) => {
    dispatch(reduce(productId));
  };

  return (
    <tr>
      <td>
        <div className="product-img">
          <div className="img-prdct">
            <img
              src="https://image.flaticon.com/icons/png/512/3144/3144467.png"
              alt=""
            />
          </div>
        </div>
      </td>
      <td>
        <p>{product.productId}</p>
      </td>
      <td>
        <div className="button-container">
          <button
            className="cart-qty-plus"
            onClick={() => increaseAmount(product.productId)}
            type="button"
            value="+"
          >
            +
          </button>
          <div className="amount">{amount}</div>
          <button
            className="cart-qty-minus"
            onClick={() => reduceAmount(product.productId)}
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
