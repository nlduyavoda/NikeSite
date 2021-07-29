import { product_reducer } from "./product_reducer";
import { FetchListProduct } from "./common_reduder";
import {cart_reducer} from './cart_reducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product: product_reducer,
  cart: cart_reducer,
  FetchListProduct: FetchListProduct,
});

export default rootReducer;
