import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import config from "./config/index";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
console.log("process.env.REACT_APP_BASE_API_URL",process.env.REACT_APP_BASE_API_URL)
axios.defaults.params = {};
axios.defaults.headers.common["Authorization"] = !!JSON.parse(
  localStorage.getItem("token")
)
  ? JSON.parse(localStorage.getItem("token"))
  : "";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.create(config);
axios.interceptors.request.use(
  (request) => {
    // request.params['blah-defaut-param'] = 'blah-blah-default-value';
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // if (!response.headers.Authorization) {
      const token =  !!response.data && response.data.token

      if (token) {

        const newToken = `Bearer ${token}`;
        response.headers.Authorization = newToken

        localStorage.setItem('token', JSON.stringify(newToken))
      }
    // }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
