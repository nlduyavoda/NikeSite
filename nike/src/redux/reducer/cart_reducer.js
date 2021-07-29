import { POST_CARTS, SET_CARTS } from "../actions/type";
const initialProductState = {
  cartList: [],
  selectedCart: {},
};
export const cart_reducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_CARTS:
      return { ...state, cartList: payload };
    case SET_CARTS:
      return { ...state, cartList: payload };
    default:
      return state;
  }
};
