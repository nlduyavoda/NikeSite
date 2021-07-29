import axios from "axios";
import axiosClient from "./axiosClient";

const productApi = {
  GetProduct: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
