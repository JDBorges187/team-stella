import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import CartDropdown from "./CartDropdown";
import { useSelector, useDispatch } from "react-redux";
import { editSearchState } from "../../store/products";
import { useSearch} from "../../context/SearchContext";
import { login } from "../../store/session";
import logo from "../../pictures/stella_logo.png"
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

  const loginDemo = async () => {
    const data = await dispatch(login("demo@aa.io", "password"));
  }

  const authLogic = async () => {
    if(!user){
      history.push("/login")
    }
    else{
      await dispatch(logout());
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
            <img className="nav-logo-img" src={logo}/>
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
            to={"/account"}
            exact={true}
            activeClassName="active"
            className="nav-link">
            Logged in as: {user.firstname}
          </NavLink>
        </li>
      )}
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
        {!user && (
          <li>
            <div className='demo-btn' onClick={loginDemo}>Demo</div>
          </li>
        )}
        <li>
          <div
            // to={user ? "/account" : "/login"}
            // exact={true}
            activeClassName="active"
            className="nav-link"
            onClick={(e) => authLogic(e)}
          >
            <button className="nav-links-btn">{user?"Signout":"Login"}</button>
          </div>
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
