import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import Product from "../components/Product";

function mapStateToProps(state, rtProp) {
  console.log("something", rtProp);
  console.log("props in prod container", this.props)

  let productKeys = Object.keys(state.products);
  let newProducts = productKeys.map(key => {
    return { product: state.products[key], id: key }
  });

  let cartKeys = Object.keys(state.cart);
  let newCart = cartKeys.map(key => {
    return { product: state.products[key], qty: state.cart[key], id: key }
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

export default connectedComponent(Product);