import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MDgxNDQxLCJqdGkiOiI0OWQ1YTkxNDI1NGI0NGY2OGMwNDRiZGE3ODRiMjY3ZCIsInVzZXJfaWQiOiI1NmU1M2M1MS0xOTBmLTRhYTktYjljZS03NzdmOTNkYTRkMDcifQ.euNui2zJDs5FQoYxljHPk1hd1MkNp3eHYaFcm33o2Dw";
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
