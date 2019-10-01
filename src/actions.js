import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export function addToCart(itemId) {
  return {
    type: ADD_TO_CART,
    id: itemId
  };
}

export function removeFromCart(itemId) {
  return {
    type: REMOVE_FROM_CART,
    id: itemId
  };
}