import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/navbar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Cart from "./components/navbar/Cart";
import Account from "./components/navbar/Account";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/checkout/Checkout";
import MainPage from "./components/main/MainPage";
import Orders from "./components/orders/Orders"
import { authenticate } from "./store/session";

function App() {
  const user = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [cartCloseClass, setCartCloseClass] = useState(false);
  const dispatch = useDispatch();

  const closeCartDropdown = (e) => {
    setCartCloseClass(true);
    setTimeout(() => setCartDropdownVisible(false), 500);
  };

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div onClick={(e) => closeCartDropdown(e)} className="close-cart-dropdown">
        <NavBar cartDropdownVisible={cartDropdownVisible} setCartDropdownVisible={setCartDropdownVisible} cartCloseClass={cartCloseClass} setCartCloseClass={setCartCloseClass}/>
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <Route path="/cart" exact={true}>
            <Cart />
          </Route>
          <Route path="/account" exact={true}>
            <Account />
          </Route>
          <Route path="/checkout" exact={true}>
            <Checkout />
          </Route>
          <ProtectedRoute path="/orders" exact={true}>
            <Orders />
          </ProtectedRoute>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route path="/products/:id" exact={true}>
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
