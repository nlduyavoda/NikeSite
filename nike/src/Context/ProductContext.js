import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetListProduct } from "../redux/actions/product_action";
import { PostListCart, SetCarts } from "../redux/actions/cart_action";
import GetList from "../api/GetList";

export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [ListCart, setListCart] = useState([]);
  const [selected, SetSelected] = useState();
  const dispatch = useDispatch();
  useEffect(async () => {
    const FetchListProduct = async () => {
      try {
        const response = await GetList.GetProducts();
        dispatch(SetListProduct(response));
        setProducts(response);
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };
    const FetchListCart = async () => {
      try {
        const response = await GetList.GetCarts();
        dispatch(SetCarts(response));
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };

    FetchListCart();
    FetchListProduct();
  }, []);

  const increaseAmount = (product) => {
    console.log("increase");
    const { id } = product;
    const list = ListCart.map((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
      return item;
    });
    setListCart(list);
  };
  const reduceAmount = (product) => {
    const { id } = product;
    const list = ListCart.map((item) => {
      if (item.id === id) {
        if (item.amount > 0) {
          item.amount -= 1;
          console.log(item.amount);
        }
        if (item.amount <= 0) {
          alert("can't reduce item");
        }
      }
      return item;
    });
    setListCart(list);
  };
  const handleOnClick = (product) => {
    //Check Cart
    if (ListCart.length > 0) {
      //Item cart is same
      let isSame = false;
      const { id } = product;
      ListCart.map((item) => {
        if (item.id === id) {
          isSame = true;
          SetSelected(id);
          return item.amount++;
        }
        return item;
      });
      axios
        .put(`http://localhost:3000/api/cart/${selected}`, ListCart)
        .then((response) => console.log("response", response.data));
      if (!isSame) {
        const newProduct = {
          id: product.id,
          name: product.name,
          amount: 1,
          price: product.price,
        };
        const newCart = {
          userID: 1,
          product: [
            {
              productId: newProduct.id,
              amount: newProduct.amount,
            },
          ],
        };
      }
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        amount: 1,
        price: product.price,
      };
      const newCart = {
        userID: 1,
        product: [
          {
            productId: newProduct.id,
            amount: newProduct.amount,
          },
        ],
      };
      console.log("new cart: ", newCart);
      axios({
        method: "POST",
        url: "http://localhost:3000/api/cart/",
        data: newCart,
      })
        .then((res) => {
          dispatch(PostListCart(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const ProductContextData = {
    ListCart,
    Products,
    handleOnClick,
    increaseAmount,
    reduceAmount,
  };
  return (
    <ProductContext.Provider value={ProductContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
