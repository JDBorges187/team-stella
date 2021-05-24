import React, { useState, useEffect } from "react";
import motorcycle from "../../pictures/fast-moto.jpg";
import dark from "../../pictures/dark-racing.jpg";
import Featured from "./Featured";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="main">
      <div className="main-banner">
        <img className="main-banner-img" src={motorcycle}></img>
      </div>
      <div className="container-grid">
        <Featured />
        <Filter />
        <ProductGrid />
      </div>
    </div>
  );
};

export default MainPage;
