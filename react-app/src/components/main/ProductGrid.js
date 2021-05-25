import React from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const products = useSelector((state) => state.products.list);

  return (
    <div className="products">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
