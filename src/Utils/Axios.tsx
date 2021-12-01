import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4OTkwNTg1LCJqdGkiOiI3NmZkOGZhOThmYjI0Mjk5YTFmM2EwMDg1MGVjYmZmMCIsInVzZXJfaWQiOiI1NmU1M2M1MS0xOTBmLTRhYTktYjljZS03NzdmOTNkYTRkMDcifQ.e9NbAnS0ER4qiDzNWcM1ZGSIyv_DVtauYtOOjwCwN1s";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
});

instance.interceptors.request.use(
  async (config: any) => {
    config.headers.Authorization = "Bearer " + token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
