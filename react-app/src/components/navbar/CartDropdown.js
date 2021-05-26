import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import usePrevious from "../../utilities/usePrevious";

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const closeCartDropdown = () => {
    setCartDropdownVisible(false);
  };

  const getTotalItems = (cart) =>
    Object.keys(cart).reduce((sum, itemID) => cart[itemID] + sum, 0);

  const prevTotalItems = usePrevious(getTotalItems(cart));

  useEffect(() => {
    const totalCount = getTotalItems(cart);
    if (totalCount > prevTotalItems) {
      setCartDropdownVisible(true);
      console.log("OPEN DROPDOWN");
    }
  }, [cart]);

  return (
    <>
      {cartDropdownVisible && (
        <div className="close-cart-dropdown" onClick={closeCartDropdown}>
          <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
            {Object.entries(cart).map(([key, value]) => {
              return <div key={key}>{`${products[key].name} = ${value}`}</div>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
