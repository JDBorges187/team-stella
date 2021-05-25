import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        Image
        <img></img> {/* src={`${product.image}`} */}
      </div>
      <div className="card-title">Title</div> {/* product.name */}
      <div className="card-price">$$$</div>{" "}
      {/* {`$${product.price.toFixed(2)}`} */}
    </div>
  );
};

export default ProductCard;
