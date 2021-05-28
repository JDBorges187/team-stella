import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import CartDropdown from "./CartDropdown";
import { useSelector } from "react-redux";
import "./Navbar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <nav className="nav" style={{ zIndex: 2 }}>
      <div className="nav-logo-search">
        <div className="nav-logo">
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            id="nav-logo-link"
          >
            <h1 className="nav-logo-h1">Stella</h1>
          </NavLink>
        </div>
        <div className="nav-search">
          <input
            placeholder="Search"
            type="text"
            className="nav-search-input"
          />
          <button id="nav-search-btn" className="nav-btn" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to={user ? "/account" : "/login"}
            exact={true}
            activeClassName="active"
            className="nav-link"
          >
            <button className="nav-links-btn">Account</button>
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
          <CartDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
