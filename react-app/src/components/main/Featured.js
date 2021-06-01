import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import merchImg from "../../pictures/merch-stock.jpg";

const Featured = () => {
  const featuredProducts = useSelector((state) =>
    state.products.list.slice(3,8)
  );

  return (
    <div className="featured">
      <h2>Top Picks</h2>
      {featuredProducts.map((product) => {
        return (
          <div key={product.id} className="featured-product">
            <Link to={`/products/${product.id}`}>
            <div className="featured-product-img">
              <img src={product.image}></img>
            </div>
            </Link>
            <h3>{product.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
