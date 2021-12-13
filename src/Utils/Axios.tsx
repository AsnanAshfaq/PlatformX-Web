import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQwMDM2NDY4LCJqdGkiOiIwYzE1MjRmMDhiYWE0Yjg4Yjk0Mjc2MjdiZWMzMjgwOCIsInVzZXJfaWQiOiI1NmU1M2M1MS0xOTBmLTRhYTktYjljZS03NzdmOTNkYTRkMDcifQ.Hb6JL-uSn-s3thhuDhl9ou4VXrR6vqDTFI928qcvZEY";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
});

instance.interceptors.request.use(
  async (config: any) => {
    const Token = localStorage.getItem("access_token");
    if (Token !== null || Token !== "")
      config.headers.Authorization = "Bearer " + token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
