import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { SetCarts } from "../../../redux/actions/cart_action";
import { Link } from "react-router-dom";

function Product(props) {
  const product = props.item;
  const cart_items = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  const newProduct = {
    productId: product.id,
    amount: 1,
  };

  const handleOnClick = (id) => {
    let isSame = false;
    cart_items.forEach((item) => {
      if (item.productId === id) {
        isSame = true;
        item.amount += 1;
      }
    });
    dispatch(SetCarts(cart_items));
    if (!isSame) {
      const test = [...cart_items, newProduct];
      dispatch(SetCarts(test));
    }
  };

  return (
    <div className="col-4 product">
      <div className="container " key={product.id}>
        <div className="display__product">
          <img src={product.image} alt="" />
        </div>
        <div className="product__details">
          <Link
            to={{
              pathname: `/product-detail/${product.id}`,
              state: product,
            }}
            className="title__section"
          >
            <div className="title">
              <h2>{product.name}</h2>
            </div>
          </Link>
          <div className="product__add">
            <span className="price">${product.price}</span>
            <button
              className="btn_addToCart"
              onClick={() => handleOnClick(product.id)}
            >
              <FaShoppingCart></FaShoppingCart>Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
