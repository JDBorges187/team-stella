import React from "react";
import { useSelector } from "react-redux";
import merchImg from "../../pictures/merch-stock.jpg";

const Featured = () => {
  const featuredProducts = useSelector((state) =>
    state.products.list.slice(-5)
  );

  return (
    <div className="featured">
      <h2>Top Picks</h2>
      {featuredProducts.map((product) => {
        return (
          <div key={product.id} className="featured-product">
            <div className="featured-product-img">
              <img src={merchImg}></img>
            </div>
            <h3>{product.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
