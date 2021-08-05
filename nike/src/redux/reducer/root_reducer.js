import { product_reducer } from "./product_reducer";
import { cart_reducer } from "./cart_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product: product_reducer,
  cart: cart_reducer,
});

export default rootReducer;
