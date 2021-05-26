import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import usePrevious from "../../utilities/usePrevious";
import { addCartItem, removeCartItem } from "../../store/cart";
const classNames = require("classnames");

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [cartCloseClass, setCartCloseClass] = useState(false);
  const closeCartDropdown = () => {
    setCartCloseClass(true);
    setTimeout(() => setCartDropdownVisible(false), 500);
  };

  const getTotalItems = (cart) =>
    Object.keys(cart).reduce((sum, itemID) => cart[itemID] + sum, 0);

  const prevTotalItems = usePrevious(getTotalItems(cart));

  const addOne = (product) => {
    dispatch(addCartItem(product));
  };

  const removeOne = (product) => {
    dispatch(removeCartItem(product));
  };

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
                  {`${products[key].name}`}
                  <button
                    style={{ padding: 3 }}
                    onClick={() => addOne(products[key])}
                    className="add-one"
                  >
                    +
                  </button>
                  <span>{value}</span>
                  <button
                    style={{ padding: 3 }}
                    onClick={() => removeOne(products[key])}
                    className="remove-one"
                  >
                    -
                  </button>
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
