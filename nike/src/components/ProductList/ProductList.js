import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetList from "../../api/GetList";
import { SetCarts } from "../../redux/actions/cart_action";
import { SetListProduct } from "../../redux/actions/product_action";
import Product from "./Product/Product";

import "./ProductList.css";
function ProductList() {
  const Products = useSelector((state) => state.product.productList);

  const dispatch = useDispatch();
  useEffect(async () => {
    const FetchListProduct = async () => {
      try {
        const response = await GetList.GetProducts();
        dispatch(SetListProduct(response));
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };
    const FetchListCart = async () => {
      try {
        const response = await GetList.GetCarts();
        response.filter((item) => item.UserId === "6127562d5b0f8543dd9c2d85");
        // const [{ CartDetail }] = response;
        const cart = response.filter((item) => item.Active === true);
        const [{ UserId, Active, CartDetail }] = cart;
        console.log(CartDetail)
        dispatch(SetCarts(CartDetail));
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };

    FetchListCart();
    FetchListProduct();
  }, []);

  return (
    <div className="productList">
      {Products.map((item) => {
        return <Product key={item.id} item={item}></Product>;
      })}
    </div>
  );
}

export default ProductList;
