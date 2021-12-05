import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartApi from "../../api/cartApi";
import GetList from "../../api/GetList";
import productApi from "../../api/productApi";
import { SetCarts } from "../../redux/actions/cart_action";
import { SetListProduct } from "../../redux/actions/product_action";
import Product from "./Product/Product";
import { products } from "../../untils/mock.ts";
import "./ProductList.css";
function ProductList() {
  const Products = useSelector((state) => state.product.productList);

  const dispatch = useDispatch();
  useEffect(async () => {
    const FetchListProduct = async () => {
      try {
        const response = await GetList.GetProducts();
        console.log("response", response);
        dispatch(SetListProduct(response));
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };
    const FetchListCart = async () => {
      const userId = "61279f82c8977148a9e6f53d";
      try {
        const Cartresponse = await cartApi.get(userId);
        // const { cart } = Cartresponse;
        // cart.forEach((element) => {
        //   const productRes = productApi.GetProduct(element.product_id);
        //   console.log(productRes);
        // });
        // response.filter((item) => item.UserId === "6127562d5b0f8543dd9c2d85");
        // const [{ CartDetail }] = response;
        // const cart = response.filter((item) => item.Active === true);
        // const [{ UserId, Active, CartDetail }] = cart;
        // dispatch(SetCarts(CartDetail));
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };

    FetchListCart();
    FetchListProduct();
  }, []);
  return (
    <div className="productList">
      {products.map((item) => {
        return <Product key={item._id} item={item}></Product>;
      })}
    </div>
  );
}

export default ProductList;
