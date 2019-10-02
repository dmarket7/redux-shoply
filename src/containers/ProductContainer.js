import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import Product from "../components/Product";

function mapStateToProps(state, ownProps) {
  console.log("something", ownProps);

  let productKeys = Object.keys(state.products);
  let newProducts = productKeys.map(key => {
    return { product: state.products[key], id: key }
  });

  let cartKeys = Object.keys(state.cart);
  let newCart = cartKeys.map(key => {
    return { product: state.products[key], qty: state.cart[key], id: key }
  })

  let findProduct = newProducts.filter(product => {
    return product.id === ownProps.match.params.id
  })

  let productCartInfo = newCart.filter(product => {
    return product.id === ownProps.match.params.id
  })

  return {
    // products: newProducts,
    // cart: newCart,
    product: findProduct,
    cart: productCartInfo
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addToCart, removeFromCart }
);

export default connectedComponent(Product);