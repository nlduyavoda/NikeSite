export const SetListProduct = (productList) => {
  return {
    type: "SET_PRODUCTS",
    payload: productList,
  };
};
export const SetProduct = (product) => {
  console.log(product);
  return {
    type: "SET_PRODUCT",
    payload: product,
  };
};
export const SetSizeee = (props) => {
  return {
    type: "SET_SIZE",
    payload: props,
  };
};
