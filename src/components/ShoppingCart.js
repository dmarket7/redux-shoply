import React, { Component } from "react";
import './ShoppingCart.css'

class ShoppingCart extends Component {
  render() {
    console.log("props in cart", this.props)
    return (
      <div className="shopping-cart">
        <h3>Shopping Cart</h3>
        <ul>
          {
            this.props.cart.map(item => {
              return (<li><p key={item.product.name}>{item.product.name}, Qty: {item.qty}</p>
                <button onClick={() => this.props.addToCart(item.id)}>Add to Cart</button>
                <button onClick={() => this.props.removeFromCart(item.id)}>Remove</button></li>)
            })
          }
        </ul>
        <h3>Total cost: ${this.props.cart.reduce((total, item)=>{
            return total + item.product.price * item.qty;
          }, 0).toFixed(2)}</h3>

      </div>
    );
  }
}

export default ShoppingCart;