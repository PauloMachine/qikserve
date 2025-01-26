import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_QIKSERVE_URL,
  headers: {
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default api;
