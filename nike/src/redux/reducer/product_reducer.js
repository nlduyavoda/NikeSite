import { SET_PRODUCTS } from "../actions/type";
const initialProductState = {
  productList: [],
  selectedProduct: {},
};
export const product_reducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, productList: payload };
    default:
      return state;
  }
};
