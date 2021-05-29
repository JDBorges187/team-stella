import React from "react";
import { useDispatch } from "react-redux";
import FilterType from "./FilterType";
// import {filterByPrice, removePriceFilter} from "../../store/products";
import showHideDesc from "../ShowHide";
import "./Filter.css";

const Filter = () => {

  const priceFilterInfo = [
    {title: " $0 - $25", value: "0,25"},
    {title: " $25 - $50", value: "25,50"},
    {title: " $50 - $100", value: "50,100"},
    {title: " $100 - $250", value: "100,250"},
    {title: " $250 and up", value: "250,10000000"},
  ];

  const categoryInfo = [
    {title: " Vehicle", value: "1"},
    {title: " Hat", value: "2"},
    {title: " Shirt", value: "3"},
  ];

  const dispatch = useDispatch();

  // const handlePriceFilter = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   target.checked ? dispatch(filterByPrice("prices", value)) : dispatch(removePriceFilter("prices", value));
  // }

  return (

    <div className="filter">
      <FilterType data={priceFilterInfo} type={"Prices"} />
      <FilterType data={categoryInfo} type={"Categories"} />
      {/* <button onClick={() => showHideDesc(".filter_main-cntnr", ".filter__chevron", ".price-btn")} className="filter_btn price-btn">
        <span className="filter__title">Price</span>
        <i className="fas fa-chevron-down filter__chevron"></i>
      </button>
      <div className="filter_main-cntnr">

        <label className="filter_cntnr" > $0 - $25
          <input className="filter_input" type="checkbox" onChange={(e) => handlePriceFilter(e)} id="prices_0-25" value="0,25"></input>
          <span className="check"></span>
        </label>
        <label className="filter_cntnr" > $25 - $50
          <input className="filter_input" type="checkbox" onChange={(e) => handlePriceFilter(e)} id="prices_25-50" value="25,50"></input>
          <span className="check"></span>
        </label>
        <label className="filter_cntnr" > $50 - $100
          <input className="filter_input" type="checkbox" onChange={(e) => handlePriceFilter(e)} id="prices_50-100" value="50,100"></input>
          <span className="check"></span>
        </label>
        <label className="filter_cntnr" > $100 - $250
          <input className="filter_input" type="checkbox" onChange={(e) => handlePriceFilter(e)} id="prices_100-250" value="100,250"></input>
          <span className="check"></span>
        </label>
        <label className="filter_cntnr" > $250 and up
          <input className="filter_input" type="checkbox" onChange={(e) => handlePriceFilter(e)} id="prices_250-up" value="250,10000000"></input>
          <span className="check"></span>
        </label>
      </div> */}
    </div>
  );
};

export default Filter;
