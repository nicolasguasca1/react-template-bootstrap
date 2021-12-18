// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "dotenv/config";

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import App from "./pages/App";
import ScrollToTop from "./components/ScrollToTop";

import axios from "axios";

// Agregar cuando se vaya a implementar ATLAS
// import { config } from "dotenv";
// config();

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tripooldb";
// axios.defaults.baseURL = MONGODB_URI;

axios.defaults.baseURL = "http://localhost:8080";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
