import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductScreen from "./screens/ProducScreen";
import CartScreen from "./screens/CartScreen";
// import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from "./screens/SignInScreen";
import { signout } from "./actions/UserActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserProfile from "./screens/UserProfile";
import OrderHistoryScreen from "./screens/OrderHistory";
import ProfileScreen from "./screens/UserProfile";
import ShopScreen from "./screens/ShopScreen";
import HomeScreen from "./screens/HomeScreen";
import { faKiwiBird, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/style.css";
import "./css/general.css";
import "./css/queries.css";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <body>
        <div className="grid-container">
          <header className="row orange_nav">
            <div>
              <Link to="/" className="brand">
                <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
              </Link>

              <Link className="brand" to="/">
                Monitor🏝️Paradise
              </Link>
            </div>
            <div>
              <Link to="/shop">Shop</Link>
              <Link to="/cart">
                Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/orderhistory">Order History</Link>
                    </li>
                    <li>
                      <Link to="/profile">User Profile</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </div>
          </header>
          <main>
            {/* having ? to show card with adding New item */}
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path="/payment" component={PaymentMethodScreen}></Route>
            <Route path="/userinfo" component={UserProfile}></Route>
            <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
            <Route path="/profile" component={ProfileScreen}></Route>
            <Route path="/shop" component={ShopScreen}></Route>
            {/* <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute> */}
          </main>
        </div>
        <footer className="row center">All right reserved</footer>
      </body>
    </BrowserRouter>
  );
}

export default App;
