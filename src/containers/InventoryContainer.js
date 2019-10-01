import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import Inventory from "../components/Inventory";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addToCart, removeFromCart }
);

export default connectedComponent(Inventory);