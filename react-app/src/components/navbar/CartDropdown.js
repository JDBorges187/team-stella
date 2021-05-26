import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import usePrevious from "../../utilities/usePrevious";
const classNames = require("classnames");

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [cartCloseClass, setCartCloseClass] = useState(false);
  const closeCartDropdown = () => {
    setCartCloseClass(true);
    setTimeout(() => setCartDropdownVisible(false), 1000);
  };

  const getTotalItems = (cart) =>
    Object.keys(cart).reduce((sum, itemID) => cart[itemID] + sum, 0);

  const prevTotalItems = usePrevious(getTotalItems(cart));

  useEffect(() => {
    const totalCount = getTotalItems(cart);
    if (totalCount > prevTotalItems) {
      setCartCloseClass(false);
      setCartDropdownVisible(true);
      console.log("OPEN DROPDOWN");
    }
  }, [cart]);

  const cartDropdownClass = classNames({
    "cart-dropdown": cartDropdownVisible,
    "cart-close": cartCloseClass,
  });

  return (
    <>
      {cartDropdownVisible && (
        <div className="close-cart-dropdown" onClick={closeCartDropdown}>
          <div
            className={cartDropdownClass}
            onClick={(e) => e.stopPropagation()}
          >
            {Object.entries(cart).map(([key, value]) => {
              return (
                <div className="cart-dropdown-item" key={key}>
                  {`${products[key].name} = ${value}`}
                  <span>{products[key].price}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
