import axiosClient from "./axiosClient";

const GetList = {
  GetProducts: (params) => {
    const url = `/api/products`;
    return axiosClient.get(url, params);
  },
  GetCarts: (params) => {
    const url = `/api/carts`;
    return axiosClient.get(url, params);
  },
  PutCarts: (params) => {
    const url = `/carts/1`;
    return axiosClient.put(url, params);
  },
};

export default GetList;
