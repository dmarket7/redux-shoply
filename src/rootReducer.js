import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import { products } from './data.json';

const INITIAL_STATE = { products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  let currentQty;

  switch (action.type) {
    case ADD_TO_CART:
      currentQty = state.cart[action.id] || 0;
      currentQty++;
      return { ...state, cart: { ...state.cart, [action.id]: currentQty } };

    case REMOVE_FROM_CART:
      currentQty = state.cart[action.id];
      if (currentQty === 1) {
        let currentState = { ...state };
        delete currentState.cart[action.id];
        return currentState;
      }
      else if (!currentQty) {
        return state;
      }
      else {
        currentQty--;
        return { ...state, cart: { ...state.cart, [action.id]: currentQty } };
      }

    default:
      return state;
  }
}

export default rootReducer;