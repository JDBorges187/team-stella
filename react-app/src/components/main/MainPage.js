import React, { useState, useEffect } from "react";
import motorcycle from "../../pictures/fast-moto.jpg";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="main">
      <div className="main-banner">
        <img className="main-banner-img" src={motorcycle}></img>
      </div>
      <h1>My Home Page</h1>
    </div>
  );
};

export default MainPage;
