import type from "./type";
export const PostListCart = (cartList) => {
  return {
    type: "POST_CARTS",
    payload: cartList,
  };
};
export const SetCarts = (cartList) => {
  return {
    type: "SET_CARTS",
    payload: cartList,
  };
};
