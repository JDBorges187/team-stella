import React from "react";
import { useDispatch } from "react-redux";
import {applyFilter, deleteFilter} from "../../store/products";
import showHideDesc from "../ShowHide";
import "./Filter.css";

const FilterType = (props) => {

  const dispatch = useDispatch();

  const handlePriceFilter = (e) => {
    const target = e.target;
    const value = target.value;
    console.log(value);
    target.checked ? dispatch(applyFilter(props.type, value)) : dispatch(deleteFilter(props.type, value));
  }

  return (
    <>
      <button onClick={() => showHideDesc(`.${props.type}`, `.filter__chevron-${props.type}`, ".price-btn")} className="filter_btn price-btn">
        <span className="filter__title">{props.type}</span>
        <i className={`fas fa-chevron-down filter__chevron-${props.type}`}></i>
      </button>
      <div id={props.type} className={`filter_main-cntnr ${props.type}`} >
        {props.data.map((item) => {
          return (
            <label className="filter_cntnr" > {item.title}
              <input className="filter_input" type="checkbox" onChange={(e) => handlePriceFilter(e)} key={item.value + item.title} value={item.value}></input>
              <span className="check"></span>
            </label>
          )
        })}
      </div>
    </>
  );
};

export default FilterType;
