import React from "react";
import ProductCard from "./ProductCard";
import Sort from "./Sort";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const searchTerm = useSelector((state) => state.products.search);
  const products = useSelector((state) => state.products.filteredProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [displayProducts, setDisplayProducts] = useState(products);
  const productsPerPage = 12;

  useEffect(() => {
    setDisplayProducts(products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [products, searchTerm]);

  useEffect(() => {
    setNumberOfPages(Math.ceil(displayProducts.length / productsPerPage));
    setCurrentPage(1);
  }, [displayProducts]);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = displayProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <>
      <div className="products-container">
        <Sort/>
        <div className="products">
          {currentProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <ul className="product-pages">
          {[...Array(numberOfPages)].map((e, i) => {
            return (
              <li key={i} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductGrid;
