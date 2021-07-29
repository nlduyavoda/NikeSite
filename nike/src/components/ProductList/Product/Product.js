import React, { useContext, useState } from "react";
import "./Product.css";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from "../../../Context/ProductContext";

function Product(props) {
  const product = props.item;
  const { handleOnClick } = useContext(ProductContext);
  return (
    <div className="container " key={product.id}>
      <div className="display__product">
        <img src={product.image} alt="" />
      </div>
      <div className="product__details">
        <div className="title__section">
          <div className="title">
            <h2>{product.name}</h2>
          </div>
        </div>
        <div className="product__add">
          <span className="price">${product.price}</span>
          <button
            className="btn_addToCart"
            onClick={() => handleOnClick(product)}
          >
            <FaShoppingCart></FaShoppingCart>Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
