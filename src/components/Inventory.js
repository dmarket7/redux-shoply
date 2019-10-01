import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Inventory extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.products.map(item => {
          return (
            <li>
              <Link to={`products/${item.id}`}>{item.product.name}</Link>
              <button onClick={() => this.props.addToCart(item.id)}>Add to Cart</button>
              <button onClick={() => this.props.removeFromCart(item.id)}>Remove</button>
            </li>
          )
        })}</ul>
        <h3>Shopping Cart</h3>
        <ul>
          {
            this.props.cart.map(item => {
              return <p>{item.product.name}, Qty: {item.qty}</p>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Inventory;