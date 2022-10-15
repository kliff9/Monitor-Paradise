import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_ADDRESS, CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartConstant";

//  --------------------------------- Actions For Adding Items to cart --------------------------------- \\
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: { // adding to card
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
//  --------------------------------- Actions For Removing Items in cart --------------------------------- \\

export const removeFromcart = (productId) => (dispatch, getState) =>{
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  
}
//  --------------------------------- Actions For Saving User's ShippingAdress input --------------------------------- \\

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
//  --------------------------------- Actions For Saving User's PaymentMethod input --------------------------------- \\

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_ADDRESS, payload: data });
}