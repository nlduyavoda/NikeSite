import {
  POST_CARTS,
  SET_CARTS,
  INCREASE_CARTS,
  REDUCE_CARTS,
  TOTAL_CARTS,
  REMOVE_CART,
} from "../actions/type";
const initialProductState = {
  cartList: [],
  selectedCart: {},
  sumTotal: 0,
};
export const cart_reducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_CARTS:
      return { ...state, cartList: payload };

    case INCREASE_CARTS:
      let test = state.cartList.map((item) => {
        if (item.productId === payload) {
          item.amount++;
          return item;
        }
        return item;
      });
      return { ...state, cartList: test };

    case REDUCE_CARTS:
      state.cartList.forEach((item) => {
        if (item.productId === payload) {
          if (item.amount > 0) {
            item.amount--;
          }
        }
      });
      let newcarts = state.cartList.filter((item) => {
        return item.amount !== 0;
      });
      return { ...state, cartList: newcarts };
    case REMOVE_CART:
      let newCartList = state.cartList.filter((item) => {
        return item.productId !== payload;
      });
      return { ...state, cartList: newCartList };
    case SET_CARTS:
      return { ...state, cartList: payload };
    case TOTAL_CARTS:
      return { ...state, sumTotal: payload };
    default:
      return state;
  }
};
