import React, { Component } from "react";

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h3>Shopping Cart</h3>
        <ul>
          {
            this.props.cart.map(item => {
              return <p key={item.product.name}>{item.product.name}, Qty: {item.qty}</p>
            })
          }
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;