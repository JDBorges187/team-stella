import React, { useState, useEffect } from "react";
import motorcycle from "../../pictures/fast-moto.jpg";
import fans from "../../pictures/moto-fans.jpg";
import Featured from "./Featured";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="main">
      <div className="main-banner">
        <img className="main-banner-img" src={fans}></img>
        <div className="main-banner-msg">
          <span id="banner-msg-title">Get the latest merch!</span>
          <button>Shop All</button>
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
