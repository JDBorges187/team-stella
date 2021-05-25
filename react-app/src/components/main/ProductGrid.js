import React from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  // const products = useSelector((state) => state.products.list);

  return (
    <div className="products">
      {/* {products.map((product) => {
        <ProductCard product={product} />;
      })} */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      {/* <ProductCard /> */}
    </div>
  );
};

export default ProductGrid;
