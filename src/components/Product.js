import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Product.css'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Media
} from 'reactstrap';

class Product extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center product-text">
              <h1>Product Name: {this.props.product[0].product.name}</h1>
            </CardTitle>
            <CardText className="product-text">
              Description: {this.props.product[0].product.description} <br />
              Price: {this.props.product[0].product.price} <br />
            </CardText>
            <Media className="product-image" object src={this.props.product[0].product.image_url} alt="Generic placeholder image" />
            {this.props.cart.length > 0 ?
              <h3 className="product-cart">Current quantity in cart: {this.props.cart[0].qty}</h3> : null}
            <CardText>
              <button onClick={() => this.props.addToCart(this.props.product[0].id)}>Add to Cart</button>
              <button onClick={() => this.props.removeFromCart(this.props.product[0].id)}>Remove</button>
            </CardText>
          </CardBody>
        </Card>
      </div >
    );
  }
}

export default Product;