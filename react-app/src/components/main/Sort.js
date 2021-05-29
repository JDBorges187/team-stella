import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../store/products";
import "./Sort.css";

const Sort = () => {

  const dispatch = useDispatch();

  const handleSort = (e) => {
    const value = e.target.value;
    dispatch(sortProducts(value));
  };

  return(
    <div className="sort-cntnr">
      <select onChange={(e) => handleSort(e)} className="sort__select">
        <option className="sort__option" value="0">SortProducts</option>
        <option className="sort__option" value="1">Price (low - high)</option>
        <option className="sort__option" value="2">Price (high - low)</option>
        <option className="sort__option" value="3">Alphabetical (A - Z)</option>
      </select>
    </div>
  );
}

export default Sort;
