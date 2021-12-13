import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NDQyNTg1LCJqdGkiOiIzYjNiN2Q4MzU4ZTA0YmI4OGQxNTU4YzI3YWQ0ZWUzZCIsInVzZXJfaWQiOiI1NmU1M2M1MS0xOTBmLTRhYTktYjljZS03NzdmOTNkYTRkMDcifQ.GnWPEy8HVLW2b9XgzCh4iiNrFsmvcr6M-MRkpdA3cII";
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
