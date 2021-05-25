import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        Image
        <img></img> {/* src={`${product.image}`} */}
      </div>
      <div className="card-title">{product.name}</div>
      <div className="card-price">{`$${product.price.toFixed(2)}`}</div>
    </div>
  );
};

export default ProductCard;
