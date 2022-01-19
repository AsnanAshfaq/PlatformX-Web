import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
});

instance.interceptors.request.use(
  async (config: any) => {
    const Token = localStorage.getItem("access_token");
    console.log("Token is", Token);
    if (Token !== null || Token !== "")
      config.headers.Authorization = "Bearer " + Token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
