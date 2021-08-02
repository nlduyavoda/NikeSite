import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetListProduct } from "../redux/actions/product_action";
import { SetCarts } from "../redux/actions/cart_action";
import GetList from "../api/GetList";

export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
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
        const carts = response.filter((item) => item.userID === 1);
        const [{ product }] = carts;
        dispatch(SetCarts(product));
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };

    FetchListCart();
    FetchListProduct();
  }, []);
  const ProductContextData = {
  };
  return (
    <ProductContext.Provider value={ProductContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
