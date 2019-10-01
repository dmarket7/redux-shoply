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
    console.log("props in product", this.props)
    let id = this.props.match.params.id

    let product = this.props.products.filter(product => {
      return product.id === id
    })

    let productCartInfo = this.props.cart.filter(product => {
      return product.id === id
    })

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              <h1>Product Name: {product[0].product.name}</h1>
            </CardTitle>
            <CardText>
              Description: {product[0].product.description} <br />
              Price: {product[0].product.price} <br />
              <Media object src={product[0].product.image_url} alt="Generic placeholder image" />
              <div>
                <button onClick={() => this.props.addToCart(id)}>Add to Cart</button>
                <button onClick={() => this.props.removeFromCart(id)}>Remove</button>
                {productCartInfo.length > 0 ?
                  <h3>Current quantity in cart: {productCartInfo[0].qty}</h3> : null}

              </div>
            </CardText>
          </CardBody>
        </Card>
      </div >
    );
  }
}

export default Product;