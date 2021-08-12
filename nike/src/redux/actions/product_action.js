export const SetListProduct = (productList) => {
  return {
    type: "SET_PRODUCTS",
    payload: productList,
  };
};
export const SetSizeee = (props) => {
  return {
    type: "SET_SIZE",
    payload: props,
  };
};
