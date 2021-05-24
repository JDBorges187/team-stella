import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductGrid;
