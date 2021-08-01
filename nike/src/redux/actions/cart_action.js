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
export const increase = (productId) => {
  return {
    type: "INCREASE_CARTS",
    payload: productId,
  };
};

export const reduce = (productId) => {
  return {
    type: "REDUCE_CARTS",
    payload: productId,
  };
};
