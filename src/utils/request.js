import axios from "axios";
import { getToken } from "./auth";

// 创建axios实例
const service = axios.create({
  baseURL: "http://211.86.56.184:8197/",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      // 让每个请求携带自定义token 请根据实际情况自行修改
      console.log(getToken())
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  (error) => {
    console.info(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
