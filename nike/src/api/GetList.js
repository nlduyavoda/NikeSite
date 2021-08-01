import axiosClient from "./axiosClient";

const GetList = {
  GetProducts: (params) => {
    const url = `/products`;
    return axiosClient.get(url, params);
  },
  GetCarts: (params) => {
    const url = `/cart`;
    return axiosClient.get(url, params);
  },
};

export default GetList;
