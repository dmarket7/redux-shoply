import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Inventory.css'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Media
} from 'reactstrap';

class Inventory extends Component {
  render() {
    console.log("PROPS IN INVEN", this.props)
    return (
      <div className = "invenDiv">
        <ul>{this.props.products.map(item => {
          return (
            <li key={item.id}>
              <Link to={`products/${item.id}`}>{item.product.name}</Link>
              <button onClick={() => this.props.addToCart(item.id)}>Add to Cart</button>
              <button onClick={() => this.props.removeFromCart(item.id)}>Remove</button>
            </li>
          )
        })}</ul>
          <Link to = "/cart">SHOPPING CART </Link> 
          {this.props.cart.reduce((total, item)=>{
            return total += item.qty
          }, 0)}
      </div>
    );
  }
}

export default Inventory;