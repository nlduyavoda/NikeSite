import { SET_PRODUCTS, SET_SIZE } from "../actions/type";
const initialProductState = {
  productList: [],
  selectedProduct: {},
  Size: true,
};
export const product_reducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, productList: payload };
    case SET_SIZE:
      return { ...state, Size: payload };
    default:
      return state;
  }
};
