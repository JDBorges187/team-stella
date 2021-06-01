import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import CartDropdown from "./CartDropdown";
import { useSelector, useDispatch } from "react-redux";
import { editSearchState } from "../../store/products";
import { useSearch} from "../../context/SearchContext";
import "./Navbar.css";

const NavBar = ({cartDropdownVisible, setCartDropdownVisible, cartCloseClass, setCartCloseClass}) => {
  const user = useSelector((state) => state.session.user);
  const { searchInput, setSearchInput } = useSearch();

  const dispatch = useDispatch();

  const changeSearchTerm = (value) => {
    dispatch(editSearchState(value));
  };

  const history = useHistory();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push("/");
    }
  }

  return (
    <nav className="nav" style={{ zIndex: 2 }}>
      <div className="nav-logo-search">
        <div className="nav-logo">
          <a
            href="/"
            // exact={true}
            // activeClassName="active"
            // id="nav-logo-link"
          >
            <div className="nav-logo-img" />
            {/* <h1 className="nav-logo-h1">Stella</h1> */}
          </a>
        </div>
        <div className="nav-search">
          <input
            onChange={(e) => changeSearchTerm(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="Search"
            type="text"
            className="nav-search-input"
            // onChange={(e) => setSearchInput(e.target.value)}
            // value={searchInput}
          />
          <NavLink
            to="/"
          >
            <button id="nav-search-btn" className="nav-btn" type="button">
              <i className="fas fa-search"></i>
            </button>
          </NavLink>
        </div>
      </div>
      <ul className="nav-links">
        {user && (
          <li>
            <NavLink
              to={"/orders"}
              exact={true}
              activeClassName="active"
              className="nav-link"
              >
              <button className="nav-links-btn">Orders</button>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={user ? "/account" : "/login"}
            exact={true}
            activeClassName="active"
            className="nav-link"
          >
            <button className="nav-links-btn">{user?"Signout":"Login"}</button>
          </NavLink>
        </li>
        <li>
          {/* <NavLink
            to="/cart"
            exact={true}
            activeClassName="active"
            className="nav-link"
          >
            <button className="nav-links-btn">Cart</button>
          </NavLink> */}
          <CartDropdown cartDropdownVisible={cartDropdownVisible} setCartDropdownVisible={setCartDropdownVisible} cartCloseClass={cartCloseClass} setCartCloseClass={setCartCloseClass}/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
