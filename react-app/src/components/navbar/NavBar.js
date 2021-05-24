import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Stella
          </NavLink>
        </li>
        <li>
          <NavLink
            to={user ? "/account" : "/login"}
            exact={true}
            activeClassName="active"
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" exact={true} activeClassName="active">
            Cart
          </NavLink>
        </li>
        {/* <li>
          <LogoutButton />
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
