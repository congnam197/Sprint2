import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import DetailProduct from "./components/DetailProduct";
import Checkout from "./components/Checkout";
import ShopBrand from "./components/ShopBrand";
import ErrorPage from "./components/ErrorPage";
import ShopBig from "./components/ShopBig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/shop/:name" element={<Shop />} />
        <Route path="/shop" element={<ShopBig />} />
        <Route path="/detail-product/:data" element={<DetailProduct />} />
        <Route path="/check-out" element={<Checkout />} />
        <Route path="/shop-brand/:data/:id" element={<ShopBrand />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
