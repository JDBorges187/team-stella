import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import "./Navbar.css";
import usePrevious from "../../utilities/usePrevious";
import { addCartItem, removeCartItem } from "../../store/cart";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [cartCloseClass, setCartCloseClass] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const closeCartDropdown = () => {
    setCartCloseClass(true);
    setTimeout(() => setCartDropdownVisible(false), 500);
  };

  const getTotalItems = (cart) =>
    Object.keys(cart).reduce((sum, itemID) => cart[itemID] + sum, 0);

  const getTotalCost = (cart, products) => {
    const costTotal = Object.keys(cart).reduce(
      (sum, itemID) => cart[itemID] * products[itemID].price + sum,
      0
    );
    setTotalCost(costTotal);
  };

  const prevTotalItems = usePrevious(getTotalItems(cart));

  const addOne = (product) => {
    dispatch(addCartItem(product));
  };

  const removeOne = (product) => {
    dispatch(removeCartItem(product));
  };

  useEffect(() => {
    const totalCount = getTotalItems(cart);
    getTotalCost(cart, products);
    if (totalCount > prevTotalItems) {
      setCartCloseClass(false);
      setCartDropdownVisible(true);
    }
  }, [cart]);

  const goToCheckout = () => {
    closeCartDropdown();
    history.push('/checkout')
  }

  return (
    <>
      {cartDropdownVisible && (
        <div className="close-cart-dropdown" onClick={closeCartDropdown}>
          <div
            className={
              (cartDropdownVisible ? "cart-dropdown " : "") +
              (cartCloseClass ? "cart-close" : "")
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-dropdown-item-container">
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
                    <span>{`$${(products[key].price * value).toFixed(
                      2
                    )}`}</span>
                  </div>
                );
              })}
            </div>
            <span style={{ color: "blue" }}>
              {totalCost.toFixed(2)}
              <button onClick={goToCheckout}>Checkout</button>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
