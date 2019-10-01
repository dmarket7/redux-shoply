import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import Inventory from "../components/Inventory";

function mapStateToProps(state) {

  let productKeys = Object.keys(state.products);
  let newProducts = productKeys.map(key => {
    return {product: state.products[key], id: key}
  });

  let cartKeys = Object.keys(state.cart);
  let newCart = cartKeys.map(key => {
    return {product: state.products[key], qty: state.cart[key]}
  })

  return {
    products: newProducts,
    cart: newCart
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addToCart, removeFromCart }
);

export default connectedComponent(Inventory);