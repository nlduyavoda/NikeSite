import type from "./type";
export const SetListProduct = (productList) => {
  return {
    type: "SET_PRODUCTS",
    payload: productList,
  };
};
