import axiosClient from "./axiosClient";

const cartApi = {
  getAll: (params) => {
    const url = "/cart";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/cart/${id}`;
    return axiosClient.get(url);
  },
  postList: () => {
    const url = `/cart`;
    return axiosClient.post(url);
  },
  post: (id) => {
    const url = `/cart/${id}`;
    return axiosClient.post(url);
  },
  put: (id, params) => {
    const url = `/cart/${id}`;
    return axiosClient.put(url, { params });
  },
};
export default cartApi;
