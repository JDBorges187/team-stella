import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import fans from "../../pictures/moto-fans.jpg";
import Featured from "./Featured";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import { getAllProducts } from "../../store/products";
import "./MainPage.css";
const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="main-banner">
        <img className="main-banner-img" src={fans} alt="racing fans cheering"></img>
        <div className="main-banner-msg">
          <span id="banner-msg-title">Get the latest merch!</span>
          <button >
          <a href="#productsid">Shop All</a>
          </button>
        </div>
      </div>
      <div className="container-grid">
        <Featured />
        <Filter />
        <ProductGrid />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
