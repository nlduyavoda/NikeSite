import React from "react";
import { useDispatch } from "react-redux";
import { increase, reduce, remove } from "../../redux/actions/cart_action";
import "./List.css";
import { BsChevronCompactDown } from "react-icons/bs";
function Item({ name, image, price, amount, product }) {
  const dispatch = useDispatch();

  const increaseAmount = (productId) => {
    dispatch(increase(productId));
  };
  const removeItem = (productId) => {
    dispatch(remove(productId));
  };

  const reduceAmount = (productId) => {
    dispatch(reduce(productId));
  };

  var size = [27.5, 28, 29, 30, 32];

  const sizeFunction = (event) => {
    document.getElementById("myDropdown").classList.toggle("show");
    if (!event.target.matches(".dropbtn")) {
      var i;
      for (i = 0; i < size.length; i++) {
        var openDropdown = size[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className="cart_detail">
      <div className=" col-2 ">
        <img className="picture" src={image} alt={name} />
      </div>
      <div className="infor__ col-10 ">
        <div className="title_price">
          <div className="cart__title">{name}</div>
          <div className="cart__price">$ {price}</div>
        </div>
        <div className="Description">
          <div className="cart__category">Running Shoes</div>
          <div className="cart__size__quantity">
            <div class="dropdown">
              <button onClick={(event) => sizeFunction(event)} class="dropbtn">
                Size {size[0]}
              </button>
              <BsChevronCompactDown />
              <div id="myDropdown" class="dropdown-content">
                {size.map((item) => {
                  return <a href="#home">{item}</a>;
                })}
              </div>
            </div>

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
          </div>
          <div className="carts_footer">
            <div className="cart_underline" rel="stylesheet" href="">
              Move to Favourites
            </div>
            <a type="button" onClick={() => removeItem(product.productId)}>
              <div className="cart_underline">Remove</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
