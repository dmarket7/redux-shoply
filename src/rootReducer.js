import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import products from './data.json';

const INITIAL_STATE = products;

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state };

    case REMOVE_FROM_CART:
      return { ...state };

    default:
      return state;
  }
}

export default rootReducer;